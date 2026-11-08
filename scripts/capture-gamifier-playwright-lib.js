const { chromium } = require('playwright');
const fs=require('fs'),path=require('path');
const G='https://gamifier-test.adventuriq.com';
const OUT=process.env.OUT||'/home/claude/cap/out';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const CSS='#adventuriq-chatbot,#toast-container,.toast,.ui-notification,.notifications,[class*=toast]{display:none!important} *{caret-color:transparent!important}';
async function start(opts={}){
  const browser=await chromium.launch({args:['--lang=es-ES']});
  const ctx=await browser.newContext({viewport:{width:opts.w||1400,height:opts.h||900},deviceScaleFactor:opts.dpr||2,locale:'es-ES',timezoneId:'Europe/Madrid'});
  const page=await ctx.newPage();
  await page.goto(G+'/#/login',{waitUntil:'networkidle',timeout:60000});
  await page.evaluate(()=>localStorage.setItem('NG_TRANSLATE_LANG_KEY','es'));
  await page.reload({waitUntil:'networkidle'}); await wait(1500);
  await page.fill('#usermail','docs@adventuriq.com');
  await page.fill('#userpassword','1234567890');
  await page.locator('button[type=submit], button').first().click();
  await page.waitForLoadState('networkidle'); await wait(4000);
  return {browser,ctx,page};
}
async function go(page,hash,ms=4000){
  await page.goto('about:blank');
  await page.goto(G+'/#'+hash,{waitUntil:'networkidle',timeout:60000}).catch(()=>{});
  await wait(ms); await page.addStyleTag({content:CSS}).catch(()=>{}); await page.mouse.move(1395,60);
}
async function toc(page,id,ms=1500){ await page.click(`a[aiq-toc-target="${id}"]`); await wait(ms); await page.mouse.move(1395,60); await wait(300);}
function f(name){const p=path.join(OUT,name);fs.mkdirSync(path.dirname(p),{recursive:true});return p;}
async function vp(page,name){await page.screenshot({path:f(name)});console.log('OK',name);}
async function el(page,sel,name,{pad=0,hideBar=true}={}){
  if(hideBar) await page.addStyleTag({content:'.aiq-actionbar{visibility:hidden!important}'}).catch(()=>{});
  const loc=typeof sel==='string'?page.locator(sel).first():sel;
  await loc.scrollIntoViewIfNeeded().catch(()=>{}); await wait(600);
  if(!pad){await loc.screenshot({path:f(name)});}
  else{const b=await loc.boundingBox();await page.screenshot({path:f(name),clip:{x:Math.max(0,b.x-pad),y:Math.max(0,b.y-pad),width:b.width+2*pad,height:b.height+2*pad}});}
  console.log('OK',name);
}
async function step(name,fn){try{await fn();}catch(e){console.log('FAIL',name,e.message.split('\n')[0].slice(0,150));}}
module.exports={start,go,wait,G,toc,vp,el,step,f};
// mark an element found via JS expression body (receives document as d) and screenshot it
async function markShot(page,fnSrc,name,opts){
  const ok=await page.evaluate(src=>{document.querySelectorAll('[data-cap]').forEach(e=>e.removeAttribute('data-cap'));const e=(new Function('d',src))(document);if(!e)return false;e.setAttribute('data-cap','1');e.scrollIntoView({block:'center'});return true;},fnSrc);
  if(!ok) throw new Error('not found '+name);
  await new Promise(r=>setTimeout(r,500));
  await module.exports.el(page,'[data-cap="1"]',name,opts);
}
// label helper: find element by text then climb to closest selector
const byText=(sel,txt,up)=>`const e=[...d.querySelectorAll('${sel}')].find(x=>x.textContent.trim().includes(${JSON.stringify(txt)})&&x.offsetParent);return e?${up?`e.closest('${up}')`:'e'}:null;`;
module.exports.markShot=markShot; module.exports.byText=byText;
// screenshot top part of an element, max height (CSS px)
module.exports.elTop=async function(page,sel,name,maxH){const loc=page.locator(sel).first();await loc.evaluate(e=>e.scrollIntoView({block:'start'}));await page.evaluate(()=>{const l=document.querySelector('.layout-content');l&&l.scrollBy(0,-80);});await new Promise(r=>setTimeout(r,700));
 await page.addStyleTag({content:'.aiq-actionbar{visibility:hidden!important}'});const b=await loc.boundingBox();await page.screenshot({path:module.exports.f(name),clip:{x:b.x,y:b.y,width:b.width,height:Math.min(maxH,b.height,900-b.y)}});console.log('OK',name);};
// clip union of elements returned by JS (array) + pad
module.exports.union=async function(page,src,name,pad=12){
  const box=await page.evaluate(src=>{const els=(new Function('d',src))(document).filter(Boolean);if(!els.length)return null;els[0].scrollIntoView({block:'center'});return true;},src);
  if(!box) throw new Error('none '+name); await new Promise(r=>setTimeout(r,600));
  const b=await page.evaluate(src=>{const els=(new Function('d',src))(document).filter(Boolean);const rs=els.map(e=>e.getBoundingClientRect());return {x:Math.min(...rs.map(r=>r.left)),y:Math.min(...rs.map(r=>r.top)),r:Math.max(...rs.map(r=>r.right)),b:Math.max(...rs.map(r=>r.bottom))};},src);
  await page.addStyleTag({content:'.aiq-actionbar{visibility:hidden!important}'});
  await page.screenshot({path:module.exports.f(name),clip:{x:b.x-pad,y:b.y-pad,width:b.r-b.x+2*pad,height:b.b-b.y+2*pad}});console.log('OK',name);};
// find media block by label text: climbs until it contains a button
module.exports.mediaBlock=(scope,label)=>`const l=[...d.querySelectorAll('${scope} label, ${scope} .aiq-subhead, ${scope} .form-control-label')].find(e=>e.textContent.trim().startsWith(${JSON.stringify(label)})&&e.offsetParent);if(!l)return null;let p=l.parentElement;while(p&&!p.querySelector('button, .btn'))p=p.parentElement;return p;`;
module.exports.addCond=async function(page,scope,idx,val){const w=ms=>new Promise(r=>setTimeout(r,ms));
 await page.locator(scope+' .aiq-condgroup__field--type .ui-select-toggle').first().click();await w(800);
 const rows=page.locator(scope+' .ui-select-choices-row:visible');console.log('choices',(await rows.allInnerTexts()).map(s=>s.trim()).join(' | '));
 await rows.nth(idx).click();await w(600);
 if(val!=null){const v=page.locator(scope+' input:visible:not(.ui-select-search):not([type=checkbox])');if(await v.count()) await v.last().fill(String(val)).catch(()=>{});}
 const btn=page.locator(scope+' button, '+scope+' a.btn').filter({hasText:/^\s*Añadir\s*$/}).first();console.log('btn disabled?',await btn.isDisabled().catch(e=>'?'));await btn.click({timeout:5000});await w(1200);};

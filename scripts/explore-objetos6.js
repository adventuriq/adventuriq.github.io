const puppeteer = require('puppeteer');
const BASE = '/sessions/amazing-tender-galileo/mnt/adventuriq-docs/static/img';
const GAMIFIER = 'https://gamifier-test.adventuriq.com';
const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--lang=es-ES']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });

  await page.goto(`${GAMIFIER}/#/login`, { waitUntil: 'networkidle0', timeout: 60000 });
  await wait(2000);
  await page.evaluate(() => { localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'); });
  await page.reload({ waitUntil: 'networkidle0' });
  await wait(2000);
  const em = await page.$('#usermail');
  if (em) { await em.click(); await em.type('docs@adventuriq.com'); }
  const pw = await page.$('#userpassword');
  if (pw) { await pw.click(); await pw.type('1234567890'); }
  await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
  await wait(8000);

  await page.goto(`${GAMIFIER}/#/evento/80/itinerario/116`, { waitUntil: 'networkidle0', timeout: 30000 });
  await wait(6000);

  // Find scrollable container and Objetos section
  const scrollInfo = await page.evaluate(() => {
    // Find element with overflow scroll/auto
    const allEls = document.querySelectorAll('*');
    const scrollables = [];
    for (const el of allEls) {
      const style = getComputedStyle(el);
      if ((style.overflow === 'auto' || style.overflow === 'scroll' || 
           style.overflowY === 'auto' || style.overflowY === 'scroll') &&
          el.scrollHeight > el.clientHeight + 50) {
        scrollables.push({
          tag: el.tagName,
          id: el.id,
          cls: el.className.substring(0, 60),
          scrollHeight: el.scrollHeight,
          clientHeight: el.clientHeight
        });
      }
    }
    return scrollables;
  });
  console.log('Scrollable containers:', JSON.stringify(scrollInfo, null, 2));

  // Scroll Objetos into view using scrollIntoView
  const objScroll = await page.evaluate(() => {
    const h4s = Array.from(document.querySelectorAll('h4'));
    for (const h of h4s) {
      if (h.textContent.trim().includes('Objetos')) {
        h.scrollIntoView({ block: 'start', behavior: 'instant' });
        const rect = h.getBoundingClientRect();
        return { found: true, text: h.textContent.trim(), rect: { top: rect.top, left: rect.left } };
      }
    }
    return { found: false };
  });
  console.log('Objetos scroll result:', JSON.stringify(objScroll));
  await wait(1500);
  await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-digitales-seccion.png` });
  console.log('✅ gamifier-mision-objetos-digitales-seccion.png');

  // Now explore the Objetos section content in detail
  const objContent = await page.evaluate(() => {
    const h4s = Array.from(document.querySelectorAll('h4'));
    for (const h of h4s) {
      if (h.textContent.trim().includes('Objetos') && !h.textContent.includes('Retos')) {
        const card = h.closest('.card');
        if (!card) continue;
        
        // Get ALL content: subtitles, links, buttons, select options, inputs
        const subtitles = Array.from(card.querySelectorAll('p,span,small')).filter(el => el.textContent.trim().length > 5 && el.textContent.trim().length < 200).map(el => el.textContent.trim());
        const links = Array.from(card.querySelectorAll('a')).map(a => ({ text: a.textContent.trim().substring(0,50), href: a.href }));
        const buttons = Array.from(card.querySelectorAll('button,.btn')).map(b => b.textContent.trim().substring(0,50));
        const selects = Array.from(card.querySelectorAll('select')).map(s => ({
          name: s.name,
          options: Array.from(s.options).map(o => ({ value: o.value, text: o.textContent.trim() }))
        }));
        const tables = Array.from(card.querySelectorAll('table')).map(t => t.innerText.substring(0, 300));
        
        // Check for AND/OR blocks
        const andOrTexts = [];
        card.querySelectorAll('*').forEach(el => {
          const t = el.textContent.trim();
          if (t.includes('AND') || t.includes('OR') || t.includes('Grupo') || t.includes('condición') || t.includes('Condición')) {
            if (t.length < 100) andOrTexts.push(t);
          }
        });
        
        return {
          subtitles: [...new Set(subtitles)].slice(0, 15),
          links,
          buttons: [...new Set(buttons)],
          selects,
          tables,
          andOrTexts: [...new Set(andOrTexts)].slice(0, 10),
          fullText: card.innerText.substring(0, 2000)
        };
      }
    }
    return null;
  });
  console.log('\n=== OBJETOS SECTION CONTENT ===');
  console.log(JSON.stringify(objContent, null, 2));

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e.message); process.exit(1); });

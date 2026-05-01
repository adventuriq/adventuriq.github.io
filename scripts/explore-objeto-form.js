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

  // Navigate to Object #479 edit form (from Mission 116)
  await page.goto(`${GAMIFIER}/#/itinerario/116/recompensa/479`, { waitUntil: 'networkidle0', timeout: 30000 });
  await wait(6000);
  console.log('URL:', page.url());

  // Get full page structure
  const structure = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(h => ({
      tag: h.tagName, text: h.textContent.trim().substring(0, 80), cls: h.className.substring(0, 40)
    }));
    const labels = Array.from(document.querySelectorAll('label')).map(l => l.textContent.trim().substring(0, 80));
    const selects = Array.from(document.querySelectorAll('select')).map(s => ({
      name: s.name || s.id,
      options: Array.from(s.options).map(o => o.textContent.trim().substring(0, 60))
    }));
    const buttons = Array.from(document.querySelectorAll('button,.btn')).map(b => b.textContent.trim().substring(0, 50));
    const pageHeight = document.querySelector('.layout-content')?.scrollHeight || document.body.scrollHeight;
    
    // Search for AND/OR or condition-related text
    const bodyText = document.body.innerText;
    const condIdx = bodyText.search(/[Cc]ondici[oó]n|AND|OR.*[Gg]rupo/);
    const condContext = condIdx >= 0 ? bodyText.substring(Math.max(0, condIdx - 30), condIdx + 200) : null;
    
    return { headings, labels: labels.slice(0, 30), selects, buttons: [...new Set(buttons)].slice(0, 15), pageHeight, condContext };
  });
  
  console.log('Headings:', JSON.stringify(structure.headings));
  console.log('\nLabels:', JSON.stringify(structure.labels));
  console.log('\nSelects:', JSON.stringify(structure.selects));
  console.log('\nButtons:', JSON.stringify(structure.buttons));
  console.log('\nPage height:', structure.pageHeight);
  console.log('\nCondition context:', structure.condContext);

  // Screenshot top of object form
  await page.screenshot({ path: `${BASE}/gamifier-objeto-form-top.png` });
  console.log('✅ top screenshot');

  // Scroll down to see more
  await page.evaluate(() => {
    const container = document.querySelector('.layout-content');
    if (container) container.scrollTop = container.scrollHeight * 0.5;
  });
  await wait(1500);
  await page.screenshot({ path: `${BASE}/gamifier-objeto-form-mid.png` });
  console.log('✅ mid screenshot');

  // Scroll further
  await page.evaluate(() => {
    const container = document.querySelector('.layout-content');
    if (container) container.scrollTop = container.scrollHeight * 0.8;
  });
  await wait(1500);
  await page.screenshot({ path: `${BASE}/gamifier-objeto-form-low.png` });
  console.log('✅ low screenshot');

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e.message); process.exit(1); });

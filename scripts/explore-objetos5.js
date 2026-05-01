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

  // Navigate to existing Mission #116 directly
  await page.goto(`${GAMIFIER}/#/evento/80/itinerario/116`, { waitUntil: 'networkidle0', timeout: 30000 });
  await wait(6000);
  
  // Check current URL and page title
  const url = page.url();
  console.log('Current URL:', url);
  
  // Get ALL headings and labels to understand the page
  const pageInfo = await page.evaluate(() => {
    const h4s = Array.from(document.querySelectorAll('h4,h5')).map(h => h.textContent.trim().substring(0, 60));
    const pageHeight = document.body.scrollHeight;
    const title = document.querySelector('h3,h2,h1');
    return { h4s, pageHeight, title: title ? title.textContent.trim() : 'none' };
  });
  console.log('Title:', pageInfo.title);
  console.log('Page height:', pageInfo.pageHeight);
  console.log('Headings:', JSON.stringify(pageInfo.h4s));

  // If the page loaded, scroll to bottom to find Objetos
  if (pageInfo.pageHeight > 1000) {
    // Scroll through the page in sections
    for (let pct = 0; pct <= 1; pct += 0.2) {
      await page.evaluate((p) => window.scrollTo(0, document.body.scrollHeight * p), pct);
      await wait(500);
    }
    
    // Now try to find Objetos
    const objResult = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('h4,h5'));
      for (const el of elements) {
        const text = el.textContent.trim();
        if (text.includes('Objeto')) {
          el.scrollIntoView({ block: 'start', behavior: 'instant' });
          window.scrollBy(0, -20);
          // Get parent card content
          const card = el.closest('.card');
          return { found: true, text, cardHTML: card ? card.innerHTML.substring(0, 2000) : 'no card' };
        }
      }
      return { found: false };
    });
    console.log('Objetos found:', objResult.found);
    if (objResult.found) {
      console.log('Card HTML (first 500):', objResult.cardHTML?.substring(0, 500));
    }
    await wait(1000);
    await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-digitales-seccion.png` });
    console.log('✅ screenshot taken');
  } else {
    console.log('Page seems short - may not have loaded correctly');
    await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-debug.png` });
  }

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e.message); process.exit(1); });

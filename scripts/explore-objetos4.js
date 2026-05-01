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
  await page.$('#usermail').then(el => { el.click(); el.type('docs@adventuriq.com'); });
  await page.$('#userpassword').then(el => { el.click(); el.type('1234567890'); });
  await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
  await wait(8000);

  // Navigate to existing Mission #116
  await page.goto(`${GAMIFIER}/#/evento/80/itinerario/116`, { waitUntil: 'networkidle0', timeout: 30000 });
  await wait(5000);

  // Scroll to Objetos section
  const result = await page.evaluate(() => {
    const h4s = Array.from(document.querySelectorAll('h4.card-title'));
    for (const h of h4s) {
      if (h.textContent.trim().includes('Objetos')) {
        const card = h.closest('.card') || h.parentElement.parentElement;
        (card || h).scrollIntoView({ block: 'start', behavior: 'instant' });
        window.scrollBy(0, -20);
        
        // Get the full content of this section
        const cardBody = card ? card.querySelector('.card-body,.card-block') : null;
        const links = card ? Array.from(card.querySelectorAll('a')).map(a => ({ text: a.textContent.trim().substring(0, 50), href: a.href })) : [];
        const buttons = card ? Array.from(card.querySelectorAll('button')).map(b => b.textContent.trim().substring(0, 50)) : [];
        const labels = card ? Array.from(card.querySelectorAll('label')).map(l => l.textContent.trim().substring(0, 80)) : [];
        const innerText = card ? card.innerText.substring(0, 1000) : '';
        
        return { found: true, text: h.textContent.trim(), links, buttons, labels, innerText };
      }
    }
    return { found: false };
  });
  console.log('Objetos section:', JSON.stringify(result, null, 2));
  await wait(1000);
  await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-digitales-seccion.png` });
  console.log('✅ gamifier-mision-objetos-digitales-seccion.png');

  // Now look for the object's condition editor — click on object name or look for AND/OR blocks
  // First check if there are objects and if they have conditions
  const objectLinks = result.links?.filter(l => l.href.includes('objeto') || l.href.includes('reward')) || [];
  console.log('\nObject-related links:', JSON.stringify(objectLinks));

  // Let's look for all elements mentioning "condicion" in the Objetos section
  const condElements = await page.evaluate(() => {
    const allText = document.body.innerText;
    const idx1 = allText.indexOf('Condiciones de obtención');
    const idx2 = allText.indexOf('condiciones de obtención');
    const idx3 = allText.indexOf('Condición');
    return {
      idx1, idx2, idx3,
      context1: idx1 >= 0 ? allText.substring(idx1, idx1 + 200) : null,
      context3: idx3 >= 0 ? allText.substring(Math.max(0, idx3 - 50), idx3 + 200) : null
    };
  });
  console.log('\nCondition elements:', JSON.stringify(condElements, null, 2));

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e.message); process.exit(1); });

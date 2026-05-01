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

  // Login
  await page.goto(`${GAMIFIER}/#/login`, { waitUntil: 'networkidle0', timeout: 60000 });
  await wait(2000);
  await page.evaluate(() => { localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'); });
  await page.reload({ waitUntil: 'networkidle0' });
  await wait(2000);
  const emailInput = await page.$('#usermail');
  if (emailInput) { await emailInput.click(); await emailInput.type('docs@adventuriq.com'); }
  const passwordInput = await page.$('#userpassword');
  if (passwordInput) { await passwordInput.click(); await passwordInput.type('1234567890'); }
  await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
  await wait(8000);
  console.log('Logged in');

  // Navigate to Mission #116 edit form
  await page.goto(`${GAMIFIER}/#/mision/116`, { waitUntil: 'networkidle0', timeout: 30000 });
  await wait(5000);

  // Find the Objetos section and scroll to it
  const objResult = await page.evaluate(() => {
    const h4s = Array.from(document.querySelectorAll('h4.card-title'));
    for (const h of h4s) {
      if (h.textContent.trim().includes('Objetos')) {
        const card = h.closest('.card') || h.parentElement.parentElement;
        (card || h).scrollIntoView({ block: 'start', behavior: 'instant' });
        window.scrollBy(0, -20);
        return { found: true, text: h.textContent.trim() };
      }
    }
    return { found: false, allH4s: h4s.map(h => h.textContent.trim()) };
  });
  console.log('Objetos section:', JSON.stringify(objResult));
  await wait(2000);
  await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-digitales-seccion.png` });
  console.log('✅ gamifier-mision-objetos-digitales-seccion.png');

  // Now look for the object's own form — click on the object name to open it
  // First, let's see what's in the Objetos section
  const objetosHTML = await page.evaluate(() => {
    const h4s = Array.from(document.querySelectorAll('h4.card-title'));
    for (const h of h4s) {
      if (h.textContent.trim().includes('Objetos')) {
        const card = h.closest('.card');
        if (card) {
          // Get links and buttons within the card
          const links = Array.from(card.querySelectorAll('a')).map(a => ({ text: a.textContent.trim(), href: a.href }));
          const buttons = Array.from(card.querySelectorAll('button')).map(b => b.textContent.trim());
          return { links, buttons, innerText: card.innerText.substring(0, 500) };
        }
      }
    }
    return null;
  });
  console.log('Objetos content:', JSON.stringify(objetosHTML, null, 2));

  await browser.close();
  console.log('Done explore-objetos');
})().catch(e => { console.error(e.message); process.exit(1); });

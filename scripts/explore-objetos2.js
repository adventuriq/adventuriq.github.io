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
  const emailInput = await page.$('#usermail');
  if (emailInput) { await emailInput.click(); await emailInput.type('docs@adventuriq.com'); }
  const passwordInput = await page.$('#userpassword');
  if (passwordInput) { await passwordInput.click(); await passwordInput.type('1234567890'); }
  await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
  await wait(8000);

  // Navigate to Mission #116
  await page.goto(`${GAMIFIER}/#/mision/116`, { waitUntil: 'networkidle0', timeout: 30000 });
  await wait(5000);

  // Get ALL section headers and structure of the page
  const structure = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(h => ({
      tag: h.tagName,
      text: h.textContent.trim().substring(0, 80),
      classes: h.className
    }));
    // Also look for text containing "Objeto" or "Recompensa"
    const allText = document.body.innerText;
    const objetoIdx = allText.indexOf('Objeto');
    const recompensaIdx = allText.indexOf('Recompensa');
    const condicionesIdx = allText.indexOf('Condiciones de obtención');
    return {
      headings,
      objetoContext: objetoIdx >= 0 ? allText.substring(Math.max(0, objetoIdx - 50), objetoIdx + 200) : 'NOT FOUND',
      recompensaContext: recompensaIdx >= 0 ? allText.substring(Math.max(0, recompensaIdx - 50), recompensaIdx + 200) : 'NOT FOUND',
      condicionesContext: condicionesIdx >= 0 ? allText.substring(Math.max(0, condicionesIdx - 50), condicionesIdx + 200) : 'NOT FOUND'
    };
  });
  console.log('Page structure:');
  structure.headings.forEach(h => console.log(`  ${h.tag} [${h.classes}]: ${h.text}`));
  console.log('\nObjeto context:', structure.objetoContext.substring(0, 300));
  console.log('\nRecompensa context:', structure.recompensaContext.substring(0, 300));
  console.log('\nCondiciones obtención context:', structure.condicionesContext.substring(0, 300));

  // Scroll down to see the full page and find Objetos section
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('\nPage height:', pageHeight);

  // Scroll to bottom half of page to find Objetos
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.6));
  await wait(2000);
  await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-explore-mid.png` });
  console.log('✅ mid-page screenshot');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.75));
  await wait(2000);
  await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-explore-low.png` });
  console.log('✅ lower-page screenshot');

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e.message); process.exit(1); });

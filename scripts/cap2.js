const puppeteer = require('puppeteer');
const BASE_IMG_PATH = '/sessions/amazing-tender-galileo/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };
const URLS = { gamifier: 'https://gamifier-test.adventuriq.com' };
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES'] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });
    await page.goto(`${URLS.gamifier}/#/login`, { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(2000);
    await page.evaluate(() => { localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'); });
    await page.reload({ waitUntil: 'networkidle0' });
    await wait(2000);
    await page.$eval('#usermail', (el, v) => { el.value = v; el.dispatchEvent(new Event('input')); }, CREDENTIALS.email);
    await page.$eval('#userpassword', (el, v) => { el.value = v; el.dispatchEvent(new Event('input')); }, CREDENTIALS.password);
    await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
    await wait(8000);

    // Navigate to mission editor for adventure 361
    await page.goto(`${URLS.gamifier}/#/evento/361`, { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(4000);

    // Find mission link
    const missionHref = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="itinerario"]'));
      return links.length > 0 ? links[0].href : null;
    });
    console.log('Mission href:', missionHref);

    if (missionHref) {
      await page.goto(missionHref, { waitUntil: 'networkidle0', timeout: 30000 });
      await wait(4000);

      // Find "Mostrar detalle" text
      const toggleInfo = await page.evaluate(() => {
        const container = document.querySelector('.layout-content') || document.body;
        const text = container.innerText;
        const idx = text.indexOf('Mostrar detalle');
        if (idx > -1) return { found: true, context: text.substring(Math.max(0,idx-100), idx+200) };
        const idx2 = text.indexOf('jugable');
        if (idx2 > -1) return { foundJugable: true, context: text.substring(Math.max(0,idx2-50), idx2+300) };
        return { found: false, sample: text.substring(0, 800) };
      });
      console.log('Toggle info:', JSON.stringify(toggleInfo));

      // Scroll to "jugable" section and screenshot
      await page.evaluate(() => {
        const container = document.querySelector('.layout-content');
        const text = container?.innerText || '';
        const idx = text.indexOf('jugable');
        if (idx > -1) container.scrollTop = Math.max(0, idx / 3);
      });
      await wait(1000);
      await page.screenshot({ path: `${BASE_IMG_PATH}/gamifier-mision-skip-detalle-toggle.png` });
      console.log('✅ gamifier-mision-skip-detalle-toggle.png');
    }

  } finally { await browser.close(); }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

/**
 * Capture #3: Toggle "Activar Nube de Palabras en la bitácora"
 * in Adventure #80 Options section.
 *
 * Fix: extract DOMRect properties individually (top, height)
 * instead of serializing the full DOMRect object.
 */
const puppeteer = require('puppeteer');

const BASE_IMG_PATH = '/sessions/upbeat-happy-volta/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };
const URLS = { gamifier: 'https://gamifier-test.adventuriq.com' };

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });

    // Login
    await page.goto(`${URLS.gamifier}/#/login`, { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(2000);
    await page.evaluate(() => localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'));
    await page.reload({ waitUntil: 'networkidle0' });
    await wait(2000);

    const emailInput = await page.$('#usermail');
    if (emailInput) { await emailInput.click(); await emailInput.type(CREDENTIALS.email); }
    const passwordInput = await page.$('#userpassword');
    if (passwordInput) { await passwordInput.click(); await passwordInput.type(CREDENTIALS.password); }
    await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
    await wait(8000);
    console.log('[Gamifier] Logged in:', page.url());

    // Navigate to Adventure #80
    await page.goto(`${URLS.gamifier}/#/evento/80`, { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(5000);

    // Scroll to "Opciones de la Aventura"
    const scrollResult = await page.evaluate(() => {
      const h4s = Array.from(document.querySelectorAll('h4.card-title'));
      for (const h of h4s) {
        if (h.textContent.trim().includes('Opciones de la Aventura')) {
          const card = h.closest('.card') || h.parentElement.parentElement;
          (card || h).scrollIntoView({ block: 'start', behavior: 'instant' });
          return { found: true, text: h.textContent.trim() };
        }
      }
      return { found: false };
    });
    console.log('Scroll result:', JSON.stringify(scrollResult));
    await wait(2000);

    // Get the bounding box of the card heading and the toggle area
    // Extract individual numeric properties to avoid DOMRect serialization issue
    const bounds = await page.evaluate(() => {
      const h4s = Array.from(document.querySelectorAll('h4.card-title'));
      for (const h of h4s) {
        if (h.textContent.trim().includes('Opciones de la Aventura')) {
          const card = h.closest('.card') || h.parentElement.parentElement;
          if (card) {
            const r = card.getBoundingClientRect();
            return { top: r.top, left: r.left, width: r.width, height: r.height };
          }
        }
      }
      return null;
    });
    console.log('Card bounds:', JSON.stringify(bounds));

    if (bounds) {
      // Clip to show the card with toggles - use full card or cap at reasonable height
      const clipHeight = Math.min(bounds.height, 350);
      await page.screenshot({
        path: `${BASE_IMG_PATH}/gamifier-aventura-toggle-nube-palabras.png`,
        clip: {
          x: bounds.left,
          y: bounds.top,
          width: bounds.width,
          height: clipHeight
        }
      });
      console.log(`✅ gamifier-aventura-toggle-nube-palabras.png (clip: ${bounds.left},${bounds.top} ${bounds.width}x${clipHeight})`);
    } else {
      // Fallback: full page screenshot
      console.log('⚠️ Card not found, taking full viewport');
      await page.screenshot({ path: `${BASE_IMG_PATH}/gamifier-aventura-toggle-nube-palabras.png` });
      console.log('✅ gamifier-aventura-toggle-nube-palabras.png (full viewport)');
    }

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

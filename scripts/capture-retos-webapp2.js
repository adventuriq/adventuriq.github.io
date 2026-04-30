/**
 * Webapp captures v2: More precise Continuar click + direct bitácora navigation
 */
const puppeteer = require('puppeteer');

const BASE_IMG_PATH = '/sessions/upbeat-happy-volta/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 400, height: 800, isMobile: true, deviceScaleFactor: 2 });

    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', { get: () => 'es-ES' });
      Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
    });
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

    // Login
    await page.goto('https://webapp-test.adventuriq.com', { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(5000);
    await page.mouse.click(200, 165);
    await wait(500);
    await page.keyboard.type(CREDENTIALS.email, { delay: 30 });
    await page.keyboard.press('Tab');
    await wait(500);
    await page.keyboard.type(CREDENTIALS.password, { delay: 30 });
    await page.keyboard.press('Enter');
    await wait(10000);
    console.log('[Webapp] Logged in');

    // Navigate to Adventure #80 missions
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);

    // Try multiple coordinates for "Continuar" button
    // The button appears at roughly the center-bottom of the card
    // Looking at the image: card bottom area, green button
    const continuarCoords = [
      { x: 200, y: 530 },
      { x: 200, y: 535 },
      { x: 200, y: 545 },
      { x: 200, y: 555 },
      { x: 160, y: 540 },
      { x: 150, y: 530 },
    ];

    for (const c of continuarCoords) {
      console.log(`Clicking Continuar at (${c.x}, ${c.y})...`);
      await page.mouse.click(c.x, c.y);
      await wait(2000);
    }

    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-after-multi-click.png` });

    // If overlay is still showing, try pressing Escape or Back
    await page.keyboard.press('Escape');
    await wait(2000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-after-escape.png` });

    // Try navigating directly to bitácora URL
    console.log('Trying direct bitácora URL...');
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/logbook', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-direct-logbook.png` });

    // Also try Spanish URL patterns
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/bitacora', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-direct-bitacora.png` });

    // Try the word_clouds route
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/word_clouds', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-direct-wordclouds.png` });

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

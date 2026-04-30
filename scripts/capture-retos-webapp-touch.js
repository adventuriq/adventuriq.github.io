/**
 * Webapp NdP captures using touchscreen.tap()
 * Use normal 800px viewport, scroll with touch, tap NdP card
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
    await page.touchscreen.tap(200, 165);
    await wait(500);
    await page.keyboard.type(CREDENTIALS.email, { delay: 30 });
    await page.keyboard.press('Tab');
    await wait(500);
    await page.keyboard.type(CREDENTIALS.password, { delay: 30 });
    await page.keyboard.press('Enter');
    await wait(10000);
    console.log('[Webapp] Logged in');

    // Navigate to Adventure #80
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);

    // Dismiss completion overlay with touchscreen taps
    for (let y = 510; y < 570; y += 15) {
      await page.touchscreen.tap(200, y);
      await wait(1000);
    }
    await wait(3000);

    // Navigate back to missions
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(8000);

    // Click Bitácora tab with touchscreen
    await page.touchscreen.tap(290, 785);
    await wait(5000);

    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-touch-bitacora.png` });
    console.log('📸 debug-touch-bitacora.png');

    // Now scroll down to see the NdP card
    // Use touchscreen to simulate a swipe: touch at (200,700), drag to (200,400)
    console.log('Swiping up to scroll...');

    // Simulate swipe using mouse for touch simulation
    await page.mouse.move(200, 700);
    await page.mouse.down({ button: 'left' });
    for (let y = 700; y >= 400; y -= 20) {
      await page.mouse.move(200, y);
      await wait(16);
    }
    await page.mouse.up({ button: 'left' });
    await wait(2000);

    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-touch-scrolled.png` });
    console.log('📸 debug-touch-scrolled.png');

    // Scroll again if needed
    await page.mouse.move(200, 700);
    await page.mouse.down({ button: 'left' });
    for (let y = 700; y >= 300; y -= 20) {
      await page.mouse.move(200, y);
      await wait(16);
    }
    await page.mouse.up({ button: 'left' });
    await wait(2000);

    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-touch-scrolled2.png` });
    console.log('📸 debug-touch-scrolled2.png');

    // Now try to tap NdP card at various positions
    // After scrolling, the NdP card should be visible
    // Try multiple tap positions
    const positions = [
      { x: 310, y: 400, desc: 'right-mid' },
      { x: 310, y: 350, desc: 'right-upper' },
      { x: 310, y: 500, desc: 'right-lower' },
      { x: 310, y: 300, desc: 'right-300' },
      { x: 310, y: 550, desc: 'right-550' },
    ];

    for (const pos of positions) {
      await page.touchscreen.tap(pos.x, pos.y);
      await wait(2000);
      const url = page.url();
      console.log(`Tapped (${pos.x},${pos.y}) [${pos.desc}] → URL: ${url}`);

      // Check if we navigated away from bitácora
      if (!url.includes('missions') && !url.includes('adventure/80')) {
        await page.screenshot({ path: `${BASE_IMG_PATH}/debug-ndp-found.png` });
        console.log('📸 Found new page!');
        break;
      }
    }

    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-touch-final.png` });
    console.log('📸 debug-touch-final.png');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

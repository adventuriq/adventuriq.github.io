/**
 * Webapp NdP captures using CDP touch events for scroll
 */
const puppeteer = require('puppeteer');

const BASE_IMG_PATH = '/sessions/upbeat-happy-volta/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function cdpScroll(client, startX, startY, endY, steps = 20) {
  const stepDelay = 16;
  const deltaY = (endY - startY) / steps;

  // touchStart
  await client.send('Input.dispatchTouchEvent', {
    type: 'touchStart',
    touchPoints: [{ x: startX, y: startY }]
  });
  await wait(50);

  // touchMove steps
  for (let i = 1; i <= steps; i++) {
    await client.send('Input.dispatchTouchEvent', {
      type: 'touchMove',
      touchPoints: [{ x: startX, y: startY + deltaY * i }]
    });
    await wait(stepDelay);
  }

  // touchEnd
  await client.send('Input.dispatchTouchEvent', {
    type: 'touchEnd',
    touchPoints: []
  });
  await wait(500);
}

async function cdpTap(client, x, y) {
  await client.send('Input.dispatchTouchEvent', {
    type: 'touchStart',
    touchPoints: [{ x: x, y: y }]
  });
  await wait(50);
  await client.send('Input.dispatchTouchEvent', {
    type: 'touchEnd',
    touchPoints: []
  });
  await wait(100);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES']
  });

  try {
    const page = await browser.newPage();
    const client = await page.target().createCDPSession();
    await page.setViewport({ width: 400, height: 800, isMobile: true, deviceScaleFactor: 2 });

    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', { get: () => 'es-ES' });
      Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
    });
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

    // Login
    await page.goto('https://webapp-test.adventuriq.com', { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(5000);
    await cdpTap(client, 200, 165);
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

    // Dismiss completion overlay
    await cdpTap(client, 200, 535);
    await wait(3000);
    await cdpTap(client, 200, 535);
    await wait(3000);

    // Navigate back to missions
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(8000);

    // Click Bitácora tab
    await cdpTap(client, 290, 785);
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-cdp-bitacora.png` });
    console.log('📸 debug-cdp-bitacora.png');

    // Scroll down using CDP touch events
    // Swipe from (200, 700) to (200, 400) = scroll content up by 300px
    console.log('Scrolling with CDP...');
    await cdpScroll(client, 200, 700, 400, 30);
    await wait(2000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-cdp-scrolled.png` });
    console.log('📸 debug-cdp-scrolled.png');

    // The NdP card should now be visible. Tap it.
    // After scrolling 300px up, the NdP card (originally at y≈860) should now be at y≈560
    console.log('Tapping NdP card...');
    await cdpTap(client, 300, 560);
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-cdp-ndp-tap.png` });
    console.log('📸 debug-cdp-ndp-tap.png');

    // Try more positions if needed
    await cdpTap(client, 300, 600);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-cdp-ndp-tap2.png` });
    console.log('📸 debug-cdp-ndp-tap2.png');

    await cdpTap(client, 300, 650);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-cdp-ndp-tap3.png` });
    console.log('📸 debug-cdp-ndp-tap3.png');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

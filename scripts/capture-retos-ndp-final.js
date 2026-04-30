/**
 * Clean single-pass: bitácora → scroll → tap NdP at y≈690
 */
const puppeteer = require('puppeteer');

const BASE_IMG_PATH = '/sessions/upbeat-happy-volta/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function cdpScroll(client, x, fromY, toY, steps = 30) {
  const dy = (toY - fromY) / steps;
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y: fromY }] });
  await wait(50);
  for (let i = 1; i <= steps; i++) {
    await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: fromY + dy * i }] });
    await wait(16);
  }
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await wait(500);
}

async function cdpTap(client, x, y) {
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  await wait(80);
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
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

    // Navigate + dismiss overlay
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(10000);
    await cdpTap(client, 200, 535);
    await wait(3000);

    // Back to missions
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(8000);

    // Bitácora tab
    await cdpTap(client, 290, 785);
    await wait(5000);

    // === CAPTURE: Bitácora showing NdP quadrant ===
    // Save this as the bitácora tab view (already has NdP visible)
    await page.screenshot({ path: `${BASE_IMG_PATH}/webapp-bitacora-nube-palabras-tab.png` });
    console.log('✅ webapp-bitacora-nube-palabras-tab.png');

    // Scroll down to bring NdP card into tappable area
    // From analysis: Muro is at ~y=560 after scroll, NdP should be ~130px lower at ~690
    await cdpScroll(client, 200, 600, 300, 30);
    await wait(1500);

    // Try NdP tap at y=690 (right column)
    console.log('Tapping NdP at (290, 690)...');
    await cdpTap(client, 290, 690);
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-ndp-y690.png` });
    console.log('📸 debug-ndp-y690.png');

    // Check if we're in NdP section or still in bitácora
    // If we see a list of NdP retos, capture it
    // If we see a word cloud, capture that too

    // Try going deeper if we're on NdP list
    await cdpTap(client, 200, 400);
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-ndp-inner.png` });
    console.log('📸 debug-ndp-inner.png');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

/**
 * Webapp: scroll more + tap NdP at correct y position (row 3, ~690)
 */
const puppeteer = require('puppeteer');

const BASE_IMG_PATH = '/sessions/upbeat-happy-volta/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function cdpScroll(client, startX, startY, endY, steps = 30) {
  const deltaY = (endY - startY) / steps;
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: startX, y: startY }] });
  await wait(50);
  for (let i = 1; i <= steps; i++) {
    await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: startX, y: startY + deltaY * i }] });
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
    await wait(2000);
    await cdpTap(client, 200, 535);
    await wait(2000);

    // Back to missions
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(8000);

    // Bitácora
    await cdpTap(client, 290, 785);
    await wait(5000);

    // Scroll down more aggressively — multiple swipes
    for (let i = 0; i < 3; i++) {
      await cdpScroll(client, 200, 600, 300, 30);
      await wait(500);
    }
    await wait(2000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-multi-scroll.png` });
    console.log('📸 debug-multi-scroll.png');

    // Try tapping at progressively lower y positions to find NdP
    const attempts = [
      { x: 300, y: 500 },
      { x: 300, y: 550 },
      { x: 300, y: 600 },
      { x: 300, y: 650 },
      { x: 300, y: 700 },
      { x: 300, y: 750 },
    ];

    for (const pos of attempts) {
      // Go back to bitácora first (in case we navigated away)
      await page.goBack();
      await wait(3000);

      // Re-scroll
      for (let i = 0; i < 3; i++) {
        await cdpScroll(client, 200, 600, 300, 30);
        await wait(300);
      }
      await wait(1000);

      console.log(`Tapping (${pos.x}, ${pos.y})...`);
      await cdpTap(client, pos.x, pos.y);
      await wait(3000);
      await page.screenshot({ path: `${BASE_IMG_PATH}/debug-tap-y${pos.y}.png` });

      // Check if we see "Nube de Palabras" header (not "MURO")
      // We can check by looking at the screenshot title area
    }

    console.log('Done. Check debug-tap-y*.png files');
    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

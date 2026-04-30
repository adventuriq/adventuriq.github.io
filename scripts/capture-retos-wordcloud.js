/**
 * Navigate to NdP list, then tap the reto item to see word cloud
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

    // Scroll + tap NdP card
    await cdpScroll(client, 200, 600, 300, 30);
    await wait(1500);
    await cdpTap(client, 290, 690);
    await wait(5000);

    // We should be on NdP list. Now try tapping the reto row at several positions
    const rowTaps = [
      { x: 350, y: 220, desc: 'chevron' },
      { x: 200, y: 230, desc: 'center' },
      { x: 300, y: 225, desc: 'right' },
      { x: 150, y: 225, desc: 'left' },
    ];

    for (const tap of rowTaps) {
      console.log(`Tapping reto row at (${tap.x}, ${tap.y}) [${tap.desc}]...`);
      await cdpTap(client, tap.x, tap.y);
      await wait(5000);
      await page.screenshot({ path: `${BASE_IMG_PATH}/debug-row-tap-${tap.desc}.png` });

      // Check if the screen changed (word cloud visible)
      // Look for differences — if still on list, continue
    }

    // Save final state
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-final-wordcloud.png` });
    console.log('📸 debug-final-wordcloud.png');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

/**
 * Word cloud capture — try precise taps on NdP list row
 * The row card spans ~y=170-280 CSS pixels, centered at ~y=225
 * Try: longer touch hold, precise center, and also check for URL changes
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

async function cdpTap(client, x, y, holdMs = 80) {
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  await wait(holdMs);
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

    // We're now on NdP list. Log URL
    console.log('URL after NdP tap:', page.url());
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc2-list.png` });

    // The row card: in a 400x800 viewport with 2x scale, the rendered screenshot is 800x1600.
    // The card appears at approximately y=170-280 in CSS coordinates.
    // The chevron ">" is at about x=370.
    // Let's try tapping at exact center of card text area.

    // Attempt 1: Tap center of the card row (longer hold)
    console.log('Attempt 1: Center of card with 200ms hold...');
    await cdpTap(client, 200, 220, 200);
    await wait(8000);
    const url1 = page.url();
    console.log('URL after tap 1:', url1);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc2-tap1.png` });

    // Attempt 2: Tap the chevron with regular hold
    console.log('Attempt 2: Chevron area...');
    await cdpTap(client, 370, 220);
    await wait(8000);
    const url2 = page.url();
    console.log('URL after tap 2:', url2);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc2-tap2.png` });

    // Attempt 3: Tap the cloud icon
    console.log('Attempt 3: Cloud icon area...');
    await cdpTap(client, 60, 220);
    await wait(8000);
    const url3 = page.url();
    console.log('URL after tap 3:', url3);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc2-tap3.png` });

    // Attempt 4: Maybe the card y is higher than expected — try y=195
    console.log('Attempt 4: Higher y=195...');
    await cdpTap(client, 200, 195);
    await wait(8000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc2-tap4.png` });
    console.log('URL after tap 4:', page.url());

    // Attempt 5: Maybe lower — y=250
    console.log('Attempt 5: Lower y=250...');
    await cdpTap(client, 200, 250);
    await wait(8000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc2-tap5.png` });
    console.log('URL after tap 5:', page.url());

    // Attempt 6: Try GestureDetector-friendly — quick tap-up without hold
    console.log('Attempt 6: Quick tap (10ms hold)...');
    await cdpTap(client, 200, 220, 10);
    await wait(8000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc2-tap6.png` });
    console.log('URL after tap 6:', page.url());

    // Attempt 7: Try a mouseClick instead of touch
    console.log('Attempt 7: Mouse click...');
    await page.mouse.click(200, 220);
    await wait(8000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc2-tap7.png` });
    console.log('URL after tap 7:', page.url());

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

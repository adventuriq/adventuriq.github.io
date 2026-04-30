/**
 * Try to capture the NdP reto response screen by navigating to the mission
 * that contains the NdP reto, then scrolling to find it.
 * Also: try navigating directly to the reto within the mission flow.
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
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES'],
    protocolTimeout: 60000
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

    // Navigate to Adventure #80 missions
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(10000);

    // Dismiss completion overlay
    await cdpTap(client, 200, 535);
    await wait(3000);

    // Navigate back
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(8000);

    // Screenshot missions list to see what's available
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-mission-list.png` });
    console.log('📸 debug-mission-list.png');

    // Try tapping Mission 2 (Frau Blücher) — should be in the list
    // Mission 1 is likely at ~y=300, Mission 2 at ~y=400-500
    // Let's scroll down and try different positions

    // First scroll down to see more missions
    await cdpScroll(client, 200, 600, 300, 30);
    await wait(2000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-mission-scrolled.png` });
    console.log('📸 debug-mission-scrolled.png');

    // Try tapping at various y positions to find Mission 2
    const missionTaps = [300, 350, 400, 450, 500];
    for (const y of missionTaps) {
      console.log(`Tapping mission at y=${y}...`);
      await cdpTap(client, 200, y);
      await wait(5000);
      await page.screenshot({ path: `${BASE_IMG_PATH}/debug-mission-tap-y${y}.png` });

      // If the screen changed (not missions list anymore), we found a mission
      // Take a screenshot and check
    }

    // Also try: navigate to bitácora tab and scan for NdP content
    // Go back to missions first
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(8000);
    await cdpTap(client, 200, 535); // dismiss overlay
    await wait(3000);

    // Navigate back again
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(8000);

    // Go to Bitácora
    await cdpTap(client, 290, 785);
    await wait(5000);

    // Scroll to NdP card
    await cdpScroll(client, 200, 600, 300, 30);
    await wait(1500);

    // Tap NdP card
    await cdpTap(client, 290, 690);
    await wait(5000);

    // Now on NdP list. Let me try a double-tap on the row
    console.log('\n=== Trying double-tap on NdP reto row ===');
    await cdpTap(client, 200, 220, 50);
    await wait(100);
    await cdpTap(client, 200, 220, 50);
    await wait(8000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc-doubletap.png` });

    // Try pointer events instead of touch events
    console.log('\n=== Trying CDP pointer events ===');
    await client.send('Input.dispatchMouseEvent', {
      type: 'mousePressed',
      x: 200, y: 220,
      button: 'left',
      clickCount: 1
    });
    await wait(50);
    await client.send('Input.dispatchMouseEvent', {
      type: 'mouseReleased',
      x: 200, y: 220,
      button: 'left',
      clickCount: 1
    });
    await wait(8000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc-pointer.png` });
    console.log('📸 debug-wc-pointer.png');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

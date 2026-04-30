/**
 * Webapp captures for NdP:
 * 1. Dismiss completion overlay
 * 2. Navigate to Bitácora
 * 3. Find NdP tab/quadrant
 * 4. Capture list and word cloud visualization
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
    console.log('[Webapp] Logged in:', page.url());

    // Navigate to Adventure #80
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);

    // Click "Continuar" to dismiss completion overlay
    // The "Continuar" button is roughly in the center of the screen
    console.log('Dismissing completion overlay...');
    await page.mouse.click(200, 540);  // "Continuar" button area
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-after-continuar.png` });

    // Check if we're past the overlay — try clicking Continuar again if needed
    // It might be at a different position
    await page.mouse.click(200, 520);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-after-continuar2.png` });

    // Now try to click on the Bitácora tab in the bottom nav
    // Bottom nav is at y~785, Bitácora is roughly at x=290 (position 3 of 4)
    console.log('Clicking Bitácora tab...');
    await page.mouse.click(290, 785);
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-bitacora-after-dismiss.png` });

    // Let's see what the Bitácora looks like now
    // The NdP tab should appear as a cloud icon among the quadrant icons
    // Let's explore by clicking different positions in the tab area

    // From previous bitácora captures, the quadrant icons are at the top
    // Let me capture what's visible
    console.log('Looking for NdP quadrant...');

    // The bitácora typically has icons at the top area (around y=70-130)
    // Let me try systematically clicking icons
    // Previous bitácora captures show icons around y=90-100
    // Positions might be: ~53, ~105, ~158, ~210, ~263, ~315, ~368 (7 icons at ~52px spacing)

    // First, let's take a screenshot to see current state
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-bitacora-tabs.png` });
    console.log('📸 debug-bitacora-tabs.png');

    // Try clicking on positions that might be the NdP (cloud) icon
    // It's likely the last icon if it was added recently
    // Let's try each position and screenshot

    // Click last icon position (rightmost)
    await page.mouse.click(368, 95);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-bitacora-icon7.png` });
    console.log('📸 Clicked icon at x=368');

    // Try position 6
    await page.mouse.click(315, 95);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-bitacora-icon6.png` });
    console.log('📸 Clicked icon at x=315');

    // Try position 5
    await page.mouse.click(263, 95);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-bitacora-icon5.png` });
    console.log('📸 Clicked icon at x=263');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

/**
 * Webapp NdP captures with tall viewport to see all bitácora cards
 * Then restore normal viewport for reto response capture
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
    // Use a taller viewport so all bitácora cards are visible
    const page = await browser.newPage();
    await page.setViewport({ width: 400, height: 1200, isMobile: true, deviceScaleFactor: 2 });

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

    // Navigate to Adventure #80
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);

    // Dismiss completion overlay — try various y positions
    for (let y = 500; y < 700; y += 30) {
      await page.mouse.click(200, y);
      await wait(1000);
    }
    await wait(3000);

    // Navigate back to missions
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(8000);

    // Click Bitácora tab (should be at bottom of viewport, which is now at y~1185)
    await page.mouse.click(290, 1185);
    await wait(5000);

    // Take tall screenshot to see all quadrants
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-tall-bitacora.png` });
    console.log('📸 debug-tall-bitacora.png');

    // Now click "Nube de Palabras" card
    // With the tall viewport, the card should be visible
    // From the normal 800px view, the cards start at ~600 and each row is ~100px
    // Row 3 (Votar/NdP) would be around y=850-950
    // NdP is on the right: x=300, y=900
    await page.mouse.click(300, 900);
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-tall-ndp-click.png` });
    console.log('📸 debug-tall-ndp-click.png');

    // If that didn't work, try other y positions
    await page.mouse.click(300, 880);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-tall-ndp-click2.png` });

    await page.mouse.click(300, 920);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-tall-ndp-click3.png` });

    // Check if we're now in the NdP section
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-tall-current.png` });
    console.log('📸 debug-tall-current.png');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

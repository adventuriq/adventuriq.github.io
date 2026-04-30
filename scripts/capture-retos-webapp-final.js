/**
 * Webapp final captures:
 * - Bitácora with NdP quadrant visible (already captured, improve)
 * - NdP list of retos
 * - NdP word cloud visualization
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

    // Navigate to Adventure #80
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);

    // Dismiss completion overlay
    for (let i = 0; i < 5; i++) {
      await page.mouse.click(200, 535);
      await wait(1500);
    }
    await wait(3000);

    // Go back to missions
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(8000);

    // Click Bitácora tab
    await page.mouse.click(290, 785);
    await wait(5000);

    // === CAPTURE #5: Bitácora with NdP tab visible ===
    // The NdP quadrant is at bottom right of the grid
    // Save the bitácora view showing the quadrants including NdP
    await page.screenshot({
      path: `${BASE_IMG_PATH}/webapp-bitacora-nube-palabras-tab.png`
    });
    console.log('✅ webapp-bitacora-nube-palabras-tab.png (bitácora with NdP quadrant)');

    // === Click on "Nube de Palabras" quadrant ===
    // It's at the bottom right of the card grid
    // From the debug image, it's approximately at (600, 900) in logical coords
    // Wait - viewport is 400x800. The card appears around x=300, y=880
    // But the viewport height is 800, so the card at y=880 would be below viewport
    // Actually, looking at the debug-webapp-bitacora-v3.png, the viewport extends:
    // - Avatar + circle: y ~100-400
    // - Unirse a equipo: y ~430
    // - Votos: y ~530
    // - Baúl/Galería row: y ~620-700
    // - Clasificación/Muro row: y ~720-800
    // - Votar/Nube row: y ~820-900 -- this is BELOW viewport

    // I need to scroll down first
    console.log('Scrolling down to NdP quadrant...');

    // Swipe up to scroll down (touch gesture)
    await page.mouse.move(200, 600);
    await page.mouse.down();
    await page.mouse.move(200, 300, { steps: 10 });
    await page.mouse.up();
    await wait(2000);

    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-bitacora-scrolled.png` });
    console.log('📸 debug-bitacora-scrolled.png');

    // Try clicking "Nube de Palabras" - after scroll it should be visible
    // The card was at approximately x=300, y=880 before scroll
    // After scrolling ~300px up, it should be around y=580
    await page.mouse.click(300, 580);
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-after-ndp-click.png` });
    console.log('📸 debug-after-ndp-click.png');

    // If we're now in the NdP section, we should see a list of NdP retos
    // Let's check if the screen changed

    // Take the list screenshot
    await page.screenshot({
      path: `${BASE_IMG_PATH}/webapp-bitacora-nube-palabras-lista.png`
    });
    console.log('✅ webapp-bitacora-nube-palabras-lista.png');

    // Click on the first NdP reto to see the word cloud
    // The reto should be in the main content area
    await page.mouse.click(200, 300);
    await wait(5000);

    await page.screenshot({
      path: `${BASE_IMG_PATH}/webapp-bitacora-nube-palabras-visual.png`
    });
    console.log('✅ webapp-bitacora-nube-palabras-visual.png');

    // Also try clicking slightly different positions
    await page.mouse.click(200, 400);
    await wait(5000);
    await page.screenshot({
      path: `${BASE_IMG_PATH}/debug-ndp-click2.png`
    });
    console.log('📸 debug-ndp-click2.png');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

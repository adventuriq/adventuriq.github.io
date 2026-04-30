/**
 * Webapp captures v3: Navigate through completion overlay to Bitácora NdP
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
    console.log('[Webapp] Logged in');

    // Navigate to Adventure #80
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);

    // Dismiss completion overlay by clicking "Continuar" repeatedly
    for (let i = 0; i < 5; i++) {
      await page.mouse.click(200, 535);
      await wait(1500);
    }
    await wait(3000);

    // Now navigate back to missions page
    await page.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(8000);

    // Screenshot to check state
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-after-dismiss.png` });
    console.log('📸 State after dismiss');

    // Click Bitácora tab - bottom nav, position 3
    // Bottom nav coords: Misiones (110,785), ??? (200,785), Bitácora (290,785), Perfil (360,785)
    await page.mouse.click(290, 785);
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-bitacora-v3.png` });
    console.log('📸 Bitácora v3');

    // Look at the tab bar at top of bitácora content
    // Previous captures show quadrant icons in a row near top
    // Let me try clicking each potential position

    // Take a large screenshot to analyze the full bitácora layout
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-bitacora-full.png` });

    // From previous bitacora captures, the tabs are at roughly y=80-100
    // and the NdP tab (cloud icon) should be the last one
    // Let me try clicking each tab position systematically

    // 9 toggles means potentially 9 quadrants. With the current ones being:
    // Puntos, Ranking, Ranking Diario, Baúl, Galería, Muro, NdP
    // That's 7 sections visible (not counting Volver a jugar and Envío emails which aren't bitácora sections)
    // Actually the Bitácora has: Puntos, Ranking, (Ranking diario?), Baúl, Galería, Muro, Nube de Palabras
    // Let's try the last few tab positions

    // Tab positions with spacing ~52px from x=25
    // [25, 77, 129, 181, 233, 285, 337, 389]
    // 8 positions spanning the 400px width

    console.log('Scanning tab positions...');
    const tabs = [];
    for (let x = 25; x < 400; x += 52) {
      await page.mouse.click(x, 90);
      await wait(2000);
      await page.screenshot({ path: `${BASE_IMG_PATH}/debug-tab-x${x}.png` });
      tabs.push(x);
      console.log(`  Tab at x=${x}`);
    }

    // Check the last few tabs for NdP content
    console.log('Done scanning tabs. Check debug-tab-x*.png files');

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

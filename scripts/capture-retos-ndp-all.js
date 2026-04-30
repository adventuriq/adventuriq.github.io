/**
 * Capture all remaining NdP screenshots:
 * - #2: Gamifier editing form of existing NdP reto
 * - #4: Webapp reto response screen
 * - #5: Webapp bitácora NdP list
 * - #6: Webapp NdP visualization (word cloud)
 *
 * Uses existing NdP reto in Adventure #80 → Mission #116
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
    // ==========================================
    // GAMIFIER: Find and capture existing NdP reto form
    // ==========================================
    console.log('=== GAMIFIER: Capture existing NdP reto form ===');
    const gPage = await browser.newPage();
    await gPage.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });

    await gPage.goto('https://gamifier-test.adventuriq.com/#/login', { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(2000);
    await gPage.evaluate(() => localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'));
    await gPage.reload({ waitUntil: 'networkidle0' });
    await wait(2000);
    let em = await gPage.$('#usermail');
    if (em) { await em.click(); await em.type(CREDENTIALS.email); }
    let pw = await gPage.$('#userpassword');
    if (pw) { await pw.click(); await pw.type(CREDENTIALS.password); }
    await gPage.evaluate(() => document.querySelectorAll('button')[0].click());
    await wait(8000);

    // Navigate to Mission #116 to find the NdP reto
    await gPage.goto('https://gamifier-test.adventuriq.com/#/evento/80/itinerario/116', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(5000);

    // Find the NdP reto URL
    const ndpReto = await gPage.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="prueba/"]'));
      const ndp = links.find(a =>
        a.getAttribute('href').includes('nube') ||
        a.textContent.toLowerCase().includes('nube')
      );
      if (ndp) return { href: ndp.getAttribute('href'), text: ndp.textContent.trim() };

      // Also check all reto links
      return {
        href: null,
        allRetos: links.map(a => ({
          href: a.getAttribute('href'),
          text: a.textContent.trim().substring(0, 40)
        }))
      };
    });
    console.log('NdP reto found:', JSON.stringify(ndpReto));

    if (ndpReto.href) {
      // Navigate to the reto
      await gPage.goto(`https://gamifier-test.adventuriq.com/${ndpReto.href}`, {
        waitUntil: 'networkidle0', timeout: 30000
      });
      await wait(5000);

      // Capture the editing form
      await gPage.screenshot({
        path: `${BASE_IMG_PATH}/gamifier-reto-nube-palabras-edicion.png`
      });
      console.log('✅ gamifier-reto-nube-palabras-edicion.png');
    } else {
      console.log('⚠️ NdP reto not found in mission. All retos:', JSON.stringify(ndpReto.allRetos));
    }

    await gPage.close();

    // ==========================================
    // WEBAPP: Capture Player experience
    // ==========================================
    console.log('\n=== WEBAPP: Capture Player experience ===');
    const wPage = await browser.newPage();
    await wPage.setViewport({ width: 400, height: 800, isMobile: true, deviceScaleFactor: 2 });

    await wPage.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', { get: () => 'es-ES' });
      Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
    });
    await wPage.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

    await wPage.goto('https://webapp-test.adventuriq.com', { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(5000);

    // Login
    await wPage.mouse.click(200, 165);
    await wait(500);
    await wPage.keyboard.type(CREDENTIALS.email, { delay: 30 });
    await wPage.keyboard.press('Tab');
    await wait(500);
    await wPage.keyboard.type(CREDENTIALS.password, { delay: 30 });
    await wPage.keyboard.press('Enter');
    await wait(10000);
    console.log('[Webapp] Logged in:', wPage.url());

    // Navigate to Adventure #80 missions
    await wPage.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);

    // Take a screenshot to see missions page
    await wPage.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-state.png` });
    console.log('📸 debug-webapp-state.png');

    // Navigate to Bitácora
    await wPage.mouse.click(290, 785);
    await wait(5000);
    await wPage.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-bitacora.png` });
    console.log('📸 debug-webapp-bitacora.png');

    // Now look for the NdP tab/section in the bitácora
    // In the bitácora, there should be a cloud icon tab
    // Let's try clicking different tab positions to find the NdP tab
    // Typical bottom tabs in bitácora might be at various x positions

    // First let's check what tabs/icons are visible at the top area of the bitácora
    // The bitácora has quadrants/tabs usually shown as icons in a row
    // Let me try scanning for clickable areas with cloud-related content

    // Take full page screenshots at different scroll positions to understand the layout
    console.log('Looking for NdP tab in bitácora...');

    // Try clicking on different possible tab positions
    // From previous bitacora captures, tabs might be at the top of the content area
    // Let's try a few x positions at the tabs row (roughly y=100-150 area)
    const tabPositions = [
      { x: 50, y: 120, desc: 'tab1' },
      { x: 100, y: 120, desc: 'tab2' },
      { x: 150, y: 120, desc: 'tab3' },
      { x: 200, y: 120, desc: 'tab4' },
      { x: 250, y: 120, desc: 'tab5' },
      { x: 300, y: 120, desc: 'tab6' },
      { x: 350, y: 120, desc: 'tab7' },
    ];

    // Actually, let me first check if the bitácora shows NdP content already
    // or if I need to navigate to a specific tab
    // Let me look at the current debug screenshot first

    console.log('\nCapturing bitácora screenshots for analysis...');

    // Try scrolling down in the bitácora to find the NdP section
    // The bitácora is a canvas app, so I need to use coordinates

    // Let me try direct URL navigation if available
    // The webapp URL pattern for bitacora might include a section parameter
    await wPage.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/wordcloud', {
      waitUntil: 'networkidle0', timeout: 15000
    });
    await wait(8000);
    await wPage.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-wordcloud-direct.png` });
    console.log('📸 debug-webapp-wordcloud-direct.png');

    // Also try the bitacora path with word cloud
    await wPage.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/bitacora/wordcloud', {
      waitUntil: 'networkidle0', timeout: 15000
    });
    await wait(8000);
    await wPage.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-bitacora-wc.png` });
    console.log('📸 debug-webapp-bitacora-wc.png');

    // Go back to missions and try to find the NdP reto in Mission #116
    await wPage.goto('https://webapp-test.adventuriq.com/#/dashboard/adventure/80/missions', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(10000);

    // Need to open Mission #116 (2nd mission) and find the NdP reto
    // In Flutter canvas, missions are displayed as a list
    // Let me try clicking on the second mission
    // From previous sessions, missions are roughly in the middle area
    // Let me scroll down to find mission #116

    await wPage.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-missions2.png` });
    console.log('📸 debug-webapp-missions2.png');

    await wPage.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

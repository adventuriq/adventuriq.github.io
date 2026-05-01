/**
 * Capturas para docs/retos/respuesta-exacta.md
 *
 * Bloque A: Gamifier (selector, formulario, tramos)
 * Bloque B: Webapp (mobile, fallo, acierto, desktop)
 * Bloque C: Verificación empírica caso especial 0%
 */

const puppeteer = require('puppeteer');

const BASE_IMG_PATH = '/sessions/upbeat-happy-volta/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };
const URLS = {
  gamifier: 'https://gamifier-test.adventuriq.com',
  webapp: 'https://webapp-test.adventuriq.com'
};
const ADVENTURE_ID = 361;
const CORRECT_ANSWER = 'Lorem ipsum';

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function launchBrowser() {
  return puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES']
  });
}

async function setupGamifierPage(browser, opts = {}) {
  const { width = 1400, height = 900, scaleFactor = 2 } = opts;
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: scaleFactor });

  await page.goto(`${URLS.gamifier}/#/login`, { waitUntil: 'networkidle0', timeout: 60000 });
  await wait(2000);
  await page.evaluate(() => { localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'); });
  await page.reload({ waitUntil: 'networkidle0' });
  await wait(2000);

  const emailInput = await page.$('#usermail');
  if (emailInput) { await emailInput.click(); await emailInput.type(CREDENTIALS.email); }
  const passwordInput = await page.$('#userpassword');
  if (passwordInput) { await passwordInput.click(); await passwordInput.type(CREDENTIALS.password); }
  await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
  await wait(8000);
  console.log(`[Gamifier] Logged in: ${page.url()}`);
  return page;
}

async function setupWebappPage(browser, opts = {}) {
  const { width = 400, height = 800, scaleFactor = 2, isMobile = true } = opts;
  const page = await browser.newPage();
  await page.setViewport({ width, height, isMobile, deviceScaleFactor: scaleFactor });

  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'language', { get: () => 'es-ES' });
    Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
  });
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

  await page.goto(URLS.webapp, { waitUntil: 'networkidle0', timeout: 60000 });
  await wait(5000);

  // Login
  await page.mouse.click(200, 165);
  await wait(500);
  await page.keyboard.type(CREDENTIALS.email, { delay: 30 });
  await page.keyboard.press('Tab');
  await wait(500);
  await page.keyboard.type(CREDENTIALS.password, { delay: 30 });
  await page.keyboard.press('Enter');
  await wait(10000);
  console.log(`[Webapp] Logged in: ${page.url()}`);
  return page;
}

// ============================================================
// BLOQUE A: GAMIFIER
// ============================================================

async function captureGamifier(browser) {
  const page = await setupGamifierPage(browser);

  // Navigate to adventure
  await page.goto(`${URLS.gamifier}/#/evento/${ADVENTURE_ID}`, {
    waitUntil: 'networkidle0', timeout: 30000
  });
  await wait(5000);

  // --- Captura #1: Selector de tipos de Reto ---
  // Find the mission and click "Nuevo Reto"
  const nuevoRetoClicked = await page.evaluate(() => {
    // Look for "Nuevo Reto" link in the missions section
    const links = Array.from(document.querySelectorAll('a'));
    for (const a of links) {
      if (a.textContent.trim().includes('Nuevo Reto')) {
        a.click();
        return true;
      }
    }
    return false;
  });
  console.log(`[Gamifier] Nuevo Reto clicked: ${nuevoRetoClicked}`);
  await wait(3000);

  // Handle "Continuar" modal if it appears
  const continueClicked = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    for (const b of btns) {
      if (b.textContent.trim().includes('Continuar')) {
        b.click();
        return true;
      }
    }
    return false;
  });
  console.log(`[Gamifier] Continuar clicked: ${continueClicked}`);
  await wait(5000);

  // Now we should be on the reto type selector page
  // Take screenshot of selector
  await page.screenshot({
    path: `${BASE_IMG_PATH}/gamifier-reto-seleccion-tipo-respuesta-exacta.png`
  });
  console.log('✅ gamifier-reto-seleccion-tipo-respuesta-exacta.png');

  // --- Now navigate to the existing Respuesta Exacta reto ---
  // Go back to adventure and find the existing RE reto
  await page.goto(`${URLS.gamifier}/#/evento/${ADVENTURE_ID}`, {
    waitUntil: 'networkidle0', timeout: 30000
  });
  await wait(5000);

  // Find and click on the Respuesta Exacta reto in the mission list
  // First, let's look for the reto in the mission section
  const retoFound = await page.evaluate(() => {
    // Look for links that might be retos - they usually are in the mission list
    const links = Array.from(document.querySelectorAll('a'));
    for (const a of links) {
      const text = a.textContent.trim().toLowerCase();
      if (text.includes('respuesta exacta') || text.includes('lorem') || text.includes('exacta')) {
        a.click();
        return { found: true, text: a.textContent.trim() };
      }
    }
    // Try looking in table rows or list items
    const tds = Array.from(document.querySelectorAll('td a, li a'));
    for (const a of tds) {
      const text = a.textContent.trim().toLowerCase();
      if (text.includes('respuesta exacta') || text.includes('lorem') || text.includes('exacta')) {
        a.click();
        return { found: true, text: a.textContent.trim() };
      }
    }
    return { found: false };
  });
  console.log(`[Gamifier] Reto found: ${JSON.stringify(retoFound)}`);
  await wait(5000);

  // Take a debug screenshot to see what we have
  await page.screenshot({ path: `${BASE_IMG_PATH}/debug-gamifier-re-reto-page.png` });
  console.log('🔍 debug-gamifier-re-reto-page.png');

  // Dump page content for analysis
  const pageText = await page.evaluate(() => {
    return document.body.innerText.substring(0, 3000);
  });
  console.log('[Gamifier] Page text (first 3000 chars):', pageText);

  // Get all links on the page for debugging
  const allLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a')).map(a => ({
      text: a.textContent.trim().substring(0, 80),
      href: a.href
    })).filter(l => l.text.length > 0).slice(0, 50);
  });
  console.log('[Gamifier] Links:', JSON.stringify(allLinks, null, 2));

  await page.close();
  return { pageText, allLinks };
}

// ============================================================
// BLOQUE B: WEBAPP
// ============================================================

async function captureWebappMobile(browser) {
  const page = await setupWebappPage(browser);

  // Navigate to adventure missions
  await page.goto(
    `${URLS.webapp}/#/dashboard/adventure/${ADVENTURE_ID}/missions`,
    { waitUntil: 'networkidle0', timeout: 30000 }
  );
  await wait(10000);

  // Take debug screenshot to see mission list
  await page.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-re-missions.png` });
  console.log('🔍 debug-webapp-re-missions.png');

  await page.close();
}

// ============================================================
// MAIN
// ============================================================

(async () => {
  const browser = await launchBrowser();

  try {
    // Phase 1: Explore Gamifier to understand layout
    const gamifierInfo = await captureGamifier(browser);

    // Phase 2: Explore Webapp
    await captureWebappMobile(browser);

  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});

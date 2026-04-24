/**
 * ============================================================
 * AdventuriQ Docs — Plantilla de captura de screenshots
 * ============================================================
 *
 * USO:
 *   1. Copia este archivo con un nombre descriptivo:
 *      cp capture-template.js capture-[seccion].js
 *
 *   2. Edita la sección CAPTURAS al final del archivo
 *      para definir qué pantallas capturar.
 *
 *   3. Ejecuta: node scripts/capture-[seccion].js
 *
 * NOTAS TÉCNICAS (aprendizajes consolidados):
 *
 *   GAMIFIER (AngularJS SPA):
 *   - Login: inputs #usermail y #userpassword, luego click en primer <button>
 *   - Idioma español: localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es')
 *     DEBE hacerse ANTES del login y seguido de reload
 *   - Navegación: URLs con hash, e.g. /#/evento/80
 *   - Scroll a secciones: buscar por h4.card-title conteniendo el texto
 *   - Crear nuevo Reto: click en link "Nuevo Reto" → modal "Continuar" → /prueba/nueva
 *
 *   WEBAPP (Flutter PWA, canvas-based):
 *   - Idioma español: OBLIGATORIO usar page.evaluateOnNewDocument() para
 *     override de navigator.language ANTES de que Flutter inicialice.
 *     localStorage NO funciona para el idioma en Flutter.
 *   - Login: click en (200, 165) para campo email, Tab para password, Enter para submit.
 *     Son coordenadas canvas, no selectores DOM.
 *   - Viewport móvil: 400x800 con deviceScaleFactor: 2 e isMobile: true
 *   - Bitácora tab: click en (290, 785) desde la página de missions
 *   - IMPORTANTE: antes de hacer clicks, verificar que no haya menús laterales
 *     u overlays abiertos que bloqueen la interacción
 *   - Coordenadas de click son en espacio LÓGICO (viewport), NO físico
 *
 *   GENERAL:
 *   - Usar --no-sandbox --disable-setuid-sandbox siempre
 *   - NO usar --use-gl=swiftshader — bloquea la renderización de imágenes
 *     remotas (avatares, logos, imágenes de objetos) en Flutter.
 *     Dejar sin flag GL o usar --use-gl=angle --use-angle=swiftshader-webgl.
 *   - Usar --lang=es-ES como argumento de launch para el navegador
 *   - Esperas: 5s tras navegación, 8-10s tras login, 3-5s tras clicks
 *   - Las imágenes se guardan directamente en static/img/ del repo
 *
 * CREDENCIALES DE TEST:
 *   Email: docs@adventuriq.com
 *   Password: 1234567890
 *   Entornos: gamifier-test.adventuriq.com / webapp-test.adventuriq.com
 */

const puppeteer = require('puppeteer');

// ============================================================
// CONFIGURACIÓN BASE
// ============================================================

const BASE_IMG_PATH = process.env.IMG_PATH ||
  '/sessions/upbeat-happy-volta/mnt/adventuriq-docs/static/img';

const CREDENTIALS = {
  email: 'docs@adventuriq.com',
  password: '1234567890'
};

const URLS = {
  gamifier: 'https://gamifier-test.adventuriq.com',
  webapp: 'https://webapp-test.adventuriq.com'
};

// ============================================================
// HELPERS REUTILIZABLES
// ============================================================

async function launchBrowser() {
  return puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // NO usar --use-gl=swiftshader: bloquea imágenes remotas en Flutter
      '--lang=es-ES'
    ]
  });
}

/**
 * Crea y configura una página del Gamifier (AngularJS).
 * Devuelve la página ya logueada y en español.
 */
async function setupGamifierPage(browser, opts = {}) {
  const { width = 1400, height = 900, scaleFactor = 2 } = opts;

  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: scaleFactor });

  // Navegar y fijar locale español ANTES del login
  await page.goto(`${URLS.gamifier}/#/login`, {
    waitUntil: 'networkidle0', timeout: 60000
  });
  await wait(2000);

  await page.evaluate(() => {
    localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es');
  });
  await page.reload({ waitUntil: 'networkidle0' });
  await wait(2000);

  // Login
  const emailInput = await page.$('#usermail');
  if (emailInput) { await emailInput.click(); await emailInput.type(CREDENTIALS.email); }
  const passwordInput = await page.$('#userpassword');
  if (passwordInput) { await passwordInput.click(); await passwordInput.type(CREDENTIALS.password); }

  await page.evaluate(() => {
    const btns = document.querySelectorAll('button');
    if (btns.length) btns[0].click();
  });
  await wait(8000);

  console.log(`[Gamifier] Logged in: ${page.url()}`);
  return page;
}

/**
 * Crea y configura una página de la Webapp (Flutter PWA).
 * Devuelve la página ya logueada, en español y en viewport móvil.
 */
async function setupWebappPage(browser, opts = {}) {
  const { width = 400, height = 800, scaleFactor = 2 } = opts;

  const page = await browser.newPage();
  await page.setViewport({
    width, height,
    isMobile: true,
    deviceScaleFactor: scaleFactor
  });

  // CRÍTICO: Override navigator.language ANTES de que Flutter inicialice
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'language', { get: () => 'es-ES' });
    Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
  });
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

  // Navegar
  await page.goto(URLS.webapp, { waitUntil: 'networkidle0', timeout: 60000 });
  await wait(5000);

  // Login (coordenadas canvas de Flutter)
  await page.mouse.click(200, 165);  // Campo email
  await wait(500);
  await page.keyboard.type(CREDENTIALS.email, { delay: 30 });
  await page.keyboard.press('Tab');   // Campo password
  await wait(500);
  await page.keyboard.type(CREDENTIALS.password, { delay: 30 });
  await page.keyboard.press('Enter'); // Submit
  await wait(10000);

  console.log(`[Webapp] Logged in: ${page.url()}`);
  return page;
}

/**
 * Navega a una Aventura en la Webapp y abre la Bitácora.
 */
async function navigateToWebappBitacora(page, adventureId = 80) {
  await page.goto(
    `${URLS.webapp}/#/dashboard/adventure/${adventureId}/missions`,
    { waitUntil: 'networkidle0', timeout: 30000 }
  );
  await wait(10000);

  // Click Bitácora (tab posición 3, coordenadas fijas)
  await page.mouse.click(290, 785);
  await wait(5000);
}

/**
 * Navega a una Aventura en el Gamifier.
 */
async function navigateToGamifierAdventure(page, adventureId = 80) {
  await page.goto(
    `${URLS.gamifier}/#/evento/${adventureId}`,
    { waitUntil: 'networkidle0', timeout: 30000 }
  );
  await wait(5000);
}

/**
 * Scroll hasta una sección del Gamifier identificada por texto en h4.card-title.
 */
async function scrollToGamifierSection(page, searchText, offsetY = -20) {
  return page.evaluate((text, offset) => {
    const h4s = Array.from(document.querySelectorAll('h4.card-title'));
    for (const h of h4s) {
      if (h.textContent.trim().includes(text)) {
        const card = h.closest('.card') || h.parentElement.parentElement;
        (card || h).scrollIntoView({ block: 'start', behavior: 'instant' });
        window.scrollBy(0, offset);
        return { found: true, text: h.textContent.trim() };
      }
    }
    return { found: false };
  }, searchText, offsetY);
}

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ============================================================
// CAPTURAS — EDITA ESTA SECCIÓN PARA CADA USO
// ============================================================

(async () => {
  const browser = await launchBrowser();

  try {
    // --- EJEMPLO: Captura Gamifier ---
    // const gPage = await setupGamifierPage(browser);
    // await navigateToGamifierAdventure(gPage, 80);
    // await scrollToGamifierSection(gPage, 'Misiones');
    // await wait(2000);
    // await gPage.screenshot({ path: `${BASE_IMG_PATH}/gamifier/seccion/nombre.png` });
    // console.log('✅ nombre.png');
    // await gPage.close();

    // --- EJEMPLO: Captura Webapp ---
    // const wPage = await setupWebappPage(browser);
    // await navigateToWebappBitacora(wPage, 80);
    // await wPage.screenshot({ path: `${BASE_IMG_PATH}/webapp/seccion/nombre.png` });
    // console.log('✅ nombre.png');
    // await wPage.close();

    console.log('⚠️  Este es el template. Descomenta y edita la sección CAPTURAS.');
  } finally {
    await browser.close();
  }

  console.log('Done!');
})().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});

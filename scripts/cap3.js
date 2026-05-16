const puppeteer = require('puppeteer');
const BASE_IMG_PATH = '/sessions/amazing-tender-galileo/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };
const URLS = { webapp: 'https://webapp-test.adventuriq.com' };
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES'] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 400, height: 800, isMobile: true, deviceScaleFactor: 2 });
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
    console.log('Webapp logged in:', page.url());

    // Screenshot after login (might show PWA prompt or adventures list)
    await page.screenshot({ path: `${BASE_IMG_PATH}/webapp-post-login.png` });

    // Try to open sidebar/menu - click hamburger area (top left)
    await page.mouse.click(30, 45);
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/webapp-menu-lateral.png` });
    console.log('✅ webapp-menu-lateral.png');

    // Try clicking profile/avatar area (top right or in menu)
    // Click on avatar/profile in the sidebar if visible
    await page.mouse.click(200, 120); // Approximate profile area in sidebar
    await wait(3000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/webapp-player-perfil.png` });
    console.log('✅ webapp-player-perfil.png');

  } finally { await browser.close(); }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

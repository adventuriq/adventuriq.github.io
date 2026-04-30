/**
 * Word cloud capture — alternative approaches:
 * 1. Try accessibility/keyboard navigation
 * 2. Try Flutter semantics
 * 3. Try direct URL navigation
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
    args: [
      '--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES',
      '--enable-features=AccessibilityExposeARIAAnnotations'
    ]
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

    // We're on NdP list. Check accessibility tree
    console.log('=== Checking accessibility tree ===');
    try {
      const snapshot = await page.accessibility.snapshot();
      console.log('Accessibility tree:', JSON.stringify(snapshot, null, 2).substring(0, 2000));
    } catch (e) {
      console.log('Accessibility error:', e.message);
    }

    // Check DOM for any semantic elements Flutter might have created
    console.log('\n=== Checking Flutter semantics DOM ===');
    const semantics = await page.evaluate(() => {
      const els = document.querySelectorAll('flt-semantics, [role], [aria-label], button, a');
      return Array.from(els).map(el => ({
        tag: el.tagName,
        role: el.getAttribute('role'),
        label: el.getAttribute('aria-label'),
        text: el.textContent?.substring(0, 100),
        id: el.id,
        class: el.className?.substring?.(0, 50) || '',
        rect: el.getBoundingClientRect ? (() => {
          const r = el.getBoundingClientRect();
          return { top: r.top, left: r.left, width: r.width, height: r.height };
        })() : null
      }));
    });
    console.log('Found elements:', JSON.stringify(semantics, null, 2).substring(0, 3000));

    // Try Tab + Enter keyboard navigation
    console.log('\n=== Trying keyboard navigation ===');
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      await wait(500);
    }
    await page.keyboard.press('Enter');
    await wait(5000);
    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc3-keyboard.png` });

    // Try direct URL patterns for word cloud
    console.log('\n=== Trying direct URL navigation ===');
    const urlPatterns = [
      '#/dashboard/adventure/80/bitacora/nube-palabras/6651',
      '#/dashboard/adventure/80/nube-palabras/6651',
      '#/dashboard/adventure/80/missions/nube-palabras/6651',
      '#/dashboard/adventure/80/bitacora/wordcloud/6651',
      '#/dashboard/adventure/80/reto/6651',
      '#/dashboard/adventure/80/reto/nube-palabras/6651',
    ];

    for (const hash of urlPatterns) {
      const url = `https://webapp-test.adventuriq.com/${hash}`;
      console.log(`Trying: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 }).catch(() => {});
      await wait(5000);

      // Check if we landed somewhere meaningful (not missions page)
      const pageContent = await page.evaluate(() => {
        const canvas = document.querySelector('canvas');
        return {
          url: window.location.href,
          hasCanvas: !!canvas,
          title: document.title
        };
      });
      console.log('  Result:', JSON.stringify(pageContent));

      await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc3-url-${hash.replace(/[#/]/g, '_')}.png` });
    }

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

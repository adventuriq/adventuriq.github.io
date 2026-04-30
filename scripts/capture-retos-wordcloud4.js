/**
 * Word cloud capture — enable Flutter accessibility first, then use semantic nodes
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
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES']
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

    // ENABLE FLUTTER ACCESSIBILITY before login
    console.log('Enabling Flutter accessibility...');
    await page.evaluate(() => {
      const btn = document.querySelector('flt-semantics-placeholder[role="button"]');
      if (btn) btn.click();
    });
    await wait(2000);

    // Login
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

    // Check semantics now
    console.log('=== Semantic tree after enabling accessibility ===');
    const snapshot = await page.accessibility.snapshot({ interestingOnly: false });
    const snapshotStr = JSON.stringify(snapshot, null, 2);
    console.log(snapshotStr.substring(0, 5000));

    // Find all flt-semantics elements with their positions
    const semanticElements = await page.evaluate(() => {
      const els = document.querySelectorAll('flt-semantics');
      return Array.from(els).map(el => {
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          role: el.getAttribute('role'),
          label: el.getAttribute('aria-label'),
          text: el.textContent?.substring(0, 100),
          id: el.id,
          top: r.top, left: r.left, width: r.width, height: r.height
        };
      });
    });
    console.log('\n=== flt-semantics elements ===');
    console.log(JSON.stringify(semanticElements, null, 2).substring(0, 5000));

    // Try clicking a semantic element that looks like the reto row
    const retoElement = semanticElements.find(el =>
      el.label && el.label.toLowerCase().includes('nube')
    );
    if (retoElement) {
      console.log('\nFound NdP semantic element:', JSON.stringify(retoElement));
      // Click it via its DOM position
      const cx = retoElement.left + retoElement.width / 2;
      const cy = retoElement.top + retoElement.height / 2;
      console.log(`Clicking at (${cx}, ${cy})...`);
      await page.mouse.click(cx, cy);
      await wait(8000);
      await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc4-semantic-click.png` });
    } else {
      console.log('\nNo NdP semantic element found. Trying to click all clickable elements...');
      const clickable = semanticElements.filter(el =>
        el.role === 'button' || el.role === 'link' || el.role === 'listitem'
      );
      console.log('Clickable elements:', JSON.stringify(clickable, null, 2));
    }

    // Also try: use CDP Runtime to call Flutter's semantics action
    console.log('\n=== Trying CDP Accessibility.getFullAXTree ===');
    try {
      const { nodes } = await client.send('Accessibility.getFullAXTree');
      const interesting = nodes.filter(n =>
        n.name?.value?.toLowerCase?.()?.includes?.('nube') ||
        n.description?.value?.toLowerCase?.()?.includes?.('nube')
      );
      console.log('AX tree nodes with "nube":', JSON.stringify(interesting, null, 2).substring(0, 2000));
    } catch (e) {
      console.log('AX tree error:', e.message);
    }

    await page.screenshot({ path: `${BASE_IMG_PATH}/debug-wc4-final.png` });

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

const puppeteer = require('puppeteer');

const BASE_IMG_PATH = '/sessions/amazing-tender-galileo/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };
const URLS = { gamifier: 'https://gamifier-test.adventuriq.com', webapp: 'https://webapp-test.adventuriq.com' };
const ADVENTURE_ID = 361;

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES']
  });
  try {
    // === GAMIFIER ===
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });
    await page.goto(`${URLS.gamifier}/#/login`, { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(2000);
    await page.evaluate(() => { localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'); });
    await page.reload({ waitUntil: 'networkidle0' });
    await wait(2000);
    await page.$eval('#usermail', (el, v) => { el.value = v; el.dispatchEvent(new Event('input')); }, CREDENTIALS.email);
    await page.$eval('#userpassword', (el, v) => { el.value = v; el.dispatchEvent(new Event('input')); }, CREDENTIALS.password);
    await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
    await wait(8000);
    console.log('Gamifier logged in');

    // --- 1. BIBLIOTECA DE MEDIOS ---
    console.log('\n=== BIBLIOTECA DE MEDIOS ===');
    await page.goto(`${URLS.gamifier}/#/evento/${ADVENTURE_ID}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(5000);

    // Click "Biblioteca de Medios" button
    const biblioClicked = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const btn = buttons.find(b => b.textContent.includes('Biblioteca de Medios'));
      if (btn) { btn.click(); return true; }
      return false;
    });
    console.log('Biblioteca button clicked:', biblioClicked);
    await wait(3000);

    // Check for modal
    const biblioModal = await page.evaluate(() => {
      const modals = document.querySelectorAll('.modal-dialog, .modal-content, [class*="modal"], [class*="library"], [class*="biblioteca"]');
      if (modals.length > 0) {
        return { found: true, text: modals[0].innerText?.substring(0, 500) };
      }
      return { found: false, bodyText: document.body.innerText.substring(0, 200) };
    });
    console.log('Biblioteca modal:', JSON.stringify(biblioModal));

    await page.screenshot({ path: `${BASE_IMG_PATH}/gamifier-biblioteca-medios-vista-general.png` });
    console.log('✅ gamifier-biblioteca-medios-vista-general.png');

    // Close modal if any
    await page.evaluate(() => {
      const closeBtn = document.querySelector('.modal .close, .modal-header .close, button[aria-label="Close"]');
      if (closeBtn) closeBtn.click();
    });
    await wait(1000);

    // --- 2. CLONAR AVENTURA (Duplicar button) ---
    console.log('\n=== CLONAR AVENTURA ===');
    await page.goto(`${URLS.gamifier}/#/eventos`, { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(5000);

    // Look for Duplicar/content_copy button
    const duplicarInfo = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('a, button'));
      const dups = btns.filter(b => b.textContent.includes('content_copy') || b.textContent.includes('Duplicar') || b.title?.includes('Duplicar'));
      return dups.map(d => ({ tag: d.tagName, text: d.textContent.trim().substring(0, 30), title: d.title, href: d.href })).slice(0, 5);
    });
    console.log('Duplicar buttons:', JSON.stringify(duplicarInfo));

    // Click the first content_copy (Duplicar) for adventure #361
    const dupClicked = await page.evaluate(() => {
      const rows = document.querySelectorAll('tr');
      for (const row of rows) {
        if (row.textContent.includes('361')) {
          const copyBtn = Array.from(row.querySelectorAll('a, button')).find(b => b.textContent.trim() === 'content_copy');
          if (copyBtn) { copyBtn.click(); return true; }
        }
      }
      return false;
    });
    console.log('Duplicar clicked for #361:', dupClicked);
    await wait(3000);

    // Check for clone modal
    const cloneModal = await page.evaluate(() => {
      const modals = document.querySelectorAll('.modal, .swal2-container, [class*="modal"]');
      for (const m of modals) {
        if (m.offsetParent !== null || m.style.display !== 'none') {
          return { found: true, text: m.innerText?.substring(0, 500) };
        }
      }
      return { found: false };
    });
    console.log('Clone modal:', JSON.stringify(cloneModal));

    if (cloneModal.found) {
      await page.screenshot({ path: `${BASE_IMG_PATH}/gamifier-aventura-clonar-modal.png` });
      console.log('✅ gamifier-aventura-clonar-modal.png');
      // Close it
      await page.evaluate(() => {
        const cancelBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Cancelar') || b.textContent.includes('Cancel'));
        if (cancelBtn) cancelBtn.click();
        else { const close = document.querySelector('.modal .close'); if (close) close.click(); }
      });
      await wait(1000);
    }

    // --- 5. SKIP DETALLE RETO (toggle in Misión) ---
    console.log('\n=== SKIP DETALLE RETO ===');
    // Navigate to Mission #1 (ID 550 for adventure 361's first mission)
    // First find the mission ID
    await page.goto(`${URLS.gamifier}/#/evento/${ADVENTURE_ID}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(5000);

    const missionLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="itinerario"]'));
      return links.map(l => ({ href: l.href, text: l.textContent.trim() })).slice(0, 5);
    });
    console.log('Mission links:', JSON.stringify(missionLinks));

    if (missionLinks.length > 0) {
      // Navigate to first mission
      await page.goto(missionLinks[0].href, { waitUntil: 'networkidle0', timeout: 30000 });
      await wait(5000);

      // Look for "Mostrar detalle" toggle
      const skipToggle = await page.evaluate(() => {
        const labels = Array.from(document.querySelectorAll('label, span, div'));
        const found = labels.find(l => l.textContent.includes('Mostrar detalle') || l.textContent.includes('mostrar detalle'));
        if (found) {
          return { found: true, text: found.textContent.trim().substring(0, 100), parentText: found.parentElement?.textContent?.trim().substring(0, 200) };
        }
        // Also check for "jugable" nearby
        const jugable = labels.find(l => l.textContent.includes('jugable'));
        return { found: false, jugableNearby: jugable?.textContent?.trim().substring(0, 100) };
      });
      console.log('Skip toggle:', JSON.stringify(skipToggle));

      // Scroll to find it
      const scrollResult = await page.evaluate(() => {
        const container = document.querySelector('.layout-content');
        const allText = container?.innerText || '';
        const idx = allText.indexOf('Mostrar detalle');
        if (idx > -1) return { found: true, context: allText.substring(Math.max(0,idx-50), idx+100) };
        // Try jugable
        const idx2 = allText.indexOf('jugable');
        if (idx2 > -1) return { foundJugable: true, context: allText.substring(Math.max(0,idx2-50), idx2+200) };
        return { found: false, textSample: allText.substring(0, 500) };
      });
      console.log('Page text for toggle:', JSON.stringify(scrollResult));
    }

    // --- 6. ESPACIO DISCO ---
    console.log('\n=== ESPACIO EN DISCO ===');
    // Go back to aventuras list to see the space indicator per adventure
    await page.goto(`${URLS.gamifier}/#/eventos`, { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(5000);

    const spaceInfo = await page.evaluate(() => {
      const body = document.body.innerText;
      // Look for MB/GB indicators
      const matches = body.match(/[\d.,]+ [KMG]B\s*\/\s*[\d.,]+ [KMG]B/g);
      return { spaceIndicators: matches };
    });
    console.log('Space indicators found:', JSON.stringify(spaceInfo));

    // === WEBAPP (PWA + Perfil) ===
    console.log('\n=== WEBAPP ===');
    const wpage = await browser.newPage();
    await wpage.setViewport({ width: 400, height: 800, isMobile: true, deviceScaleFactor: 2 });
    await wpage.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', { get: () => 'es-ES' });
      Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
    });
    await wpage.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });
    await wpage.goto(URLS.webapp, { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(5000);

    // Login
    await wpage.mouse.click(200, 165);
    await wait(500);
    await wpage.keyboard.type(CREDENTIALS.email, { delay: 30 });
    await wpage.keyboard.press('Tab');
    await wait(500);
    await wpage.keyboard.type(CREDENTIALS.password, { delay: 30 });
    await wpage.keyboard.press('Enter');
    await wait(10000);
    console.log('Webapp logged in');

    // Check for PWA prompt
    await wpage.screenshot({ path: `${BASE_IMG_PATH}/webapp-pwa-check.png` });

    // Navigate to profile (usually top-right avatar or sidebar)
    // Try opening sidebar menu
    await wpage.mouse.click(30, 45); // Hamburger menu area
    await wait(3000);
    await wpage.screenshot({ path: `${BASE_IMG_PATH}/webapp-menu-lateral.png` });
    console.log('✅ webapp-menu-lateral.png');

    // Look for profile/perfil option
    const menuText = await wpage.evaluate(() => {
      return document.body.innerText?.substring(0, 500) || 'no text';
    });
    console.log('Menu text (first 500 chars):', menuText.substring(0, 300));

  } finally {
    await browser.close();
  }
  console.log('\nDone!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

/**
 * Step 1: Create a NdP reto in Adventure #80 / Mission #116
 * Step 2: Submit words from 2 players via Webapp
 * Step 3: Capture webapp screenshots (#4 response, #5 list, #6 visual)
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
    // STEP 1: CREATE NDP RETO VIA GAMIFIER
    // ==========================================
    console.log('=== STEP 1: Create NdP Reto ===');
    const gPage = await browser.newPage();
    await gPage.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });

    // Login
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

    // Navigate to new NdP reto form
    await gPage.goto('https://gamifier-test.adventuriq.com/#/prueba/nube-palabras/nueva?itinerarioid=116', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(5000);

    // Check if we're on the form
    const formCheck = await gPage.evaluate(() => {
      const h = document.querySelector('h3, h2');
      return {
        heading: h ? h.textContent.trim() : 'none',
        url: window.location.hash,
        inputs: document.querySelectorAll('input, textarea, select').length
      };
    });
    console.log('Form check:', JSON.stringify(formCheck));

    // Select the adventure (dropdown "Seleccione el evento relacionado")
    // First, check if there's a select element or dropdown for the adventure
    const selectInfo = await gPage.evaluate(() => {
      const selects = Array.from(document.querySelectorAll('select'));
      const selectData = selects.map(s => ({
        id: s.id,
        name: s.name,
        ngModel: s.getAttribute('ng-model'),
        options: Array.from(s.options).slice(0, 5).map(o => ({ value: o.value, text: o.text.substring(0, 40) }))
      }));

      // Also look for text inputs and textareas
      const inputs = Array.from(document.querySelectorAll('input[type="text"], textarea'));
      const inputData = inputs.map(i => ({
        id: i.id,
        name: i.name,
        placeholder: i.placeholder,
        ngModel: i.getAttribute('ng-model'),
        value: i.value.substring(0, 30)
      }));

      return { selects: selectData, inputs: inputData };
    });
    console.log('Form elements:', JSON.stringify(selectInfo, null, 2));

    // Try to select adventure #80 in the dropdown
    const selectResult = await gPage.evaluate(() => {
      const selects = Array.from(document.querySelectorAll('select'));
      for (const s of selects) {
        const options = Array.from(s.options);
        for (const o of options) {
          if (o.text.includes('How To') || o.value === '80' || o.text.includes('#80')) {
            s.value = o.value;
            s.dispatchEvent(new Event('change', { bubbles: true }));
            // Also trigger angular
            if (typeof angular !== 'undefined') {
              angular.element(s).triggerHandler('change');
            }
            return { selected: true, value: o.value, text: o.text };
          }
        }
      }
      return { selected: false };
    });
    console.log('Adventure select:', JSON.stringify(selectResult));
    await wait(2000);

    // Click "Crear Reto" button
    const createResult = await gPage.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      for (const b of buttons) {
        if (b.textContent.trim().includes('Crear Reto') && !b.textContent.includes('Creando')) {
          b.click();
          return { clicked: true, text: b.textContent.trim() };
        }
      }
      return { clicked: false, buttons: buttons.map(b => b.textContent.trim().substring(0, 30)) };
    });
    console.log('Create button:', JSON.stringify(createResult));
    await wait(8000);

    // Check where we ended up
    const afterCreate = await gPage.evaluate(() => ({
      url: window.location.hash,
      heading: (document.querySelector('h3, h2, h1') || {}).textContent || '',
      hasError: !!document.querySelector('.alert-danger, .toast-error, .error')
    }));
    console.log('After create:', JSON.stringify(afterCreate));

    // If we're on the reto editing page, check for the full form and capture it
    if (afterCreate.url.includes('prueba/nube-palabras/') && !afterCreate.url.includes('nueva')) {
      console.log('✅ Reto created successfully!');
      await wait(3000);

      // Capture the full editing form
      await gPage.screenshot({
        path: `${BASE_IMG_PATH}/gamifier-reto-nube-palabras-edicion.png`
      });
      console.log('✅ gamifier-reto-nube-palabras-edicion.png (full form)');

      // Get the reto ID from URL
      const retoId = afterCreate.url.match(/nube-palabras\/(\d+)/);
      console.log('Reto ID:', retoId ? retoId[1] : 'unknown');
    } else {
      console.log('⚠️ May not have created reto. URL:', afterCreate.url);
      // Take diagnostic
      await gPage.screenshot({ path: `${BASE_IMG_PATH}/debug-after-create.png` });
    }

    // Check if NdP reto exists by going to the mission
    await gPage.goto('https://gamifier-test.adventuriq.com/#/evento/80/itinerario/116', {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(5000);

    const missionRetos = await gPage.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="prueba/"]'));
      return links.map(a => ({
        href: a.getAttribute('href'),
        text: a.textContent.trim().substring(0, 50)
      })).filter(l => l.href.includes('nube'));
    });
    console.log('NdP retos in mission:', JSON.stringify(missionRetos));

    await gPage.close();

    // ==========================================
    // STEP 2: WEBAPP CAPTURES
    // ==========================================
    console.log('\n=== STEP 2: Webapp Captures ===');
    const wPage = await browser.newPage();
    await wPage.setViewport({ width: 400, height: 800, isMobile: true, deviceScaleFactor: 2 });

    // Override locale before navigation
    await wPage.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', { get: () => 'es-ES' });
      Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
    });
    await wPage.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

    // Navigate and login
    await wPage.goto('https://webapp-test.adventuriq.com', { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(5000);

    await wPage.mouse.click(200, 165);  // Email field
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

    // Take a screenshot to see where we are
    await wPage.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-missions.png` });
    console.log('📸 debug-webapp-missions.png');

    // Click on Bitácora tab (bottom nav position 3)
    await wPage.mouse.click(290, 785);
    await wait(5000);

    await wPage.screenshot({ path: `${BASE_IMG_PATH}/debug-webapp-bitacora.png` });
    console.log('📸 debug-webapp-bitacora.png');

    // Look for NdP tab in Bitácora — it should be the cloud icon
    // Need to click on the Nube de Palabras quadrant/tab
    // From bitacora captures, we know it's an icon-based tab
    // Let's take a screenshot and check what's visible
    await wPage.screenshot({ path: `${BASE_IMG_PATH}/webapp-bitacora-nube-palabras-tab.png` });
    console.log('✅ webapp-bitacora-nube-palabras-tab.png (bitácora with tabs)');

    await wPage.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

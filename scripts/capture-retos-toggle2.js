/**
 * Capture #3: Toggle "Activar Nube de Palabras en la bitácora"
 * The heading is h5, not h4.card-title. Need to scroll the main-panel container.
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
    await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });

    // Login
    await page.goto('https://gamifier-test.adventuriq.com/#/login', { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(2000);
    await page.evaluate(() => localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'));
    await page.reload({ waitUntil: 'networkidle0' });
    await wait(2000);

    const em = await page.$('#usermail');
    if (em) { await em.click(); await em.type(CREDENTIALS.email); }
    const pw = await page.$('#userpassword');
    if (pw) { await pw.click(); await pw.type(CREDENTIALS.password); }
    await page.evaluate(() => document.querySelectorAll('button')[0].click());
    await wait(8000);

    // Navigate to Adventure #80
    await page.goto('https://gamifier-test.adventuriq.com/#/evento/80', { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(5000);

    // Scroll the h5 "Opciones de la Aventura" into view
    const scrollResult = await page.evaluate(() => {
      const h5s = Array.from(document.querySelectorAll('h5'));
      for (const h of h5s) {
        if (h.textContent.trim().includes('Opciones de la Aventura')) {
          h.scrollIntoView({ block: 'start', behavior: 'instant' });
          const r = h.getBoundingClientRect();
          return { found: true, text: h.textContent.trim(), top: r.top, left: r.left };
        }
      }
      return { found: false };
    });
    console.log('Scroll result:', JSON.stringify(scrollResult));
    await wait(2000);

    // Now get the bounds of the toggle area - from the heading to below all toggle rows
    const bounds = await page.evaluate(() => {
      // Find heading
      const h5s = Array.from(document.querySelectorAll('h5'));
      let heading = null;
      for (const h of h5s) {
        if (h.textContent.trim().includes('Opciones de la Aventura')) {
          heading = h;
          break;
        }
      }
      if (!heading) return null;

      const hRect = heading.getBoundingClientRect();

      // Find all toggle labels near this heading
      const labels = Array.from(document.querySelectorAll('span.help-target'));
      const toggleLabels = labels.filter(l => {
        const r = l.getBoundingClientRect();
        // Within 300px below the heading
        return r.top >= hRect.top && r.top <= hRect.top + 300;
      });

      let maxBottom = hRect.bottom;
      for (const l of toggleLabels) {
        // Get the toggle row container
        const row = l.closest('.row') || l.closest('div');
        const r = (row || l).getBoundingClientRect();
        if (r.bottom > maxBottom) maxBottom = r.bottom;
      }

      return {
        top: hRect.top,
        left: 280,  // Start from content area, skip sidebar
        width: 1100,
        height: maxBottom - hRect.top + 20,
        toggleCount: toggleLabels.length,
        toggleTexts: toggleLabels.map(l => l.textContent.trim())
      };
    });
    console.log('Toggle area bounds:', JSON.stringify(bounds));

    if (bounds && bounds.top >= 0) {
      await page.screenshot({
        path: `${BASE_IMG_PATH}/gamifier-aventura-toggle-nube-palabras.png`,
        clip: {
          x: bounds.left,
          y: Math.max(0, bounds.top - 10),
          width: bounds.width,
          height: bounds.height + 20
        }
      });
      console.log('✅ gamifier-aventura-toggle-nube-palabras.png (clipped)');
    } else {
      // Full viewport fallback
      await page.screenshot({ path: `${BASE_IMG_PATH}/gamifier-aventura-toggle-nube-palabras.png` });
      console.log('✅ gamifier-aventura-toggle-nube-palabras.png (full viewport fallback)');
    }

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

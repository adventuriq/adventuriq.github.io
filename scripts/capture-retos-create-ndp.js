/**
 * Create a Nube de Palabras reto in Adventure #80, Mission #116
 * and capture #1 (selector) and #2 (form).
 *
 * Fix for card click: try multiple approaches to click the NdP card
 * in the type selector wizard.
 */
const puppeteer = require('puppeteer');

const BASE_IMG_PATH = '/sessions/upbeat-happy-volta/mnt/adventuriq-docs/static/img';
const CREDENTIALS = { email: 'docs@adventuriq.com', password: '1234567890' };
const URLS = { gamifier: 'https://gamifier-test.adventuriq.com' };

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
    await page.goto(`${URLS.gamifier}/#/login`, { waitUntil: 'networkidle0', timeout: 60000 });
    await wait(2000);
    await page.evaluate(() => localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'));
    await page.reload({ waitUntil: 'networkidle0' });
    await wait(2000);

    const emailInput = await page.$('#usermail');
    if (emailInput) { await emailInput.click(); await emailInput.type(CREDENTIALS.email); }
    const passwordInput = await page.$('#userpassword');
    if (passwordInput) { await passwordInput.click(); await passwordInput.type(CREDENTIALS.password); }
    await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
    await wait(8000);
    console.log('[Gamifier] Logged in:', page.url());

    // Navigate to Mission #116
    await page.goto(`${URLS.gamifier}/#/evento/80/itinerario/116`, {
      waitUntil: 'networkidle0', timeout: 30000
    });
    await wait(5000);
    console.log('[Gamifier] At mission:', page.url());

    // Click "Nuevo Reto" button
    const nuevoRetoClicked = await page.evaluate(() => {
      // Try button first
      const buttons = Array.from(document.querySelectorAll('button'));
      for (const btn of buttons) {
        if (btn.textContent.trim().includes('Nuevo Reto')) {
          btn.click();
          return { clicked: 'button', text: btn.textContent.trim() };
        }
      }
      // Try links
      const links = Array.from(document.querySelectorAll('a'));
      for (const a of links) {
        if (a.textContent.trim().includes('Nuevo Reto')) {
          a.click();
          return { clicked: 'link', text: a.textContent.trim() };
        }
      }
      return { clicked: false };
    });
    console.log('Nuevo Reto click:', JSON.stringify(nuevoRetoClicked));
    await wait(3000);

    // Check what's visible now - look for the modal/wizard
    const modalState = await page.evaluate(() => {
      const modal = document.querySelector('.modal-dialog') || document.querySelector('.modal');
      if (!modal) return { hasModal: false };

      // Find all type cards
      const cards = Array.from(document.querySelectorAll('.col-tipo'));
      const cardInfo = cards.map(c => {
        const title = c.querySelector('.titulo-tipo, h5, h4, strong, span');
        const link = c.querySelector('a');
        const ngClick = c.getAttribute('ng-click') || (link && link.getAttribute('ng-click')) || '';
        return {
          text: (title ? title.textContent.trim() : c.textContent.trim().substring(0, 40)),
          hasLink: !!link,
          linkHref: link ? link.getAttribute('href') : null,
          ngClick: ngClick,
          tagName: c.tagName
        };
      });

      // Also look for any clickable elements with "nube" in text
      const allClickables = Array.from(document.querySelectorAll('[ng-click]'));
      const nubeClickables = allClickables.filter(el =>
        el.textContent.toLowerCase().includes('nube') ||
        el.getAttribute('ng-click').toLowerCase().includes('nube')
      ).map(el => ({
        tag: el.tagName,
        ngClick: el.getAttribute('ng-click'),
        text: el.textContent.trim().substring(0, 50),
        classes: el.className
      }));

      return {
        hasModal: true,
        modalTitle: (modal.querySelector('.modal-title, h3, h4') || {}).textContent || '',
        cardCount: cards.length,
        cards: cardInfo,
        nubeClickables: nubeClickables
      };
    });
    console.log('Modal state:', JSON.stringify(modalState, null, 2));

    // ----- Capture #1: selector with NdP highlighted -----
    // First, let's try to highlight the NdP card visually
    await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.col-tipo'));
      for (const c of cards) {
        if (c.textContent.toLowerCase().includes('nube')) {
          c.style.outline = '3px solid #fc4a27';
          c.style.outlineOffset = '2px';
          c.style.borderRadius = '8px';
        }
      }
    });
    await wait(500);

    // Capture the modal
    const modalBounds = await page.evaluate(() => {
      const dialog = document.querySelector('.modal-dialog') || document.querySelector('.modal-content');
      if (!dialog) return null;
      const r = dialog.getBoundingClientRect();
      return { top: r.top, left: r.left, width: r.width, height: r.height };
    });

    if (modalBounds) {
      const padding = 10;
      await page.screenshot({
        path: `${BASE_IMG_PATH}/gamifier-reto-seleccion-tipo-nube-palabras.png`,
        clip: {
          x: Math.max(0, modalBounds.left - padding),
          y: Math.max(0, modalBounds.top - padding),
          width: modalBounds.width + padding * 2,
          height: modalBounds.height + padding * 2
        }
      });
      console.log('✅ gamifier-reto-seleccion-tipo-nube-palabras.png');
    } else {
      await page.screenshot({ path: `${BASE_IMG_PATH}/gamifier-reto-seleccion-tipo-nube-palabras.png` });
      console.log('✅ gamifier-reto-seleccion-tipo-nube-palabras.png (full viewport)');
    }

    // Remove highlight
    await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.col-tipo'));
      for (const c of cards) {
        c.style.outline = '';
        c.style.outlineOffset = '';
      }
    });

    // ----- Now click the NdP card -----
    // Try approach 1: Find and click the <a> element inside the card
    let clickSuccess = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.col-tipo'));
      for (const c of cards) {
        if (c.textContent.toLowerCase().includes('nube')) {
          // Try clicking the link inside
          const link = c.querySelector('a');
          if (link) {
            link.click();
            return { method: 'link.click', href: link.getAttribute('href') };
          }
          // Try clicking any ng-click element
          const ngEl = c.querySelector('[ng-click]');
          if (ngEl) {
            ngEl.click();
            return { method: 'ng-click element', ngClick: ngEl.getAttribute('ng-click') };
          }
          // Try the card itself
          c.click();
          return { method: 'card.click' };
        }
      }
      return { method: 'not found' };
    });
    console.log('Click attempt 1:', JSON.stringify(clickSuccess));
    await wait(3000);

    // Check if wizard advanced
    let postClickState = await page.evaluate(() => {
      const modal = document.querySelector('.modal-dialog') || document.querySelector('.modal');
      if (!modal) return { hasModal: false, url: window.location.hash };
      const title = (modal.querySelector('.modal-title, h3, h4') || {}).textContent || '';
      const buttons = Array.from(modal.querySelectorAll('button')).map(b => b.textContent.trim());
      return { hasModal: true, title, buttons, url: window.location.hash };
    });
    console.log('Post-click state:', JSON.stringify(postClickState));

    // If modal still shows step 1, try approach 2: use Angular scope
    if (postClickState.hasModal && !postClickState.title.toLowerCase().includes('paso 2') &&
        !postClickState.url.includes('prueba/nueva')) {
      console.log('Wizard did not advance. Trying Angular scope approach...');

      const angularResult = await page.evaluate(() => {
        // Try to find the card and trigger Angular's ng-click directly
        const cards = Array.from(document.querySelectorAll('.col-tipo'));
        for (const c of cards) {
          if (c.textContent.toLowerCase().includes('nube')) {
            // Try angular.element approach
            if (typeof angular !== 'undefined') {
              const el = angular.element(c);
              const scope = el.scope();
              if (scope) {
                // Look for the type data
                const isolateScope = el.isolateScope && el.isolateScope();
                // Try to find what ng-click does
                const ngClickAttr = c.getAttribute('ng-click') || '';
                const linkEl = c.querySelector('a, [ng-click]');
                const linkNgClick = linkEl ? linkEl.getAttribute('ng-click') : '';

                // Try triggering click event via Angular
                angular.element(linkEl || c).triggerHandler('click');

                return {
                  method: 'angular.triggerHandler',
                  ngClick: ngClickAttr || linkNgClick,
                  scopeKeys: Object.keys(scope).filter(k => !k.startsWith('$')).slice(0, 10)
                };
              }
            }
            return { method: 'no angular' };
          }
        }
        return { method: 'card not found' };
      });
      console.log('Angular approach:', JSON.stringify(angularResult));
      await wait(3000);

      // Check again
      postClickState = await page.evaluate(() => {
        const modal = document.querySelector('.modal-dialog') || document.querySelector('.modal');
        if (!modal) return { hasModal: false, url: window.location.hash };
        const title = (modal.querySelector('.modal-title, h3, h4') || {}).textContent || '';
        const buttons = Array.from(modal.querySelectorAll('button')).map(b => b.textContent.trim());
        return { hasModal: true, title, buttons, url: window.location.hash };
      });
      console.log('Post-angular state:', JSON.stringify(postClickState));
    }

    // Approach 3: If still stuck, try to navigate directly to the reto creation URL
    if (postClickState.hasModal && !postClickState.url.includes('prueba/nueva')) {
      console.log('Trying direct URL navigation to create NdP reto...');

      // First, dismiss the modal
      await page.evaluate(() => {
        const cancelBtn = Array.from(document.querySelectorAll('button')).find(b =>
          b.textContent.trim().includes('Cancelar'));
        if (cancelBtn) cancelBtn.click();
      });
      await wait(1000);

      // Navigate directly - the URL pattern for new reto is: #/prueba/nueva/{tipo}?itinerarioid={mission}
      // "nube-de-palabras" slug based on existing reto URL patterns
      // Let's first check what slugs exist in the current mission
      const existingRetos = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a[href*="prueba/"]'));
        return links.map(a => a.getAttribute('href')).filter(h => h).slice(0, 5);
      });
      console.log('Existing reto URLs:', JSON.stringify(existingRetos));

      // Try direct navigation with common slug patterns
      const slugsToTry = ['nube-de-palabras', 'nube-palabras', 'nubePalabras'];
      for (const slug of slugsToTry) {
        const url = `${URLS.gamifier}/#/prueba/${slug}/nueva?itinerarioid=116`;
        console.log(`Trying URL: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
        await wait(3000);

        const currentUrl = page.url();
        const hasForm = await page.evaluate(() => {
          // Check if we're on a reto creation form
          return {
            title: document.title,
            h1: (document.querySelector('h1, h2, h3') || {}).textContent || '',
            hasFormElements: document.querySelectorAll('input, textarea').length,
            url: window.location.hash
          };
        });
        console.log(`URL ${slug}:`, JSON.stringify(hasForm));

        if (hasForm.hasFormElements > 2) {
          console.log(`✅ Found form with slug: ${slug}`);
          break;
        }
      }
    }

    // Check URL — are we now on the reto form?
    const finalUrl = page.url();
    console.log('Final URL:', finalUrl);

    if (finalUrl.includes('prueba/')) {
      // We're on a reto form - capture it
      await wait(3000);
      await page.screenshot({
        path: `${BASE_IMG_PATH}/gamifier-reto-nube-palabras-edicion.png`
      });
      console.log('✅ gamifier-reto-nube-palabras-edicion.png');
    } else {
      console.log('⚠️ Could not navigate to reto creation form');
      // Take a diagnostic screenshot
      await page.screenshot({ path: `${BASE_IMG_PATH}/debug-reto-creation-final.png` });
      console.log('📸 debug-reto-creation-final.png (diagnostic)');
    }

    await page.close();
  } finally {
    await browser.close();
  }
  console.log('Done!');
})().catch(err => { console.error('Error:', err.message); process.exit(1); });

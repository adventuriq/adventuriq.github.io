const puppeteer = require('puppeteer');
const BASE = '/sessions/amazing-tender-galileo/mnt/adventuriq-docs/static/img';
const GAMIFIER = 'https://gamifier-test.adventuriq.com';
const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--lang=es-ES']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });

  await page.goto(`${GAMIFIER}/#/login`, { waitUntil: 'networkidle0', timeout: 60000 });
  await wait(2000);
  await page.evaluate(() => { localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'es'); });
  await page.reload({ waitUntil: 'networkidle0' });
  await wait(2000);
  const em = await page.$('#usermail');
  if (em) { await em.click(); await em.type('docs@adventuriq.com'); }
  const pw = await page.$('#userpassword');
  if (pw) { await pw.click(); await pw.type('1234567890'); }
  await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
  await wait(8000);

  // Navigate to Object #479 form
  await page.goto(`${GAMIFIER}/#/itinerario/116/recompensa/479`, { waitUntil: 'networkidle0', timeout: 30000 });
  await wait(6000);

  // Scroll to Condiciones de Obtención section
  const scrollResult = await page.evaluate(() => {
    const h5s = Array.from(document.querySelectorAll('h5'));
    for (const h of h5s) {
      if (h.textContent.includes('Condiciones de Obtención')) {
        h.scrollIntoView({ block: 'start', behavior: 'instant' });
        
        // Get the section content
        let section = h.parentElement;
        // Walk up to card or containing div
        while (section && !section.classList.contains('card') && section.tagName !== 'FORM') {
          section = section.parentElement;
        }
        
        // Get ALL elements below the h5 within the same container
        const container = h.closest('.card') || h.parentElement;
        const allText = [];
        let started = false;
        const walker = document.createTreeWalker(container.parentElement || container, NodeFilter.SHOW_ELEMENT);
        while (walker.nextNode()) {
          const node = walker.currentNode;
          if (node === h) started = true;
          if (started) {
            const tag = node.tagName;
            const text = node.textContent?.trim();
            if (text && text.length > 2 && text.length < 150 && 
                (tag === 'LABEL' || tag === 'OPTION' || tag === 'SPAN' || tag === 'P' || tag === 'H5' || tag === 'BUTTON' || tag === 'A' || tag === 'SELECT')) {
              allText.push({ tag, text: text.substring(0, 100) });
            }
          }
        }
        
        // Get select options specifically for the condition type selector
        const selects = container.parentElement ? 
          Array.from(container.parentElement.querySelectorAll('select')).map(s => ({
            options: Array.from(s.options).map(o => ({ value: o.value, text: o.textContent.trim() }))
          })) : [];
        
        // Look for ui-select elements (AngularJS)
        const uiSelects = container.parentElement ?
          Array.from(container.parentElement.querySelectorAll('.ui-select-container,.ui-select-match,.ui-select-choices-row')).map(el => ({
            cls: el.className.substring(0, 60),
            text: el.textContent.trim().substring(0, 100)
          })) : [];
        
        return { found: true, allText: [...new Set(allText.map(JSON.stringify))].map(JSON.parse).slice(0, 30), selects, uiSelects };
      }
    }
    return { found: false };
  });
  
  console.log('Condiciones de Obtención:');
  console.log(JSON.stringify(scrollResult, null, 2));

  await wait(1000);
  await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-digitales-editor-andor.png` });
  console.log('✅ editor AND/OR screenshot');

  // Now try to get the condition dropdown options by finding the ui-select
  const dropdownInfo = await page.evaluate(() => {
    // Find the ui-select for conditions
    const uiSelects = Array.from(document.querySelectorAll('.ui-select-container'));
    const results = [];
    for (const sel of uiSelects) {
      const choices = Array.from(sel.querySelectorAll('.ui-select-choices-row,.ui-select-choices-row-inner'));
      const match = sel.querySelector('.ui-select-match');
      const placeholder = sel.querySelector('.ui-select-placeholder');
      results.push({
        matchText: match ? match.textContent.trim().substring(0, 60) : null,
        placeholder: placeholder ? placeholder.textContent.trim() : null,
        choicesCount: choices.length,
        choices: choices.map(c => c.textContent.trim().substring(0, 80))
      });
    }
    return results;
  });
  console.log('\nUI-Select dropdowns:', JSON.stringify(dropdownInfo, null, 2));

  // Try clicking on the ui-select to open the dropdown
  const clickResult = await page.evaluate(() => {
    const uiSelects = Array.from(document.querySelectorAll('.ui-select-container'));
    for (const sel of uiSelects) {
      const placeholder = sel.querySelector('.ui-select-placeholder');
      if (placeholder && placeholder.textContent.includes('condición')) {
        // Click on the focusser or toggle
        const focusser = sel.querySelector('.ui-select-focusser,.ui-select-toggle');
        if (focusser) {
          focusser.click();
          return { clicked: true, on: placeholder.textContent.trim() };
        }
      }
    }
    return { clicked: false };
  });
  console.log('\nClicked dropdown:', JSON.stringify(clickResult));
  await wait(1500);

  // Now get the dropdown choices
  const choices = await page.evaluate(() => {
    const choiceRows = Array.from(document.querySelectorAll('.ui-select-choices-row'));
    return choiceRows.map(r => r.textContent.trim().substring(0, 100));
  });
  console.log('Dropdown choices:', JSON.stringify(choices));

  if (choices.length > 0) {
    await page.screenshot({ path: `${BASE}/gamifier-mision-objetos-digitales-condiciones-lista.png` });
    console.log('✅ conditions list screenshot');
  }

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e.message); process.exit(1); });

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
  const emailInput = await page.$('#usermail');
  if (emailInput) { await emailInput.click(); await emailInput.type('docs@adventuriq.com'); }
  const passwordInput = await page.$('#userpassword');
  if (passwordInput) { await passwordInput.click(); await passwordInput.type('1234567890'); }
  await page.evaluate(() => { document.querySelectorAll('button')[0].click(); });
  await wait(8000);

  // Navigate to Adventure #80
  await page.goto(`${GAMIFIER}/#/evento/80`, { waitUntil: 'networkidle0', timeout: 30000 });
  await wait(5000);

  // Find mission links
  const missionLinks = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    return links.filter(a => a.href.includes('mision') || a.href.includes('itinerario'))
      .map(a => ({ text: a.textContent.trim().substring(0, 60), href: a.href }));
  });
  console.log('Mission links:', JSON.stringify(missionLinks, null, 2));

  // Click on first mission link
  if (missionLinks.length > 0) {
    await page.goto(missionLinks[0].href, { waitUntil: 'networkidle0', timeout: 30000 });
    await wait(5000);
    console.log('Navigated to:', page.url());

    // Now find section headers
    const headers = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6,.card-title,label'))
        .filter(el => el.textContent.trim().length > 0)
        .map(el => ({ tag: el.tagName, cls: el.className.substring(0,40), text: el.textContent.trim().substring(0, 80) }))
        .slice(0, 40);
    });
    headers.forEach(h => console.log(`  ${h.tag}[${h.cls}]: ${h.text}`));

    // Check page height
    const pH = await page.evaluate(() => document.body.scrollHeight);
    console.log('Page height:', pH);

    // Screenshot the top
    await page.screenshot({ path: `${BASE}/gamifier-mision-explore-top.png` });
    console.log('✅ top screenshot');
  }

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e.message); process.exit(1); });

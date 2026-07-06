const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1000, height: 1350 } });
  await page.goto('http://localhost:5178/');
  await page.waitForTimeout(2000);
  const els = await page.$$('section');
  let target = null;
  for (const s of els) {
    const text = await s.innerText();
    if (text.includes('Nossos espaços')) { target = s; break; }
  }
  await target.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await target.screenshot({ path: 'gallery-check.png' });
  await browser.close();
})();

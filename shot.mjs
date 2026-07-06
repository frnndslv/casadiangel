import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  page.on('console', msg => { if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text()); });
  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
  await page.getByRole('heading', { name: 'Avaliações' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'reviews-desktop.png' });

  await page.setViewportSize({ width: 420, height: 800 });
  await page.getByRole('heading', { name: 'Avaliações' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'reviews-mobile.png' });

  await browser.close();
})();

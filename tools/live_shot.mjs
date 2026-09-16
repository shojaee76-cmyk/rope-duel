import { chromium } from 'playwright-core';
const exe = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
await page.goto('https://shojaee76-cmyk.github.io/rope-duel/', { waitUntil: 'load', timeout: 40000 });
await page.waitForTimeout(6000);
let got = null;
for (let i = 0; i < 120; i++) {
  const s = await page.evaluate(() => {
    const d = window.__duelDebug;
    if (!d || !d.catA) return null;
    return { a: d.catA.state.name, b: d.catB.state.name,
      at: +d.catA.state.t.toFixed(2), bt: +d.catB.state.t.toFixed(2),
      lane: d.lane ? d.lane() : null,
      price: document.getElementById('price').textContent };
  });
  if (s && ((s.a === 'SIT_GUARD' && s.at > 0.9) || (s.b === 'SIT_GUARD' && s.bt > 0.9))) {
    got = s;
    await page.screenshot({ path: 'tools/shots/v19_deployed_sit.png' });
    await page.screenshot({ path: 'tools/shots/v19_deployed_cats.png', clip: { x: 340, y: 300, width: 760, height: 480 } });
    break;
  }
  await page.waitForTimeout(300);
}
console.log(JSON.stringify({ got, errs }));
await b.close();
process.exit(0);

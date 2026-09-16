
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
const exe = [process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe', process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe'].find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
for (const v of ['slab', 'aurora', 'stars']) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(`https://shojaee76-cmyk.github.io/rope-duel/?sky=${v}`, { waitUntil: 'load', timeout: 45000 });
  await page.waitForTimeout(10000);
  const st = await page.evaluate(() => window.__duelPage.chart.stats());
  const box = await page.evaluate(() => {
    const d = window.__duelDebug, cam = d.camera, sky = d.skyChart, g = sky.mesh.geometry.parameters;
    const xs = [], ys = [];
    for (const [sx, sy] of [[-1,1],[1,1],[-1,-1],[1,-1]]) {
      const p = sky.mesh.position.clone(); p.x += sx*g.width/2; p.y += sy*g.height/2; p.project(cam);
      xs.push((p.x*0.5+0.5)*1280); ys.push((-p.y*0.5+0.5)*800);
    }
    return { x: Math.max(0, Math.min(...xs)-30), y: Math.max(0, Math.min(...ys)-34), width: Math.max(...xs)-Math.min(...xs)+60, height: Math.max(...ys)-Math.min(...ys)+68 };
  });
  await page.screenshot({ path: `C:/Users/capit/rope-duel/tools/shots/deployed_sky_${v}.png` });
  await page.screenshot({ path: `C:/Users/capit/rope-duel/tools/shots/deployed_sky_${v}_crop.png`, clip: box });
  console.log(JSON.stringify({ v, ink: st.ink, chip: st.chipText, candles: st.candles, errors: errs.slice(0,2) }));
  await page.close();
}
await browser.close(); process.exit(0);

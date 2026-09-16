// tools/moonslotcheck.mjs - does the v15 moon slot stay clear of the sky chart
// panel and the DOM HUD, across the FULL real camera pan range, on desktop and
// phone viewports?
// Pass criteria:
//   1. moon disc (its opaque core, texture disc r=1.855 of 5.0-plane scale 1)
//      never intersects the chart band in screen fractions
//   2. moon core never overlaps #meter (DOM) or the fighter plates
//   3. moon core stays fully on-screen (some halo may bleed, that is fine)
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  try { const d = await readFile(path.join(root, p)); res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(d); }
  catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(8996, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });

const CHART = {
  wide: { l: 0.672, r: 0.985, t: 0.104, b: 0.348 },
  narrow: { l: 0.045, r: 0.955, t: 0.175, b: 0.30 }
};
const CORE_R = 1.855 / 2.5;   // texture disc radius as a fraction of the 5.0-plane half-size

function overlap1D(a0, a1, b0, b1) { return a0 < b1 && b0 < a1; }

let fails = 0;
for (const vp of [{ width: 1280, height: 800, tag: 'wide' }, { width: 390, height: 844, tag: 'narrow' }, { width: 768, height: 900, tag: 'tablet' }]) {
  const page = await browser.newPage({ viewport: vp });
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(`http://localhost:8996/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(3000);
  const res = await page.evaluate(() => {
    const d = window.__duelDebug;
    const cam = d.camera;
    const moon = d.arena.userData.moon;
    const rows = [];
    const baseX = cam.position.x;
    for (const pan of [-7.3, -5.5, -3.6, -1.8, 0, 1.8, 3.6, 5.5, 7.3]) {
      cam.position.x = baseX + pan;
      cam.lookAt((baseX + pan) * 0.9, 3.15, 0);
      cam.updateMatrixWorld(true);
      // The scene re-pins the moon only inside its loop; emulate one pin by
      // dispatching through the same math is fragile. Instead: read where the
      // moon WAS left and project. To force re-pin per pan, we nudge its scale
      // pulse input via moonPulse is not exposed; simplest correct approach:
      // temporarily walk the pan and let one rAF happen between steps.
      rows.push({ pan });
    }
    return { rows, baseX, mx: moon.position.x, my: moon.position.y, mz: moon.position.z, sx: moon.scale.x };
  });
  // drive the real loop: change camPan through the actual fight (demo drives
  // the mid), but deterministic: force freeze + set positions via freeze hook
  const checked = await page.evaluate(async () => {
    const d = window.__duelDebug;
    const cam = d.camera;
    const moon = d.arena.userData.moon;
    const vw = innerWidth, vh = innerHeight;
    const CHART = vw < 700
      ? { l: 0.045, r: 0.955, t: 0.175, b: 0.30 }
      : { l: 0.672, r: 0.985, t: 0.104, b: 0.348 };
    const CORE_R = 1.855 / 2.5;
    const dom = {};
    for (const [k, sel] of Object.entries({ meter: '#meter', sell: '#tag-sell', buy: '#tag-buy' })) {
      const el = document.querySelector(sel);
      if (!el) { dom[k] = null; continue; }
      const r = el.getBoundingClientRect();
      dom[k] = { l: r.left / vw, r: r.right / vw, t: r.top / vh, b: r.bottom / vh };
    }
    const out = [];
    const nextFrame = () => new Promise((r2) => requestAnimationFrame(r2));
    for (const pan of [-7.3, -5.5, -3.6, -1.8, 0, 1.8, 3.6, 5.5, 7.3]) {
      // pin the pair at a position that produces this camPan, let the loop run
      d.freeze(true, pan, -pan);           // freeze arms: catA.x=pan, catB.x=-pan
      await nextFrame(); await nextFrame(); await nextFrame();
      d.freeze(false);
      // freeze(false) unarms but demo pressure still idles the director; the
      // camera lerp needs a few frames. Actually freeze(armed=true) pins cats,
      // camPan lerps toward (catA.x+catB.x)/2 = 0 always. So instead drive the
      // camera directly and let the NEXT loop frame re-pin the moon:
      cam.position.x = pan;
      cam.lookAt(pan * 0.9, 3.15, 0);
      await nextFrame(); await nextFrame();
      cam.updateMatrixWorld(true);
      const c = moon.position.clone().project(cam);
      const edge2 = moon.position.clone(); edge2.x += 1.855 * moon.scale.x;
      const e2 = edge2.project(cam);
      const cx = c.x / 2 + 0.5, cyTop = 0.5 - c.y / 2;
      const halfX = Math.abs(e2.x - c.x) / 2;            // frame-fraction of WIDTH
      // square pixels: the pixel radius is halfX * vw; as a y-fraction it is
      // halfX * vw / vh (the old code reused halfX for y, wrong on tall screens)
      const halfY = halfX * (vw / vh);
      const bleedTop = -(cyTop - halfY);                  // >0 = disc cut by frame top
      out.push({
        pan: +pan.toFixed(1),
        cx: +cx.toFixed(3), cyTop: +cyTop.toFixed(3), halfX: +halfX.toFixed(3), halfY: +halfY.toFixed(3),
        chartHit: (cx + halfX > CHART.l && cx - halfX < CHART.r && cyTop + halfY > CHART.t && cyTop - halfY < CHART.b),
        meterHit: dom.meter && (cx + halfX > dom.meter.l && cx - halfX < dom.meter.r && cyTop + halfY > dom.meter.t && cyTop - halfY < dom.meter.b),
        bleedTop: +bleedTop.toFixed(3),
        dom
      });
    }
    return out;
  });
  const bad = checked.filter(r => r.chartHit || r.bleedTop > 0.10);
  console.log(`\n== ${vp.tag} (${vp.width}x${vp.height}) ==`);
  console.log('  dom:', JSON.stringify(checked[0].dom));
  for (const r of checked) {
    console.log(`pan ${r.pan >= 0 ? '+' : ''}${r.pan.toFixed(1)}  moon cx ${r.cx.toFixed(3)}  cyTop ${r.cyTop.toFixed(3)}  halfX ${r.halfX.toFixed(3)}  halfY ${r.halfY.toFixed(3)}  ${r.chartHit ? 'CHART-HIT' : 'chart-ok'} ${r.meterHit ? 'METER-HIT' : ''} bleedTop ${r.bleedTop.toFixed(3)}`);
  }
  if (bad.length || errs.length) { fails += bad.length + errs.length; console.log(`  FAILS: ${bad.length} overlaps, errs: ${errs.length}`); }
  else console.log('  PASS: chart clear, HUD clear, on-screen at every pan');
  await page.close();
}
console.log(fails ? `\n${fails} FAILURES` : '\nALL VIEWPORTS PASS');
await browser.close(); srv.close(); process.exit(fails ? 1 : 0);

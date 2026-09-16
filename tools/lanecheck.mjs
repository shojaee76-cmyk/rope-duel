// tools/lanecheck.mjs - v19 PRICE LANE probe (user: "the cats movement to the
// left and right must be connect to the price of btc").
// Deterministic: it seeds the director's own 30 s price window (no waiting for
// real tape) and asserts, from the live scene graph, that
//   1. a rising tape drives the lane positive and the PAIR toward the BUY pole,
//   2. a falling tape does the reverse,
//   3. the pair really slides on SCREEN (the camera must not cancel the move),
//   4. the lane is proportional to the price change (0.35% = full deflection),
//   5. zero page errors.
import { chromium } from 'playwright-core';
import { existsSync, writeFileSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  try {
    const d = await readFile(path.join(root, p));
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(d);
  } catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(8999, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + (e.stack || e.message).split('\n')[0]));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await page.goto('http://localhost:8999/?mode=demo&seed=11', { waitUntil: 'load' });
await page.waitForTimeout(3000);
await page.evaluate(() => {
  window.__duelPage.feed.stop();
  window.__duelPage.scene.setPressure(0);
  window.__duelDebug.director.frozen = false;
  window.__duelDebug.director.pS = 0;
});

// seed the 30 s window with a reference price, set the new price, let the lane
// low-pass settle (0.7 s), and report the geometry + the on-screen slide
async function drive(ref, now, ms = 3200) {
  await page.evaluate(({ ref, now }) => {
    const d = window.__duelDebug, dir = d.director;
    dir.priceHistory.length = 0;
    dir.priceHistory.push({ t: dir.now - 30.5, px: ref });
    dir.history = null;
    window.__duelPage.scene.setPrice(now);
  }, { ref, now });
  await page.waitForTimeout(ms);
  return page.evaluate(() => {
    const d = window.__duelDebug, dir = d.director;
    const V = new (d.catA.root.position.constructor)();
    // project the pair's midpoint onto the screen (the rendered frame is what
    // the user judges this by)
    const mid = (d.catA.x + d.catB.x) / 2;
    V.set(mid, 3.0, 0).project(d.camera);
    return {
      lane: +dir.lane.toFixed(4), laneRaw: +dir.laneRaw.toFixed(4),
      mid: +mid.toFixed(3), directorMid: +dir.mid.toFixed(3),
      laneHalf: dir.laneHalf,
      ax: +d.catA.x.toFixed(3), bx: +d.catB.x.toFixed(3),
      screenX: +(V.x * 0.5 + 0.5).toFixed(4),
      camPan: +d.camPan().toFixed(3),
      state: { lane: dir.laneState() }
    };
  });
}

const results = { checks: [] };
const check = (name, ok, detail) => {
  results.checks.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  - ' + detail : ''}`);
};

const REF = 60000;
console.log('== RISING TAPE  (+0.35%) ==');
const up = await drive(REF, REF * 1.0035);
console.log(JSON.stringify(up));
console.log('== FALLING TAPE (-0.35%) ==');
const down = await drive(REF, REF * 0.9965);
console.log(JSON.stringify(down));
console.log('== HALF MOVE    (+0.175%) ==');
const half = await drive(REF, REF * 1.00175);
console.log(JSON.stringify(half));

check('[up] rising tape drives the lane to the BUY pole (+1)', up.lane > 0.85,
  `lane ${up.lane} (raw ${up.laneRaw})`);
check('[up] the pair slides toward the BUY pole (+x)', up.mid > 2.0 && up.ax > 0 && up.bx > 0,
  `mid ${up.mid} A ${up.ax} B ${up.bx}`);
check('[down] falling tape drives the lane to the SELL pole (-1)', down.lane < -0.85,
  `lane ${down.lane} (raw ${down.laneRaw})`);
check('[down] the pair slides toward the SELL pole (-x)', down.mid < -2.0,
  `mid ${down.mid}`);
check('[delta] the lane is proportional to the tape (half move -> half lane)',
  Math.abs(half.lane - 0.5 * up.lane) < 0.10, `half ${half.lane} vs ${up.lane}`);
check('[lane] the director midpoint IS the lane (mid = lane * laneHalf)',
  Math.abs(up.mid - up.lane * up.laneHalf) < 0.25 && Math.abs(down.mid - down.lane * down.laneHalf) < 0.25,
  `up ${up.mid} vs ${(up.lane * up.laneHalf).toFixed(2)} / down ${down.mid} vs ${(down.lane * down.laneHalf).toFixed(2)}`);
const slide = Math.abs(up.screenX - down.screenX);
check('[screen] the whole move is VISIBLE on screen (not cancelled by the camera)',
  slide >= 0.10, `screen x ${down.screenX} -> ${up.screenX} = ${(slide * 100).toFixed(1)}% of frame width`);
check('[screen] the camera takes only part of the travel (CAM_FOLLOW 0.62)',
  Math.abs(up.camPan - up.mid * 0.62) < 0.45, `camPan ${up.camPan} vs mid ${up.mid}`);
check('[hud] the lane state reports the 30 s change in percent',
  Math.abs(up.state.lane.pct - 0.35) < 0.05, `pct ${up.state.lane.pct}`);
check('zero page errors', errs.length === 0, errs.slice(0, 3).join(' | '));

writeFileSync(path.join(root, 'tools/lane_verify.json'), JSON.stringify({ results, up, down, half }, null, 1));
await b.close(); srv.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(failed.length ? `\n${failed.length} FAILED` : '\nALL LANE CHECKS PASS');
process.exit(failed.length ? 1 : 0);

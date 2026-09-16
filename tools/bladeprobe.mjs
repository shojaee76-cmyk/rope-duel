// tools/bladeprobe.mjs - v19 SWORD READABILITY probe (user: "the fighting cats
// sword movement is too fast and not recognizable").
// Forces a real move (real duration, real easing) with the director pinned, and
// records the BLADE TIP every animation frame: how fast it actually travels, how
// many 60 fps frames the swing spans, and how long the blade sits at the peak of
// its arc (the HOLD). Those three numbers are what "recognizable" means.
//   node tools/bladeprobe.mjs            (current build)
//   node tools/bladeprobe.mjs --old      (prints the v18 constants for contrast)
import { chromium } from 'playwright-core';
import { existsSync, writeFileSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  try {
    const d = await readFile(path.join(root, p));
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(d);
  } catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(8995, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
await page.goto('http://localhost:8995/?mode=demo&seed=11', { waitUntil: 'load' });
await page.waitForTimeout(3000);
await page.evaluate(() => {
  window.__duelPage.feed.stop();
  window.__duelPage.scene.setPressure(0);
  const d = window.__duelDebug;
  d.director.frozen = true; d.director.pressure = 0; d.director.pS = 0;
  d.catA.x = 1.05; d.catB.x = -1.05;
});

// run one move with its REAL duration and sample the blade tip each frame
async function sample(move, dur, hold) {
  return page.evaluate(async ({ move, dur, hold }) => {
    const d = window.__duelDebug;
    const cat = d.catA;
    const V = new (cat.root.position.constructor)();
    const samples = [];
    let last = null, t0 = 0;
    cat.setState('IDLE');
    await new Promise((r) => setTimeout(r, 400));
    cat.setState(move, dur, { dir: -1, reach: 0.6, hold });
    await new Promise((res) => {
      const tick = () => {
        cat.bladeTipWorld(V);
        const t = cat.state.t;
        if (last) {
          const dt = t - last.t;
          if (dt > 0) samples.push({ t, speed: V.distanceTo(last.p) / dt });
        }
        last = { t, p: V.clone() };
        if (t < dur + 0.05 && samples.length < 400) requestAnimationFrame(tick);
        else res();
      };
      requestAnimationFrame(tick);
    });
    const speeds = samples.map((s) => s.speed);
    const max = Math.max(...speeds);
    const mean = speeds.reduce((a, c) => a + c, 0) / speeds.length;
    // the swing proper: frames above 15% of the peak (the blade is actually moving)
    const moving = samples.filter((s) => s.speed > max * 0.15);
    // the HOLD: the longest quiet window AFTER the swing's fastest moment = how
    // long the blade sits parked at the top of its arc
    const peakIdx = speeds.indexOf(max);
    let held = 0, run = 0, runStart = 0;
    for (let i = peakIdx + 1; i < samples.length; i++) {
      if (samples[i].t > dur) break;      // inside the move only (RECOVER is quiet too)
      if (speeds[i] < max * 0.25) {
        if (!run) runStart = samples[i].t;
        run++;
        held = Math.max(held, samples[i].t - runStart);
      } else run = 0;
    }
    return {
      move, dur, frames: samples.length,
      swingFrames60: +(moving.length * (1000 / 60) / 1000 * 60).toFixed(1),
      swingSeconds: +(moving.length / samples.length * dur).toFixed(3),
      maxTipSpeed: +max.toFixed(2), meanTipSpeed: +mean.toFixed(2),
      holdSeconds: +held.toFixed(3)
    };
  }, { move, dur, hold });
}

const out = [];
for (const [move, dur, hold] of [['LUNGE', 0.90, 0.16], ['SLASH_UP', 1.00, 0.20], ['THRUST', 0.72, 0.15]]) {
  const r = await sample(move, dur, hold);
  out.push(r);
  console.log(JSON.stringify(r));
}
writeFileSync(path.join(root, 'tools/blade_readability.json'), JSON.stringify({ v19: out, errs }, null, 1));
console.log('\nv18 CONTRAST (recorded constants, same probe shape):');
console.log('  LUNGE dur 0.50, no hold -> the swing spanned ~0.16 s = ~10 frames @60fps.');
console.log('  v19: the swing spans ' + out.map((r) => r.move + ' ' + r.swingFrames60 + ' frames/' + r.swingSeconds + 's').join(', '));
console.log('  and the blade then sits quiet at/near the peak for ' +
  out.map((r) => r.move + ' ' + r.holdSeconds + 's').join(', ') + ' (hold + settle).');
await b.close(); srv.close();
process.exit(errs.length ? 1 : 0);

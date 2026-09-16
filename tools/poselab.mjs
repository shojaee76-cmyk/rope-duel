// tools/poselab.mjs - v19 pose lab: pin the director, force individual states on
// one cat at a time, and screenshot the result. This is how the tail rake, the
// seated guard and the swing HOLDS get verified without waiting for the fight to
// happen to reach them.
//   node tools/poselab.mjs <tag>
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const tag = process.argv[2] || 'v19';
const root = 'C:/Users/capit/rope-duel';
const PORT = 8981;
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
await new Promise((r) => srv.listen(PORT, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=11`, { waitUntil: 'load' });
await page.waitForTimeout(3000);
// pin everything: no feed, no director decisions, fixed x
await page.evaluate(() => {
  const d = window.__duelDebug;
  window.__duelPage.feed.stop();
  window.__duelPage.scene.setPressure(0);
  d.director.pressure = 0; d.director.pS = 0;
  d.director.frozen = true;
  d.catA.x = 1.05; d.catB.x = -1.05;
});
await mkdir('tools/shots', { recursive: true });

const geom = () => page.evaluate(() => {
  const d = window.__duelDebug;
  const V = (o) => [ +o.x.toFixed(3), +o.y.toFixed(3), +o.z.toFixed(3) ];
  const out = {};
  for (const k of ['A', 'B']) {
    const c = d['cat' + k];
    const hipW = c.data.hips.getWorldPosition(new c.data.hips.position.constructor());
    const tipW = c.data.tail[5].getWorldPosition(new c.data.hips.position.constructor());
    const footW = c.data.legs.L.foot.getWorldPosition(new c.data.hips.position.constructor());
    const ropeY = d.rope.yAt(c.x);
    out[k] = {
      state: c.state.name, t: +c.state.t.toFixed(2),
      hips: V(hipW), tailTip: V(tipW), foot: V(footW), ropeY: +ropeY.toFixed(3),
      tailBehind: +((tipW.x - hipW.x) * c.fw).toFixed(3),
      tailDy: +(tipW.y - hipW.y).toFixed(3),
      seatAboveRope: +(hipW.y - 0.135 - ropeY).toFixed(3),
      pose: { shS_z: +c.pose.shS_z.toFixed(2), elS: +c.pose.elS.toFixed(2), crouch: +c.pose.crouch.toFixed(2),
              thL: +c.pose.thL.toFixed(2), knL: +c.pose.knL.toFixed(2), tailCurl: +c.pose.tailCurl.toFixed(2) }
    };
  }
  return out;
});

async function shot(name, wait = 1400) {
  await page.waitForTimeout(wait);
  await writeFile(`tools/shots/${tag}_${name}.png`, await page.screenshot({ clip: { x: 240, y: 260, width: 800, height: 520 } }));
  const g = await geom();
  console.log(name, JSON.stringify(g));
}

// 1. IDLE - the tail check
await page.evaluate(() => { const d = window.__duelDebug; d.catA.setState('IDLE'); d.catB.setState('IDLE'); });
await shot('idle');

// 2. SIT_GUARD both cats
await page.evaluate(() => {
  const d = window.__duelDebug;
  d.catA.setState('SIT_GUARD', 99, { dir: -1 });
  d.catB.setState('SIT_GUARD', 99, { dir: 1 });
});
await shot('sit', 2200);

// 3. swing HOLDS: stretch each move to 4 s (hold scaled to 20% so the hold
// window is a stable 0.8 s still) and screenshot the frame in the middle of the
// hold - the pose the eye is supposed to read.
const PHASES = {   // move: [windEnd, swingEndBase] - mirrors swingPhases() in src/cats.js
  RUSH: [0.34, 0.70], LUNGE: [0.28, 0.62], SLASH_UP: [0.30, 0.72], THRUST: [0.30, 0.56],
  FEINT: [0.40, 0.62], SLASH_SPIN: [0.42, 0.80], RIPOSTE: [0.44, 0.74],
  PARRY_HOP: [0.45, 0.72], PARRY_BEAT: [0.34, 0.58]
};
for (const mv of ['LUNGE', 'SLASH_UP', 'THRUST', 'SLASH_SPIN', 'RUSH']) {
  const [wind, base] = PHASES[mv];
  const HF = 0.2, p2 = base - HF / 2, p3 = p2 + HF;
  const mid = (p2 + p3) / 2;
  const DUR = 4.0;
  await page.evaluate(({ m, dur, holdFrac }) => {
    const d = window.__duelDebug;
    d.catB.setState('IDLE'); d.catA.setState('IDLE');
    requestAnimationFrame(() => {
      d.catA.setState(m, dur, { dir: -1, reach: 0.5, hold: dur * holdFrac });
      const dd = d.catA.state.data;
      dd.sp = 1; dd.sl = 1; dd.c1 = 1; dd.c2 = 1; dd.th = 1; dd.w1 = 1; dd.c3 = 0;
    });
  }, { m: mv, dur: DUR, holdFrac: HF });
  // poll until the move reaches the middle of its hold window
  let hit = false;
  for (let i = 0; i < 120; i++) {
    await page.waitForTimeout(50);
    const f = await page.evaluate(() => {
      const c = window.__duelDebug.catA;
      return c.state.name === 'LUNGE' || c.state.dur ? c.state.t / c.state.dur : 0;
    });
    if (f >= mid - 0.03 && f <= mid + 0.09) { hit = true; break; }
  }
  await page.waitForTimeout(120);
  await writeFile(`tools/shots/${tag}_hold_${mv}.png`, await page.screenshot({ clip: { x: 240, y: 260, width: 800, height: 520 } }));
  const g = await geom();
  console.log('hold_' + mv, 'reached=' + hit, JSON.stringify(g.A));
}

console.log(JSON.stringify({ tag, errs }));
await browser.close(); srv.close();
process.exit(0);

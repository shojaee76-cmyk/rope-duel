// tools/eyeguard.mjs — v21 verification harness for three user complaints:
//   (1) the eyes (simple ball, not the almond overlay)
//   (2) move tempo (moves are faster again)
//   (3) "in defend, make the sword block the other sword" (blade-on-blade contact
//       while the defender holds his guard)
// It pins the scene, forces the defender into his seated guard with the attacker
// mid-swing, then measures the REAL rendered geometry (eye mesh inventory, blade
// to blade minimum distance) and writes close-up shots for the vision pass.
//   node tools/eyeguard.mjs <tag>
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const tag = process.argv[2] || 'v21';
const root = process.env.ROOT || 'C:/Users/capit/rope-duel';
const PORT = Number(process.env.PORT || 8993);
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
const url = process.env.URL || `http://localhost:${PORT}/?mode=demo&seed=11`;
await page.goto(url, { waitUntil: 'load' });
await page.waitForTimeout(3000);
await mkdir('tools/shots', { recursive: true });

// pin the world: no feed, no director decisions, fixed pair
await page.evaluate(() => {
  const d = window.__duelDebug;
  window.__duelPage.feed.stop();
  window.__duelPage.scene.setPressure(0);
  d.director.pressure = 0; d.director.pS = 0;
  d.director.frozen = true;
  d.catA.x = 0.95; d.catB.x = -0.95;
});

// eye inventory + blade-to-blade distance, read from the live scene graph
const measure = () => page.evaluate(() => {
  const d = window.__duelDebug;
  const names = [];
  for (const k of ['A', 'B']) {
    d['cat' + k].data.head.traverse((o) => {
      if (o.name) names.push(k + ':' + o.name);
    });
  }
  const sample = (cat) => {
    const out = [];
    for (let i = 0; i <= 10; i++) {
      const p = new cat.data.sword.position.constructor();
      cat.data.sword.localToWorld(p.set(i / 10, 0, 0));
      out.push(p);
    }
    return out;
  };
  const A = sample(d.catA), B = sample(d.catB);
  let min = 1e9, at = null;
  for (let i = 0; i < A.length; i++) for (let j = 0; j < B.length; j++) {
    const dist = A[i].distanceTo(B[j]);
    if (dist < min) { min = dist; at = [i, j]; }
  }
  const V = (o) => [+o.x.toFixed(3), +o.y.toFixed(3), +o.z.toFixed(3)];
  return {
    eyeNamed: names.filter((n) => /eye|pupil|iris|ball|lid|brow|socket/i.test(n)),
    states: { A: d.catA.state.name, B: d.catB.state.name },
    bladeGap: +min.toFixed(4), bladeAt: at,
    tipA: V(A[10]), tipB: V(B[10]),
    headA: V(d.catA.headCentreWorld()), headB: V(d.catB.headCentreWorld())
  };
});

async function headshot(name, side, dist = 0.62) {
  await page.evaluate(({ side, dist }) => {
    const d = window.__duelDebug;
    const h = d['cat' + side].headCentreWorld();
    const fw = d['cat' + side].fw;
    d.lockCamera(true, h.x + fw * dist, h.y + 0.06, h.z + 0.22, h.x, h.y + 0.01, h.z);
  }, { side, dist });
  await page.waitForTimeout(450);
  await writeFile(`tools/shots/${tag}_head_${name}.png`, await page.screenshot({ clip: { x: 240, y: 140, width: 800, height: 560 } }));
}

async function pairshot(name, dist = 4.2, h = 0.8) {
  await page.evaluate(({ dist, h }) => {
    const d = window.__duelDebug;
    const y = (d.catA.headCentreWorld().y + d.catB.headCentreWorld().y) / 2;
    const z = d.catA.headCentreWorld().z;
    d.lockCamera(true, 0, y + h, z + dist, 0, y - 0.35, z);
  }, { dist, h });
  await page.waitForTimeout(450);
  await writeFile(`tools/shots/${tag}_pair_${name}.png`, await page.screenshot({ clip: { x: 300, y: 180, width: 680, height: 520 } }));
}

// ---- 1. eyes: seated guard, both faces up, head close-ups + pair
await page.evaluate(() => {
  const d = window.__duelDebug;
  d.catA.setState('SIT_GUARD', 99, { dir: -1 });
  d.catB.setState('SIT_GUARD', 99, { dir: 1 });
});
await page.waitForTimeout(2200);
await headshot('guard_A', 'A');
await headshot('guard_B', 'B');
await pairshot('guard');
console.log('EYES', JSON.stringify(await measure()));

// ---- 2. blade on blade: defender seated, attacker frozen mid-strike (hold)
const STRIKES = [['LUNGE', 0.28, 0.62], ['SLASH_UP', 0.30, 0.72], ['THRUST', 0.30, 0.56], ['RUSH', 0.34, 0.70]];
for (const [mv, wind, base] of STRIKES) {
  const DUR = 4.0, HF = 0.2;
  const p2 = base - HF / 2, mid = (p2 + (p2 + HF)) / 2;
  await page.evaluate(({ mv, DUR, holdFrac }) => {
    const d = window.__duelDebug;
    d.catA.setState('SIT_GUARD', 99, { dir: -1 });
    requestAnimationFrame(() => {
      d.catB.setState(mv, DUR, { dir: 1, reach: 0.5, hold: DUR * holdFrac });
      const dd = d.catB.state.data;
      dd.sp = 1; dd.sl = 1; dd.c1 = 1; dd.c2 = 1; dd.th = 1; dd.w1 = 1;
    });
  }, { mv, DUR, holdFrac: HF });
  for (let i = 0; i < 160; i++) {
    await page.waitForTimeout(40);
    const f = await page.evaluate((mv) => {
      const c = window.__duelDebug.catB;
      return c.state.name === mv ? c.state.t / c.state.dur : 0;
    }, mv).catch(() => 0);
    if (f >= mid - 0.02 && f <= mid + 0.10) break;
  }
  await page.waitForTimeout(120);
  await pairshot('block_' + mv, 3.4, 0.55);
  const m = await measure();
  console.log('BLOCK ' + mv, JSON.stringify({ gap: m.bladeGap, at: m.bladeAt, states: m.states, tipA: m.tipA, tipB: m.tipB }));
  await page.evaluate(() => { window.__duelDebug.catB.setState('IDLE'); });
  await page.waitForTimeout(300);
}

console.log('ERRORS', JSON.stringify(errs));
await browser.close(); srv.close();
process.exit(0);

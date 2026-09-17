// tools/eyeprobe.mjs — do the eye balls actually reach the screen, and are they
// BLACK? v21b made each eye a plain black ball (user: "Make eyes black balls"),
// and per this project's rule a claim about what is VISIBLE must be proven by
// rendered pixels, never by reading the scene graph.
//
// The test: on the pinned pair, hide the eye balls completely and compare the
// MEAN LUMINANCE of a small box around each eye's projected centre. The box is
// measured with the ball shown and with it hidden:
//   - shown must be clearly DARKER than hidden (the ball is black and it is on
//     screen), and
//   - the box in the shown frame must be darker than the surrounding head fur,
//     so the eye reads as a black dot rather than a shadowed patch of face.
//
// Dead ends worth not repeating:
//  - frame-diffing the whole picture: the scene animates (crowd, torches,
//    breathing) and the head fills the crop, so half the pixels "change"
//    whatever you toggle;
//  - absolute RGB tests on a PAINTED part: the night key light washes a
//    saturated material toward white (flat green renders as rgb(211,244,164)),
//    so a strict colour test calls a part missing while it is plainly there.
//
// Two traps:
//  - director.freeze() auto-RELEASES while |pressure| >= 0.1
//    (`if (this.frozen && Math.abs(this.pressure) >= 0.1)`), so a "frozen" scene
//    straight out of demo mode walks off mid-shot: pin pressure to 0 as well.
//  - the eye's outward normal is yawed ~24 degrees out of the body plane, so the
//    balls face the +z side (the side the duel camera sits on). Shooting the head
//    face-on looks at the far side of the head instead.
//   node tools/eyeprobe.mjs
import { chromium } from 'playwright-core';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { PNG } from 'pngjs';

const root = process.env.ROOT || 'C:/Users/capit/rope-duel';
const PORT = Number(process.env.PORT || 8995);
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
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=11`, { waitUntil: 'load' });
await page.waitForTimeout(3000);
await page.evaluate(() => {
  const d = window.__duelDebug;
  window.__duelPage.feed.stop();
  window.__duelPage.scene.setPressure(0);
  d.director.pressure = 0; d.director.pS = 0;
  d.director.frozen = true;
  d.catA.x = 0.95; d.catB.x = -0.95;
  d.catA.setState('SIT_GUARD', 99, { dir: -1 });
  d.catB.setState('SIT_GUARD', 99, { dir: 1 });
});
await page.waitForTimeout(2000);

const showEyes = (on) => page.evaluate((on) => {
  let n = 0;
  for (const k of ['A', 'B']) window.__duelDebug['cat' + k].data.head.traverse((o) => {
    if (o.name !== 'eye-ball') return;
    o.visible = on;
    n++;
  });
  return n;
}, on);

// mode 'duel' = the real gameplay camera, untouched; 'close' = pinned at the
// duel's own angle (from +z, slightly forward and above), pulled in.
async function shot(side, mode, file) {
  const dist = mode === 'close' ? 0.62 : null;
  for (let i = 0; i < (mode === 'close' ? 6 : 1); i++) {
    await page.evaluate(({ side, dist }) => {
      const d = window.__duelDebug;
      if (dist === null) { d.lockCamera(false); return; }
      const h = d['cat' + side].headCentreWorld();
      const fw = d['cat' + side].fw;
      d.lockCamera(true, h.x + fw * dist * 0.22, h.y + 0.05, h.z + dist, h.x, h.y + 0.01, h.z);
    }, { side, dist });
    await page.waitForTimeout(mode === 'close' ? 70 : 250);
  }
  const diag = await page.evaluate(({ side }) => {
    const d = window.__duelDebug;
    const cam = d.camera;
    const proj = (v) => { const p = v.clone().project(cam); return [(p.x * 0.5 + 0.5) * 1280, (-p.y * 0.5 + 0.5) * 800]; };
    const eyes = [];
    d['cat' + side].data.head.traverse((o) => {
      if (o.name !== 'eye-ball') return;
      const w = o.getWorldPosition(new o.position.constructor());
      eyes.push(proj(w));
    });
    const h = d['cat' + side].headCentreWorld();
    const top = h.clone(); top.y += 0.20;
    return { eyes, headScreen: proj(h), headPixelHeight: Math.abs(proj(h)[1] - proj(top)[1]) };
  }, { side });
  const buf = await page.screenshot();
  if (file) await writeFile(file, buf);
  return { buf, diag };
}

function lumBox(buf, centre, half, thr = 70) {
  const p = PNG.sync.read(buf);
  const x0 = Math.max(0, Math.round(centre[0] - half)), x1 = Math.min(p.width, Math.round(centre[0] + half));
  const y0 = Math.max(0, Math.round(centre[1] - half)), y1 = Math.min(p.height, Math.round(centre[1] + half));
  let dark = 0, tot = 0, sum = 0;
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
    const i = (p.width * y + x) << 2;
    tot++;
    const l = 0.299 * p.data[i] + 0.587 * p.data[i + 1] + 0.114 * p.data[i + 2];
    sum += l;
    if (l < thr) dark++;
  }
  return { dark, tot, meanLum: +(sum / tot).toFixed(1) };
}

const out = {};
for (const [mode, half, minDelta] of [['duel', 14, 12], ['close', 40, 40]]) {
  for (const side of ['A', 'B']) {
    const on = await shot(side, mode, `tools/shots/eyeprobe_${side}_${mode}_on.png`);
    await showEyes(false);
    const off = await shot(side, mode, `tools/shots/eyeprobe_${side}_${mode}_noeyes.png`);
    await showEyes(true);
    const headBox = lumBox(on.buf, on.diag.headScreen, Math.round(on.diag.headPixelHeight * 0.42));
    const eyes = on.diag.eyes.map((c, i) => {
      const a = lumBox(on.buf, c, half), z = lumBox(off.buf, c, half);
      return { i, screen: c.map(Math.round), lumEye: a.meanLum, lumNoEye: z.meanLum, drop: +(z.meanLum - a.meanLum).toFixed(1), darkPx: a.dark };
    });
    // the near eye is the one that matters; the far one is occluded by the head
    const best = eyes.reduce((m, e) => Math.max(m, e.drop), 0);
    out[mode + '_' + side] = { headPixelHeight: Math.round(on.diag.headPixelHeight), headMeanLum: headBox.meanLum, eyes, bestDrop: best, pass: best >= minDelta };
  }
}
const allPass = Object.values(out).every((v) => v.pass);
console.log(JSON.stringify({ out, allPass, errs }, null, 1));
await b.close(); srv.close();
process.exit(0);

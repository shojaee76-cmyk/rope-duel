// tools/livecheck.mjs — verify the DEPLOYED build: hash match, zero errors, the
// fight actually running, and the arch hoops really gone from the frame.
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import { createHash } from 'crypto';
import { readFile, writeFile } from 'fs/promises';
import { PNG } from 'pngjs';

const URL = 'https://shojaee76-cmyk.github.io/rope-duel/';
const local = await readFile('C:/Users/capit/rope-duel/bundle.js');
const localHash = createHash('sha256').update(local).digest('hex');
const live = await fetch(URL + 'bundle.js?cb=' + Date.now());
const liveBuf = Buffer.from(await live.arrayBuffer());
const liveHash = createHash('sha256').update(liveBuf).digest('hex');

const cands = ['C:/Program Files/Google/Chrome/Application/chrome.exe', process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto(URL + '?mode=auto&cb=' + Date.now(), { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(9000);

const probe = await page.evaluate(() => new Promise((resolve) => {
  const d = window.__duelDebug;
  const run = {};
  const states = {};
  let clashes = 0;
  const prev = d.director.onClash;
  d.director.onClash = (...a) => { clashes++; if (prev) prev(...a); };
  let gapMin = 9, gapSum = 0, n = 0;
  const t0 = performance.now();
  function tick() {
    const g = Math.abs((d.catA.x + d.catA.pose.xOff) - (d.catB.x + d.catB.pose.xOff));
    gapMin = Math.min(gapMin, g); gapSum += g; n++;
    for (const s of ['A', 'B']) {
      const st = d['cat' + s].state.name;
      states[st] = (states[st] || 0) + 1;
    }
    if (performance.now() - t0 < 12000) requestAnimationFrame(tick);
    else {
      const hb = document.getElementById('status-mode');
      resolve({
        frames: n,
        secs: +((performance.now() - t0) / 1000).toFixed(1),
        clashes,
        nonIdlePct: +(100 * (n - (states.IDLE || 0) - (states.RECOVER || 0)) / n).toFixed(1),
        states,
        gapMin: +gapMin.toFixed(2),
        gapMean: +(gapSum / n).toFixed(2),
        hudPrice: document.getElementById('price')?.textContent,
        hudMode: hb ? hb.textContent : null,
        calls: d.renderer.info.render.calls,
        moveStats: d.director.stats,
      });
    }
  }
  requestAnimationFrame(tick);
}));

const shot = await page.screenshot();
await writeFile('C:/Users/capit/rope-duel/tools/shots/live_v5.png', shot);
// arch-hoop check: the green/white voussoir band used to cover part of the sky
const png = PNG.sync.read(Buffer.from(shot));
let green = 0, sand = 0, dark = 0;
for (let y = 0; y < 300; y++) {
  for (let x = 0; x < png.width; x++) {
    const i = (y * png.width + x) * 4;
    const r = png.data[i], g = png.data[i + 1], b = png.data[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum < 60) dark++;
    if (g > 70 && g - r > 25 && b < 140) green++;
    if (r > 110 && r - b > 40 && g - b > 15) sand++;
  }
}
const total = 300 * png.width;
console.log(JSON.stringify({
  url: URL,
  bundleLocalSha256: localHash.slice(0, 16),
  bundleLiveSha256: liveHash.slice(0, 16),
  bundleMatch: localHash === liveHash,
  errors,
  probe,
  skyBand: { darkSkyPct: +(100 * dark / total).toFixed(1), greenVoussoirPct: +(100 * green / total).toFixed(2), stonePct: +(100 * sand / total).toFixed(1) },
}, null, 1));
await browser.close();
process.exit(0);

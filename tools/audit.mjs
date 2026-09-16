// tools/audit.mjs — v19 baseline/after audit: full frame + crops of the wall
// board and of the cats, plus the geometry that the fix has to change
// (board face vs chart plane depth, tail direction, seat drop).
//   node tools/audit.mjs <tag> [--freeze] [--url <base>]
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const tag = process.argv[2] || 'base';
const ARGS = process.argv.slice(3);
const FREEZE = ARGS.includes('--freeze');
const urlIdx = ARGS.indexOf('--url');
const BASE = urlIdx >= 0 ? ARGS[urlIdx + 1] : null;

const root = 'C:/Users/capit/rope-duel';
const PORT = Number(process.env.PORT || 8971);
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2' };
let srv = null;
if (!BASE) {
  srv = http.createServer(async (req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p === '/') p = '/index.html';
    try {
      const d = await readFile(path.join(root, p));
      res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
      res.end(d);
    } catch { res.writeHead(404); res.end('no'); }
  });
  await new Promise((r) => srv.listen(PORT, r));
}
const base = BASE || `http://localhost:${PORT}`;
const url = `${base}/?mode=demo&seed=11`;

const cands = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null
];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await page.goto(url, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(3800);
if (FREEZE) {
  await page.evaluate(() => window.__duelDebug.freeze(true, 1.15, -1.15));
  await page.waitForTimeout(900);
}
await mkdir('tools/shots', { recursive: true });
await writeFile(`tools/shots/${tag}_full.png`, await page.screenshot());

const info = await page.evaluate(() => {
  const d = window.__duelDebug;
  const cam = d.camera;
  const out = { url: location.href, chart: null, board: null, tails: {}, cat: null };
  const sc = d.skyChart;
  const st = sc && sc.stats ? sc.stats() : null;
  if (st) {
    out.chart = {
      screen: st.screen || null,
      plane: st.plane || null,
      position: st.position || null,
      variant: st.variant,
      draws: st.draws,
      ink: st.ink
    };
  }
  const b = d.arena.userData.tapeBoard;
  out.board = b ? { w: b.w, h: b.h, y: b.y, z: b.z } : null;
  const cat = (c) => {
    const hips = c.data.hips, tail = c.data.tail;
    const hipW = hips.getWorldPosition(new (hips.position.constructor)());
    const tipW = tail[tail.length - 1].getWorldPosition(new (hips.position.constructor)());
    const fw = c.fw;            // world-x this cat advances in
    return {
      x: +c.x.toFixed(3),
      state: c.state.name,
      hips: [+hipW.x.toFixed(3), +hipW.y.toFixed(3), +hipW.z.toFixed(3)],
      tailTip: [+tipW.x.toFixed(3), +tipW.y.toFixed(3), +tipW.z.toFixed(3)],
      // dx along the cat's facing (negative = BEHIND the cat), dy up
      tailBehind: +((tipW.x - hipW.x) * fw).toFixed(3),
      tailDy: +(tipW.y - hipW.y).toFixed(3),
      tailDz: +tipW.z.toFixed(3)
    };
  };
  out.cat = { A: cat(d.catA), B: cat(d.catB) };
  out.moves = d.director.log.slice(-14).map((l) => l.side + ':' + l.move);
  out.roles = { pS: +d.director.pS.toFixed(3), atk: d.director.pS >= 0 ? 'A' : 'B' };
  return out;
});

// crop the board band and the cats band
const sc = info.chart && info.chart.screen;
if (sc) {
  const x = Math.max(0, Math.round(sc.l * 1280) - 60);
  const y = Math.max(0, Math.round(sc.t * 800) - 60);
  const w = Math.min(1280 - x, Math.round((sc.r - sc.l) * 1280) + 120);
  const h = Math.min(800 - y, Math.round((sc.b - sc.t) * 800) + 120);
  if (w > 40 && h > 40) await writeFile(`tools/shots/${tag}_board.png`, await page.screenshot({ clip: { x, y, width: w, height: h } }));
}
await writeFile(`tools/shots/${tag}_cats.png`, await page.screenshot({ clip: { x: 300, y: 300, width: 680, height: 460 } }));
console.log(JSON.stringify({ tag, url, errs, ...info }, null, 1));
await browser.close();
if (srv) srv.close();
process.exit(0);

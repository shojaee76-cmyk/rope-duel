// tools/shot.mjs — grab hero shots of the live fight (waits for real combat
// beats instead of guessing a delay), for the vision art-director pass.
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const tag = process.argv[2] || 'v5';
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 8961);
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
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
const cands = [
  process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=11`, { waitUntil: 'load', timeout: 30000 });
await mkdir(`tools/shots`, { recursive: true });
await page.waitForTimeout(3500);

const wanted = ['BLADE_LOCK', 'CLASH', 'RUSH', 'LUNGE', 'SLASH_SPIN', 'SLASH_UP', 'HIT', 'STUMBLE'];
const got = [];
for (let i = 0; i < 40 && got.length < 6; i++) {
  const st = await page.evaluate(() => {
    const d = window.__duelDebug;
    return { a: d.catA.state.name, b: d.catB.state.name, t: d.catA.state.t };
  });
  const hit = wanted.find((w) => (st.a === w || st.b === w) && st.t > 0.05);
  if (hit && !got.includes(hit)) {
    got.push(hit);
    const buf = await page.screenshot();
    await writeFile(`tools/shots/${tag}_${hit}.png`, buf);
  }
  await page.waitForTimeout(60);
}
// wide hero shot, mid-fight
await page.waitForTimeout(400);
await writeFile(`tools/shots/${tag}_wide.png`, await page.screenshot());
console.log(JSON.stringify({ tag, got, errors }, null, 1));
await browser.close(); srv.close();
process.exit(0);

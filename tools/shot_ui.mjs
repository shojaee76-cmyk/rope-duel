// tools/shot_ui.mjs — UI-pass screenshot harness: matched desktop/mobile pairs,
// mid-fight, for before/after comparison of the v8 UI overhaul.
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const tag = process.argv[2] || 'after';
const root = 'C:/Users/capit/rope-duel';
const PORT = Number(process.env.PORT || 8971);
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
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });

async function shoot(vw, vh, name) {
  const page = await browser.newPage({ viewport: { width: vw, height: vh } });
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message.split('\n')[0]));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto(`http://localhost:${PORT}/?mode=demo&seed=11`, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(4500); // fight underway, callouts may have fired
  await mkdir('tools/shots', { recursive: true });
  await writeFile(`tools/shots/ui_${tag}_${name}.png`, await page.screenshot());
  await page.close();
  return errors;
}

const errsDesk = await shoot(1280, 800, 'desktop');
const errsMob = await shoot(390, 744, 'mobile390');
const errsNarrow = await shoot(320, 568, 'mobile320');
console.log(JSON.stringify({ tag, desktop: errsDesk, mobile390: errsMob, mobile320: errsNarrow }, null, 1));
await browser.close(); srv.close();
process.exit(0);

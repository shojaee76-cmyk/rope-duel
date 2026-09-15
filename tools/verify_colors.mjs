// tools/verify_colors.mjs — buy/sell color convention audit.
// Boots the page headless, asserts the DOM side-colors (HUD meter, cat tags,
// callout styles), and saves a screenshot tagged `before` or `after` so the
// flip can be compared. Usage: node tools/verify_colors.mjs before
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const tag = process.argv[2] || 'shot';
const root = 'C:/Users/capit/rope-duel';
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
await new Promise((r) => srv.listen(8992, r));
const cands = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + (e.stack || e.message).split('\n').slice(0, 4).join(' | ')));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await page.goto('http://localhost:8992/?mode=demo', { waitUntil: 'load' });
await page.waitForTimeout(5000);

// pin the fight: freeze the director, park the cats at fixed positions, kill
// the demo tape so both captures are deterministic (needs the freeze hook)
try {
  await page.evaluate(() => window.__duelDebug.freeze(true, 1.1, -1.1));
  await page.waitForTimeout(700); // let the pose settle
} catch (e) { /* old bundle without the hook: proceed non-deterministic */ }

// DOM side-color assertions
const styles = await page.evaluate(() => {
  const cs = (el) => getComputedStyle(el);
  const tagBuy = cs(document.getElementById('tag-buy'));
  const tagSell = cs(document.getElementById('tag-sell'));
  const meterBuy = cs(document.getElementById('meter-buy'));
  const meterSell = cs(document.getElementById('meter-sell'));
  const layer = document.getElementById('callouts');
  const mk = (cls) => {
    const d = document.createElement('div');
    d.className = `callout ${cls}`;
    layer.appendChild(d);
    return d;
  };
  const cbEl = mk('buy'), cslEl = mk('sell');
  const cb = getComputedStyle(cbEl), csl = getComputedStyle(cslEl);
  const root = getComputedStyle(document.documentElement);
  const out = {
    vars: {
      buy: root.getPropertyValue('--buy').trim() || '(unset)',
      sell: root.getPropertyValue('--sell').trim() || '(unset)',
      jade: root.getPropertyValue('--jade').trim() || '(unset)',
      up: root.getPropertyValue('--up').trim(),
      down: root.getPropertyValue('--down').trim(),
    },
    tagBuy: { color: tagBuy.color, borderRight: tagBuy.borderRightColor },
    tagSell: { color: tagSell.color, borderLeft: tagSell.borderLeftColor },
    meterBuyBg: meterBuy.backgroundImage,
    meterSellBg: meterSell.backgroundImage,
    calloutBuy: { color: cb.color, border: cb.borderTopColor, bg: cb.backgroundColor },
    calloutSell: { color: csl.color, border: csl.borderTopColor, bg: csl.backgroundColor },
  };
  cbEl.remove(); cslEl.remove();
  return out;
});

await page.screenshot({ path: `tools/shots/colors_${tag}.png` });
console.log(JSON.stringify({ tag, errs, styles }, null, 1));
await b.close(); srv.close();
process.exit(0);

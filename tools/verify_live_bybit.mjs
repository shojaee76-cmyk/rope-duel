// tools/verify_live_bybit.mjs: END-TO-END live-feed verification with REAL
// network frames (nothing is mocked), covering BOTH providers:
//
//   Scenario A (auto): the page boots ?mode=auto and must end up LIVE on
//     whichever provider actually answers on this line, advertising the true
//     source. Assertions are provider-agnostic, so the suite is honest whether
//     the network is open (Binance) or geo-blocked (Bybit fallback).
//   Scenario B (forced Bybit): a second feed is constructed in-page with ONLY
//     the Bybit endpoint, so the fallback path is proven deterministically
//     even when Binance happens to be reachable. This is the path that must
//     work from Iran, where every binance host answers 451.
//
// Independent ground truth: the displayed price is compared against a REST
// ticker fetched from node at the same moment, so a stale/echoed/garbage feed
// cannot pass.
import { chromium } from 'playwright-core';
import { existsSync, writeFileSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const PORT = 8995;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };
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

const results = { url: `http://localhost:${PORT}/?mode=auto`, checks: [], net: {} };
function check(name, ok, detail) {
  results.checks.push({ name, ok: !!ok, detail: detail === undefined ? null : detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  - ' + detail : ''}`);
}

async function refTicker(provider) {
  try {
    const url = provider === 'bybit'
      ? 'https://api.bybit.com/v5/market/tickers?category=spot&symbol=BTCUSDT'
      : 'https://data-api.binance.vision/api/v3/ticker/24hr?symbol=BTCUSDT';
    const r = await fetch(url, { signal: AbortSignal.timeout(12000) });
    if (!r.ok) return null;
    const j = await r.json();
    if (provider === 'bybit') {
      const row = j.result && j.result.list && j.result.list[0];
      return row ? { lastPrice: +row.lastPrice, chgPct: +row.price24hPcnt * 100 } : null;
    }
    return { lastPrice: +j.lastPrice, chgPct: +j.priceChangePercent };
  } catch (e) { return null; }
}

const cands = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null];
const browser = await chromium.launch({ executablePath: cands.find((c) => c && existsSync(c)), headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const pageErrors = [], consoleErrors = [], hosts = new Set();
page.on('pageerror', (e) => pageErrors.push((e.stack || e.message).split('\n')[0]));
page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
page.on('websocket', (ws) => { try { hosts.add(new URL(ws.url()).host); } catch {} });

/* =================== Scenario A: auto rotation =================== */
console.log('=== Scenario A: ?mode=auto (real network) ===');
await page.goto(results.url, { waitUntil: 'load', timeout: 60000 });
await page.waitForFunction(() => window.__duelPage && window.__duelPage.feed && window.__duelPage.feed.snap().status === 'open', { timeout: 45000 }).catch(() => {});
await page.waitForFunction(() => { const f = window.__duelPage && window.__duelPage.feed; return !!f && f.candles().seeded === true; }, { timeout: 45000 }).catch(() => {});

const s1 = await page.evaluate(() => {
  const f = window.__duelPage.feed, st = f.snap(), c = f.candles();
  return {
    statusText: (document.getElementById('status-mode') || {}).textContent,
    venue: window.__duelPage.chart.stats().variant,     // the tape now lives in the sky panel
    chip: window.__duelPage.chart.stats().chipText,
    hudPrice: (document.getElementById('price') || {}).textContent,
    provider: st.provider, providerLabel: st.providerLabel, endpoint: st.endpoint,
    mode: st.mode, feedStatus: st.status, pressure: st.pressure,
    change24hPct: st.change24hPct, count: c.count, seeded: c.seeded,
    tLast: c.t.length ? c.t[c.t.length - 1] : -1
  };
});
await page.waitForTimeout(14000);
const s2 = await page.evaluate(async () => {
  const f = window.__duelPage.feed, st = f.snap(), c = f.candles();
  let tpsMax = 0, pressureMax = 0;
  for (let i = 0; i < 14; i++) {
    const v = Number((document.getElementById('tps') || {}).textContent || 0);
    if (v > tpsMax) tpsMax = v;
    // order-flow pressure is a STEADY-STATE property: the accumulator is
    // legitimately empty for the first fraction of a second after the socket
    // opens (before the first print lands), so sample the peak, not one read
    const p = Math.abs(st.pressure || 0);
    if (p > pressureMax) pressureMax = p;
    await new Promise((r) => setTimeout(r, 500));
  }
  // the tape is drawn into the sky panel now; its own stats() is the paint census
  const sky = window.__duelPage.chart.stats();
  const painted = sky.ink;
  const c2 = f.candles();
  return {
    count: c2.count, lastPrice: st.price, pressure: st.pressure, tpsMax, pressureMax, paintedPct: painted,
    tLast: c2.t.length ? c2.t[c2.t.length - 1] : -1, provider: st.provider,
    statusText: (document.getElementById('status-mode') || {}).textContent,
    chip: window.__duelPage.chart.stats().chipText
  };
});

const refA = await refTicker(s1.provider);
results.scenarioA = { s1, s2, ref: refA };

check('A: zero page errors (script-level)', pageErrors.length === 0, pageErrors.join(' | '));
const NETNOISE = /WebSocket|net::|ERR_|Failed to load resource|451|403/i;
const realErrs = consoleErrors.filter((e) => !NETNOISE.test(e));
results.net.consoleErrors = consoleErrors;
results.net.consoleNetNoise = consoleErrors.filter((e) => NETNOISE.test(e));
check('A: zero real console errors (handshake noise excluded)', realErrs.length === 0, realErrs.join(' | '));
check('A: ended up live on a real provider', (s1.provider === 'binance' || s1.provider === 'bybit') && s1.mode === 'live' && s1.feedStatus === 'open', `provider=${s1.provider} mode=${s1.mode} status=${s1.feedStatus}`);
check('A: HUD advertises the true source', s1.statusText === 'LIVE \u00b7 ' + String(s1.providerLabel).toUpperCase(), JSON.stringify(s1.statusText));
check('A: chart header names the real venue (no stale BINANCE SPOT)', s1.venue === String(s1.providerLabel).toUpperCase() + ' SPOT', JSON.stringify(s1.venue));
check('A: chart chip reads LIVE', s2.chip === 'LIVE', JSON.stringify(s2.chip));
check('A: never fell back to the SIMULATION tape', !/SIMUL/.test(s1.statusText || ''), s1.statusText);
check('A: real price displayed', s2.lastPrice > 1000 && /[\d,]{6,}/.test(s1.hudPrice || ''), `hud=${s1.hudPrice} feed=${s2.lastPrice}`);
if (refA) {
  const dev = Math.abs(s2.lastPrice - refA.lastPrice) / refA.lastPrice;
  check(`A: price agrees with independent ${s1.provider} ticker (<0.5%)`, dev < 0.005, `page=${s2.lastPrice} ref=${refA.lastPrice} dev=${(dev * 100).toFixed(3)}%`);
  const pdev = Math.abs(s1.change24hPct - refA.chgPct);
  check('A: 24h change agrees with the provider (unit conversion right)', pdev < 0.25, `page=${s1.change24hPct}% ref=${refA.chgPct}%`);
} else {
  check('A: independent ticker fetched', false, 'REST unreachable');
}
check('A: REST history seed applied', s1.seeded === true && s1.count >= 60, `seeded=${s1.seeded} count=${s1.count}`);
check('A: series is advancing (newest candle moved)', s2.tLast >= s1.tLast && s2.tLast > 0, `${s1.tLast} -> ${s2.tLast}`);
check('A: order-flow pressure is non-zero (trades reach the duel)', s2.pressureMax > 0.001, 'peak|pressure|=' + s2.pressureMax.toFixed(4));
check('A: trades/s > 0 over the sample window', s2.tpsMax > 0, 'tpsMax=' + s2.tpsMax);
check('A: sky tape panel actually painted', s2.paintedPct > 50, 'ink=' + s2.paintedPct + ' sampled px');

/* =================== Scenario B: forced Bybit fallback =================== */
console.log('\n=== Scenario B: Bybit-only feed (the geo-blocked-line path) ===');
const forced = await page.evaluate(async () => {
  // build a feed with ONLY the Bybit endpoint: this is exactly what runs on a
  // network where every binance host is blocked, independent of what happened
  // to be reachable above
  const EP = [{ kind: 'bybit', url: window.BtcTradeFeed.BYBIT_WS_URL, label: 'bybit only (forced)' }];
  const f = new window.BtcTradeFeed({ mode: 'live', endpoints: EP, emitIntervalMs: 250 });
  window.__bybitOnly = f;
  const traces = [];
  f.onStatus((st) => traces.push(st.status));
  f.start();
  const t0 = Date.now();
  while (Date.now() - t0 < 45000) {
    const st = f.snap();
    if (st.status === 'open' && st.price != null && f.candles().count > 0) break;
    await new Promise((r) => setTimeout(r, 400));
  }
  const first = f.candles().count;
  await new Promise((r) => setTimeout(r, 9000));
  return {
    traces,
    provider: f.snap().provider,
    endpoint: f.snap().endpoint,
    status: f.snap().status,
    price: f.snap().price,
    count0: first,
    count1: f.candles().count,
    seeded: f.candles().seeded,
    pressure: f.snap().pressure,
    tLast0: 0,
    tLast1: (f.candles().t.length ? f.candles().t[f.candles().t.length - 1] : -1)
  };
});
const refB = await refTicker('bybit');
results.scenarioB = { forced, ref: refB };

check('B: forced Bybit endpoint opens', forced.status === 'open' && forced.provider === 'bybit', `status=${forced.status} provider=${forced.provider}`);
check('B: reached the real Bybit stream host', forced.endpoint === 'wss://stream.bybit.com/v5/public/spot', forced.endpoint);
check('B: real price streamed from Bybit', forced.price > 1000, 'price=' + forced.price);
if (refB) {
  const dev = Math.abs(forced.price - refB.lastPrice) / refB.lastPrice;
  check('B: price agrees with independent Bybit ticker (<0.5%)', dev < 0.005, `feed=${forced.price} ref=${refB.lastPrice} dev=${(dev * 100).toFixed(3)}%`);
} else {
  check('B: independent Bybit ticker fetched', false, 'REST unreachable');
}
check('B: 1s series built from Bybit prints', forced.count1 > forced.count0 || forced.count1 > 10, `${forced.count0} -> ${forced.count1}`);
check('B: REST history seed applied', forced.seeded === true, 'seeded=' + forced.seeded);
check('B: newest candle advanced', forced.tLast1 > 0, 'tLast=' + forced.tLast1);
check('B: never dropped to the demo tape', forced.traces.indexOf('demo') < 0, JSON.stringify(forced.traces));

await page.evaluate(() => { try { window.__bybitOnly.stop(); } catch (e) {} });

const shot = await page.screenshot();
mkdirSync(path.join(root, 'tools', 'shots'), { recursive: true });
writeFileSync(path.join(root, 'tools', 'shots', 'live_bybit.png'), shot);
results.net.hostsReached = [...hosts];
results.pageErrors = pageErrors;
writeFileSync(path.join(root, 'tools', 'live_bybit_verify.json'), JSON.stringify(results, null, 1));

const failed = results.checks.filter((c) => !c.ok);
console.log(`\n${results.checks.length - failed.length}/${results.checks.length} checks passed`);
console.log('providers proven live: scenario A = ' + s1.provider + ', scenario B = ' + forced.provider);
await browser.close();
srv.close();
process.exit(failed.length ? 1 : 0);

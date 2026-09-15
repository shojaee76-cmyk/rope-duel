// main.js — page boot for THE ROPE DUEL (integration task t_e2039773).
// Combines the live BTC/USDT feed (feed.js, UMD global) with the Three.js
// duel scene, the HUD, pressure meter, cat tags, and trade callouts.
//
// URL params:  ?mode=live|demo|auto   (feed mode, default auto)
//              ?seed=N               (demo tape seed)
//              ?nofx=1               (reduce particles, for weak devices)
import { createDuelScene } from './src/scene.js';
import { wireFeedToScene } from './feed-adapter.js';
import { createDuelChart } from './src/chart.js';

const qs = new URLSearchParams(location.search);
const $ = (id) => document.getElementById(id);

/* ---------- WebGL guard (graceful degradation) ---------- */
function webglOk() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext &&
      (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}
if (!webglOk()) {
  $('nogl').style.display = 'flex';
  $('status-mode').textContent = 'NO WEBGL';
  $('status-dot').className = '';
}

/* ---------- scene ---------- */
const isMobile = matchMedia('(pointer: coarse)').matches || innerWidth < 640;
const scene = createDuelScene($('duel-scene'), {
  demo: true,          // self-drives until the first live payload arrives
  debug: true,
  vfxScale: isMobile ? 0.4 : (qs.get('nofx') ? 0.2 : 1)
});

/* ---------- HUD refs ---------- */
const priceEl = $('price'), chgEl = $('chg24h'), tpsEl = $('tps');
const meterBuy = $('meter-buy'), meterSell = $('meter-sell');
const dotEl = $('status-dot'), modeEl = $('status-mode');
const calloutLayer = $('callouts');

/* ---------- embedded live chart (task t_189fb722) ----------
   Panel markup lives in index.html (#chart-panel), styles in chart.css.
   Fed below: handleState -> candle snapshots + price (~4 Hz, the feed's own
   throttle), setStatus -> LIVE/RECONNECTING/SIM chip, spawnCallout -> dots
   for callout-worthy trades ($50k+). */
const chart = createDuelChart($('chart-panel'));

function fmtUsd(v) {
  if (v == null || !isFinite(v)) return '—';
  if (v >= 1e6) return (v / 1e6).toFixed(1) + 'M';
  if (v >= 1e3) return (v / 1e3).toFixed(1) + 'K';
  return v.toFixed(1);
}

/* ---------- trade callouts (+BUY / -SELL, size by notional) ---------- */
const CALLOUT_MIN = 50000;      // USD — matches the adapter threshold
const WHALE_MIN = 250000;       // USD — bigger pop
const MAX_CALLOUTS = 14;
function spawnCallout(info) {
  if (!info || info.notional < CALLOUT_MIN) return;
  if (calloutLayer.childElementCount >= MAX_CALLOUTS) {
    calloutLayer.firstElementChild.remove();
  }
  const whale = info.notional >= WHALE_MIN;
  chart.trade(info); // dot on the embedded chart at the trade price
  const el = document.createElement('div');
  el.className = `callout ${info.side}${whale ? ' whale' : ''}`;
  el.textContent = `${info.side === 'buy' ? '+BUY' : '-SELL'} $${fmtUsd(info.notional)}`;
  const q = document.createElement('span');
  q.className = 'qty';
  q.textContent = `${info.qty >= 1 ? info.qty.toFixed(2) : info.qty.toFixed(4)} BTC @ ${info.price.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  el.appendChild(q);
  // pop near the acting cat: BUY = right band (Don Gato), SELL = left band
  const bandX = info.side === 'buy' ? 62 : 24;       // vw
  el.style.left = (bandX + Math.random() * 14) + 'vw';
  el.style.top = (30 + Math.random() * 34) + 'vh';
  calloutLayer.appendChild(el);
  setTimeout(() => el.remove(), 2700);
}
scene.onTradeCallout(spawnCallout); // NOTE: single registration; the adapter routes via onCallout

/* ---------- feed + adapter ---------- */
const mode = qs.get('mode') || 'auto';
const feedOpts = { mode, emitIntervalMs: 250 };
if (qs.get('seed')) feedOpts.demoSeed = Number(qs.get('seed')) || 0;
const feed = new window.BtcTradeFeed(feedOpts);

function setStatus(st) {
  const isDemo = st.mode === 'demo' || st.status === 'demo';
  dotEl.className = isDemo ? 'demo' : (st.status === 'open' ? 'live' : (st.status || ''));
  modeEl.textContent = isDemo ? 'SIMULATION' : (st.status || '').toUpperCase();
  chart.notifyStatus(st); // chart chip mirrors the feed lifecycle instantly
}

const unwire = wireFeedToScene(feed, scene, {
  onCallout: spawnCallout, // belt and braces: adapter also screens big trades
  onStatus: setStatus,
  onState: handleState
});

function handleState(s) {
    // embedded chart: candle store snapshot + latest meta (rev-gated redraw)
    chart.update(feed.candles(), s);
    // big HUD price
    priceEl.textContent = s.price
      ? s.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : 'connecting…';
    // 24h change
    if (typeof s.change24hPct === 'number' && isFinite(s.change24hPct)) {
      const sign = s.change24hPct >= 0 ? '+' : '';
      chgEl.textContent = `${sign}${s.change24hPct.toFixed(2)}%  ($${sign}${fmtUsd(Math.abs(s.change24hAbs || 0))})`;
      chgEl.className = s.change24hPct >= 0 ? 'up' : 'down';
    }
    // trades/sec
    tpsEl.textContent = isFinite(s.tps) ? Math.round(s.tps) : '0';
    // pressure meter: |P| drives bar widths from the center line
    const P = s.pressure || 0;
    meterBuy.style.width = (P > 0 ? P * 50 : 0) + '%';
    meterSell.style.width = (P < 0 ? -P * 50 : 0) + '%';
}

feed.start();

/* pause the feed when the tab is hidden (frees the socket; Binance limits) */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) feed.stop();
  else if (feed.state().status === 'stopped') feed.start();
});

/* ---------- dev harness (verify_*.mjs drives this) ---------- */
window.__duelPage = { feed, scene, unwire, handleState, chart };

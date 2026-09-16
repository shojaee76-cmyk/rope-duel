// main.js — page boot for THE ROPE DUEL (integration task t_e2039773,
// v8 "Midnight Arena" UI pass t_addd6df0).
// Combines the live BTC/USDT feed (feed.js, UMD global) with the Three.js
// duel scene, the HUD, pressure meter, fighter plates, trade callouts and
// the embedded candle chart.
//
// URL params:  ?mode=live|demo|auto   (feed mode, default auto)
//              ?seed=N               (demo tape seed)
//              ?nofx=1               (reduce particles, for weak devices)
import { createDuelScene } from './src/scene.js';
import { wireFeedToScene } from './feed-adapter.js';

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
  vfxScale: isMobile ? 0.4 : (qs.get('nofx') ? 0.2 : 1),
  // ?res=0.75 pins the render ratio; the quality governor handles the rest and
  // is disabled automatically when a ratio is pinned
  res: qs.get('res') ? Number(qs.get('res')) : undefined,
  governor: qs.get('gov') !== 'off' && !qs.get('res'),
  // the tape is drawn into the sky now: ?sky=slab|aurora|stars picks the treatment
  skyVariant: qs.get('sky') || 'slab'
});

/* ---------- HUD refs ---------- */
const priceEl = $('price'), chgEl = $('chg24h'), tpsEl = $('tps');
const meterBuy = $('meter-buy'), meterSell = $('meter-sell');
const meterBuyPct = $('meter-buy-pct'), meterSellPct = $('meter-sell-pct');
const meterDuelEl = $('meter-duel'), meterDuelTxt = $('meter-duel-text');
const dotEl = $('status-dot'), modeEl = $('status-mode');
const calloutLayer = $('callouts');
const plates = {
  buy: { el: $('tag-buy'), state: $('state-buy'), mom: $('mom-buy'), last: '' },
  sell: { el: $('tag-sell'), state: $('state-sell'), mom: $('mom-sell'), last: '' }
};

/* ---------- the tape lives in the sky (scene.handleState feeds it) ----------
   The candle chart is no longer a DOM panel: src/skychart.js draws it onto a
   plane behind the arena (see scene.js). main.js still owns the data flow:
   handleState -> candle snapshot + meta (~4 Hz), setStatus -> the sky chip. */
const chart = scene.chart;

function fmtUsd(v) {
  if (v == null || !isFinite(v)) return '—';
  if (v >= 1e6) return (v / 1e6).toFixed(1) + 'M';
  if (v >= 1e3) return (v / 1e3).toFixed(1) + 'K';
  return v.toFixed(1);
}

/* ---------- big price: flash green/red on the tape direction ---------- */
let lastPrice = null, tickTimer = 0;
function priceFlash(p) {
  if (p != null && lastPrice != null && p !== lastPrice) {
    priceEl.classList.remove('tick-up', 'tick-down');
    void priceEl.offsetWidth; // restart the transition even at 4 Hz updates
    priceEl.classList.add(p > lastPrice ? 'tick-up' : 'tick-down');
    clearTimeout(tickTimer);
    tickTimer = setTimeout(() => priceEl.classList.remove('tick-up', 'tick-down'), 600);
  }
  if (p != null) lastPrice = p;
}

/* ---------- trade callouts (+BUY / -SELL, size by notional) ---------- */
const CALLOUT_MIN = 50000;      // USD — matches the adapter threshold
const WHALE_MIN = 250000;       // USD — bigger pop + shockwave ring
const MAX_CALLOUTS = 14;
function spawnCallout(info) {
  if (!info || info.notional < CALLOUT_MIN) return;
  if (calloutLayer.childElementCount >= MAX_CALLOUTS) {
    calloutLayer.firstElementChild.remove();
  }
  const whale = info.notional >= WHALE_MIN;
  const buy = info.side === 'buy';
  chart.trade(info); // dot on the embedded chart at the trade price
  const el = document.createElement('div');
  el.className = `callout ${info.side}${whale ? ' whale' : ''}`;
  const head = document.createElement('span');
  head.className = 'head';
  const arr = document.createElement('span');
  arr.className = 'arr';
  arr.textContent = buy ? '▲' : '▼';
  const amt = document.createElement('span');
  amt.textContent = `${buy ? '+BUY' : '-SELL'} $${fmtUsd(info.notional)}`;
  head.appendChild(arr); head.appendChild(amt);
  const q = document.createElement('span');
  q.className = 'qty';
  q.textContent = `${info.qty >= 1 ? info.qty.toFixed(2) : info.qty.toFixed(4)} BTC @ ${info.price.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  el.appendChild(head); el.appendChild(q);
  // pop near the acting fighter plate: BUY = right band (Don Gato), SELL = left;
  // then clamp so the pill never clips at the viewport edge
  const bandX = buy ? 62 : 22;       // vw
  el.style.left = (bandX + Math.random() * 14) + 'vw';
  el.style.top = (26 + Math.random() * 36) + 'vh';
  calloutLayer.appendChild(el);
  const px = el.getBoundingClientRect();
  if (px.right > innerWidth - 12) el.style.left = Math.max(12, innerWidth - px.width - 12) + 'px';
  if (px.left < 12) el.style.left = '12px';
  if (px.bottom > innerHeight - 12) el.style.top = Math.max(12, innerHeight - px.height - 12) + 'px';
  setTimeout(() => el.remove(), whale ? 3000 : 2600);
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
  /* Name the actual market-data source while live. The feed can run on
   * Binance or on its Bybit fallback (see feed.js: bybit answers on networks
   * where every binance host is geo-blocked), and an unlabelled provider
   * switch is exactly what makes a "live" feed impossible to trust. */
  const src = (!isDemo && st.status === 'open' && st.providerLabel)
    ? ' \u00b7 ' + st.providerLabel.toUpperCase() : '';
  /* Socket state names are engineer-speak; the badge says what the viewer
   * needs to know. 'open' is simply LIVE (same word the chart chip uses). */
  const STATUS_TEXT = { open: 'LIVE', connecting: 'CONNECTING', backoff: 'RECONNECTING', stopped: 'OFFLINE' };
  const label = isDemo ? 'SIMULATION' : (STATUS_TEXT[st.status] || (st.status || '').toUpperCase());
  modeEl.textContent = label + src;
  /* The chart header used to hardcode "BINANCE SPOT" and then name the venue in
   * a DOM label; the venue now lives in the sky panel's own chip, so there is
   * nothing to patch here beyond keeping the two in sync through notifyStatus. */
  chart.notifyStatus(st); // sky panel chip + stale wash
}

const unwire = wireFeedToScene(feed, scene, {
  onCallout: spawnCallout, // belt and braces: adapter also screens big trades
  onStatus: setStatus,
  onState: handleState
});

/* ---------- pressure meter + fighter plates ---------- */
const FIGHT_LABELS = {
  IDLE: 'EN GARDE', RECOVER: 'RECOVERING', LUNGE: 'LUNGE!', RUSH: 'RUSH!',
  SLASH_UP: 'SLASH UP!', SLASH_SPIN: 'SLASH SPIN!', HIT: 'HIT!',
  STUMBLE: 'STAGGERS!', BLADE_LOCK: 'BLADE LOCK', CLASH: 'CLASH!',
  FREEZE: 'EN GARDE', TAUNT: 'TAUNTS!', RIPOSTE: 'RIPOSTE!', PARRY_HOP: 'PARRY!',
  /* v14 technique labels: the new moves read as technique, not as noise */
  THRUST: 'THRUST!', FEINT: 'FEINT!', PARRY_BEAT: 'BEAT!',
  /* v18: the seated sword guard is a held posture, not a strike */
  SIT_GUARD: 'HOLDS GUARD'
};
function actFor(name) {
  if (name === 'LUNGE' || name === 'RUSH' || name === 'RIPOSTE' || name === 'THRUST') return 'lunge';
  if (name === 'BLADE_LOCK') return 'lock';
  if (name === 'CLASH') return 'clash';
  if (name === 'HIT' || name === 'STUMBLE') return 'hit';
  return '';
}
// The plates used to be rewritten the instant the fight state changed, and the
// fight ran through ~1.7 states a second, so the label strobed. Reactions now hold
// for a beat; the payoff states (a clash landing, a hit) still show immediately.
const PLATE_DWELL = 180;            // ms a label holds before it may change again
const PLATE_URGENT = new Set(['CLASH', 'HIT', 'BLADE_LOCK']);
// RECOVER is the plumbing between moves and IDLE is a lull, so neither is a fight
// event: they only reach the plate once they have actually settled. Between them
// they were responsible for most of the 1.6 label changes per second, which is what
// read as a twitching HUD rather than a steady fight.
const PLATE_SETTLE = { RECOVER: 0.18, IDLE: 0.30 };
function setFighter(side, st) {
  const p = plates[side];
  if (!p) return;
  const name = st.name;
  if (name === p.last) return;
  const urgent = PLATE_URGENT.has(name);
  if (!urgent && st.t < (PLATE_SETTLE[name] || 0)) return;
  const now = performance.now();
  if (!urgent && !PLATE_URGENT.has(p.last) && now - (p.at || 0) < PLATE_DWELL) return;
  p.at = now;
  p.last = name;
  const act = actFor(name);
  p.el.dataset.act = act;
  p.state.textContent = FIGHT_LABELS[name] || name;
}
function handleState(s) {
    // embedded chart: candle store snapshot + latest meta (rev-gated redraw)
    chart.update(feed.candles(), s);
    // big HUD price + direction flash
    priceFlash(s.price);
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
    // pressure meter: |P| drives bar widths from the center line + % labels
    const P = s.pressure || 0;
    const buyW = P > 0 ? P * 50 : 0, sellW = P < 0 ? -P * 50 : 0;
    meterBuy.style.width = buyW + '%';
    meterSell.style.width = sellW + '%';
    meterBuyPct.textContent = buyW > 0.5 ? Math.round(P * 100) + '%' : '—';
    meterSellPct.textContent = sellW > 0.5 ? Math.round(-P * 100) + '%' : '—';
    // fighter plate momentum bars
    plates.buy.mom.style.width = Math.max(4, buyW * 2) + '%';
    plates.sell.mom.style.width = Math.max(4, sellW * 2) + '%';
}

/* ---------- duel-state pill + plate reactions (real fight telemetry) ----
   __duelDebug exposes the live director state; poll at 8 Hz (transform-only
   CSS reactions, so this is cheap and independent of the feed). */
let lastDuelKey = '';
setInterval(() => {
  try {
    const d = window.__duelDebug;
    if (!d || !d.catA || !d.catB) return;
    const an = d.catA.state.name, bn = d.catB.state.name;
    // catA = Sultan Bigotes (BUY, right), catB = Don Gato (SELL, left) - v18
    setFighter('buy', d.catA.state); setFighter('sell', d.catB.state);
    const key = an + '|' + bn;
    if (key === lastDuelKey) return;
    lastDuelKey = key;
    const hot = an !== 'IDLE' || bn !== 'IDLE';
    meterDuelEl.classList.toggle('act', hot);
    meterDuelTxt.textContent =
      (an === 'BLADE_LOCK' || bn === 'BLADE_LOCK') ? 'BLADE LOCK' :
      (an === 'CLASH' || bn === 'CLASH') ? 'CLASH!' :
      (an === 'IDLE' && bn === 'IDLE') ? 'EN GARDE' : 'CROSSED SWORDS';
  } catch (e) { /* scene not up yet */ }
}, 125);

feed.start();

/* pause the feed when the tab is hidden (frees the socket; Binance limits) */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) feed.stop();
  else if (feed.state().status === 'stopped') feed.start();
});

/* ---------- dev harness (verify_*.mjs drives this) ---------- */
window.__duelPage = { feed, scene, unwire, handleState, chart };

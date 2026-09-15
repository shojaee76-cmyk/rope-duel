// src/chart.js — embedded live 1s candle chart for THE ROPE DUEL (t_189fb722).
// Zero deps, hand-rolled canvas. Consumes BtcTradeFeed.candles() snapshots
// (REST-seeded + @kline_1s on the feed's single socket + trade prints fallback,
// per the t_6f447e8c feed contract). Redraws are gated by the feed's 250 ms
// emit cadence AND a rev/price change check, so a quiet tape costs nothing.
//
// Usage:
//   const chart = createDuelChart(document.getElementById('chart-panel'));
//   chart.update(feed.candles(), feed.snap());  // ~4 Hz from the feed tick
//   chart.notifyStatus(st);                     // instant chip on status flips
//   chart.trade({ side, price, notional, ts }); // whale/buy-side dots
//
// Visuals read the page's CSS tokens (--up/--down/--gold/--jade/--panel/…)
// every redraw, so theme work (incl. the buy/sell color flip) stays canonical.

export function createDuelChart(container, opts = {}) {
  const NOOP = { update() {}, notifyStatus() {}, trade() {}, destroy() {} };
  if (!container) return NOOP;
  const canvas = container.querySelector('canvas');
  const chipEl = container.querySelector('#chart-chip');
  const chipTxt = container.querySelector('#chart-chip-text');
  if (!canvas) return NOOP;
  const ctx = canvas.getContext('2d');

  /* ---------- layout ---------- */
  const PAD_R = 58, PAD_T = 6, PAD_B = 16;   // right gutter, top/bottom pad
  const STALE_MS = 8000;                     // no fresh data -> stale chip
  const DOT_TTL = 9000;                      // whale dot fade (ms)
  let W = 0, H = 0;

  /* ---------- state ---------- */
  let snap = { rev: 0, seeded: false, count: 0, t: [], o: [], h: [], l: [], c: [] };
  let meta = { price: null, status: '', mode: '' };
  let stOverride = null;          // last notifyStatus() payload
  let lastRev = -1, lastPrice = null, lastChip = '';
  let lastFreshAt = Date.now();   // last time rev moved (live freshness)
  let dots = [];                  // {ts, price, side, notional}

  function measure() {
    const r = container.getBoundingClientRect();
    const w = Math.max(0, canvas.clientWidth || r.width);
    const h = Math.max(0, canvas.clientHeight || 0);
    const dpr = window.devicePixelRatio || 1;
    W = w; H = h;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  const ro = new ResizeObserver(() => { measure(); draw(true); });
  ro.observe(canvas);

  /* ---------- colors (live CSS tokens) ---------- */
  function colors() {
    const cs = getComputedStyle(document.documentElement);
    const v = (n, fb) => (cs.getPropertyValue(n).trim() || fb);
    return {
      up: v('--up', '#26A69A'), down: v('--down', '#EF5350'),
      // side colors follow the canonical buy/sell tokens (t_167a53f3 flip):
      buy: v('--buy', '#26A69A'), sell: v('--sell', '#EF5350'),
      gold: v('--gold', '#F5C542'), jade: v('--jade', '#7FD48A'),
      ink: v('--ink', '#EDE7D8'), dim: v('--ink-dim', '#8f8fa8'),
      edge: v('--edge', 'rgba(245,197,66,0.25)'),
      bg: 'rgba(5,6,15,0.55)'
    };
  }

  /* ---------- helpers ---------- */
  function niceStep(raw) {
    if (!(raw > 0)) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    for (const m of [1, 2, 2.5, 5, 10]) { if (raw <= m * p) return m * p; }
    return 10 * p;
  }
  function fmtP(p) {
    return p >= 1000
      ? p.toLocaleString('en-US', { maximumFractionDigits: 0 })
      : p.toPrecision(5);
  }
  function fmtClock(ms) {
    const d = new Date(ms);
    return d.toTimeString().slice(0, 8);
  }
  // index of the first candle with t >= tt (binary search), for time ticks
  function idxOfT(t, tt, i0, n) {
    let lo = i0, hi = n - 1;
    if (tt <= t[i0]) return i0;
    if (tt > t[hi]) return hi;
    while (lo < hi) { const m = (lo + hi) >> 1; if (t[m] < tt) lo = m + 1; else hi = m; }
    return lo;
  }

  /* ---------- chip ---------- */
  function setChip(cls, text) {
    const key = cls + '|' + text;
    if (key === lastChip || !chipEl || !chipTxt) return;
    lastChip = key;
    chipEl.className = cls;
    chipTxt.textContent = text;
  }
  function chipFor(now) {
    const m = stOverride || meta;
    if (!snap.count) return ['load', 'LOADING\u2026'];
    if (m.mode === 'demo') return ['demo', 'SIM TAPE'];
    if (m.status === 'open') {
      return (now - lastFreshAt > STALE_MS) ? ['stale', 'STALE FEED'] : ['live', 'LIVE'];
    }
    if (m.status === 'connecting' || m.status === 'backoff') return ['stale', 'RECONNECTING\u2026'];
    return ['off', 'OFFLINE'];
  }

  /* ---------- main draw ---------- */
  function draw(force) {
    const now = Date.now();
    setChip.apply(null, chipFor(now));
    const nAll = snap.count | 0;
    if (W < 40 || H < 40) return;
    const C = colors();
    ctx.clearRect(0, 0, W, H);

    const n = nAll;
    if (n < 2) { // waiting for tape
      ctx.fillStyle = C.dim;
      ctx.font = '11px Consolas, "Courier New", monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(snap.seeded ? 'awaiting live tape\u2026' : 'seeding 5 min of 1s candles\u2026', W / 2, H / 2);
      return;
    }

    const plotW = W - PAD_R, plotH = H - PAD_T - PAD_B;
    const t = snap.t, o = snap.o, h = snap.h, l = snap.l, c = snap.c;

    // visible window: newest at the right edge; ~4 px per candle keeps
    // candlesticks readable (like real terminals). Line mode only survives
    // on ultra-narrow panels where even 2.2 px/candle is impossible.
    const PITCH = 4;
    let i0 = 0;
    const want = Math.max(24, Math.floor(plotW / PITCH));
    if (n > want) i0 = n - want;
    const cnt = n - i0;
    const slot = plotW / cnt;
    const lineMode = slot < 2.2;

    // price range
    let lo = Infinity, hi = -Infinity;
    for (let i = i0; i < n; i++) { if (l[i] < lo) lo = l[i]; if (h[i] > hi) hi = h[i]; }
    if (meta.price != null && isFinite(meta.price)) {
      if (meta.price < lo) lo = meta.price;
      if (meta.price > hi) hi = meta.price;
    }
    const pad = (hi - lo) * 0.09 || Math.abs(hi) * 0.0004 || 1;
    lo -= pad; hi += pad;
    const yOf = (p) => PAD_T + ((hi - p) / (hi - lo)) * plotH;
    const xOf = (i) => (i - i0) * slot + slot * 0.5;

    /* grid + right price scale */
    ctx.font = '10px Consolas, "Courier New", monospace';
    ctx.textBaseline = 'middle';
    const step = niceStep((hi - lo) / 4);
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.fillStyle = C.dim;
    ctx.textAlign = 'left';
    ctx.lineWidth = 1;
    for (let p = Math.ceil(lo / step) * step; p < hi; p += step) {
      const y = Math.round(yOf(p)) + 0.5;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(plotW, y); ctx.stroke();
      ctx.fillText(fmtP(p), plotW + 5, y);
    }

    /* time ticks (every 30 s, snapped to nearest candle index) */
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    const t0 = t[i0], t1 = t[n - 1];
    for (let tt = Math.ceil(t0 / 30000) * 30000; tt <= t1; tt += 30000) {
      if (tt === t0 && i0 !== 0) continue; // skip a label jammed on the left edge
      const x = xOf(idxOfT(t, tt, i0, n));
      if (x < 18 || x > plotW - 18) continue;
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.beginPath(); ctx.moveTo(x + 0.5, H - PAD_B); ctx.lineTo(x + 0.5, H - PAD_B + 3); ctx.stroke();
      ctx.fillStyle = C.dim;
      ctx.fillText(fmtClock(tt), x, H - 4);
    }

    /* series */
    if (lineMode) {
      const up = c[n - 1] >= c[i0];
      const col = up ? C.up : C.down;
      ctx.beginPath();
      for (let i = i0; i < n; i++) {
        const x = xOf(i), y = yOf(c[i]);
        i === i0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = col; ctx.lineWidth = 1.6; ctx.lineJoin = 'round'; ctx.stroke();
      // soft area fill under the line
      const grad = ctx.createLinearGradient(0, PAD_T, 0, PAD_T + plotH);
      grad.addColorStop(0, up ? 'rgba(38,166,154,0.20)' : 'rgba(239,83,80,0.20)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.lineTo(xOf(n - 1), PAD_T + plotH); ctx.lineTo(xOf(i0), PAD_T + plotH); ctx.closePath();
      ctx.fillStyle = grad; ctx.fill();
    } else {
      const bw = Math.max(1, Math.min(11, slot * 0.62));
      for (let i = i0; i < n; i++) {
        const x = xOf(i);
        const up = c[i] >= o[i];
        ctx.fillStyle = up ? C.up : C.down;
        // wick
        const yH = yOf(h[i]), yL = yOf(l[i]);
        ctx.fillRect(x - 0.5, yH, 1, Math.max(1, yL - yH));
        // body
        const yO = yOf(o[i]), yC = yOf(c[i]);
        const top = Math.min(yO, yC);
        ctx.fillRect(x - bw / 2, top, bw, Math.max(1, Math.abs(yC - yO)));
      }
    }

    /* whale / side dots (gold = buy side color, jade = sell side color) */
    dots = dots.filter((d) => now - d.ts < DOT_TTL && d.ts >= t0 - 1000);
    for (const d of dots) {
      const x = xOf(idxOfT(t, Math.floor(d.ts / 1000) * 1000, i0, n));
      const y = yOf(Math.min(hi - 1, Math.max(lo + 1, d.price)));
      const age = (now - d.ts) / DOT_TTL;
      const a = Math.max(0, 1 - age);
      const r = 3 + Math.min(3, (d.notional / 250000) * 3);
      ctx.globalAlpha = 0.22 * a;
      ctx.beginPath(); ctx.arc(x, y, r + 2.5, 0, 6.284);
      ctx.fillStyle = d.side === 'buy' ? C.buy : C.sell;
      ctx.fill();
      ctx.globalAlpha = a;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.284);
      ctx.fillStyle = d.side === 'buy' ? C.buy : C.sell;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    /* last-price line + right tag */
    const lp = (meta.price != null && isFinite(meta.price)) ? meta.price : c[n - 1];
    const lastUp = lp >= (o[n - 1] != null ? o[n - 1] : lp);
    const col = lastUp ? C.up : C.down;
    const ly = Math.min(PAD_T + plotH, Math.max(PAD_T, yOf(lp)));
    ctx.setLineDash([4, 3]);
    ctx.strokeStyle = col; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, ly + 0.5); ctx.lineTo(plotW, ly + 0.5); ctx.stroke();
    ctx.setLineDash([]);
    // tag
    const label = lp >= 1000
      ? lp.toLocaleString('en-US', { maximumFractionDigits: 0 })
      : lp.toFixed(2);
    ctx.font = 'bold 10px Consolas, "Courier New", monospace';
    const tw = ctx.measureText(label).width;
    const th = 15;
    const ty = Math.min(PAD_T + plotH - th / 2, Math.max(PAD_T + th / 2, ly));
    ctx.fillStyle = col;
    roundRect(ctx, plotW + 2, ty - th / 2, Math.min(PAD_R - 4, tw + 8), th, 3);
    ctx.fill();
    ctx.fillStyle = '#05060F';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, plotW + 2 + Math.min(PAD_R - 4, tw + 8) / 2, ty + 0.5);

    /* stale wash */
    if (meta.status !== 'demo' && now - lastFreshAt > STALE_MS) {
      ctx.fillStyle = C.bg;
      ctx.fillRect(0, 0, plotW, H);
    }
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  /* ---------- public API ---------- */
  function update(nextSnap, nextMeta) {
    if (!nextSnap) return;
    snap = nextSnap;
    if (nextMeta) meta = nextMeta;
    if (snap.rev !== lastRev) { lastRev = snap.rev; lastFreshAt = Date.now(); }
    const priceChanged = meta.price !== lastPrice;
    lastPrice = meta.price;
    // redraw when data moved, price moved, or a status override is pending
    if (priceChanged || stOverride || nextMeta) draw();
    stOverride = null;
  }

  function notifyStatus(st) {
    if (!st) return;
    stOverride = st;
    meta.status = st.status;
    meta.mode = st.mode;
    draw();
    stOverride = null;
  }

  function trade(info) {
    if (!info || !isFinite(info.price) || !isFinite(info.notional)) return;
    dots.push({ ts: info.ts || Date.now(), price: info.price, side: info.side, notional: info.notional });
    if (dots.length > 40) dots.shift();
  }

  function destroy() { ro.disconnect(); }

  measure();
  return { update, notifyStatus, trade, destroy };
}

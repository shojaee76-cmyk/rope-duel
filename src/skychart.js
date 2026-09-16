// src/skychart.js — the live 1s candle tape, drawn INTO the night sky.
//
// The DOM panel sat on top of the world and read as a widget stapled to the
// screen. The tape is what the whole duel is fed by, so it is drawn into the
// scene: one wide light ribbon floating high behind the arena, above the wall and
// the cats, mapped onto a single plane.
//
// LAYOUT IS IN SCREEN SPACE, placement is in the world. A fixed world-size panel
// is illegible on a phone and collides with the HUD on a wide monitor, so the
// panel is defined as a rectangle in viewport fractions, then unprojected onto
// its own z plane: the same free band (below the pressure meter, above the cats'
// heads) on any viewport, and the canvas is sized so its pixels land ~1:1 on
// screen (that is what keeps the labels legible instead of smeared).
//
// Three treatments (?sky=slab|aurora|stars), same data, different ink:
//   slab   - a glass ledger: hairline gold frame with corner brackets, inner
//            grid, right-hand price scale, clock ticks, candles + last-price tag
//   aurora - no frame: candles as light columns fading upward, the close as a
//            glowing ribbon, the grid barely there
//   stars  - a constellation: closes as small stars joined by hairlines, wicks as
//            faint vertical hairlines, the last price a bright star
//
// Redraws are throttled to 2.5 Hz (candles are 1 s each; the texture upload is the
// real cost) and gated on the feed's rev/price changes, so a quiet tape is free.
// stats() exposes the paint state so a headless harness can assert the sky really
// carries ink instead of trusting a screenshot.
import * as THREE from '../vendor/three.module.js';
import { CAT_A, SIDE } from './palette.js';

const GOLD = CAT_A.goldPrimary;

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 64, 2, 128, 64, 126);
  grd.addColorStop(0, 'rgba(255,255,255,0.5)');
  grd.addColorStop(0.45, 'rgba(255,255,255,0.13)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// fonts, in SCREEN pixels (converted to texture px by S() from the live layout):
// sized for a ~400px-wide panel, where the cap height of a 12px digit is ~8px.
const F = { title: 18, sub: 12.5, chip: 12.5, axis: 13, time: 12, tag: 14, msg: 13 };
const PAD = { r: 96, t: 40, b: 26 };

/* Screen-space bands for the panel.
 * The narrow band above the cats looks roomy until the hats are measured: a head
 * pivot projects at ~0.42 of the frame and the hat reaches ~0.25 world units above
 * it, which is ~0.08 of the frame at the cats' distance - so a full-width band
 * clear of both the pressure meter (ends at 0.22) and the hats (top ~0.335) is
 * only ~0.11 of the frame tall. That is a ribbon, not a chart, and rendered it
 * reads as a HUD strip pasted on the sky. So the panel sits in the upper-right
 * quadrant instead, where there is real vertical room (below the status chip,
 * right of the meter, clear of the right fighter plate and of both hats), shaped
 * ~2.4:1 so the candles and labels are actually readable. */
const RECTS = {
  wide: { l: 0.672, r: 0.985, t: 0.104, b: 0.348 },
  narrow: { l: 0.045, r: 0.955, t: 0.175, b: 0.30 },
};
/* A panel floating perfectly axis-aligned and crisply sharp is the classic tell
 * of a screen overlay (the review called it "a UI widget pasted on top"), so the
 * pane hangs at a slight angle instead: enough yaw for real perspective and a
 * touch of roll, the way a lit board would hang in the air. */
const TILT = { x: 0.022, y: -0.062, z: 0.013 };

export function createSkyChart(scene, camera, opts = {}) {
  const Z = opts.z != null ? opts.z : -24;
  const REDRAW_MS = opts.redrawMs || 400;
  const renderer = opts.renderer;

  /* ---------- texture + meshes ---------- */
  const canvas = document.createElement('canvas');
  canvas.width = 1000; canvas.height = 144;
  const ctx = canvas.getContext('2d');

  let k = 1;                             // screen px per texture px (from layout)
  const S = (screenPx) => screenPx / k;  // screen px -> texture px

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = opts.anisotropy || 4;

  // MeshBasic + fog:false - the scene fog would wash the panel out at 24 units,
  // the same trap the skyline/vista planes hit in v3
  const mat = new THREE.MeshBasicMaterial({
    map: tex, transparent: true, depthWrite: false, depthTest: true,
    fog: false, side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(30, 4.4), mat);
  mesh.position.set(0, 10.8, Z);
  mesh.renderOrder = 0;
  mesh.frustumCulled = false;

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(36, 7),
    new THREE.MeshBasicMaterial({
      map: glowTexture(), transparent: true, blending: THREE.AdditiveBlending,
      depthWrite: false, fog: false, opacity: 0.16,
    })
  );
  glow.position.copy(mesh.position);
  glow.renderOrder = -1;

  const group = new THREE.Group();
  group.add(glow, mesh);
  scene.add(group);

  let variant = opts.variant || 'slab';
  const VARIANTS = ['slab', 'aurora', 'stars'];
  let laidOutFor = '';

  /* ---------- layout: viewport rect -> world plane ---------- */
  // world position of a screen fraction on the panel's own z plane
  const _v = new THREE.Vector3();
  function worldAtFrac(fx, fy) {
    _v.set(fx * 2 - 1, -(fy * 2 - 1), 0.5).unproject(camera);
    _v.sub(camera.position).normalize();
    const t = (Z - camera.position.z) / _v.z;
    return { x: camera.position.x + _v.x * t, y: camera.position.y + _v.y * t };
  }
  function layout() {
    const vw = (renderer && renderer.domElement.clientWidth) || window.innerWidth || 1280;
    const vh = (renderer && renderer.domElement.clientHeight) || window.innerHeight || 800;
    // the camera's world matrix is only built by the renderer, and this runs at
    // boot before the first frame: without this the unprojection below reads an
    // identity view and the panel lands in the wrong band (measured: it sat at
    // screen y 0.35-0.53 instead of 0.235-0.415)
    camera.updateMatrixWorld(true);
    // the scene owns the camera's aspect, but our resize listener can run before
    // its handler: unprojecting with the previous window shape puts the panel
    // clear off-screen (measured at 390px wide after a 1280px window: NDC x
    // 1.03..2.93). Match it up here so the layout is self-sufficient.
    if (Math.abs(camera.aspect - vw / vh) > 1e-3) {
      camera.aspect = vw / vh;
      camera.updateProjectionMatrix();
    }
    const rect = vw < 700 ? RECTS.narrow : RECTS.wide;
    laidOutFor = vw + 'x' + vh;
    const rectWpx = Math.max(120, (rect.r - rect.l) * vw);
    const rectHpx = Math.max(60, (rect.b - rect.t) * vh);

    // canvas resolution: track the on-screen size (~1:1), clamped so a phone is
    // not blurry and a 4K window is not a megabyte per texture upload
    const q = Math.min(1.7, Math.max(0.5, 1000 / rectWpx));
    const cw = Math.round(rectWpx * q), chh = Math.round(rectHpx * q);
    if (cw !== canvas.width || chh !== canvas.height) {
      canvas.width = cw; canvas.height = chh;
      tex.dispose();
      tex.needsUpdate = true;
    }
    k = rectWpx / cw;                    // screen px per texture px

    const tl = worldAtFrac(rect.l, rect.t), br = worldAtFrac(rect.r, rect.b);
    const w = Math.abs(br.x - tl.x), h = Math.abs(br.y - tl.y);
    mesh.geometry.dispose();
    mesh.geometry = new THREE.PlaneGeometry(w, h);
    mesh.position.set((tl.x + br.x) / 2, (tl.y + br.y) / 2, Z);
    mesh.rotation.set(TILT.x, TILT.y, TILT.z);
    glow.geometry.dispose();
    glow.geometry = new THREE.PlaneGeometry(w * 1.24, h * 2.1);
    glow.position.copy(mesh.position);
    glow.rotation.copy(mesh.rotation);
    glow.material.opacity = variant === 'slab' ? 0.2 : variant === 'aurora' ? 0.13 : 0.08;
  }

  /* ---------- state ---------- */
  let snap = { rev: 0, seeded: false, count: 0, t: [], o: [], h: [], l: [], c: [] };
  let meta = { price: null, status: '', mode: '', providerLabel: '' };
  let stOverride = null;
  let dots = [];
  let lastRev = -1, lastPrice = null, lastDraw = 0, draws = 0;
  let lastFreshAt = Date.now();
  const STALE_MS = 8000, DOT_TTL = 9000;

  function chipState() {
    if (!snap.count) return { txt: 'LOADING\u2026', col: '#8F98A3', key: 'load' };
    const m = stOverride || meta;
    if (m.mode === 'demo') return { txt: 'SIM TAPE', col: GOLD, key: 'demo' };
    const p = m.providerLabel ? String(m.providerLabel).toUpperCase() : 'SPOT';
    if (m.status === 'open') {
      // state only: the venue name stays in the top-right status chip, where it
      // was already telling the truth, so it is not printed twice in one corner
      return (Date.now() - lastFreshAt > STALE_MS)
        ? { txt: 'STALE FEED', col: SIDE.SELL_BRIGHT, key: 'stale' }
        : { txt: 'LIVE', col: SIDE.BUY_BRIGHT, key: 'live' };
    }
    if (m.status === 'connecting' || m.status === 'backoff') return { txt: 'RECONNECTING\u2026', col: GOLD, key: 'recon' };
    return { txt: 'OFFLINE', col: '#8F98A3', key: 'off' };
  }

  const fmtP = (p) => (p >= 1000 ? Math.round(p).toLocaleString('en-US') : p.toPrecision(5));
  function niceStep(raw) {
    if (!(raw > 0)) return 1;
    const p10 = Math.pow(10, Math.floor(Math.log10(raw)));
    for (const m of [1, 2, 2.5, 5, 10]) if (raw <= m * p10) return m * p10;
    return 10 * p10;
  }
  const fmtClock = (ms) => new Date(ms).toTimeString().slice(0, 8);
  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  /* ---------- the draw ---------- */
  function draw() {
    const now = Date.now();
    lastDraw = now;
    draws++;
    const W = canvas.width, H = canvas.height;
    const AUR = variant === 'aurora', STAR = variant === 'stars';
    const chipNow = chipState();
    const PAD_R = S(PAD.r), PAD_T = S(PAD.t), PAD_B = S(PAD.b);
    const plotW = W - PAD_R, plotH = H - PAD_T - PAD_B;
    ctx.clearRect(0, 0, W, H);

    /* panel body: a backlit pane in the sky, feathered at every edge, with gold
     * rules instead of a hard frame - a 1px rectangle over stars reads as a HUD
     * sticker, which is exactly what the review called out */
    if (!AUR && !STAR) {
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, 'rgba(8,10,24,0)');
      g.addColorStop(0.16, 'rgba(8,10,24,0.44)');
      g.addColorStop(0.74, 'rgba(7,9,22,0.38)');
      g.addColorStop(1, 'rgba(7,9,22,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      // feather the left and right edges so there is no vertical cut
      const F = S(52);
      ctx.globalCompositeOperation = 'destination-out';
      const el = ctx.createLinearGradient(0, 0, F, 0);
      el.addColorStop(0, 'rgba(0,0,0,1)');
      el.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = el; ctx.fillRect(0, 0, F, H);
      const er = ctx.createLinearGradient(W - F, 0, W, 0);
      er.addColorStop(0, 'rgba(0,0,0,0)');
      er.addColorStop(1, 'rgba(0,0,0,1)');
      ctx.fillStyle = er; ctx.fillRect(W - F, 0, F, H);
      ctx.globalCompositeOperation = 'source-over';
      // lit rules top and bottom, fading at the ends
      const rule = ctx.createLinearGradient(0, 0, W, 0);
      rule.addColorStop(0, 'rgba(245,197,66,0)');
      rule.addColorStop(0.1, 'rgba(245,197,66,0.5)');
      rule.addColorStop(0.9, 'rgba(245,197,66,0.5)');
      rule.addColorStop(1, 'rgba(245,197,66,0)');
      ctx.strokeStyle = rule;
      ctx.lineWidth = Math.max(1, S(1.2));
      ctx.beginPath(); ctx.moveTo(S(6), S(5) + 0.5); ctx.lineTo(W - S(6), S(5) + 0.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(S(6), H - S(4) + 0.5); ctx.lineTo(W - S(6), H - S(4) + 0.5); ctx.stroke();
      // small corner ticks (gold): instrument, not sticker
      ctx.strokeStyle = 'rgba(245,197,66,0.75)';
      ctx.lineWidth = Math.max(1.2, S(1.8));
      const B = S(11);
      for (const [cx, cy, sx, sy] of [[S(6), S(5), 1, 1], [W - S(6), S(5), -1, 1], [S(6), H - S(4), 1, -1], [W - S(6), H - S(4), -1, -1]]) {
        ctx.beginPath();
        ctx.moveTo(cx + sx * B, cy); ctx.lineTo(cx, cy); ctx.lineTo(cx, cy + sy * B);
        ctx.stroke();
      }
    } else if (AUR) {
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, 'rgba(120,150,200,0.055)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    /* head: title left, chip right. The venue name deliberately lives ONLY in the
     * top-right status chip: showing "LIVE · BINANCE" twice in one corner read as
     * crowding in review. */
    ctx.textBaseline = 'middle';
    ctx.font = `700 ${S(F.title)}px "Space Grotesk", Consolas, monospace`;
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(242,238,227,0.92)';
    ctx.fillText('BTC / USDT', S(16), S(21));
    ctx.font = `500 ${S(F.sub)}px "Space Grotesk", Consolas, monospace`;
    ctx.fillStyle = 'rgba(176,182,210,0.95)';
    ctx.fillText('1 s CANDLES', S(16) + ctx.measureText('BTC / USDT').width + S(84), S(22));
    ctx.font = `700 ${S(F.chip)}px "Space Grotesk", Consolas, monospace`;
    const ctxt = chipNow.txt;
    const cw2 = ctx.measureText(ctxt).width + S(38), cx0 = W - S(14) - cw2, cy0 = S(21) - S(12);
    ctx.fillStyle = 'rgba(6,8,18,0.45)';
    roundRect(ctx, cx0, cy0, cw2, S(24), S(12)); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    roundRect(ctx, cx0 + 0.5, cy0 + 0.5, cw2 - 1, S(24) - 1, S(12)); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx0 + S(12), cy0 + S(12), S(3.6), 0, 6.284);
    ctx.fillStyle = chipNow.col; ctx.fill();
    ctx.fillStyle = chipNow.col;
    ctx.fillText(ctxt, cx0 + S(22), cy0 + S(13));

    const nAll = snap.count | 0;
    if (nAll < 2) {
      ctx.fillStyle = 'rgba(146,152,181,0.8)';
      ctx.font = `500 ${S(F.msg)}px "Space Grotesk", Consolas, monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(snap.seeded ? 'awaiting live tape\u2026' : 'seeding 5 min of 1 s candles\u2026', W / 2, PAD_T + plotH / 2);
      tex.needsUpdate = true;
      return;
    }

    const t = snap.t, o = snap.o, h = snap.h, l = snap.l, c = snap.c;
    // 7.5 screen px per candle: a legible bar with a body and a wick. At the old
    // 4 px the review saw "a stepped line, not candles", and a 1 s tape does not
    // need 5 minutes of history to tell the story: ~37 candles is the last 37 s.
    const PITCH = Math.max(3, S(7.5));
    // keep the right end of the plot clear of the price scale/tag
    const mapW = plotW - S(26);
    const want = Math.max(16, Math.floor(mapW / PITCH));
    const i0 = nAll > want ? nAll - want : 0;
    const n = nAll - i0;
    const slot = mapW / (n || 1);
    const xOf = (i) => (i - i0) * slot + slot * 0.5;

    let lo = Infinity, hi = -Infinity;
    for (let i = i0; i < nAll; i++) { if (l[i] < lo) lo = l[i]; if (h[i] > hi) hi = h[i]; }
    if (meta.price != null && isFinite(meta.price)) {
      if (meta.price < lo) lo = meta.price;
      if (meta.price > hi) hi = meta.price;
    }
    const padp = (hi - lo) * 0.1 || Math.abs(hi) * 0.0004 || 1;
    lo -= padp; hi += padp;
    const yOf = (p) => PAD_T + ((hi - p) / (hi - lo)) * plotH;

    /* grid + right price scale */
    const step = niceStep((hi - lo) / 3);
    ctx.font = `500 ${S(F.axis)}px "Space Grotesk", Consolas, monospace`;
    for (let p = Math.ceil(lo / step) * step; p < hi; p += step) {
      const y = Math.round(yOf(p)) + 0.5;
      ctx.strokeStyle = AUR || STAR ? 'rgba(255,255,255,0.045)' : 'rgba(255,255,255,0.10)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(S(10), y); ctx.lineTo(mapW + S(26), y); ctx.stroke();
      if (!STAR) {
        ctx.fillStyle = 'rgba(170,176,203,0.85)';
        ctx.textAlign = 'left';
        ctx.fillText(fmtP(p), plotW + S(10), y);
      }
    }

    /* time ticks: every 15 s, since the window is only ~40 s wide */
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    const t0 = t[i0], t1 = t[nAll - 1];
    for (let tt = Math.ceil(t0 / 15000) * 15000; tt <= t1; tt += 15000) {
      let a = i0, b2 = nAll - 1;
      while (a < b2) { const m = (a + b2) >> 1; if (t[m] < tt) a = m + 1; else b2 = m; }
      const x = xOf(a);
      if (x < S(24) || x > mapW - S(24)) continue;
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.beginPath(); ctx.moveTo(x + 0.5, H - PAD_B); ctx.lineTo(x + 0.5, H - PAD_B + S(4)); ctx.stroke();
      ctx.fillStyle = 'rgba(186,192,218,0.92)';
      ctx.font = `500 ${S(F.time)}px "Space Grotesk", Consolas, monospace`;
      ctx.fillText(fmtClock(tt), x, H - S(6));
    }

    /* series */
    if (STAR) {
      ctx.strokeStyle = 'rgba(255,255,255,0.10)';
      ctx.lineWidth = 1;
      for (let i = i0; i < nAll; i++) {
        const x = xOf(i);
        ctx.beginPath(); ctx.moveTo(x, yOf(h[i])); ctx.lineTo(x, yOf(l[i])); ctx.stroke();
      }
      ctx.beginPath();
      for (let i = i0; i < nAll; i++) {
        const x = xOf(i), y = yOf(c[i]);
        i === i0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(190,214,255,0.22)';
      ctx.lineWidth = Math.max(1, S(1.2));
      ctx.stroke();
      for (let i = i0; i < nAll; i++) {
        const col = c[i] >= o[i] ? SIDE.BUY_BRIGHT : SIDE.SELL_BRIGHT;
        const x = xOf(i), y = yOf(c[i]);
        ctx.globalAlpha = 0.85;
        ctx.beginPath(); ctx.arc(x, y, Math.max(1, S(1.8)), 0, 6.284);
        ctx.fillStyle = col; ctx.fill();
        ctx.globalAlpha = 0.16;
        ctx.beginPath(); ctx.arc(x, y, Math.max(2.5, S(4.6)), 0, 6.284);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    } else if (AUR) {
      for (let i = i0; i < nAll; i++) {
        const x = xOf(i), up = c[i] >= o[i];
        const col = up ? SIDE.BUY_BRIGHT : SIDE.SELL_BRIGHT;
        const yC = yOf(c[i]), yH = yOf(h[i]), yO = yOf(o[i]);
        const top = Math.min(yC, yH);
        const g = ctx.createLinearGradient(0, top, 0, yC + S(2));
        g.addColorStop(0, 'rgba(255,255,255,0)');
        g.addColorStop(0.75, col);
        g.addColorStop(1, '#ffffff');
        ctx.fillStyle = g;
        ctx.fillRect(x - S(1.2), top, S(2.4), Math.max(S(2), yC - top + S(2)));
        ctx.globalAlpha = 1;
        ctx.fillStyle = col;
        ctx.fillRect(x - S(2.4), Math.min(yO, yC), S(4.8), Math.max(S(1.8), Math.abs(yC - yO)));
      }
      const gg = ctx.createLinearGradient(0, PAD_T + plotH * 0.3, 0, H);
      gg.addColorStop(0, 'rgba(120,180,255,0.18)');
      gg.addColorStop(1, 'rgba(120,180,255,0)');
      ctx.beginPath();
      for (let i = i0; i < nAll; i++) { const x = xOf(i), y = yOf(c[i]); i === i0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
      ctx.lineTo(plotW, H + 40); ctx.lineTo(xOf(i0) - S(20), H + 40); ctx.closePath();
      ctx.fillStyle = gg; ctx.fill();
    } else {
      const bw = Math.max(1.5, Math.min(S(13), slot * 0.62));
      for (let i = i0; i < nAll; i++) {
        const x = xOf(i), up = c[i] >= o[i];
        ctx.fillStyle = up ? SIDE.BUY_BRIGHT : SIDE.SELL_BRIGHT;
        ctx.fillRect(x - S(0.7), yOf(h[i]), Math.max(1, S(1.4)), Math.max(S(1.4), yOf(l[i]) - yOf(h[i])));
        const yO = yOf(o[i]), yC = yOf(c[i]);
        ctx.fillRect(x - bw / 2, Math.min(yO, yC), bw, Math.max(S(1.4), Math.abs(yC - yO)));
      }
    }

    /* the data emits light: a soft halo along the close path so the pane reads as
     * a lit surface in the sky rather than a dark plate laid over it (review:
     * "no light integration" - the moon glowed, the chart did not) */
    if (!STAR) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      for (const [wd, al] of [[S(9), 0.07], [S(4), 0.11]]) {
        ctx.beginPath();
        for (let i = i0; i < nAll; i++) { const x = xOf(i), y = yOf(c[i]); i === i0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
        ctx.strokeStyle = `rgba(150,205,255,${al})`;
        ctx.lineWidth = wd;
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      ctx.restore();
    }

    /* whale dots */
    dots = dots.filter((d) => now - d.ts < DOT_TTL && d.ts >= t0 - 1000);
    for (const d of dots) {
      let a = i0, b2 = nAll - 1;
      const tt = Math.floor(d.ts / 1000) * 1000;
      while (a < b2) { const m = (a + b2) >> 1; if (t[m] < tt) a = m + 1; else b2 = m; }
      const x = xOf(a);
      const y = yOf(Math.min(hi - 1, Math.max(lo + 1, d.price)));
      const al = Math.max(0, 1 - (now - d.ts) / DOT_TTL);
      const col = d.side === 'buy' ? SIDE.BUY : SIDE.SELL;
      ctx.globalAlpha = 0.25 * al;
      ctx.beginPath(); ctx.arc(x, y, S(8) + Math.min(S(7), (d.notional / 250000) * S(7)), 0, 6.284);
      ctx.fillStyle = col; ctx.fill();
      ctx.globalAlpha = al;
      ctx.beginPath(); ctx.arc(x, y, S(3) + Math.min(S(2.5), (d.notional / 250000) * S(2.5)), 0, 6.284);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    /* last price */
    const lp = (meta.price != null && isFinite(meta.price)) ? meta.price : c[nAll - 1];
    const col = lp >= (o[nAll - 1] != null ? o[nAll - 1] : lp) ? SIDE.BUY_BRIGHT : SIDE.SELL_BRIGHT;
    const ly = Math.min(PAD_T + plotH, Math.max(PAD_T, yOf(lp)));
    const lx = xOf(nAll - 1);
    if (STAR) {
      ctx.globalAlpha = 0.45;
      ctx.beginPath(); ctx.arc(lx, ly, S(10), 0, 6.284); ctx.fillStyle = col; ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = col; ctx.lineWidth = Math.max(1, S(1.6));
      ctx.beginPath();
      ctx.moveTo(lx - S(9), ly); ctx.lineTo(lx + S(9), ly);
      ctx.moveTo(lx, ly - S(9)); ctx.lineTo(lx, ly + S(9));
      ctx.stroke();
      ctx.beginPath(); ctx.arc(lx, ly, Math.max(1.5, S(3)), 0, 6.284); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    } else {
      ctx.setLineDash([S(6), S(4)]);
      ctx.strokeStyle = col; ctx.lineWidth = Math.max(1, S(1.2));
      ctx.beginPath(); ctx.moveTo(S(10), ly + 0.5); ctx.lineTo(plotW, ly + 0.5); ctx.stroke();
      ctx.setLineDash([]);
    }

    /* price tag in the right gutter */
    const label = lp >= 1000 ? Math.round(lp).toLocaleString('en-US') : lp.toFixed(2);
    ctx.font = `700 ${S(F.tag)}px "Space Grotesk", Consolas, monospace`;
    const lw = ctx.measureText(label).width + S(18);
    const th = S(22), ty = Math.min(PAD_T + plotH - th / 2, Math.max(PAD_T + th / 2, ly));
    ctx.fillStyle = col;
    roundRect(ctx, plotW + S(6), ty - th / 2, lw, th, S(6)); ctx.fill();
    ctx.fillStyle = '#05060F';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, plotW + S(6) + lw / 2, ty + 1);

    /* stale wash */
    if ((stOverride || meta).mode !== 'demo' && now - lastFreshAt > STALE_MS) {
      ctx.fillStyle = 'rgba(5,6,15,0.45)';
      ctx.fillRect(0, 0, W, H);
    }

    tex.needsUpdate = true;
  }

  /* ---------- public API ---------- */
  function update(nextSnap, nextMeta) {
    if (!nextSnap) return;
    // an embedded pane (desktop app preview) can change size without a window
    // resize event: re-lay out when the viewport it was built for has moved on
    const vw = (renderer && renderer.domElement.clientWidth) || window.innerWidth || 1280;
    const vh = (renderer && renderer.domElement.clientHeight) || window.innerHeight || 800;
    if (vw + 'x' + vh !== laidOutFor) { layout(); draw(); }
    snap = nextSnap;
    if (nextMeta) meta = nextMeta;
    if (snap.rev !== lastRev) { lastRev = snap.rev; lastFreshAt = Date.now(); }
    const priceChanged = meta.price !== lastPrice;
    lastPrice = meta.price;
    if (Date.now() - lastDraw >= REDRAW_MS && (priceChanged || stOverride || nextMeta)) draw();
  }

  function notifyStatus(st) {
    if (!st) return;
    stOverride = st;
    meta.status = st.status;
    meta.mode = st.mode;
    if (st.providerLabel) meta.providerLabel = st.providerLabel;
    draw();
    stOverride = null;
  }

  function trade(info) {
    if (!info || !isFinite(info.price) || !isFinite(info.notional)) return;
    dots.push({ ts: info.ts || Date.now(), price: info.price, side: info.side, notional: info.notional });
    if (dots.length > 40) dots.shift();
  }

  function setVariant(v) {
    if (!VARIANTS.includes(v)) return false;
    variant = v;
    glow.material.opacity = v === 'slab' ? 0.2 : v === 'aurora' ? 0.13 : 0.08;
    if (typeof draw === 'function') draw();
    return true;
  }

  function stats() {
    const chip = chipState();
    const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let ink = 0;
    for (let i = 3; i < d.length; i += 4 * 31) if (d[i] > 12) ink++;
    return {
      variant, draws, ink, candles: snap.count | 0, rev: snap.rev | 0, seeded: !!snap.seeded,
      chip: chip.key, chipText: chip.txt, lastPrice: meta.price,
      stale: (stOverride || meta).mode !== 'demo' && Date.now() - lastFreshAt > STALE_MS,
      textureW: canvas.width, textureH: canvas.height, screenScale: +k.toFixed(3),
      plane: [+mesh.geometry.parameters.width.toFixed(2), +mesh.geometry.parameters.height.toFixed(2)],
      position: [+mesh.position.x.toFixed(2), +mesh.position.y.toFixed(2), +mesh.position.z.toFixed(2)],
    };
  }

  function dispose() {
    window.removeEventListener('resize', onResize);
    scene.remove(group);
    mesh.geometry.dispose(); mat.dispose(); tex.dispose();
    glow.geometry.dispose(); glow.material.dispose(); glow.material.map.dispose();
  }
  function onResize() { requestAnimationFrame(() => { layout(); draw(); }); }
  window.addEventListener('resize', onResize);

  layout();
  draw();
  setVariant(variant);

  // the panel uses the page's display font: repaint once it has loaded
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => draw()).catch(() => {});

  return { update, notifyStatus, trade, stats, setVariant, relayout: onResize, dispose, mesh, glow, group, get variant() { return variant; } };
}

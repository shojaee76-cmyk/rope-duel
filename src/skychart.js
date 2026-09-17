// src/skychart.js — the live 1s candle tape, mounted ON THE BACK WALL.
// It used to be a screen-space panel unprojected high into the sky (x
// 0.672-0.985 of the frame). It is now a world object: a plane hung on the
// arena's back wall, inside the walnut tape board that arena.js mounts on the
// blanked wall centre (wall x +-3.45, y 1.67..4.17). v18.1: the board hangs
// OFF the stone on cleats (standoff 0.10, proud of wall face AND coping), so
// the chart plane rides the
// board's face via userData.tapeBoard.z instead of a hardcoded depth. Because
// it is world-fixed it drifts naturally in screen space as the
// camera follows the fight, exactly like any other thing on the wall.
//
// The canvas is still sized so its pixels land ~1:1 on screen (that is what
// keeps the labels legible instead of smeared), but the scale now comes from
// the board's PROJECTED size, not a viewport rectangle: k = screen px per
// texture px, fonts are authored in screen px, S() converts. On narrow
// viewports the board fits itself to 92% of the visible wall slice (the wall
// is only partially in frame on a phone) and the walnut frame shows around it.
//
// Treatments (?sky=slab|aurora|stars), same data, different ink:
//   slab   - a wall-mounted tape screen: dark glass with a gold hairline,
//            corner ticks, inner grid, right price scale, clock ticks,
//            candles + last-price tag
//   aurora - no backdrop: candles as light columns fading upward
//   stars  - a constellation: closes as stars joined by hairlines
//
// Redraws are throttled to 2.5 Hz (candles are 1 s each; the texture upload is
// the real cost) and gated on the feed's rev/price changes, so a quiet tape is
// free. stats() exposes the paint state so a headless harness can assert the
// board really carries ink instead of trusting a screenshot.
import * as THREE from '../vendor/three.module.js';
import { CAT_A, SIDE } from './palette.js';

const GOLD = CAT_A.goldPrimary;

// The wall frame (world units). arena.js mounts the walnut board (8.0 x 3.17
// at y 3.245, centre z -6.76, front face -6.67, hung off the stone on cleats);
// the chart plane rides the board's face (board.z + 0.09) via the tapeBoard
// prop from scene.js. The constants below are the no-board fallback only.
const WALL = { cx: 0, cy: 3.245, w: 7.6, h: 2.74, z: -6.67 };

// fonts, in SCREEN pixels (converted to texture px by S() from the live layout):
// sized for a ~560px-wide screen where a 13px digit stays crisp. v18: bumped
// one step after the vision review called the header/axis text small.
const F = { title: 17, sub: 12, chip: 11, axis: 11.5, time: 11, tag: 13.5, msg: 12 };
const PAD = { r: 74, t: 30, b: 20 };

export function createSkyChart(scene, camera, opts = {}) {
  const REDRAW_MS = opts.redrawMs || 400;
  const renderer = opts.renderer;
  const _pv = new THREE.Vector3();       // scratch for the stats() screen rect

  /* ---------- texture + mesh ---------- */
  const canvas = document.createElement('canvas');
  canvas.width = 760; canvas.height = 276;
  const ctx = canvas.getContext('2d');

  let k = 1;                             // screen px per texture px (from layout)
  const S = (screenPx) => screenPx / k;  // screen px -> texture px

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = opts.anisotropy || 4;

  // MeshBasic + fog:false - the scene fog would wash the board out at 13 units
  const mat = new THREE.MeshBasicMaterial({
    map: tex, transparent: true, depthWrite: false, depthTest: true,
    fog: false, side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(WALL.w, WALL.h), mat);
  mesh.position.set(WALL.cx, WALL.cy, WALL.z);
  mesh.renderOrder = 0;
  mesh.frustumCulled = false;

  const group = new THREE.Group();
  group.add(mesh);

  /* ---------- v19 the SCREEN (bezel + body) ----------
   * (user: "the chart is still embeded infused to the board behind it and they
   * collide to each other"). The glass used to be a bare plane placed exactly on
   * the board's front face; a screen mounted on a display board is a BOX: a dark
   * metal bezel around the glass and a body behind it, standing off the walnut on
   * brass pins (arena.js builds the pins). The four rails are unit boxes scaled
   * in layout(), so the frame tracks every viewport relayout. */
  const FRAME_D = 0.10;        // must match SCREEN_DEPTH in arena.js
  const RAIL = 0.075;          // bezel rail thickness
  const frameMat = new THREE.MeshStandardMaterial({ color: '#14161E', metalness: 0.6, roughness: 0.4 });
  const bezel = new THREE.Group();
  const rails = [0, 1, 2, 3].map(() => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), frameMat);
    m.frustumCulled = false;
    bezel.add(m);
    return m;
  });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), frameMat);
  body.frustumCulled = false;
  bezel.add(body);
  group.add(bezel);
  function layScreen(cx, cy, z, w, h) {
    const railZ = z + FRAME_D * 0.5;
    const put = (m, sx, sy, sz, px, py, pz) => {
      m.scale.set(sx, sy, sz);
      m.position.set(px, py, pz);
    };
    put(rails[0], w + RAIL * 2, RAIL, FRAME_D, cx, cy + h / 2 + RAIL / 2, railZ);
    put(rails[1], w + RAIL * 2, RAIL, FRAME_D, cx, cy - h / 2 - RAIL / 2, railZ);
    put(rails[2], RAIL, h, FRAME_D, cx - w / 2 - RAIL / 2, cy, railZ);
    put(rails[3], RAIL, h, FRAME_D, cx + w / 2 + RAIL / 2, cy, railZ);
    /* v19b REGRESSION FIX: the screen body must sit BEHIND the glass.
     * It was centred at z - FRAME_D*0.22, i.e. its front face landed at
     * z + 0.0055 - 0.0055 IN FRONT of the glass. The body is opaque and
     * depth-writes; the glass is transparent and only depth-TESTS, so the body
     * won the depth test and the whole chart was never drawn (measured: hiding
     * this one mesh changed 72% of the board rect's pixels). The centre is now
     * FRAME_D*0.85 back, so the body's front face clears the glass by 0.0575. */
    put(body, w + 0.01, h + 0.01, FRAME_D * 0.55, cx, cy, z - FRAME_D * 0.85);
  }
  scene.add(group);

  let variant = opts.variant || 'slab';
  const VARIANTS = ['slab', 'aurora', 'stars'];
  let laidOutFor = '';

  /* ---------- layout: the wall board -> projected pixel scale ---------- */
  function layout() {
    const vw = (renderer && renderer.domElement.clientWidth) || window.innerWidth || 1280;
    const vh = (renderer && renderer.domElement.clientHeight) || window.innerHeight || 800;
    laidOutFor = vw + 'x' + vh;
    // the scene owns the camera's aspect, but our resize listener can run before
    // its handler: sync it here so the fit below uses the real frustum
    if (Math.abs(camera.aspect - vw / vh) > 1e-3) {
      camera.aspect = vw / vh;
      camera.updateProjectionMatrix();
    }
    camera.updateMatrixWorld(true);
    // visible world size on the board's z plane (the camera's world position
    // only breathes a little with the brawl push-in; the default 6.8 is the
    // framing that matters)
    const dist = Math.abs(6.8 - WALL.z);
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist;
    const halfW = halfH * camera.aspect;
    // fit: on narrow viewports the visible wall slice is narrower than the
    // board, so the plane shrinks to 88% of the visible slice (the walnut board
    // behind it is world-fixed and bleeds off-frame, as real walls do).
    // v19: 0.92 of the BOARD -> 0.88, so the walnut frame shows as a real margin
    // around the bezel instead of the screen covering the whole board.
    // v21: the board factor goes back UP to 0.94 (user: "a little bigger chart"):
    // +7% wider and taller, still inside the board with a 0.24 m walnut margin on
    // every side. The VISIBLE-SLICE factor stays at 0.88 - that one is the phone
    // margin, and raising it would push the chart off the edge of a narrow frame.
    const b = opts.board;
    const w = Math.min(WALL.w, b ? b.w * 0.94 : WALL.w, halfW * 2 * 0.88);
    const h = WALL.h * (w / WALL.w);
    mesh.geometry.dispose();
    mesh.geometry = new THREE.PlaneGeometry(w, h);
    // hang ON the board: its centre height, standing PROUD of its face on the
    // mount stack arena.js builds (face -> gap -> bezel depth -> glass)
    const sz = b ? (b.screenZ !== undefined ? b.screenZ : b.z + 0.09) : WALL.z;
    mesh.position.set(WALL.cx, b ? b.y : WALL.cy, sz);
    layScreen(WALL.cx, b ? b.y : WALL.cy, sz, w, h);

    // canvas resolution ~1:1 with the projected board, clamped so a phone is
    // not blurry and a 4K window is not a megabyte per texture upload.
    // v19: 1.35 -> 1.9 (a supersampled canvas: the review called the header and
    // the axis digits pixelated, which is what a 1.35x downsample does to text).
    // v21: cap 1440 -> 1560 so the bigger chart (0.94 of the board) keeps its 1.9x
    // supersample at 1080p instead of hitting the clamp and softening.
    const onScreenW = (w / (halfW * 2)) * vw;
    const onScreenH = (h / (halfH * 2)) * vh;
    const cw = Math.round(Math.min(1560, Math.max(640, onScreenW * 1.9)));
    const chh = Math.max(160, Math.round(cw * (onScreenH / onScreenW)));
    if (cw !== canvas.width || chh !== canvas.height) {
      canvas.width = cw; canvas.height = chh;
      tex.dispose();
      tex.needsUpdate = true;
    }
    k = onScreenW / cw;                  // screen px per texture px
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

    /* screen body: a dark glass tape screen mounted in the walnut board.
     * Crisp edges are CORRECT here (a screen on a board, not a HUD sticker
     * floating in the sky), so: full-bleed dark glass, rounded corners, one
     * gold hairline inset, a soft top sheen. */
    if (!AUR && !STAR) {
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, 'rgba(13,16,32,0.94)');
      g.addColorStop(0.5, 'rgba(9,11,24,0.92)');
      g.addColorStop(1, 'rgba(7,9,20,0.94)');
      ctx.fillStyle = g;
      roundRect(ctx, 0, 0, W, H, S(9));
      ctx.fill();
      // top sheen: the glass catches the torchlight
      const sh = ctx.createLinearGradient(0, 0, 0, S(46));
      sh.addColorStop(0, 'rgba(255,255,255,0.055)');
      sh.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = sh;
      roundRect(ctx, 0, 0, W, S(46), S(9));
      ctx.fill();
      // gold hairline inset (the instrument frame)
      ctx.strokeStyle = 'rgba(245,197,66,0.5)';
      ctx.lineWidth = Math.max(1, S(1.2));
      roundRect(ctx, S(4), S(4), W - S(8), H - S(8), S(7));
      ctx.stroke();
      // corner ticks: instrument, not sticker
      ctx.strokeStyle = 'rgba(245,197,66,0.8)';
      ctx.lineWidth = Math.max(1.2, S(1.8));
      const B = S(9);
      for (const [cx, cy, sx, sy] of [[S(10), S(10), 1, 1], [W - S(10), S(10), -1, 1], [S(10), H - S(10), 1, -1], [W - S(10), H - S(10), -1, -1]]) {
        ctx.beginPath();
        ctx.moveTo(cx + sx * B, cy); ctx.lineTo(cx, cy); ctx.lineTo(cx, cy + sy * B);
        ctx.stroke();
      }
    } else if (AUR) {
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, 'rgba(120,150,200,0.10)');
      g.addColorStop(1, 'rgba(0,0,0,0.55)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    } else {
      // stars: deep glass so the constellation pops off the board
      ctx.fillStyle = 'rgba(8,10,24,0.72)';
      roundRect(ctx, 0, 0, W, H, S(9));
      ctx.fill();
    }

    /* head: title left, chip right. The venue name deliberately lives ONLY in the
     * top-right status chip: showing "LIVE · BINANCE" twice in one corner read as
     * crowding in review. */
    ctx.textBaseline = 'middle';
    ctx.font = `700 ${S(F.title)}px "Space Grotesk", Consolas, monospace`;
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(242,238,227,0.92)';
    ctx.fillText('BTC / USDT', S(15), S(17));
    ctx.font = `500 ${S(F.sub)}px "Space Grotesk", Consolas, monospace`;
    ctx.fillStyle = 'rgba(176,182,210,0.95)';
    ctx.fillText('1 s CANDLES', S(15) + ctx.measureText('BTC / USDT').width + S(84), S(17.5));
    ctx.font = `700 ${S(F.chip)}px "Space Grotesk", Consolas, monospace`;
    const ctxt = chipNow.txt;
    const cw2 = ctx.measureText(ctxt).width + S(30), cx0 = W - S(12) - cw2, cy0 = S(17) - S(10);
    ctx.fillStyle = 'rgba(6,8,18,0.45)';
    roundRect(ctx, cx0, cy0, cw2, S(20), S(10)); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    roundRect(ctx, cx0 + 0.5, cy0 + 0.5, cw2 - 1, S(20) - 1, S(10)); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx0 + S(10), cy0 + S(10), S(3.2), 0, 6.284);
    ctx.fillStyle = chipNow.col; ctx.fill();
    ctx.fillStyle = chipNow.col;
    ctx.fillText(ctxt, cx0 + S(18), cy0 + S(10.5));

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
    // 7.5 screen px per candle: a legible bar with a body and a wick. A 1 s tape
    // does not need 5 minutes of history to tell the story.
    const PITCH = Math.max(3, S(7.5));
    // keep the right end of the plot clear of the price scale/tag
    const mapW = plotW - S(22);
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
      ctx.strokeStyle = AUR || STAR ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.10)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(S(10), y); ctx.lineTo(mapW + S(22), y); ctx.stroke();
      if (!STAR) {
        ctx.fillStyle = 'rgba(170,176,203,0.85)';
        ctx.textAlign = 'left';
        ctx.fillText(fmtP(p), plotW + S(8), y);
      }
    }

    /* time ticks: every 15 s */
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    const t0 = t[i0], t1 = t[nAll - 1];
    for (let tt = Math.ceil(t0 / 15000) * 15000; tt <= t1; tt += 15000) {
      let a = i0, b2 = nAll - 1;
      while (a < b2) { const m = (a + b2) >> 1; if (t[m] < tt) a = m + 1; else b2 = m; }
      const x = xOf(a);
      if (x < S(20) || x > mapW - S(20)) continue;
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.beginPath(); ctx.moveTo(x + 0.5, H - PAD_B); ctx.lineTo(x + 0.5, H - PAD_B + S(4)); ctx.stroke();
      ctx.fillStyle = 'rgba(186,192,218,0.92)';
      ctx.font = `500 ${S(F.time)}px "Space Grotesk", Consolas, monospace`;
      ctx.fillText(fmtClock(tt), x, H - S(5));
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

    /* the data emits light: a soft halo along the close path so the screen reads
     * as a lit surface on the wall, like the moon in the sky above it */
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
    const lw = ctx.measureText(label).width + S(14);
    const th = S(19), ty = Math.min(PAD_T + plotH - th / 2, Math.max(PAD_T + th / 2, ly));
    ctx.fillStyle = col;
    roundRect(ctx, plotW + S(5), ty - th / 2, lw, th, S(5)); ctx.fill();
    ctx.fillStyle = '#05060F';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, plotW + S(5) + lw / 2, ty + 1);

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
    draw();
    return true;
  }

  /* v19b: A/B hook for the render-level check. Occlusion is invisible to every
   * canvas-side metric (stats().ink reads the CANVAS, not the frame), so the only
   * honest test that the chart is ON SCREEN is to toggle it and diff the rendered
   * pixels inside its projected rect. tools/wallboardcheck.mjs does exactly that. */
  function setVisible(on) {
    mesh.visible = !!on;
    return mesh.visible;
  }

  function stats() {
    const chip = chipState();
    const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let ink = 0;
    for (let i = 3; i < d.length; i += 4 * 31) if (d[i] > 12) ink++;
    // the board's on-screen rectangle (frame fractions) as of the last rendered
    // camera: lets headless checkers assert framing/occlusion without reaching
    // into THREE
    const g = mesh.geometry.parameters;
    const pts = [];
    for (const [sx, sy] of [[-1, 1], [1, 1], [1, -1], [-1, -1]]) {
      _pv.set(mesh.position.x + sx * g.width / 2, mesh.position.y + sy * g.height / 2, mesh.position.z).project(camera);
      pts.push({ x: _pv.x * 0.5 + 0.5, y: -_pv.y * 0.5 + 0.5 });
    }
    return {
      variant, draws, ink, candles: snap.count | 0, rev: snap.rev | 0, seeded: !!snap.seeded,
      chip: chip.key, chipText: chip.txt, lastPrice: meta.price,
      stale: (stOverride || meta).mode !== 'demo' && Date.now() - lastFreshAt > STALE_MS,
      textureW: canvas.width, textureH: canvas.height, screenScale: +k.toFixed(3),
      plane: [+mesh.geometry.parameters.width.toFixed(2), +mesh.geometry.parameters.height.toFixed(2)],
      position: [+mesh.position.x.toFixed(2), +mesh.position.y.toFixed(2), +mesh.position.z.toFixed(3)],
      // v19: the mount stack, so wallboardcheck can assert the glass is PROUD of
      // the board face and never coplanar with it
      mount: opts.board ? {
        face: +opts.board.face.toFixed(3), gap: +opts.board.gap.toFixed(3),
        glass: +mesh.position.z.toFixed(3),
        proudBy: +(mesh.position.z - opts.board.face).toFixed(3)
      } : null,
      boardWorld: opts.board ? {
        x0: +(opts.board.w / -2).toFixed(2), x1: +(opts.board.w / 2).toFixed(2),
        y0: +(opts.board.y - opts.board.h / 2).toFixed(2), y1: +(opts.board.y + opts.board.h / 2).toFixed(2),
        face: +opts.board.face.toFixed(3), front: +(mesh.position.z + 0.05).toFixed(3)
      } : null,
      screen: {
        l: +Math.min(...pts.map((p) => p.x)).toFixed(3),
        r: +Math.max(...pts.map((p) => p.x)).toFixed(3),
        t: +Math.min(...pts.map((p) => p.y)).toFixed(3),
        b: +Math.max(...pts.map((p) => p.y)).toFixed(3),
      },
      wall: { ...WALL },
    };
  }

  function dispose() {
    window.removeEventListener('resize', onResize);
    scene.remove(group);
    mesh.geometry.dispose(); mat.dispose(); tex.dispose();
    rails.forEach((m) => m.geometry.dispose());
    body.geometry.dispose(); frameMat.dispose();
  }
  function onResize() { requestAnimationFrame(() => { layout(); draw(); }); }
  window.addEventListener('resize', onResize);

  layout();
  draw();
  setVariant(variant);

  // the panel uses the page's display font: repaint once it has loaded
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => draw()).catch(() => {});

  return { update, notifyStatus, trade, stats, setVariant, setVisible, relayout: onResize, dispose, mesh, group, bezel, body, get variant() { return variant; } };
}

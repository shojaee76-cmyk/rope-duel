// ============================================================
// THE ROPE DUEL - scene entry: builds everything, exposes the
// clean data-module API: setPressure(P in [-1,+1]), setPrice(px).
// Design: design_spec_cats_arena.md (task t_a1985f86).
//
// v5: combat pass. The hooks now resolve every landed attack (blade lock ->
// clash -> hit reel), impulses on the rope are small nudges instead of slaps,
// the camera pushes in and shakes on real impacts, and the crowd's energy
// tracks the live fight heat instead of only the pressure sign.
// ============================================================
import * as THREE from '../vendor/three.module.js';
import { ARENA, DIM, SIDE } from './palette.js';
import { VerletRope } from './rope.js';
import { PriceFlag } from './flag.js';
import { DuelCat } from './cats.js';
import { buildArena, updateArena } from './arena.js';
import { VFX } from './vfx.js';
import { Crowd } from './crowd.js';
import { FightDirector } from './director.js';
import { buildSkyDome, buildStars, buildClouds, buildShootingStars } from './skydome.js';
import { buildSkyline, buildFireflies, buildFountainWater, buildEmberDrift } from './ambience.js';
import { createSkyChart } from './skychart.js';
import { setMaxAnisotropy } from './tex.js';

export function createDuelScene(container, opts = {}) {
  // renderer / scene / camera (spec 1.1)
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  const desktopQuality = (opts.vfxScale || 1) > 0.5;
  /* Base render ratio. It used to be min(dpr, 2), i.e. 4x the pixels of a 1x
   * display: measured on this laptop's iGPU the WebGL pass costs 7 ms at 1x and
   * 23 ms at 2x, so a 2x cap spends the whole frame budget before the scene has
   * drawn a single cat. 1.5 is visually equivalent on a dark scene and leaves
   * room below; the quality governor below takes it further down when needed. */
  const baseRatio = opts.res ? Math.max(0.4, Math.min(2, opts.res))
    : Math.min(devicePixelRatio || 1, desktopQuality ? 1.5 : 1.25);
  renderer.setPixelRatio(baseRatio);
  renderer.setSize(container.clientWidth || 1280, container.clientHeight || 720);
  renderer.shadowMap.enabled = false;   // v4: cost 40% of the frame budget
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  setMaxAnisotropy(Math.min(8, renderer.capabilities.getMaxAnisotropy()));
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(ARENA.fog, 18, 55);

  function aspect() {
    return (container.clientWidth || 1280) / (container.clientHeight || 720);
  }
  const camera = new THREE.PerspectiveCamera(40, aspect(), 0.1, 200);
  camera.position.set(0, 2.55, 6.8);
  camera.lookAt(0, 3.15, 0);

  // lights (spec 5.4)
  const moonlight = new THREE.DirectionalLight('#BFD4FF', 0.85);
  moonlight.position.set(0, 14, -8);
  moonlight.castShadow = false;
  scene.add(moonlight, moonlight.target);

  const ambient = new THREE.AmbientLight('#2A2438', 0.55);
  scene.add(ambient);

  // side rim lights follow the cats: BUY side glows green, SELL side red
  // (financial convention flip, task t_167a53f3)
  const rimA = new THREE.PointLight(SIDE.BUY_BRIGHT, 34, 7, 1.6);   // cat A = BUY
  const rimB = new THREE.PointLight(SIDE.SELL_BRIGHT, 34, 7, 1.6);  // cat B = SELL
  scene.add(rimA, rimB);

  const fill = new THREE.SpotLight('#FFD9A0', 95, 26, 0.75, 0.6, 1.4);
  fill.position.set(0, 8, 8);
  fill.target.position.set(0, 2, 0);
  scene.add(fill, fill.target);

  // core systems
  const rope = new VerletRope();
  scene.add(rope.mesh);

  const flag = new PriceFlag();
  scene.add(flag.group);

  const catA = new DuelCat('A');
  const catB = new DuelCat('B');
  catA.x = 1.1;
  catB.x = -1.1;
  scene.add(catA.root, catB.root);

  const arena = buildArena(scene);
  const vfx = new VFX(scene, opts.vfxScale || 1);
  const director = new FightDirector({ rope, cats: { A: catA, B: catB }, flag, vfx, arena });
  const crowd = new Crowd(scene, opts.vfxScale || 1);

  // ---- v2 ambience: richer sky + living courtyard ----
  const amb = {
    vfxScale: opts.vfxScale || 1,
    mouse: { x: 0, y: 0 },
    mouseT: { x: 0, y: 0 },
    moonPulse: 0,
    shoot: null, clouds: null, stars: null, fireflies: null, water: null, embers: null,
  };
  buildSkyDome(scene);
  amb.stars = buildStars(scene);
  if (amb.vfxScale > 0.3) {
    amb.clouds = buildClouds(scene);
    amb.shoot = buildShootingStars(scene);
    amb.fireflies = buildFireflies(scene, amb.vfxScale);
    amb.water = buildFountainWater(scene);
    amb.embers = buildEmberDrift(scene, amb.vfxScale);
  }
  buildSkyline(scene);
  /* The live tape, in the sky. The candle chart used to be a DOM panel pinned to
   * the bottom of the screen; the duel is fed by that tape, so it is drawn into
   * the world instead: one wide light panel high behind the arena, above the wall
   * and the cats (?sky=slab|aurora|stars picks the treatment). */
  const skyChart = createSkyChart(scene, camera, {
    variant: opts.skyVariant || 'slab',
    renderer,
    anisotropy: Math.min(8, renderer.capabilities.getMaxAnisotropy()),
  });
  function onMouse(e) {
    const w = container.clientWidth || innerWidth, h = container.clientHeight || innerHeight;
    amb.mouseT.x = ((e.clientX ?? w / 2) / w) * 2 - 1;
    amb.mouseT.y = ((e.clientY ?? h / 2) / h) * 2 - 1;
  }
  window.addEventListener('pointermove', onMouse, { passive: true });

  // combat hooks: VFX + rope nudges + camera shake
  const shake = { t: 0, amp: 0 };
  let slowmo = 0;
  let camPan = 0;
  let camPush = 0;      // smoothed brawl push-in
  let heat = 0;         // 0..1 fight heat (drives crowd + camera energy)
  // scratch vectors: the fight code used to allocate 4-6 Vector3s per frame
  // (bladeMidWorld / lerp / head tips), which is pure GC churn in a brawl
  const _hA = new THREE.Vector3(), _hB = new THREE.Vector3();
  const _mid = new THREE.Vector3(), _tip = new THREE.Vector3(), _tmpV = new THREE.Vector3();

  // ---- v14 blade trails ------------------------------------------------------
  // A cut reads as technique when the blade draws a visible arc: a short ribbon
  // that follows the sword tip for ~0.22 s and fades. One pooled geometry per
  // cat, N points ring buffer, additive; zero allocation per frame.
  const TRAIL_N = 22;
  function makeTrail(cat) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(TRAIL_N * 3);
    const col = new Float32Array(TRAIL_N * 3);
    const age = new Float32Array(TRAIL_N).fill(Infinity);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.085, vertexColors: true, map: (() => {
        const c = document.createElement('canvas'); c.width = c.height = 64;
        const g = c.getContext('2d');
        const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
        grd.addColorStop(0, 'rgba(255,255,255,1)');
        grd.addColorStop(0.5, 'rgba(255,255,255,0.4)');
        grd.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
      })(),
      transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    scene.add(points);
    const tint = new THREE.Color(cat.data.side === 'A' ? SIDE.BUY_BRIGHT : SIDE.SELL_BRIGHT);
    return {
      points, pos, col, age, tint,
      emit(p) {
        // find the oldest slot
        let k = 0;
        for (let i = 1; i < TRAIL_N; i++) if (this.age[i] > this.age[k]) k = i;
        this.age[k] = 0;
        this.pos[k * 3] = p.x; this.pos[k * 3 + 1] = p.y; this.pos[k * 3 + 2] = p.z;
      },
      update(dt) {
        const life = 0.22;
        for (let i = 0; i < TRAIL_N; i++) {
          if (this.age[i] > life) { this.col[i * 3] = this.col[i * 3 + 1] = this.col[i * 3 + 2] = 0; continue; }
          this.age[i] += dt;
          const f = 1 - this.age[i] / life;      // 1 fresh -> 0 dead
          this.col[i * 3] = this.tint.r * f;
          this.col[i * 3 + 1] = this.tint.g * f;
          this.col[i * 3 + 2] = this.tint.b * f;
        }
        this.points.geometry.attributes.position.needsUpdate = true;
        this.points.geometry.attributes.color.needsUpdate = true;
      }
    };
  }
  const trailA = makeTrail(catA), trailB = makeTrail(catB);
  const trail = {
    start(cat) { (cat.data.side === 'A' ? trailA : trailB).emit(cat.bladeTipWorld(_tip)); },
    update(dt) { trailA.update(dt); trailB.update(dt); }
  };

  // ---- v15 moon slot ---------------------------------------------------------
  // The moon used to be world-fixed while the sky tape panel is SCREEN-fixed
  // (upper-right, x 0.672-0.985): measured with tools/moonprobe2.mjs, the disc
  // swept screen-x 0.82 -> 0.17 as the camera followed the pair, so whenever the
  // fight drifted left the moon sat straight behind the chart. On a phone the
  // disc spans ~77% of the frame width and covered the chart band at nearly
  // every pan. Fix: park it in the upper-LEFT sky, opposite the panel. The slot
  // is a screen fraction unprojected onto the moon's own z plane each frame, and
  // the moon tracks `par` of the camera travel (0.78 wide / 0.90 narrow): it
  // keeps a little parallax so it stays part of the world, but the leftover
  // drift (measured below) can never reach the panel band.
  const MOON_Z = -7.45;   // keep in sync with arena.js
  const MOON_SLOT = {
    //   cx/cy: screen slot of the disc centre (fractions of frame w/h)
    //   par:   fraction of camera pan the moon follows (1 = pinned to screen)
    //   s:     extra scale (the phone disc was comically huge at 5.0 world)
    // wide (>=1024): open sky left of the pressure meter, full size
    wide:   { cx: 0.155, cy: 0.170, par: 0.78, s: 1.0 },
    // mid tablet (700-1023): slightly smaller, tucked a little further into
    // the corner so its right edge only grazes the meter's left edge
    mid:    { cx: 0.130, cy: 0.150, par: 0.80, s: 0.85 },
    // narrow phone (<700): corner park with slight frame bleed; the top HUD
    // bar overlays its lower edge, the chart band stays clear
    narrow: { cx: 0.130, cy: 0.050, par: 0.92, s: 0.52 }
  };
  const _mv = new THREE.Vector3();
  // contact telemetry (debug only): how often the head constraint had to fire and
  // how close the muzzle tips got BEFORE (worst) and AFTER (worstOut) the fix, so
  // the constraint's own output is verifiable, not just inferred from the render
  const contact = opts.debug ? { checks: 0, fixes: 0, worst: 9, worstOut: 9, post: null } : null;
  function bladeCross(a, b, out) {
    a.bladeMidWorld(out);
    b.bladeMidWorld(_tmpV);
    return out.lerp(_tmpV, 0.5);
  }
  function clampFoe(x) {
    const lim = DIM.spanHalf - DIM.poleClearance;
    return THREE.MathUtils.clamp(x, -lim, lim);
  }
  const sideOf = (cat) => cat.data.side;
  const foeOf = (cat) => (sideOf(cat) === 'A' ? catB : catA);
  const fwOf = (cat) => (sideOf(cat) === 'A' ? -1 : 1);   // world-x toward the foe
  function gap(a, b) { return Math.abs(a.x - b.x); }
  function kick(dur, amp) { shake.t = Math.max(shake.t, dur); shake.amp = Math.max(shake.amp, amp); }

  // one place that resolves "this attack connected"
  function landAttack(cat, heavy) {
    const side = sideOf(cat), foe = foeOf(cat), fw = fwOf(cat);
    const dir = -fw;                       // world-x the foe is driven back
    vfx.lungeSparks(cat.bladeMidWorld());
    if (gap(cat, foe) < 1.75) {
      if (director.tryClash(side)) return;
      if (gap(cat, foe) < 1.65) {
        foe.x = clampFoe(foe.x + dir * (heavy ? 0.5 : 0.3));
        director.resolveHit(side, dir);
        vfx.dustBurst({ x: foe.x, y: rope.yAt(foe.x), z: 0 });
        // the shake stays (that is a real impact) but the per-hit hit-stop is gone:
        // it fired twice a second and read as a stutter rather than emphasis. The
        // deliberate slow-mo on a blade-lock clash below is the one that lands.
        kick(heavy ? 0.12 : 0.07, heavy ? 0.11 : 0.06);
      }
    }
    rope.injectImpulse(cat.x, 0, -0.7, 0);
  }

  const hooks = {
    onStamp(cat) {
      rope.injectImpulse(cat.x, 0, -0.9, 0);
      vfx.dustBurst({ x: cat.x, y: rope.yAt(cat.x), z: 0 });
    },
    onLungeHit(cat) { landAttack(cat, false); },
    onThrust(cat) {
      // v14: the point attack. A tight, fast spark flick at the tip plus a
      // short trail - a thrust should look precise, not explosive.
      const tip = cat.bladeTipWorld();
      vfx.lungeSparks(tip);
      trail.start(cat);
    },
    onBeat(cat) {
      // v14: the parry beat - one bright metallic ping at the blade, tiny.
      const tip = cat.bladeTipWorld();
      vfx.clashBurst(tip);
      kick(0.05, 0.03);
      trail.start(cat);
    },
    onSlash(cat, kind) {
      const tip = cat.bladeTipWorld();
      if (sideOf(cat) === 'A') {
        vfx.emberBurst(tip);
        if (kind === 'up') slowmo = Math.max(slowmo, 0.19);
      } else {
        vfx.ghost(tip);
        vfx.ghostTile(tip);
      }
      trail.start(cat);   // v14: every cut draws its arc
      if (kind === 'crescent' || kind === 'down') landAttack(cat, true);
      rope.injectImpulse(cat.x, 0, -0.7, 0);
    },
    onWhoosh(cat) { vfx.ghost(cat.bladeTipWorld()); },
    onTaunt(cat) { vfx.lungeSparks(cat.bladeTipWorld()); },
    onTumble(cat) { vfx.dustBurst({ x: cat.x, y: rope.yAt(cat.x), z: 0 }); },
    onHitImpact(cat) {
      vfx.dustBurst({ x: cat.x, y: rope.yAt(cat.x), z: 0 });
      vfx.furTuft({ x: cat.x, y: cat.root.position.y + 0.5, z: 0.1 });
      kick(0.08, 0.05);
    },
    onKnockback(cat, dir) {
      cat.x = clampFoe(cat.x + dir * 0.4);
      rope.injectImpulse(cat.x, 0, -1.1, 0);
      vfx.dustBurst({ x: cat.x, y: rope.yAt(cat.x), z: 0 });
    },
    onLockSparks(cat) {
      const p = cat.bladeMidWorld();
      vfx.clashBurst(p);
      kick(0.09, 0.06);
    }
  };
  const ctx = { rope, flagDart: false, pressureWobble: 0, circlePhase: 0, ...hooks };

  director.onClash = () => {
    const p = bladeCross(catA, catB, _mid);
    vfx.clashBurst(p);
    vfx.clashBurst(p);
    kick(0.16, 0.13);
    slowmo = Math.max(slowmo, 0.12);   // hit-stop: the beat lands
    amb.moonPulse = 1;
    heat = Math.min(1, heat + 0.5);
  };

  // demo pressure source (used until a live feed drives the API)
  const demo = { on: opts.demo !== false, t: 0 };
  let lastPrice = 67000;
  let raf = 0;
  let running = true;
  let pressureWobbleTarget = 0;
  const hooksTrade = [];

  // deterministic verification hook (tools/verify_colors.mjs): when armed, the
  // demo tape stops, the director idles, and the pair is pinned to given x
  // positions so screenshots are comparable frame to frame.
  const freezeCtl = { armed: false, ax: 1.1, bx: -1.1 };

  const api = {
    setPressure(P) {
      demo.on = false;
      pressureWobbleTarget = THREE.MathUtils.clamp(P, -1, 1) * 0.16;
      director.setPressure(P);
    },
    setPrice(px) {
      if (!px || px <= 0) return;
      demo.on = false;
      const prev = lastPrice;
      lastPrice = px;
      flag.tickDir(px > prev ? 1 : -1);
      flag.setPrice(px);
      director.setPrice(px);
      flag.setChange24h(THREE.MathUtils.clamp(director.trendM() * 8, -99, 99));
    },
    setChange24hText(text) { flag.setChange24hText(text); },
    /* the sky chart is the tape display now: main.js feeds it the candle store
     * snapshot + the feed state, exactly the calls the DOM panel used to get */
    chart: skyChart,
    onTradeCallout(cb) { hooksTrade.push(cb); return () => { const i = hooksTrade.indexOf(cb); if (i >= 0) hooksTrade.splice(i, 1); }; },
    tradeCallout(info) {
      if (info && info.notional >= 250000) { amb.moonPulse = 1; heat = Math.min(1, heat + 0.35); }
      else if (info && info.notional >= 100000) amb.moonPulse = Math.max(amb.moonPulse, 0.6);
      for (let i = 0; i < hooksTrade.length; i++) {
        try { hooksTrade[i](info); } catch (e) { /* a bad listener never kills the loop */ }
      }
    },
    dispose() {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMouse);
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    }
  };

  function resize() {
    const w = container.clientWidth || 1280, h = container.clientHeight || 720;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  function onResize() { resize(); }
  resize();
  window.addEventListener('resize', onResize);

  /* ---------- adaptive quality governor (v10) ----------
   * The complaint that started this: "fps drops midfight". Measured cause: the
   * scene is GPU-bound, not JS-bound (JS 0.4 ms/frame against a 7-23 ms WebGL
   * pass), and a brawl adds the spendy bits at once - the camera pushes in, both
   * spark pools saturate to ~300 additive sprites, and every panel on screen is
   * animating. On a machine whose GPU is also driving a browser or an IDE that
   * tips the frame budget over and the whole fight plays in slow motion.
   *
   * Nothing about the drawing can be made free, so the governor trades the one
   * resource nobody can see the difference in: render resolution. It watches the
   * median frame time over a short window and steps the pixel ratio DOWN while
   * frames are slow, back UP when there is headroom, with a cooldown so it can
   * never oscillate. The scene keeps its geometry, textures, particles and
   * animation - only the sampling density changes, and only as far as it must.
   * ?res=0.75 pins the ratio, ?gov=off disables the governor entirely. */
  const RATIO_STEPS = [1, 0.85, 0.72, 0.6, 0.5];
  const gov = {
    on: opts.governor !== false,
    base: baseRatio, step: 0, ratio: baseRatio, changes: 0, fails: 0,
    window: 16, slowMs: 20, fastMs: 13.5,   // >20 ms = below 50 fps, <13.5 ms = above 74 fps
    buf: [], cooldown: 0, hold: 0, med: 0,
    pending: 0, preMed: 0, lock: 0            // lock counts consecutive failed attempts
  };
  function applyStep(i) {
    gov.step = Math.max(0, Math.min(RATIO_STEPS.length - 1, i));
    gov.ratio = gov.base * RATIO_STEPS[gov.step];
    renderer.setPixelRatio(gov.ratio);
    resize();
    gov.buf.length = 0;
  }
  function govern(frameMs) {
    if (!gov.on) return;
    gov.buf.push(frameMs);
    if (gov.buf.length < gov.window) return;
    const s = gov.buf.slice().sort((a, b) => a - b);
    gov.med = s[s.length >> 1];
    gov.buf.length = 0;
    /* Verify that the last resolution drop bought something. MEASURED: under a
     * genuinely saturated GPU (three WebGL contexts on this iGPU) 1920x1200 ->
     * 640x400, nine times fewer pixels, buys only ~16% of frame rate - the cost
     * is the contention itself, not fill. So if a step down does not help, undo
     * it and stop meddling rather than spiralling through every step. It takes
     * TWO failed attempts to lock (one noisy window is not evidence), and a long
     * quiet stretch unlocks and lets it try again, because contention is
     * transient. */
    if (gov.pending > 0) {
      if (--gov.pending === 0) {
        if (gov.med > gov.preMed * 0.92) {
          if (gov.step > 0) applyStep(gov.step - 1);
          if (++gov.fails >= 2) gov.lock = 1;
        } else gov.fails = 0;
      }
      return;
    }
    if (gov.lock) {
      // still watching: after ~8 comfortable windows, contention has probably gone
      if (gov.med < gov.fastMs) { if (++gov.lock > 8) { gov.lock = 0; gov.fails = 0; gov.cooldown = 2; } }
      else if (gov.lock > 8) gov.lock = 1;    // keep the lock while it is still slow
      return;
    }
    if (gov.cooldown > 0) { gov.cooldown--; return; }
    if (gov.med > gov.slowMs && gov.step < RATIO_STEPS.length - 1) {
      gov.preMed = gov.med; gov.pending = 3; gov.hold = 0;
      applyStep(gov.step + 1); gov.changes++;
    } else if (gov.med < gov.fastMs && gov.step > 0) {
      // only climb back after several consecutive comfortable windows
      if (++gov.hold >= 3) { applyStep(gov.step - 1); gov.cooldown = 5; gov.changes++; gov.hold = 0; }
    } else gov.hold = 0;
  }

  // main loop
  let frameCount = 0;
  let simTime = 0;
  let lastT = performance.now();

  function loop() {
    if (!running) return;
    raf = requestAnimationFrame(loop);
    const now = performance.now();
    const rawDt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;
    let dt = rawDt;
    if (slowmo > 0) {
      slowmo -= rawDt;
      dt = rawDt * 0.35; // impact hit-stop
    }
    simTime += dt;
    frameCount++;

    // demo pressure/price when no live feed is driving the API
    if (demo.on && !freezeCtl.armed) {
      demo.t += dt;
      const P = Math.sin(demo.t * 0.4) * 0.8 + Math.sin(demo.t * 0.13) * 0.35 + Math.sin(demo.t * 1.7) * 0.12;
      director.setPressure(P);
      if (frameCount % 30 === 0) {
        const drift = (Math.sin(demo.t * 0.05) + Math.sin(demo.t * 0.021 + 2)) * 30;
        lastPrice += drift + (Math.random() - 0.5) * 8;
        flag.tickDir(drift > 0 ? 1 : -1);
        flag.setPrice(lastPrice);
        director.setPrice(lastPrice);
        flag.setChange24h(2.4 + Math.sin(demo.t * 0.05) * 3);
      }
    }

    // physics + director + cats
    if (freezeCtl.armed) {
      // pinned pose: no director, no combat states, fixed cat positions
      director.pressure = 0;
      catA.setState('IDLE'); catB.setState('IDLE');
      catA.x = freezeCtl.ax; catB.x = freezeCtl.bx;
    }
    ctx.flagDart = false;
    ctx.circlePhase = director.circlePhase;
    ctx.pressureWobble += (pressureWobbleTarget - ctx.pressureWobble) * Math.min(1, dt * 5);
    rope.clearLoads();
    rope.setLoad(catA.x + catA.pose.xOff, 1.0);
    rope.setLoad(catB.x + catB.pose.xOff, 1.0);
    rope.step(dt);
    director.update(dt);
    catA.update(dt, ctx);
    catB.update(dt, ctx);
    // ---- contact constraints (v10) ----
    // The cats carry oversized heads (spec 2: ~35% of standing height) that stick
    // ~0.30 units past the head pivot, so a 0.68-unit body gap still buried the
    // muzzles in each other. Measured baseline: head centres 0.02 units apart, nose
    // tips 0.01 apart, i.e. overlapping in ~59% of brawl frames. Constrain the
    // RENDERED pose from the real head geometry instead of a guessed body radius.
    {
      const aR = catA.x + catA.pose.xOff, bR = catB.x + catB.pose.xOff;
      const shift = (s, d) => {
        catA.x += s * d; catB.x -= s * d;
        catA.root.position.x += s * d; catB.root.position.x -= s * d;
      };
      // body floor: the torso is ~0.16 radius, so 0.78 keeps a visible air gap
      const gBody = Math.abs(aR - bR);
      if (gBody < DIM.minBodyGap) shift(aR >= bR ? 1 : -1, (DIM.minBodyGap - gBody) / 2);
      /* Head clearance: ONE rotation-invariant constraint.
       * Everything that can collide - skull (radius 0.23), muzzle box and nose
       * (0.30 out from the pivot), helmet brim - lies within 0.33 of the head
       * PIVOT, so keeping the two pivots 0.66 apart (DIM.minHeadCentre) means the
       * two head volumes can touch but never interpenetrate, in ANY pose.
       *
       * Earlier attempts constrained the muzzle TIPS instead and both failed, with
       * the reason measured rather than guessed:
       *  - a tip is orientation dependent. In RECOVER (the windmill every move
       *    ends with) the two muzzles point at each other with the pivots only
       *    0.57 apart, i.e. the tips are 0.6 of reach across a 0.57 gap: the tips
       *    were crossed by 0.01-0.2, and pushing the bodies apart DECREASED the tip
       *    distance (measured over four passes: 0.231 -> 0.144 -> 0.128 -> 0.100 ->
       *    0.077). Dropping the tip fix in those frames left the muzzles overlapping
       *    on 34% of frames.
       *  - a tip's separation cannot be solved in x when the tips are crossed, but
       *    a pivot's can, always and monotonically.
       * So the constraint is on the pivots: no sign tests, no crossed case, no
       * residual. */
      const H2 = DIM.minHeadCentre * DIM.minHeadCentre;
      if (contact) contact.checks++;
      for (let it = 0; it < 3; it++) {
        const s = (catA.x + catA.pose.xOff) >= (catB.x + catB.pose.xOff) ? 1 : -1;
        catA.headCentreWorld(_hA); catB.headCentreWorld(_hB);
        const ex = _hA.x - _hB.x, dy = _hA.y - _hB.y, dz = _hA.z - _hB.z;
        const dh = Math.sqrt(ex * ex + dy * dy + dz * dz);
        if (contact && dh < contact.worst) contact.worst = dh;
        if (dh >= DIM.minHeadCentre) break;
        const need = Math.sqrt(Math.max(0, H2 - (dy * dy + dz * dz))) - Math.abs(ex);
        if (need <= 0) break;
        shift(s, Math.min(need / 2, 0.5));
        if (contact) contact.fixes++;
        // force the whole rig so the head's siblings (ears, helmet, muzzle) are
        // drawn with the shifted pose in the same frame, not one frame late
        catA.root.updateMatrixWorld(true); catB.root.updateMatrixWorld(true);
      }
      if (contact) {
        catA.headCentreWorld(_hA); catB.headCentreWorld(_hB);
        const hc = _hA.distanceTo(_hB);
        if (hc < contact.worstOut) contact.worstOut = hc;
        contact.post = { hc: +hc.toFixed(4), n: frameCount, gap: +Math.abs((catA.x + catA.pose.xOff) - (catB.x + catB.pose.xOff)).toFixed(3) };
      }
    }
    rope.updateVisual();

    // v14: while a swing is LIVE the trail emits every frame from the tip, so
    // the arc follows the real blade path instead of a single spark at impact.
    if (!freezeCtl.armed) {
      for (const cat of [catA, catB]) {
        const n = cat.state.name;
        if (n === 'LUNGE' || n === 'RUSH' || n === 'SLASH_UP' || n === 'SLASH_SPIN' || n === 'RIPOSTE' || n === 'THRUST') {
          const st = cat.state, dur = st.dur || 1;
          if (st.t > dur * 0.2 && st.t < dur * 0.75) (cat.data.side === 'A' ? trailA : trailB).emit(cat.bladeTipWorld(_tip));
        }
      }
    }

    flag.update(dt, rope);

    // fight heat now follows the director's SMOOTHED brawl intensity instead of the
    // binary "is either cat locked" flag. The flag flipped on every state change, so
    // the heat (and with it the crowd's energy) sawtoothed from 0 to 0.83 and the
    // camera chased the same flag with a 0.38 s time constant, pumping in and out at
    // roughly 2 Hz. One low-passed source, one steady breathing rhythm.
    const brawling = catA.state.name === 'BLADE_LOCK' || catA.state.name === 'CLASH' ||
                     catB.state.name === 'BLADE_LOCK' || catB.state.name === 'CLASH';
    const brawl = director.brawlIntensity();
    heat += (brawl - heat) * Math.min(1, dt / 0.8);

    // blade lock: a steady shower of sparks at the crossing blades
    if (brawling && frameCount % 3 === 0) {
      const p = bladeCross(catA, catB, _mid);
      vfx.clashBurst(p);
      vfx.emberBurst(p);
    }

    // rim lights follow the cats (spec 5.4)
    rimA.position.set(catA.x + 1.5, 2.6, -1.3);
    rimB.position.set(catB.x - 1.5, 2.6, -1.3);

    // pennants wave (light wind loop, spec 5.3)
    const pens = arena.userData.pennants;
    if (pens) {
      for (const side of ['L', 'R']) {
        const pen = pens[side];
        pen.rotation.y = Math.sin(simTime * 1.7 + (side === 'L' ? 0 : 1.5)) * 0.25;
        pen.rotation.x = Math.sin(simTime * 2.3 + (side === 'L' ? 0 : 1)) * 0.06;
        pen.position.y = DIM.ropeY + 1.05 + Math.sin(simTime * 2.1 + (side === 'L' ? 0 : 0.6)) * 0.03;
      }
    }

    updateArena(arena, simTime);

    vfx.update(dt);
    trail.update(dt);   // v14: fade the blade arcs
    crowd.update(dt, director.pressure, heat);

    // ---- v2 ambience update ----
    amb.moonPulse = Math.max(0, amb.moonPulse - dt * 0.55);
    const dz = (v) => (Math.abs(v) < 0.07 ? 0 : (v - Math.sign(v) * 0.07) / 0.93);
    amb.mouse.x += (dz(amb.mouseT.x) - amb.mouse.x) * Math.min(1, dt * 1.8);
    amb.mouse.y += (dz(amb.mouseT.y) - amb.mouse.y) * Math.min(1, dt * 1.8);
    if (amb.stars) amb.stars.update(simTime);
    if (amb.clouds) amb.clouds.update(simTime, dt);
    if (amb.shoot) amb.shoot.update(simTime, dt, amb.moonPulse);
    if (amb.fireflies) amb.fireflies.update(simTime);
    if (amb.water) {
      amb.water.setPressure(director.pressure); // v16: water tints with the live tape
      amb.water.update(simTime, dt);
    }
    if (amb.embers) amb.embers.update(simTime);

    // BTC moon: halo breathes with trading activity, flare on big events.
    // (Position is handled after the camera update below - v15 screen slot.)

    // camera: close on the cats, follows the PAIR (not one cat), pushes in
    // during a brawl and kicks on impacts. v4 low-pass + dead zone retained.
    const shk = Math.max(shake.t, 0);
    if (shk > 0) shake.t -= rawDt;
    else shake.amp = 0;
    const s = (shk / 0.16) * shake.amp;
    const centre = (catA.x + catB.x) * 0.5;
    camPan += (centre - camPan) * Math.min(1, dt * 3.2);
    // the zoom rides the same smoothed intensity (was: a binary flag chased at
    // dt*2.6, which reversed direction ~4x as often)
    camPush += (brawl - camPush) * Math.min(1, dt * 1.4);
    const idleDriftX = Math.sin(simTime * 0.09) * 0.18;
    camera.position.set(
      camPan + idleDriftX + (Math.random() - 0.5) * s + amb.mouse.x * 0.5,
      2.55 + Math.sin(simTime * 0.06) * 0.1 + (Math.random() - 0.5) * s - amb.mouse.y * 0.3 + camPush * 0.16,
      6.8 - camPush * 0.55
    );
    camera.lookAt(camPan * 0.9, 3.15 - camPush * 0.1, 0);

    // ---- v15 moon slot: screen-fixed park, opposite the sky tape panel ----
    // The moon keeps a PARTIAL parallax (it follows `par` of the camera pan) so
    // it still feels like an object in the world, but the slot is chosen so the
    // leftover drift stays clear of the chart band (asserted by moonslotcheck).
    const moon = arena.userData.moon;
    if (moon) {
      const m = moon.material;
      m.color.setScalar(1 + amb.moonPulse * 0.34 + Math.sin(simTime * 0.8) * 0.04);
      const vw = container.clientWidth || innerWidth;
      const slot = vw < 700 ? MOON_SLOT.narrow : (vw < 1024 ? MOON_SLOT.mid : MOON_SLOT.wide);
      // screen fraction -> world point on the moon's own z plane. Same ray
      // march the sky chart uses (unproject -> normalize the direction ->
      // march to the plane), then undo `par` of the camera pan so only
      // (1 - par) of the travel reaches the moon.
      _mv.set(slot.cx * 2 - 1, -(slot.cy * 2 - 1), 0.5).unproject(camera);
      _mv.sub(camera.position).normalize();
      const t = (MOON_Z - camera.position.z) / _mv.z;
      const wx = camera.position.x + _mv.x * t - camera.position.x * (1 - slot.par);
      const wy = camera.position.y + _mv.y * t;
      moon.position.set(wx, wy, MOON_Z);
      moon.scale.setScalar(slot.s * (1 + amb.moonPulse * 0.06));
    }

    renderer.render(scene, camera);
    govern(rawDt * 1000);   // frame-time feedback for the quality governor
  }
  loop();

  // debug/integration handle (used by tests and the root webpage task)
  if (opts.debug) {
    window.__duelDebug = {
      rope, flag, director, catA, catB, arena, vfx, camera, renderer, crowd, hooksTrade, gov, contact, skyChart,
      quality: () => ({ ratio: gov.ratio, base: gov.base, step: gov.step, med: gov.med, changes: gov.changes, on: gov.on, fails: gov.fails, lock: gov.lock }),
      heat: () => heat,
      freeze: (armed, ax = 1.1, bx = -1.1) => {
        freezeCtl.armed = !!armed; freezeCtl.ax = ax; freezeCtl.bx = bx;
        demo.on = false;
      }
    };
  }

  return api;
}

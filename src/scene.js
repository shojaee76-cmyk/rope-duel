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
import { ARENA, DIM } from './palette.js';
import { VerletRope } from './rope.js';
import { PriceFlag } from './flag.js';
import { DuelCat } from './cats.js';
import { buildArena, updateArena } from './arena.js';
import { VFX } from './vfx.js';
import { Crowd } from './crowd.js';
import { FightDirector } from './director.js';
import { buildSkyDome, buildStars, buildClouds, buildShootingStars } from './skydome.js';
import { buildSkyline, buildFireflies, buildFountainWater, buildEmberDrift } from './ambience.js';
import { setMaxAnisotropy } from './tex.js';

export function createDuelScene(container, opts = {}) {
  // renderer / scene / camera (spec 1.1)
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  const desktopQuality = (opts.vfxScale || 1) > 0.5;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, desktopQuality ? 2 : 1.25));
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

  const rimA = new THREE.PointLight('#F5C542', 34, 7, 1.6);
  const rimB = new THREE.PointLight('#7FD48A', 34, 7, 1.6);
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
  function onMouse(e) {
    const w = container.clientWidth || innerWidth, h = container.clientHeight || innerHeight;
    amb.mouseT.x = ((e.clientX ?? w / 2) / w) * 2 - 1;
    amb.mouseT.y = ((e.clientY ?? h / 2) / h) * 2 - 1;
  }
  window.addEventListener('pointermove', onMouse, { passive: true });

  // ---- combat hooks: VFX + rope nudges + camera shake ----
  const shake = { t: 0, amp: 0 };
  let slowmo = 0;
  let camPan = 0;
  let camPush = 0;      // smoothed brawl push-in
  let heat = 0;         // 0..1 fight heat (drives crowd + camera energy)
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
        kick(heavy ? 0.12 : 0.07, heavy ? 0.11 : 0.06);
        if (heavy) slowmo = Math.max(slowmo, 0.08);
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
    onSlash(cat, kind) {
      const tip = cat.bladeTipWorld();
      if (sideOf(cat) === 'A') {
        vfx.emberBurst(tip);
        if (kind === 'up') slowmo = Math.max(slowmo, 0.22);
      } else {
        vfx.ghost(tip);
        vfx.ghostTile(tip);
      }
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
    const p = catA.bladeMidWorld().lerp(catB.bladeMidWorld(), 0.5);
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
    if (demo.on) {
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
    rope.updateVisual();

    flag.update(dt, rope);

    // fight heat: rises while the cats are locked in, decays otherwise
    const brawling = catA.state.name === 'BLADE_LOCK' || catA.state.name === 'CLASH' ||
                     catB.state.name === 'BLADE_LOCK' || catB.state.name === 'CLASH';
    heat = Math.max(0, heat - dt * 0.55);
    if (brawling) heat = Math.min(1, heat + dt * 1.2);

    // blade lock: a steady shower of sparks at the crossing blades
    if (brawling && frameCount % 3 === 0) {
      const p = catA.bladeMidWorld().lerp(catB.bladeMidWorld(), 0.5);
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
    if (amb.water) amb.water.update(simTime, dt);
    if (amb.embers) amb.embers.update(simTime);

    // BTC moon: halo breathes with trading activity, flare on big events
    const moon = arena.userData.moon;
    if (moon) {
      const m = moon.material;
      m.color.setScalar(1 + amb.moonPulse * 0.34 + Math.sin(simTime * 0.8) * 0.04);
      moon.scale.setScalar(1 + amb.moonPulse * 0.06);
    }

    // camera: close on the cats, follows the PAIR (not one cat), pushes in
    // during a brawl and kicks on impacts. v4 low-pass + dead zone retained.
    const shk = Math.max(shake.t, 0);
    if (shk > 0) shake.t -= rawDt;
    else shake.amp = 0;
    const s = (shk / 0.16) * shake.amp;
    const centre = (catA.x + catB.x) * 0.5;
    camPan += (centre - camPan) * Math.min(1, dt * 3.2);
    camPush += ((brawling ? 1 : 0) - camPush) * Math.min(1, dt * 2.6);
    const idleDriftX = Math.sin(simTime * 0.09) * 0.18;
    camera.position.set(
      camPan + idleDriftX + (Math.random() - 0.5) * s + amb.mouse.x * 0.5,
      2.55 + Math.sin(simTime * 0.06) * 0.1 + (Math.random() - 0.5) * s - amb.mouse.y * 0.3 + camPush * 0.16,
      6.8 - camPush * 0.55
    );
    camera.lookAt(camPan * 0.9, 3.15 - camPush * 0.1, 0);

    renderer.render(scene, camera);
  }
  loop();

  // debug/integration handle (used by tests and the root webpage task)
  if (opts.debug) {
    window.__duelDebug = { rope, flag, director, catA, catB, arena, vfx, camera, renderer, crowd, hooksTrade, heat: () => heat };
  }

  return api;
}

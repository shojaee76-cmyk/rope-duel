// ============================================================
// THE ROPE DUEL - scene entry: builds everything, exposes the
// clean data-module API: setPressure(P in [-1,+1]), setPrice(px).
// Design: design_spec_cats_arena.md (task t_a1985f86).
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
  // v3: crisp edges matter much more now that the frame is a close shot of the
  // duelists; cap at 2x on desktop (vsync-limited anyway) and 1.25x on mobile.
  const desktopQuality = (opts.vfxScale || 1) > 0.5;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, desktopQuality ? 2 : 1.25));
  renderer.setSize(container.clientWidth || 1280, container.clientHeight || 720);
  // v4: shadow map OFF again. It cost ~40% of the frame budget and its
  // re-render every frame speckled the FLOOR (the only receiver) with crawling
  // PCF noise, which read as the background "shaking". Grounding is handled by
  // the stronger moon key + short-throw rims instead.
  renderer.shadowMap.enabled = false;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  // v4: hand max anisotropy to the texture factory BEFORE any texture is
  // built (the close framing shows the sebka/azulejo/grout patterns at a
  // shallow angle, where 1x filtering shimmers)
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

  // lights (spec 5.4) - v3: stronger moon key + rims so the dark cat keeps a
  // silhouette against the now-open night sky
  const moonlight = new THREE.DirectionalLight('#BFD4FF', 0.78);
  moonlight.position.set(0, 14, -8);
  moonlight.castShadow = true;
  moonlight.shadow.mapSize.set(1024, 1024);
  moonlight.shadow.bias = -0.0008;
  moonlight.shadow.normalBias = 0.02;
  moonlight.shadow.camera.left = -12;
  moonlight.shadow.camera.right = 12;
  moonlight.shadow.camera.top = 8;
  moonlight.shadow.camera.bottom = -2;
  moonlight.shadow.camera.far = 40;
  scene.add(moonlight, moonlight.target);

  const ambient = new THREE.AmbientLight('#2A2438', 0.55);
  scene.add(ambient);

  // rim lights: v4 keeps their throw SHORT so swinging with the cats does not
  // pump the illumination of the whole back wall (background shimmer)
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
  catA.x = 1.4;
  catB.x = -1.4;
  scene.add(catA.root, catB.root);

  const arena = buildArena(scene);
  const vfx = new VFX(scene, opts.vfxScale || 1);
  const director = new FightDirector({ rope, cats: { A: catA, B: catB }, flag, vfx, arena });
  const crowd = new Crowd(scene, opts.vfxScale || 1);

  // ---- v2 ambience: richer sky + living courtyard ----
  const amb = {
    vfxScale: opts.vfxScale || 1,
    mouse: { x: 0, y: 0 },       // -1..1, eased toward target
    mouseT: { x: 0, y: 0 },      // raw target
    moonPulse: 0,                // 0..1 decayed excitation, drives sky events
    shoot: null, clouds: null, stars: null, fireflies: null, water: null, embers: null,
  };
  buildSkyDome(scene);           // replaces the old flat-ramp dome (added on top; v1 dome removed below)
  amb.stars = buildStars(scene);
  if (amb.vfxScale > 0.3) {
    amb.clouds = buildClouds(scene);
    amb.shoot = buildShootingStars(scene);
    amb.fireflies = buildFireflies(scene, amb.vfxScale);
    amb.water = buildFountainWater(scene);
    amb.embers = buildEmberDrift(scene, amb.vfxScale);
  }
  buildSkyline(scene);
  // mouse parallax: pointer over the page (not just the canvas)
  function onMouse(e) {
    const w = container.clientWidth || innerWidth, h = container.clientHeight || innerHeight;
    amb.mouseT.x = ((e.clientX ?? w / 2) / w) * 2 - 1;
    amb.mouseT.y = ((e.clientY ?? h / 2) / h) * 2 - 1;
  }
  window.addEventListener('pointermove', onMouse, { passive: true });

  // event hooks: VFX + screen shake (spec 7.3 VFX column, 7.4)
  const shake = { t: 0, amp: 0 };
  let slowmo = 0;
  let camPan = 0;         // low-pass filtered fighter midpoint (v4: no snapping)
  function clampFoe(x) {
    const lim = DIM.spanHalf - DIM.poleClearance;
    return THREE.MathUtils.clamp(x, -lim, lim);
  }
  function opponentOf(cat) { return cat === catA ? 'B' : 'A'; }
  function gap(a, b) { return Math.abs(a.x - b.x); }

  const hooks = {
    onStamp(cat) {
      rope.injectImpulse(cat.x, 0, -0.5, 0);
      vfx.dustBurst({ x: cat.x, y: rope.yAt(cat.x), z: 0 });
    },
    onLungeHit(cat) {
      vfx.lungeSparks(cat.bladeTipWorld());
      if (director.tryClash(opponentOf(cat))) return;
      const foe = opponentOf(cat) === 'A' ? catA : catB;
      const dir = cat === catA ? 1 : -1;
      if (gap(cat, foe) < 1.7) {
        foe.x = clampFoe(foe.x + dir * 0.5);
        rope.injectImpulse(foe.x, 0, -0.6, 0);
        shake.t = 0.08;
        shake.amp = 0.07;
        foe.setState('STUMBLE', 0.6, { dir: -dir, dist: 0.4 });
      }
      rope.injectImpulse(cat.x, 0, -0.5, 0);
    },
    onSlash(cat, kind) {
      const tip = cat.bladeTipWorld();
      if (cat === catA) {
        vfx.emberBurst(tip);
        if (kind === 'up') slowmo = 0.3;
      } else {
        vfx.ghost(tip);
        vfx.ghostTile(tip);
      }
      if (kind === 'crescent' || kind === 'down') {
        const foe = cat === catA ? catB : catA;
        const dir = cat === catA ? -1 : 1;
        if (gap(cat, foe) < 2.0) {
          foe.x = clampFoe(foe.x + dir * 0.6);
          vfx.dustBurst({ x: foe.x, y: rope.yAt(foe.x), z: 0 });
        }
      }
      rope.injectImpulse(cat.x, 0, -0.5, 0);
    },
    onWhoosh(cat) { vfx.ghost(cat.bladeTipWorld()); },
    onTaunt(cat) { vfx.lungeSparks(cat.bladeTipWorld()); },
    onTumble(cat) { vfx.dustBurst({ x: cat.x, y: rope.yAt(cat.x), z: 0 }); }
  };
  const ctx = { rope, flagDart: false, pressureWobble: 0, ...hooks };

  director.onClash = () => {
    vfx.clashBurst(catA.bladeTipWorld());
    shake.t = 0.1;
    shake.amp = 0.1;
    amb.moonPulse = 1; // the sky itself reacts to blades meeting
  };

  // demo pressure source (used until a live feed drives the API)
  const demo = { on: opts.demo !== false, t: 0 };
  let lastPrice = 67000;
  let raf = 0;
  let running = true;
  let pressureWobbleTarget = 0; // smooth tilt driven by setPressure (integration)
  const hooksTrade = [];        // trade callout listeners (integration)

  // debug/integration handle (used by tests and the root webpage task)
  if (opts.debug) {
    window.__duelDebug = { rope, flag, director, catA, catB, arena, vfx, camera, renderer, crowd };
  }

  const api = {
    setPressure(P) {
      demo.on = false;
      pressureWobbleTarget = THREE.MathUtils.clamp(P, -1, 1) * 0.14; // comic tilt wobble
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
    // real 24h change from the feed takes precedence over the trend estimate
    setChange24hText(text) { flag.setChange24hText(text); },
    // big-trade callout hook (integration card): page passes a DOM callback
    onTradeCallout(cb) { hooksTrade.push(cb); return () => { const i = hooksTrade.indexOf(cb); if (i >= 0) hooksTrade.splice(i, 1); }; },
    // adapter/page pushes qualifying big trades here; scene fans out to listeners
    tradeCallout(info) {
      if (info && info.notional >= 250000) amb.moonPulse = 1;          // whale: sky flare + shooting star
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

  // resize
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
      dt = rawDt * 0.35; // Matador Moonrise slow-mo (spec 7.3 move 2)
    }
    simTime += dt;
    frameCount++;

    // demo pressure/price when no live feed is driving the API
    if (demo.on) {
      demo.t += dt;
      const P = Math.sin(demo.t * 0.4) * 0.8 + Math.sin(demo.t * 0.13) * 0.35;
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
    // ease the tilt wobble toward the target so pressure changes read as lean-in
    ctx.pressureWobble += (pressureWobbleTarget - ctx.pressureWobble) * Math.min(1, dt * 5);
    rope.clearLoads();
    rope.setLoad(catA.x + catA.pose.xOff, 1.0);
    rope.setLoad(catB.x + catB.pose.xOff, 1.0);
    rope.step(dt);
    director.update(dt);
    catA.update(dt, ctx);
    catB.update(dt, ctx);
    rope.updateVisual(frameCount);

    flag.update(dt, rope);

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

    // torch flicker (spec 5.4)
    updateArena(arena, simTime);

    vfx.update(dt);
    crowd.update(dt, director.pressure);

    // ---- v2 ambience update ----
    amb.moonPulse = Math.max(0, amb.moonPulse - dt * 0.55);
    // dead-zone + slower easing: only real pointer movement sways the camera
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

    // camera: CLOSE shot on the cats + gentle drift + shake + mouse parallax.
    // v4: the fighter-follow pan is now heavily low-passed (a stumble used to
    // teleport a cat 0.5 units and snap the whole background with it), the
    // parallax has a dead zone so tiny pointer moves can't jitter the frame,
    // and the idle drift is gentler.
    const shk = Math.max(shake.t, 0);
    if (shk > 0) shake.t -= rawDt;
    const s = (shk / 0.1) * shake.amp;
    camPan += ((catA.x + catB.x) * 0.3 - camPan) * Math.min(1, dt * 1.4);
    const mz = (v) => (Math.abs(v) < 0.07 ? 0 : (v - Math.sign(v) * 0.07) / 0.93);
    camera.position.set(
      camPan + Math.sin(simTime * 0.09) * 0.18 + (Math.random() - 0.5) * s + amb.mouse.x * 0.5,
      2.55 + Math.sin(simTime * 0.06) * 0.1 + (Math.random() - 0.5) * s - amb.mouse.y * 0.3,
      6.8
    );
    camera.lookAt(camPan * 0.85, 3.15, 0);

    renderer.render(scene, camera);
  }
  loop();

  // debug/integration handle (used by tests and the root webpage task)
  if (opts.debug) {
    window.__duelDebug = { rope, flag, director, catA, catB, arena, vfx, camera, renderer, crowd, hooksTrade };
  }

  return api;
}

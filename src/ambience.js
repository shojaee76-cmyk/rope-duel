// ambience.js — v2 courtyard life: fireflies, animated fountain water,
// distant Andalusian skyline + sierra behind the wall, ambient ember drift.
// All procedural, all cheap: total < 15 draw calls at full scale.
import * as THREE from '../vendor/three.module.js';
import { ARENA, DIM } from './palette.js';
import { canvasTexture } from './tex.js';

// ---------- distant sierra (a LOW horizon band behind the arcade) ----------
// v3: with the wall now a low parapet, the horizon silhouette must sit just
// above the parapet line (~y 4-7) and leave everything above it to the stars.
export function buildSkyline(scene) {
  const group = new THREE.Group();

  function ridge(width, height, z, color, seed, bottomY) {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 256;
    const g = c.getContext('2d');
    g.clearRect(0, 0, 1024, 256);
    g.fillStyle = color;
    let v = seed;
    const rnd = () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; };
    // ridge line constrained to the lower third of the canvas: hills, not mountains
    const lo = 256 * 0.55, hi = 256 * 0.85;
    g.beginPath();
    g.moveTo(0, 256);
    let y = (lo + hi) / 2;
    for (let x = 0; x <= 1024; x += 16) {
      y += (rnd() - 0.5) * 26;
      y = Math.max(lo, Math.min(hi, y));
      g.lineTo(x, y);
    }
    g.lineTo(1024, 256);
    g.closePath();
    g.fill();
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false })
    );
    m.position.set(0, bottomY + height / 2, z);
    m.renderOrder = -3; // behind arches/moon (-1)
    return m;
  }
  group.add(ridge(170, 10.0, -54, '#161229', 12345, 5.6));  // far range
  group.add(ridge(150, 8.0, -46, '#1E1836', 987654, 5.0));  // near range

  scene.add(group);
  return group;
}

// ---------- fireflies drifting over the courtyard ----------
// v4: fewer + dimmer + slower blink. With the camera now CLOSE, the old
// 70-particle constant bubbling read as background noise rather than ambience.
export function buildFireflies(scene, scale = 1) {
  const N = Math.round(44 * Math.max(0.25, Math.min(1, scale)));
  const pos = new Float32Array(N * 3);
  const seed = new Float32Array(N);
  const home = [];
  for (let i = 0; i < N; i++) {
    const hx = (Math.random() - 0.5) * 20;
    const hy = 0.6 + Math.random() * 3.4;
    const hz = -2 + Math.random() * 9;
    home.push([hx, hy, hz]);
    pos[i * 3] = hx; pos[i * 3 + 1] = hy; pos[i * 3 + 2] = hz;
    seed[i] = Math.random() * Math.PI * 2;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      attribute float seed; uniform float uTime; varying float vA;
      void main(){
        vec3 p = position;
        p.x += sin(uTime*0.5 + seed*7.0)*0.7;
        p.y += sin(uTime*0.8 + seed*13.0)*0.45;
        p.z += cos(uTime*0.6 + seed*5.0)*0.5;
        vA = 0.18 + 0.52*pow(0.5+0.5*sin(uTime*1.15 + seed*20.0), 3.0);
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = (2.0 + 1.5*sin(seed*3.0)) * (9.0/-mv.z) * 3.0;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying float vA;
      void main(){
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.05, length(d));
        vec3 warm = vec3(1.0, 0.85, 0.45);
        gl_FragColor = vec4(warm, m * vA * 0.85);
      }`,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  scene.add(pts);
  return { update(t) { mat.uniforms.uTime.value = t; } };
}

// ---------- fountain: animated water jets + ripples ----------
// v16: two-tier fountain water. A tall central jet rises from the upper bowl's
// finial (y 1.77), arcs down into the bowl; four small arcs spill from the
// bowl's rim into the lower basin (y 0.54); ripples expand on BOTH water
// surfaces. Everything is tinted by the live tape pressure: BUY green when the
// buyers press, SELL red when the sellers do - neutral moonlit blue at rest.
// The scene calls `setPressure(P)` from the director's tape, and `update`
// eases the tint (0.9s) so the water swings hue smoothly, never snaps.
export function buildFountainWater(scene) {
  const group = new THREE.Group();
  group.position.set(0, 0.36, -3);

  // pressure tint: eased toward the live tape (called from scene loop)
  // v16.1: tamer swing - the water stays moonlit blue, the pressure leans it
  // only 55% toward the side color (the courtyard should stay night-blue)
  const tint = { cur: 0, target: 0 }; // -1 sell red .. 0 moonlit .. +1 buy green
  const TINT_MAX = 0.55;
  const cMoon = new THREE.Color('#9FC8E8');
  const cBuy = new THREE.Color('#35D07F');
  const cSell = new THREE.Color('#FF8A80');
  const mixed = new THREE.Color();
  const mixTint = (k) => {
    if (k >= 0) mixed.copy(cMoon).lerp(cBuy, Math.min(1, k) * TINT_MAX);
    else mixed.copy(cMoon).lerp(cSell, Math.min(1, -k) * TINT_MAX);
    return mixed;
  };

  const mkJet = (N, spawn, g0, size, op) => {
    const pos = new Float32Array(N * 3);
    const vel = [];
    for (let i = 0; i < N; i++) { vel.push(spawn()); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x9FC8E8, size, transparent: true, opacity: op,
      depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    });
    const pts = new THREE.Points(geo, mat);
    pts.frustumCulled = false;
    return { pts, vel, N, spawn, g0, mat };
  };

  // main jet: tall column from the finial (group-local y 1.41 = world 1.77)
  const JN = 200;
  const jet = mkJet(JN,
    () => {
      const a = Math.random() * Math.PI * 2;
      const sp = 0.9 + Math.random() * 0.7;
      return { x: 0, y: 1.41, z: 0, vx: Math.cos(a) * 0.16 * sp, vy: 1.55 + Math.random() * 0.75, vz: Math.sin(a) * 0.16 * sp };
    },
    4.2, 0.055, 0.75);
  group.add(jet.pts);

  // foam: big soft slow particles churning at the two impact points (where the
  // column lands in the bowl, and where the sheet lands in the basin). Reads
  // as white water without any shader work.
  const mkFoam = (N, y, r, size, op) => mkJet(N,
    () => {
      const a = Math.random() * Math.PI * 2, rr = Math.random() * r;
      return { x: Math.cos(a) * rr, y: y + Math.random() * 0.05, z: Math.sin(a) * rr, vx: Math.cos(a) * 0.06, vy: 0.14 + Math.random() * 0.12, vz: Math.sin(a) * 0.06 };
    },
    1.1, size, op);
  const foamBowl = mkFoam(30, 1.32, 0.17, 0.085, 0.5);   // column lands in the bowl
  const foamBasin = mkFoam(44, 0.2, 1.05, 0.1, 0.4);     // sheet lands in the basin
  group.add(foamBowl.pts); group.add(foamBasin.pts);

  // bowl spill arcs: four streams falling from the bowl lip (y 1.24) outward
  // into the lower basin, each a narrow ballistic cone
  const SN = 26;
  const spills = [];
  for (let s = 0; s < 4; s++) {
    const dirA = (s / 4) * Math.PI * 2 + Math.PI / 8;
    const sp = mkJet(SN, () => {
      const wob = (Math.random() - 0.5) * 0.12;
      return {
        x: Math.cos(dirA) * 0.64, y: 0.9, z: Math.sin(dirA) * 0.64,
        vx: Math.cos(dirA) * (0.5 + wob), vy: -0.15 + Math.random() * 0.1, vz: Math.sin(dirA) * (0.5 + wob),
      };
    }, 4.2, 0.045, 0.6);
    group.add(sp.pts);
    spills.push(sp);
  }

  // helper to integrate one jet's droplets inside its own spawn bounds
  const integrate = (j, dt, floorY, respawn) => {
    const pa = j.pts.geometry.attributes.position;
    for (let i = 0; i < j.N; i++) {
      let d = j.vel[i];
      d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt;
      d.vy -= j.g0 * dt;
      if (d.y < floorY) {
        if (respawn) { const s = j.spawn(); d.x = s.x; d.y = s.y; d.z = s.z; d.vx = s.vx; d.vy = s.vy; d.vz = s.vz; }
        else { d.y = floorY; d.vy = 0; d.vx *= 0.6; d.vz *= 0.6; }
      }
      pa.setXYZ(i, d.x, d.y, d.z);
    }
    pa.needsUpdate = true;
  };

  // water surface discs (the "wet" read): soft additive discs under the jets
  const mkSurface = (r, y, op) => {
    const m = new THREE.Mesh(
      new THREE.CircleGeometry(r, 40),
      new THREE.MeshBasicMaterial({ color: 0x9FC8E8, transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    m.rotation.x = -Math.PI / 2; m.position.y = y;
    group.add(m);
    return m;
  };
  const surfLower = mkSurface(1.42, 0.18, 0.16);
  const surfUpper = mkSurface(0.56, 1.25, 0.2);
  surfLower.visible = false; surfUpper.visible = false; // additive glow reads sci-fi; replaced below

  // v16.3: REAL water pools - lit standard material, not additive planes. A
  // pale slate-blue disc that catches the moonlight, sits just above the
  // azulejo inlay, and tints with the tape pressure like everything else.
  const mkPool = (r, y) => {
    const m = new THREE.Mesh(
      new THREE.CircleGeometry(r, 40),
      new THREE.MeshStandardMaterial({ color: '#7FA8C9', roughness: 0.15, metalness: 0.35, transparent: true, opacity: 0.8 })
    );
    m.rotation.x = -Math.PI / 2; m.position.y = y;
    group.add(m);
    return m;
  };
  const poolLower = mkPool(1.44, 0.56);  // lower basin, above the star inlay
  const poolUpper = mkPool(0.57, 1.55);  // upper bowl, just under the lip

  // v16.4: LESS IS MORE. Stacking additive column + sheet + foam + pools in a
  // 2-unit area turned into white mush (the reviews kept saying "glowing
  // pedestal"). Final recipe: LIT pools (the water IS here) + particle jets
  // (the water MOVES) + foam at the landings. No additive water bodies.
  const colC = document.createElement('canvas');
  colC.width = 64; colC.height = 128;
  {
    const g = colC.getContext('2d');
    g.fillStyle = 'rgba(190,220,255,0.30)'; g.fillRect(0, 0, 64, 128);
    for (let i = 0; i < 34; i++) {
      const x = Math.random() * 64;
      g.strokeStyle = `rgba(240,249,255,${0.22 + Math.random() * 0.3})`;
      g.lineWidth = 1.2 + Math.random() * 2.2;
      g.beginPath(); g.moveTo(x, 0); g.lineTo(x + (Math.random() - 0.5) * 7, 128); g.stroke();
    }
  }
  const colTex = canvasTexture(colC, { repeatX: 2, repeatY: 2 });
  const colMat = new THREE.MeshBasicMaterial({
    map: colTex, transparent: true, opacity: 0.5, depthWrite: false,
    blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
  // main column: a THIN bright core only (no wide additive cone)
  const column = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.09, 0.62, 8, 1, true), colMat);
  column.position.y = 1.44;
  group.add(column);
  // NO falling-sheet cone: it read as a glowing skirt and buried the pools.
  // NO flat glow discs: the additive planes read as sci-fi, not water. The
  // sparkle comes from foam + moonlit motes + the inlay under the water.
  surfLower.visible = false;
  surfUpper.visible = false;

  // ripple rings on both surfaces
  const rings = [];
  const mkRing = (y, base) => {
    const rm = new THREE.Mesh(
      new THREE.RingGeometry(0.98, 1.0, 40),
      new THREE.MeshBasicMaterial({ color: 0x9FC8E8, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false })
    );
    rm.rotation.x = -Math.PI / 2; rm.position.y = y; rm.userData.k = base;
    group.add(rm); rings.push(rm);
  };
  for (let i = 0; i < 3; i++) mkRing(0.57, i / 3);         // lower pool surface
  for (let i = 0; i < 2; i++) mkRing(1.56, i / 2);         // upper bowl surface (smaller scale)
  const ringScaleY = { 1.56: 0.42, 0.57: 1.0 };             // bowl rings stay small

  // moonlit sparkle: a handful of tiny bright motes drifting on the surfaces
  const K = 14;
  const sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(K * 3), 3));
  const sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({
    color: 0xEAF4FF, size: 0.03, transparent: true, opacity: 0.8,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  }));
  sparks.frustumCulled = false;
  group.add(sparks);
  const sparkD = [];
  for (let i = 0; i < K; i++) sparkD.push({ a: Math.random() * Math.PI * 2, r: 0.3 + Math.random() * 1.05, ph: Math.random() * Math.PI * 2, up: Math.random() < 0.25 });

  scene.add(group);

  let acc = 0;
  return {
    setPressure(P) { tint.target = THREE.MathUtils.clamp(P, -1, 1); },
    update(t, dt) {
      acc += dt;
      // eased tint swing (0.9s tau) - water color follows the tape smoothly
      tint.cur += (tint.target - tint.cur) * Math.min(1, dt / 0.9);
      const col = mixTint(tint.cur);
      // strong pressure = livelier water (opacity rides |P|), rest = calm moonlit
      const boost = 0.8 + 0.45 * Math.abs(tint.cur);
      jet.mat.color.copy(col); surfLower.material.color.copy(col); surfUpper.material.color.copy(col);
      for (const sp of spills) sp.mat.color.copy(col);
      for (const r of rings) r.material.color.copy(col);
      // main jet: ballistic integrate inside the upper bowl
      integrate(jet, dt, 1.22, true);
      // spills: fall to the lower basin floor and fade at the rim
      for (const sp of spills) integrate(sp, dt, 0.02, false);
      // foam churns: droplets pop up and fall back into the ring
      integrate(foamBowl, dt, 1.05, true);
      integrate(foamBasin, dt, 0.03, true);
      // scroll the water body textures downward = falling water
      colTex.offset.y -= dt * 1.6;
      colTex.offset.y = ((colTex.offset.y % 1) + 1) % 1;
      // breathe (calm at rest, luminous under strong pressure)
      jet.mat.opacity = Math.min(1, 0.8 * boost);
      for (const sp of spills) sp.mat.opacity = Math.min(1, 0.65 * boost);
      colMat.opacity = (0.4 + 0.1 * Math.sin(t * 2.4)) * boost;
      // pools: tint with the tape (strong, visible lean), faint moonlit shimmer
      poolLower.material.color.copy(col).lerp(new THREE.Color('#7FA8C9'), 0.2);
      poolUpper.material.color.copy(col).lerp(new THREE.Color('#7FA8C9'), 0.2);
      poolLower.material.opacity = 0.72 + 0.08 * Math.sin(t * 1.3);
      poolUpper.material.opacity = 0.75 + 0.08 * Math.sin(t * 1.5 + 0.9);
      foamBowl.mat.color.copy(col).lerp(new THREE.Color('#EAF4FF'), 0.6);
      foamBasin.mat.color.copy(col).lerp(new THREE.Color('#EAF4FF'), 0.6);
      foamBowl.mat.opacity = Math.min(1, 0.5 * boost);
      foamBasin.mat.opacity = Math.min(1, 0.4 * boost);
      // expanding ripples (lower full-size, bowl rings scaled down)
      for (const r of rings) {
        r.userData.k += dt * 0.5;
        if (r.userData.k > 1) r.userData.k -= 1;
        const k = r.userData.k;
        const s = (0.15 + k * 1.15) * (ringScaleY[r.position.y] || 1);
        r.scale.set(s, s, s);
        r.material.opacity = 0.4 * (1 - k);
      }
      // sparkle drift: slow orbit + twinkle on either surface
      const spa = sparks.geometry.attributes.position;
      for (let i = 0; i < K; i++) {
        const d = sparkD[i];
        d.a += dt * 0.22;
        const y = d.up ? 1.57 + 0.02 * Math.sin(t * 2.3 + d.ph) : 0.58 + 0.02 * Math.sin(t * 2.1 + d.ph);
        spa.setXYZ(i, Math.cos(d.a) * d.r, y, Math.sin(d.a) * d.r);
      }
      spa.needsUpdate = true;
      sparks.material.opacity = 0.55 + 0.35 * Math.sin(t * 3.1);
    },
  };
}

// ---------- ambient ember drift near the torches ----------
// v4: fewer + slower (same reason as the fireflies: the close framing makes
// fast ambience particles read as instability)
export function buildEmberDrift(scene, scale = 1) {
  const N = Math.round(28 * Math.max(0.25, Math.min(1, scale)));
  const pos = new Float32Array(N * 3);
  const seed = new Float32Array(N);
  const torchXs = [-7.5, -2.7, 2.7, 7.5];
  for (let i = 0; i < N; i++) {
    const tx = torchXs[i % 4];
    pos[i * 3] = tx + (Math.random() - 0.5) * 0.5;
    pos[i * 3 + 1] = 2.9 + Math.random() * 2.4;
    pos[i * 3 + 2] = -6.2 + Math.random() * 1.4;
    seed[i] = Math.random() * 100;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      attribute float seed; uniform float uTime; varying float vA;
      void main(){
        vec3 p = position;
        float lt = mod(uTime*0.15 + seed, 3.0);           // life 3s (slower rise)
        p.y += lt * 0.55;                                 // rise
        p.x += sin(uTime*1.3 + seed*3.0)*0.14 + lt*0.05;  // sway + drift
        vA = (1.0 - lt/3.0) * 0.85;
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = (7.0 + 3.0*sin(seed)) * (10.0/-mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying float vA;
      void main(){
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.1, length(d));
        gl_FragColor = vec4(vec3(1.0, 0.62, 0.28), m * vA);
      }`,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  scene.add(pts);
  return { update(t) { mat.uniforms.uTime.value = t; } };
}

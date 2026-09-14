// ambience.js — v2 courtyard life: fireflies, animated fountain water,
// distant Andalusian skyline + sierra behind the wall, ambient ember drift.
// All procedural, all cheap: total < 15 draw calls at full scale.
import * as THREE from '../vendor/three.module.js';
import { ARENA, DIM } from './palette.js';

// ---------- distant skyline + sierra (behind the wall, in the arch voids) ----------
export function buildSkyline(scene) {
  const group = new THREE.Group();

  // sierra ridge: two layers of jagged dark hills
  function ridge(width, height, base, color, seed, y0) {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 256;
    const g = c.getContext('2d');
    g.clearRect(0, 0, 1024, 256);
    g.fillStyle = color;
    g.beginPath();
    g.moveTo(0, 256);
    let y = 120;
    let v = seed;
    const rnd = () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; };
    for (let x = 0; x <= 1024; x += 16) {
      y += (rnd() - 0.5) * 34;
      y = Math.max(30, Math.min(210, y));
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
    m.position.set(0, y0, base);
    m.renderOrder = -3; // drawn before the moon (-1): moon stays visible in the arch
    return m;
  }
  group.add(ridge(150, 30, -52, '#141126', 12345, 6));
  group.add(ridge(120, 22, -48, '#1B1830', 987654, 5));

  // village silhouette: whitewashed cubes + a bell tower, warm windows
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 256;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 1024, 256);
  let v = 424242;
  const rnd = () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; };
  const skyY = 190;
  for (let x = 40; x < 1000;) {
    const w = 26 + rnd() * 46;
    const h = 26 + rnd() * 58;
    g.fillStyle = '#221E33';
    g.fillRect(x, skyY - h, w, h + 66);
    // roof hint
    g.fillStyle = '#191527';
    g.fillRect(x - 3, skyY - h - 5, w + 6, 6);
    // windows: tiny warm rectangles, sparse
    if (rnd() < 0.8) {
      const n = 1 + Math.floor(rnd() * 3);
      for (let i = 0; i < n; i++) {
        g.fillStyle = rnd() < 0.7 ? 'rgba(255,190,110,0.85)' : 'rgba(255,220,160,0.6)';
        g.fillRect(x + 5 + rnd() * (w - 12), skyY - h + 8 + rnd() * (h - 18), 3.5, 5);
      }
    }
    x += w + 6 + rnd() * 22;
  }
  // bell tower with arch
  g.fillStyle = '#221E33';
  g.fillRect(492, skyY - 118, 34, 184);
  g.fillStyle = '#0E0B18';
  g.beginPath(); g.arc(509, skyY - 96, 9, Math.PI, 0); g.fill();
  g.fillRect(500, skyY - 96, 18, 22);
  g.fillStyle = 'rgba(255,200,120,0.9)';
  g.fillRect(505, skyY - 90, 8, 10);
  const vtex = new THREE.CanvasTexture(c);
  vtex.colorSpace = THREE.SRGBColorSpace;
  const village = new THREE.Mesh(
    new THREE.PlaneGeometry(96, 24),
    new THREE.MeshBasicMaterial({ map: vtex, transparent: true, depthWrite: false, fog: false })
  );
  village.position.set(-4, 7.2, -46);
  village.renderOrder = -2; // after ridges, before the moon: moon wins the center arch
  group.add(village);

  scene.add(group);
  return group;
}

// ---------- fireflies drifting over the courtyard ----------
export function buildFireflies(scene, scale = 1) {
  const N = Math.round(70 * Math.max(0.25, Math.min(1, scale)));
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
        vA = 0.25 + 0.75*pow(0.5+0.5*sin(uTime*1.8 + seed*20.0), 3.0);
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
export function buildFountainWater(scene) {
  const group = new THREE.Group();
  group.position.set(0, 0.36, -3);

  // central jet: cone of soft blue-white points
  const N = 160;
  const pos = new Float32Array(N * 3);
  const vel = [];
  for (let i = 0; i < N; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 0.9 + Math.random() * 0.7;
    vel.push([Math.cos(a) * 0.22 * sp, 1.7 + Math.random() * 0.9, Math.sin(a) * 0.22 * sp]);
    pos[i * 3] = 0; pos[i * 3 + 1] = 0; pos[i * 3 + 2] = 0;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const jetMat = new THREE.PointsMaterial({
    color: 0x9FC8E8, size: 0.05, transparent: true, opacity: 0.7,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  });
  const jet = new THREE.Points(geo, jetMat);
  group.add(jet);

  // ripple rings on the basin surface
  const rings = [];
  for (let i = 0; i < 3; i++) {
    const rm = new THREE.Mesh(
      new THREE.RingGeometry(0.98, 1.0, 40),
      new THREE.MeshBasicMaterial({ color: 0x9FC8E8, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false })
    );
    rm.rotation.x = -Math.PI / 2;
    rm.position.y = 0.02;
    rm.userData.k = i / 3;
    group.add(rm);
    rings.push(rm);
  }
  scene.add(group);

  let acc = 0;
  return {
    update(t, dt) {
      // integrate jet droplets
      acc += dt;
      const pa = jet.geometry.attributes.position;
      for (let i = 0; i < N; i++) {
        let x = pa.getX(i), y = pa.getY(i), z = pa.getZ(i);
        const v = vel[i];
        x += v[0] * dt; y += v[1] * dt; z += v[2] * dt;
        v[1] -= 4.2 * dt;
        if (y < 0.02) { // respawn
          const a = Math.random() * Math.PI * 2;
          const sp = 0.9 + Math.random() * 0.7;
          v[0] = Math.cos(a) * 0.22 * sp;
          v[1] = 1.7 + Math.random() * 0.9;
          v[2] = Math.sin(a) * 0.22 * sp;
          x = 0; y = 0; z = 0;
        }
        pa.setXYZ(i, x, y, z);
      }
      pa.needsUpdate = true;
      // expanding ripples
      for (const r of rings) {
        r.userData.k += dt * 0.5;
        if (r.userData.k > 1) r.userData.k -= 1;
        const k = r.userData.k;
        const s = 0.15 + k * 1.15;
        r.scale.set(s, s, s);
        r.material.opacity = 0.4 * (1 - k);
      }
    },
  };
}

// ---------- ambient ember drift near the torches ----------
export function buildEmberDrift(scene, scale = 1) {
  const N = Math.round(46 * Math.max(0.25, Math.min(1, scale)));
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
        float lt = mod(uTime*0.22 + seed, 3.0);          // life 0..3s
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

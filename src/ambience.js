// ambience.js — courtyard life: fireflies, distant Andalusian skyline + sierra
// behind the wall, ambient ember drift. (Fountain water removed in v17.)
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

// ---------- fountain water removed in v17 (fountain deleted) ----------


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

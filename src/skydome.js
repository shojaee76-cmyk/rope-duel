// skydome.js — the upgraded night sky for THE ROPE DUEL (v2 ambience upgrade).
// Everything procedural canvas/points: no assets, no network, works offline.
// Contents: multi-stop gradient dome, 3 parallax star layers with twinkle,
// Milky Way band, drifting cloud wisps that cross the BTC moon, shooting
// stars. Each layer is individually updatable from scene.js's main loop.
import * as THREE from '../vendor/three.module.js';

function canvasTexture(c) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// ---------- multi-stop gradient dome ----------
// Deeper zenith, blue mid-sky, warm horizon-glow band: reads like a real
// night sky photographed in the Andalusian hills rather than a flat ramp.
export function buildSkyDome(scene) {
  const R = 60;
  const skyGeo = new THREE.SphereGeometry(R, 32, 20);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color('#04050E') },
      mid: { value: new THREE.Color('#0B1030') },
      horizon: { value: new THREE.Color('#1E1638') },
      glowA: { value: new THREE.Color('#3A2638') },
      glowB: { value: new THREE.Color('#1F0F0A') },
    },
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon;
      uniform vec3 glowA; uniform vec3 glowB;
      varying vec3 vP;
      void main(){
        float h = clamp(vP.y / ${R.toFixed(1)} * 1.45 + 0.30, 0.0, 1.0);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.55, h));
        col = mix(col, top, smoothstep(0.55, 1.0, h));
        // warm scatter bands near the horizon (distant torch/city glow)
        float band = pow(max(0.0, 1.0 - abs(vP.y) / ${R.toFixed(1)}), 3.0);
        col += glowA * band * 0.55;
        float core = pow(max(0.0, 1.0 - abs(vP.y) / ${R.toFixed(1)}), 8.0);
        col += glowB * core * 0.9;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  scene.add(sky);
  return sky;
}

// ---------- stars: 3 depth layers + twinkle + Milky Way band ----------
export function buildStars(scene) {
  const group = new THREE.Group();
  const layers = [
    { n: 420, r: 56.0, size: 1.15, opacity: 0.95, tw: 1.7 },
    { n: 300, r: 57.5, size: 0.85, opacity: 0.75, tw: 2.3 },
    { n: 200, r: 59.0, size: 0.62, opacity: 0.55, tw: 3.1 },
  ];
  const created = [];
  for (const L of layers) {
    const pos = [], col = [], ph = [];
    for (let i = 0; i < L.n; i++) {
      // sample the visible sky cap directly: y-component 0.12..0.95 of the
      // dome radius, random azimuth. Guarantees stars ABOVE the wall line.
      const theta = Math.random() * Math.PI * 2;
      const yc = 0.12 + Math.random() * 0.83;
      const horiz = Math.sqrt(Math.max(0, 1 - yc * yc));
      const r = L.r;
      pos.push(r * horiz * Math.cos(theta), r * yc, r * horiz * Math.sin(theta));
      // color variety: cool white / warm white / faint gold / faint blue
      const k = Math.random();
      const c = k < 0.55 ? [0.86, 0.89, 1.0] : k < 0.8 ? [1.0, 0.96, 0.86] : k < 0.92 ? [1.0, 0.84, 0.6] : [0.75, 0.83, 1.0];
      const b = 0.6 + Math.random() * 0.4;
      col.push(c[0] * b, c[1] * b, c[2] * b);
      ph.push(Math.random() * Math.PI * 2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setAttribute('phase', new THREE.Float32BufferAttribute(ph, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uBase: { value: L.opacity }, uSize: { value: L.size } },
      vertexShader: `
        attribute float phase; attribute vec3 color; varying vec3 vC; varying float vPh;
        uniform float uSize;
        void main(){ vC = color; vPh = phase;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = uSize * (280.0 / -mv.z);
          gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `
        uniform float uTime; uniform float uBase; varying vec3 vC; varying float vPh;
        void main(){
          vec2 d = gl_PointCoord - 0.5;
          float m = smoothstep(0.5, 0.12, length(d));
          float tw = 0.62 + 0.38 * sin(uTime * ${L.tw.toFixed(2)} + vPh);
          gl_FragColor = vec4(vC, uBase * m * tw);
        }`,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    points.renderOrder = -4; // behind clouds + moon (transparent sort override)
    group.add(points);
    created.push({ points, mat, speed: L.tw, base: L.opacity });
  }

  // Milky Way: a wide, faint, mottled band of tiny dim points across the dome
  const mwPos = [], mwCol = [];
  for (let i = 0; i < 900; i++) {
    // band plane tilted across the sky
    const t = (Math.random() - 0.5) * Math.PI * 2;
    const w = (Math.random() - 0.5) * 0.55 * (1 + Math.sin(t * 3) * 0.3);
    const ax = Math.cos(t) * 56, ay = 14 + Math.sin(t * 1.3) * 22, az = Math.sin(t) * 40 - 20;
    const px = ax + (Math.random() - 0.5) * 14;
    const py = ay + w * 22 + (Math.random() - 0.5) * 9;
    const pz = az + (Math.random() - 0.5) * 14;
    const b = 0.10 + Math.random() * 0.30;
    const warm = Math.random() < 0.3;
    mwPos.push(px, Math.max(3, py), pz);
    mwCol.push(b * (warm ? 1.0 : 0.85), b * (warm ? 0.9 : 0.9), b * (warm ? 0.75 : 1.0));
  }
  const mwGeo = new THREE.BufferGeometry();
  mwGeo.setAttribute('position', new THREE.Float32BufferAttribute(mwPos, 3));
  mwGeo.setAttribute('color', new THREE.Float32BufferAttribute(mwCol, 3));
  const mw = new THREE.Points(mwGeo, new THREE.PointsMaterial({
    size: 0.42, sizeAttenuation: true, vertexColors: true, transparent: true,
    opacity: 0.85, depthWrite: false, fog: false, blending: THREE.AdditiveBlending,
  }));
  mw.frustumCulled = false;
  mw.renderOrder = -4;
  group.add(mw);

  scene.add(group);
  return {
    group,
    update(t) {
      for (const L of created) L.mat.uniforms.uTime.value = t * L.speed;
      // very slow rotation of the whole sky (3 min per revolution-ish)
      group.rotation.y = t * 0.004;
    },
  };
}

// ---------- drifting cloud wisps that cross the BTC moon ----------
export function buildClouds(scene) {
  const group = new THREE.Group();
  const wisps = [];
  function wispTexture(seed) {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const g = c.getContext('2d');
    // layered soft blobs = wisp silhouette (BOLD: must read against the moon)
    for (let i = 0; i < 26; i++) {
      const x = 30 + Math.random() * 196, y = 40 + Math.random() * 55;
      const r = 16 + Math.random() * 36;
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.16 + Math.random() * 0.22;
      gr.addColorStop(0, `rgba(205,215,245,${a})`);
      gr.addColorStop(1, 'rgba(205,215,245,0)');
      g.fillStyle = gr;
      g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    }
    return canvasTexture(c);
  }
  for (let i = 0; i < 7; i++) {
    const mat = new THREE.MeshBasicMaterial({
      map: wispTexture(i), transparent: true, depthWrite: false, fog: false,
      opacity: 0.5 + Math.random() * 0.3, side: THREE.DoubleSide,
    });
    const w = 3.4 + Math.random() * 3.2;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 0.4), mat);
    // inside the visible sky sliver above the wall (wall top ~8.6 at z=-7,
    // camera sees up to ~y7.5 at z=-5): in front of the moon (-7.45),
    // behind the rope (z=0), so wisps visibly CROSS the moon disc
    m.position.set((Math.random() - 0.5) * 26, 7.6 + Math.random() * 1.6, -5.6 - Math.random() * 0.8);
    m.rotation.x = -0.05;
    m.renderOrder = 2; // drawn after the moon (-1): wisps overdraw the moon disc
    group.add(m);
    wisps.push({ m, speed: 0.12 + Math.random() * 0.2, phase: Math.random() * 100 });
  }
  scene.add(group);
  return {
    group,
    update(t, dt) {
      for (const w of wisps) {
        w.m.position.x += w.speed * dt;
        // drift rightward, wrap within the visible sky band
        if (w.m.position.x > 18) w.m.position.x = -18;
        w.m.position.y += Math.sin(t * 0.3 + w.phase) * 0.0035;
        // gentle opacity breathing (kept >= 0.35 so wisps stay visible)
        w.m.material.opacity = 0.62 + 0.3 * Math.sin(t * 0.23 + w.phase);
        if (w.m.material.opacity < 0.35) w.m.material.opacity = 0.35;
      }
    },
  };
}

// ---------- shooting stars ----------
export function buildShootingStars(scene) {
  const group = new THREE.Group();
  const N = 3;
  const mats = [], meshes = [];
  for (let i = 0; i < N; i++) {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 16;
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 8, 256, 8);
    grad.addColorStop(0, 'rgba(255,255,255,0)');
    grad.addColorStop(0.75, 'rgba(200,220,255,0.85)');
    grad.addColorStop(1, 'rgba(255,255,255,1)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 16);
    const tex = canvasTexture(c);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false, opacity: 0, blending: THREE.AdditiveBlending });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(9, 0.16), mat);
    m.visible = false;
    m.renderOrder = -4;
    group.add(m);
    meshes.push(m); mats.push(mat);
  }
  const state = meshes.map((_, i) => ({ active: false, t: 0, dur: 0, next: 4 + i * 5, from: new THREE.Vector3(), to: new THREE.Vector3() }));
  scene.add(group);
  return {
    group,
    update(t, dt, moonPulse) {
      for (let i = 0; i < N; i++) {
        const s = state[i], m = meshes[i], mat = mats[i];
        if (!s.active) {
          s.next -= dt * (1 + moonPulse * 0.6);
          if (s.next <= 0) {
            s.active = true; s.t = 0;
            s.dur = 0.9 + Math.random() * 0.7;
            const ang = Math.PI * (0.62 + Math.random() * 0.25);
            const r1 = 40 + Math.random() * 8;
            s.from.set(Math.cos(ang) * r1 * (Math.random() < 0.5 ? -1 : 1), 20 + Math.random() * 14, -28 - Math.random() * 10);
            s.to.set(s.from.x * -0.35 - (Math.random() - 0.5) * 20, s.from.y - 14 - Math.random() * 8, s.from.z + 4);
            m.visible = true;
          }
          continue;
        }
        s.t += dt;
        const k = s.t / s.dur;
        if (k >= 1) {
          s.active = false; s.next = 6 + Math.random() * 12; m.visible = false; continue;
        }
        m.position.lerpVectors(s.from, s.to, k);
        m.lookAt(m.position.clone().multiplyScalar(2));
        const fade = Math.sin(Math.min(1, k * 1.15) * Math.PI);
        mat.opacity = fade * 0.9;
      }
    },
  };
}

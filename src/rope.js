// Verlet rope: 16 segments pinned between pole tops, sagging under cat loads.
// Spec 1.3: damping 0.985, sway clamp +/-0.35, paw stamps inject impulses.
// Research (t_c027c590): >=60 visual points via CatmullRomCurve3 -> TubeGeometry per frame.
import * as THREE from '../vendor/three.module.js';
import { DIM, ARENA, MATERIALS } from './palette.js';

const V3 = THREE.Vector3;

function hempTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = ARENA.ropeHemp;
  g.fillRect(0, 0, 128, 128);
  g.strokeStyle = ARENA.ropeFiber;
  g.lineWidth = 5;
  for (let x = -128; x < 256; x += 14) {
    g.beginPath();
    g.moveTo(x, 0); g.lineTo(x + 64, 128);
    g.moveTo(x + 64, 0); g.lineTo(x, 128);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(14, 2);
  return t;
}

export class VerletRope {
  constructor({
    segments = DIM.ropeSegments, spanHalf = DIM.spanHalf, y = DIM.ropeY,
    damping = DIM.damping, swayClamp = DIM.swayClamp
  } = {}) {
    this.N = segments;
    this.count = segments + 1;
    this.spanHalf = spanHalf;
    this.restY = y;
    this.damping = damping;
    this.swayClamp = swayClamp;
    this.restLen = (spanHalf * 2) / segments;
    this.pos = [];
    this.prev = [];
    this.acc = [];
    this.pinned = new Set([0, this.count - 1]);
    for (let i = 0; i < this.count; i++) {
      const t = i / this.N;
      const x = -spanHalf + 2 * spanHalf * t;
      const yy = y - DIM.restSagTwo * Math.sin(Math.PI * t);
      this.pos.push(new V3(x, yy, 0));
      this.prev.push(new V3(x, yy, 0));
      this.acc.push(new V3(0, 0, 0));
    }
    this.weights = new Map(); // persistent point index -> weight (re-set each frame)
    this._accum = 0;
    this._tmp = new V3();

    // Visual mesh
    this.curve = new THREE.CatmullRomCurve3(this.pos.slice(), false, 'catmullrom', 0.5);
    const tex = hempTexture();
    this.mat = new THREE.MeshStandardMaterial({
      map: tex, color: 0xffffff, roughness: 0.95, metalness: 0.0
    });
    this.mesh = new THREE.Mesh(this._makeTube(), this.mat);
    this.mesh.castShadow = false;
    this.mesh.frustumCulled = false;
  }

  _makeTube() {
    this.curve.points = this.pos.slice();
    return new THREE.TubeGeometry(this.curve, 96, DIM.ropeRadius, 8, false);
  }

  // ---- physics ----
  setLoad(x, weight) {
    const i = this._nearestIndex(x);
    this.weights.set(i, (this.weights.get(i) || 0) + weight);
  }

  clearLoads() {
    this.weights.clear();
  }

  _nearestIndex(x) {
    const t = THREE.MathUtils.clamp((x + this.spanHalf) / (2 * this.spanHalf), 0, 1);
    return Math.round(t * this.N);
  }

  injectImpulse(x, dx, dy, dz) {
    const i = this._nearestIndex(x);
    for (const j of [i - 1, i, i + 1]) {
      if (j < 0 || j >= this.count || this.pinned.has(j)) continue;
      const f = j === i ? 1 : 0.5;
      this.prev[j].x -= dx * f; this.prev[j].y -= dy * f; this.prev[j].z -= dz * f;
    }
  }

  step(dt) {
    // fixed substeps for stability
    this._accum = Math.min(this._accum + dt, 0.1);
    const h = 1 / 120;
    while (this._accum >= h) { this._sub(h); this._accum -= h; }
  }

  _sub(h) {
    const { pos, prev, acc } = this;
    // forces: gravity + persistent cat loads (act every substep)
    for (let i = 0; i < this.count; i++) {
      acc[i].set(0, -7.5, 0);
    }
    for (const [i, w] of this.weights) {
      acc[i].y -= w * 6.0;
      if (i > 0) acc[i - 1].y -= w * 3.0;
      if (i < this.count - 1) acc[i + 1].y -= w * 3.0;
    }
    // integrate
    for (let i = 0; i < this.count; i++) {
      if (this.pinned.has(i)) continue;
      const p = pos[i], pr = prev[i], a = acc[i];
      const nx = p.x + (p.x - pr.x) * this.damping + a.x * h * h;
      const ny = p.y + (p.y - pr.y) * this.damping + a.y * h * h;
      const nz = p.z + (p.z - pr.z) * this.damping + a.z * h * h;
      pr.copy(p); p.set(nx, ny, nz);
    }
    // constraints
    for (let k = 0; k < 14; k++) {
      for (let i = 0; i < this.N; i++) {
        const a = pos[i], b = pos[i + 1];
        this._tmp.subVectors(b, a);
        const d = this._tmp.length() || 1e-6;
        const diff = (d - this.restLen) / d;
        const ia = this.pinned.has(i), ib = this.pinned.has(i + 1);
        if (ia && ib) continue;
        const wa = ia ? 0 : (ib ? 1 : 0.5);
        const wb = ib ? 0 : (ia ? 1 : 0.5);
        a.addScaledVector(this._tmp, diff * wa);
        b.addScaledVector(this._tmp, -diff * wb);
      }
      // pins + sway clamp
      pos[0].set(-this.spanHalf, this.restY, 0);
      pos[this.count - 1].set(this.spanHalf, this.restY, 0);
      for (let i = 0; i < this.count; i++) {
        const p = pos[i];
        p.z = THREE.MathUtils.clamp(p.z, -this.swayClamp, this.swayClamp);
        p.y = Math.min(p.y, this.restY + 0.25);
      }
    }
  }

  // rope surface y at world x (interpolated)
  yAt(x) {
    const t = THREE.MathUtils.clamp((x + this.spanHalf) / (2 * this.spanHalf), 0, 1);
    const f = t * this.N;
    const i = Math.min(Math.floor(f), this.N - 1);
    const u = f - i;
    return this.pos[i].y * (1 - u) + this.pos[i + 1].y * u;
  }

  slopeAt(x) {
    const e = 0.3;
    return (this.yAt(x + e) - this.yAt(x - e)) / (2 * e);
  }

  pointAt(index) {
    return this.pos[THREE.MathUtils.clamp(index, 0, this.count - 1)];
  }

  updateVisual(frameNo) {
    // rebuild the tube every other frame (physics still 120 Hz): the swap is
    // imperceptible but halves the geometry allocation churn (perf hotspot).
    if (frameNo !== undefined && (frameNo & 1)) return;
    const old = this.mesh.geometry;
    this.mesh.geometry = this._makeTube();
    old.dispose();
  }

  sagAmount() {
    return this.restY - this.yAt(0);
  }
}

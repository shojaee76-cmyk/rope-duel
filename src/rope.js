// Verlet rope: 24 segments pinned between pole tops, sagging under cat loads.
//
// v4: damping 0.985 -> 0.93, tighter sway clamp, braided hemp texture.
// v5 (the "rope is too shaky / moves too much" pass) - three separate fixes:
//   1. PHYSICS: the old rope ran at damping 0.985, i.e. it lost 1.5% of its
//      energy per 1/120 s substep, so a single paw stamp rang for seconds. Now
//      0.93 (energy dies in ~2 swings), gravity is lighter (-5.2 vs -7.5), the
//      loads are lighter and every external impulse is scaled by
//      DIM.impulseScale (0.16), so stamping/hitting NUDGES the rope.
//   2. RENDER LOW-PASS: the mesh follows a smoothed copy of the physics points
//      (1st-order low-pass at DIM.ropeSmooth 1/s + a 1-2-1 spatial pass), so the
//      120 Hz solver noise never reaches the pixels. The cats and the price flag
//      ride the SMOOTHED rope too, so the whole rig moves as one calm system.
//   3. NO PER-FRAME ALLOCATION: the tube used to be rebuilt
//      (new TubeGeometry + dispose) every other frame, which is what made it
//      stutter on weak GPUs. It is now built once and its vertex/normal buffers
//      are rewritten in place each frame with parallel-transport frames.
import * as THREE from '../vendor/three.module.js';
import { DIM } from './palette.js';
import { hempTexture } from './tex.js';

const V3 = THREE.Vector3;

// ---------- in-place tube (fixed topology, rewritten buffers) ----------
class RopeTube {
  constructor(radius, tubularSegments = 112, radialSegments = 12) {
    this.T = tubularSegments;
    this.R = radialSegments;
    this.radius = radius;
    // laid-rope look: the radius pulses once per twist so the grooves in the
    // hemp texture sit in a real valley (bulgeCount matches tex.js twists x
    // texture repeats, i.e. 2 twists x 8 tiles = 16)
    this.bulge = 0.09;
    this.bulgeCount = 8;
    // strand lay: a rotating elliptical cross-section. This is the cue that
    // survives at 35 px on screen (and in any silhouette test): the rope's
    // outline visibly walks in and out as the strands wrap around it.
    this.lay = 0.16;  // strand lay: enough silhouette wobble, less bulk
    const rings = this.T + 1, radial = this.R + 1;
    this.count = rings * radial;
    this.pos = new Float32Array(this.count * 3);
    this.nrm = new Float32Array(this.count * 3);
    this.uv = new Float32Array(this.count * 2);
    const idx = [];
    for (let i = 1; i <= this.T; i++) {
      for (let j = 1; j <= this.R; j++) {
        const a = (radial * (i - 1)) + (j - 1);
        const b = (radial * i) + (j - 1);
        const c = (radial * i) + j;
        const d = (radial * (i - 1)) + j;
        idx.push(a, b, d, b, c, d);
      }
    }
    this.index = idx;
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('normal', new THREE.BufferAttribute(this.nrm, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('uv', new THREE.BufferAttribute(this.uv, 2));
    this.geo.setIndex(idx);
    // precompute ring angles
    this.cos = new Float32Array(radial);
    this.sin = new Float32Array(radial);
    for (let j = 0; j <= this.R; j++) {
      const v = (j / this.R) * Math.PI * 2;
      this.cos[j] = Math.cos(v);
      this.sin[j] = Math.sin(v);
    }
    for (let i = 0; i <= this.T; i++) {
      for (let j = 0; j <= this.R; j++) {
        const o = (i * radial + j) * 2;
        this.uv[o] = i / this.T;
        this.uv[o + 1] = j / this.R;
      }
    }
    // scratch
    this.pts = Array.from({ length: rings }, () => new V3());
    this.tan = Array.from({ length: rings }, () => new V3());
    this.nor = Array.from({ length: rings }, () => new V3());
    this.bin = Array.from({ length: rings }, () => new V3());
  }

  // pathPoint(u, out): filled by the caller (Catmull-Rom sample)
  update(sample) {
    const { T, R, pts, tan, nor, bin } = this;
    for (let i = 0; i <= T; i++) sample(i / T, pts[i]);
    // tangents
    for (let i = 0; i <= T; i++) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(T, i + 1)];
      tan[i].subVectors(b, a);
      if (tan[i].lengthSq() < 1e-10) tan[i].set(1, 0, 0);
      tan[i].normalize();
    }
    // parallel transport frames (no twist popping)
    nor[0].set(-tan[0].y, tan[0].x, 0);
    if (nor[0].lengthSq() < 1e-6) nor[0].set(0, 1, 0);
    nor[0].normalize();
    for (let i = 1; i <= T; i++) {
      nor[i].copy(nor[i - 1]).addScaledVector(tan[i], -tan[i].dot(nor[i - 1]));
      if (nor[i].lengthSq() < 1e-8) {
        nor[i].set(0, 1, 0).addScaledVector(tan[i], -tan[i].y);
        if (nor[i].lengthSq() < 1e-8) nor[i].set(0, 0, 1);
      }
      nor[i].normalize();
    }
    const radial = R + 1;
    for (let i = 0; i <= T; i++) {
      bin[i].crossVectors(tan[i], nor[i]).normalize();
      const p = pts[i], n = nor[i], bn = bin[i];
      const ph = (i / T) * this.bulgeCount * Math.PI * 2;
      const r = this.radius * (1 + this.bulge * Math.sin(ph));
      const th = this.lay > 0 ? ph * 1.0 : 0;
      const cs = Math.cos(th), sn = Math.sin(th);
      const ea = 1 + this.lay, eb = 1 - this.lay;
      for (let j = 0; j <= R; j++) {
        let c = this.cos[j], s = this.sin[j];
        if (this.lay > 0) {
          // rotate the ring angle by the twist phase, then squash along the
          // strand axis: the cross-section becomes a slowly turning ellipse
          const c2 = c * cs + s * sn;
          const s2 = s * cs - c * sn;
          c = c2 * ea; s = s2 * eb;
        }
        const nx = n.x * c + bn.x * s, ny = n.y * c + bn.y * s, nz = n.z * c + bn.z * s;
        const inv = 1 / Math.max(1e-6, Math.hypot(nx, ny, nz));
        const o = (i * radial + j) * 3;
        this.pos[o] = p.x + nx * r * inv;
        this.pos[o + 1] = p.y + ny * r * inv;
        this.pos[o + 2] = p.z + nz * r * inv;
        this.nrm[o] = nx * inv; this.nrm[o + 1] = ny * inv; this.nrm[o + 2] = nz * inv;
      }
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.normal.needsUpdate = true;
    this.geo.computeBoundingSphere();
  }
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
    this.rpos = [];    // low-passed (rendered) positions
    this.spos = [];    // spatially smoothed, feeds the tube / cats / flag
    this.pinned = new Set([0, this.count - 1]);
    for (let i = 0; i < this.count; i++) {
      const t = i / this.N;
      const x = -spanHalf + 2 * spanHalf * t;
      const yy = y - DIM.restSagTwo * Math.sin(Math.PI * t);
      this.pos.push(new V3(x, yy, 0));
      this.prev.push(new V3(x, yy, 0));
      this.acc.push(new V3(0, 0, 0));
      this.rpos.push(new V3(x, yy, 0));
      this.spos.push(new V3(x, yy, 0));
    }
    this.weights = new Map();
    this._accum = 0;
    this._tmp = new V3();

    // visual mesh (fixed topology, rewritten in place every frame)
    this.tube = new RopeTube(DIM.ropeRadius);
    const tex = hempTexture({ repeatX: 4, repeatY: 1, seed: 31, twists: 2 });
    this.mat = new THREE.MeshStandardMaterial({
      map: tex.map, bumpMap: tex.bump, bumpScale: 0.9,
      roughnessMap: tex.rough, roughness: 1.0, metalness: 0.0,
      color: 0xffffff
    });
    this.mesh = new THREE.Mesh(this.tube.geo, this.mat);
    this.mesh.castShadow = false;
    this.mesh.frustumCulled = false;

    // Catmull-Rom over the smoothed points, mutated in place (no allocation)
    this._curvePts = this.spos.map((p) => p.clone());
    this.curve = new THREE.CatmullRomCurve3(this._curvePts, false, 'catmullrom', 0.5);
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

  // external impulses (paw stamps, blade hits, tumbles) are heavily scaled down
  injectImpulse(x, dx, dy, dz) {
    const i = this._nearestIndex(x);
    const k = DIM.impulseScale;
    for (const j of [i - 1, i, i + 1]) {
      if (j < 0 || j >= this.count || this.pinned.has(j)) continue;
      const f = (j === i ? 1 : 0.5) * k;
      this.prev[j].x -= dx * f; this.prev[j].y -= dy * f; this.prev[j].z -= dz * f;
    }
  }

  step(dt) {
    this._accum = Math.min(this._accum + dt, 0.1);
    const h = 1 / 120;
    let guard = 0;
    while (this._accum >= h && guard++ < 16) { this._sub(h); this._accum -= h; }
    this._relax(dt);
  }

  // render-side low-pass: physics stays crisp, pixels stay calm
  _relax(dt) {
    const k = 1 - Math.exp(-(DIM.ropeSmooth || 20) * Math.min(dt, 0.05));
    const { pos, rpos, spos, count } = this;
    for (let i = 0; i < count; i++) rpos[i].lerp(pos[i], k);
    // 1-2-1 spatial filter: removes the last solver ripple without flattening sag
    for (let i = 0; i < count; i++) {
      if (this.pinned.has(i)) { spos[i].copy(rpos[i]); continue; }
      const a = rpos[Math.max(0, i - 1)], b = rpos[i], c = rpos[Math.min(count - 1, i + 1)];
      spos[i].set(
        a.x * 0.25 + b.x * 0.5 + c.x * 0.25,
        a.y * 0.25 + b.y * 0.5 + c.y * 0.25,
        a.z * 0.25 + b.z * 0.5 + c.z * 0.25
      );
    }
  }

  _sub(h) {
    const { pos, prev, acc } = this;
    for (let i = 0; i < this.count; i++) {
      acc[i].set(0, -5.2, 0);
    }
    for (const [i, w] of this.weights) {
      acc[i].y -= w * 4.2;
      if (i > 0) acc[i - 1].y -= w * 2.0;
      if (i < this.count - 1) acc[i + 1].y -= w * 2.0;
    }
    for (let i = 0; i < this.count; i++) {
      if (this.pinned.has(i)) continue;
      const p = pos[i], pr = prev[i], a = acc[i];
      const nx = p.x + (p.x - pr.x) * this.damping + a.x * h * h;
      const ny = p.y + (p.y - pr.y) * this.damping + a.y * h * h;
      const nz = p.z + (p.z - pr.z) * this.damping + a.z * h * h;
      pr.copy(p); p.set(nx, ny, nz);
    }
    for (let k = 0; k < 10; k++) {
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
      pos[0].set(-this.spanHalf, this.restY, 0);
      pos[this.count - 1].set(this.spanHalf, this.restY, 0);
      for (let i = 0; i < this.count; i++) {
        const p = pos[i];
        p.z = THREE.MathUtils.clamp(p.z, -this.swayClamp, this.swayClamp);
        p.y = Math.min(p.y, this.restY + 0.18);
      }
    }
  }

  // ---- sampling (everything visual reads the SMOOTHED rope) ----
  yAt(x) {
    const t = THREE.MathUtils.clamp((x + this.spanHalf) / (2 * this.spanHalf), 0, 1);
    const f = t * this.N;
    const i = Math.min(Math.floor(f), this.N - 1);
    const u = f - i;
    return this.spos[i].y * (1 - u) + this.spos[i + 1].y * u;
  }

  slopeAt(x) {
    const e = 0.3;
    return (this.yAt(x + e) - this.yAt(x - e)) / (2 * e);
  }

  pointAt(index) {
    return this.spos[THREE.MathUtils.clamp(index, 0, this.count - 1)];
  }

  updateVisual() {
    // cheap: copy smoothed points into the curve and rewrite the tube buffers
    for (let i = 0; i < this.count; i++) this._curvePts[i].copy(this.spos[i]);
    const curve = this.curve;
    const tube = this.tube;
    tube.update((u, out) => curve.getPoint(u, out));
  }

  sagAmount() {
    return this.restY - this.yAt(0);
  }
}

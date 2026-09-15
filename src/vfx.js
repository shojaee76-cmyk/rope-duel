// Combat VFX: gold sparks / embers for A, silver / jade / tile-tinted ghosts for B,
// dust for stumbles, coin pop from the fountain (spec 7.3 VFX + section 8).
import * as THREE from '../vendor/three.module.js';
import { CAT_A, CAT_B, ARENA } from './palette.js';
import { canvasTexture } from './tex.js';

// soft round spark sprite: square GL points read as "scattered squares" in
// review screenshots, which immediately looks cheap
let SPRITE = null;
function sparkSprite() {
  if (SPRITE) return SPRITE;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.35, 'rgba(255,255,255,0.85)');
  grd.addColorStop(0.7, 'rgba(255,255,255,0.22)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  SPRITE = canvasTexture(c, { srgb: true });
  return SPRITE;
}

class Pool {
  constructor(scene, { count = 120, size = 0.05, color = 0xffffff, gravity = -9.8, drag = 1.5, life = 0.7 }) {
    this.count = count;
    this.gravity = gravity;
    this.drag = drag;
    this.life = life;
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(count * 3);
    this.vel = new Float32Array(count * 3);
    this.age = new Float32Array(count).fill(Infinity);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    const mat = new THREE.PointsMaterial({
      color, size, map: sparkSprite(), alphaTest: 0.02,
      transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    for (let i = 0; i < count; i++) this.pos[i * 3 + 1] = -999;
  }

  spawn(x, y, z, spread = 2.5, up = 2.5, n = 12, tint = null) {
    let spawned = 0;
    for (let i = 0; i < this.count && spawned < n; i++) {
      if (this.age[i] < this.life) continue;
      this.age[i] = 0;
      this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
      this.vel[i * 3] = (Math.random() - 0.5) * spread;
      this.vel[i * 3 + 1] = Math.random() * up;
      this.vel[i * 3 + 2] = (Math.random() - 0.5) * spread;
      spawned++;
    }
    if (tint) this.points.material.color.lerp(new THREE.Color(tint), 0.35);
  }

  update(dt) {
    const g = this.gravity;
    for (let i = 0; i < this.count; i++) {
      if (this.age[i] > this.life) { this.pos[i * 3 + 1] = -999; continue; }
      this.age[i] += dt;
      const dragF = Math.max(0, 1 - this.drag * dt);
      this.vel[i * 3] *= dragF;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * dragF + g * dt;
      this.vel[i * 3 + 2] *= dragF;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.02 && g < 0) { this.vel[i * 3 + 1] *= -0.3; this.pos[i * 3 + 1] = 0.02; }
    }
    this.points.geometry.attributes.position.needsUpdate = true;
  }
}

export class VFX {
  constructor(scene, scale = 1) {
    scale = Math.max(0.2, Math.min(1, scale));
    this.scene = scene;
    this.sparksGold = new Pool(scene, { count: Math.round(150 * scale), size: 0.05, color: CAT_A.goldBright });
    this.sparksSilver = new Pool(scene, { count: Math.round(150 * scale), size: 0.05, color: CAT_B.silverBright });
    this.embers = new Pool(scene, { count: Math.round(60 * scale), size: 0.08, color: ARENA.torchFlame, gravity: 1.8, drag: 0.6, life: 1.4 });
    this.jade = new Pool(scene, { count: Math.round(60 * scale), size: 0.06, color: CAT_B.eyeJade, gravity: -2.5 });
    this.dust = new Pool(scene, { count: Math.round(80 * scale), size: 0.14, color: ARENA.floorBase, gravity: -1.2, drag: 2.5, life: 0.9 });
    this.dust.points.material.blending = THREE.NormalBlending;
    this.dust.points.material.opacity = 0.5;
    this.fur = new Pool(scene, { count: 40, size: 0.07, color: '#E8E4D8', gravity: -1.5, drag: 2.0, life: 2.2 });
    this.fur.points.material.blending = THREE.NormalBlending;
    this.fur.points.material.opacity = 0.9;
  }

  clashBurst(p) {
    this.sparksGold.spawn(p.x, p.y, p.z, 4, 3, 22);
    this.sparksSilver.spawn(p.x, p.y, p.z, 4, 3, 22);
  }
  lungeSparks(p) { this.sparksGold.spawn(p.x, p.y, p.z, 2, 2, 10); }
  emberBurst(p) { this.embers.spawn(p.x, p.y, p.z, 1.2, 1.6, 14); }
  ghost(p) { this.jade.spawn(p.x, p.y, p.z, 0.8, 0.6, 6, CAT_B.eyeJade); }
  ghostTile(p) { this.jade.spawn(p.x, p.y, p.z, 0.8, 0.6, 6, '#12755F'); }
  dustBurst(p) { this.dust.spawn(p.x, p.y, p.z, 2.2, 1.8, 16); }
  furTuft(p) { this.fur.spawn(p.x, p.y, p.z, 0.6, 0.4, 5); }
  coinPop(p) { this.sparksGold.spawn(p.x, p.y, p.z, 1.5, 3.5, 8, '#B08D57'); }

  update(dt) {
    for (const pool of [this.sparksGold, this.sparksSilver, this.embers, this.jade, this.dust, this.fur]) pool.update(dt);
  }
}

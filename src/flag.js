// Price flag: hanger at rope segment 8, canvas texture, tick-direction fill,
// spring bob +/-0.06, 150 ms flash on >0.1% ticks (spec 6.2).
import * as THREE from '../vendor/three.module.js';
import { ARENA } from './palette.js';

const W = 512, H = 320;

export class PriceFlag {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = W; this.canvas.height = H;
    this.g = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 4;

    this.mat = new THREE.MeshBasicMaterial({
      map: this.texture, side: THREE.DoubleSide, transparent: true
    });
    this.plane = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.0), this.mat);

    this.group = new THREE.Group();
    this.hanger = new THREE.Group();

    const rodMat = new THREE.MeshStandardMaterial({ color: 0x4a3b28, roughness: 0.8, metalness: 0.3 });
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.9, 6), rodMat);
    rod.position.y = -0.45;
    const spread = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.7, 6), rodMat);
    spread.rotation.z = Math.PI / 2;
    spread.position.y = -0.9;
    const hook = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 12, Math.PI), rodMat);
    hook.position.y = -0.02;
    this.hanger.add(rod, spread, hook);
    this.plane.position.y = -1.42;
    this.group.add(this.hanger, this.plane);

    this.price = 0;
    this.chg24h = 0;
    this.chg24hText = ''; // pre-formatted "+2.41% 24h" passthrough from the feed
    this.bob = 0;
    this.bobVel = 0;
    this.flash = 0; // seconds remaining of white flash
    this.spin = 0;  // Fountain Fumble flag spin (decays)
    this._lastDir = 1;
    this.lastDrawnKey = '';
  }

  setPrice(px) {
    if (!px || px <= 0 || px === this.price) return;
    const prev = this.price;
    this.price = px;
    if (prev > 0) {
      const dir = px > prev ? 1 : -1;
      this.bobVel += dir * 0.5;
      const pct = Math.abs(px - prev) / prev;
      if (pct > 0.001) this.flash = 0.15;
    }
    this._draw();
  }

  setChange24h(c) { this.chg24h = c; this.chg24hText = ''; this._draw(); }

  // pre-formatted 24h line from the live feed (takes precedence over trend-derived arrow)
  setChange24hText(text) { this.chg24hText = text || ''; this._draw(); }

  _draw() {
    const g = this.g;
    const fill = this._lastDir === -1 ? ARENA.flagDown : ARENA.flagUp;
    const key = `${this.price.toFixed(1)}|${fill}|${this.chg24hText || this.chg24h.toFixed(2)}`;
    if (key === this.lastDrawnKey) return;
    this.lastDrawnKey = key;

    g.clearRect(0, 0, W, H);
    // banner shape with swallow-tail ends
    g.fillStyle = fill;
    g.beginPath();
    g.moveTo(14, 10); g.lineTo(W - 14, 10);
    g.lineTo(W - 34, H / 2); g.lineTo(W - 14, H - 10);
    g.lineTo(14, H - 10); g.lineTo(34, H / 2);
    g.closePath(); g.fill();
    g.strokeStyle = 'rgba(255,255,255,0.85)';
    g.lineWidth = 8;
    g.stroke();

    // price text
    const txt = this.price > 0 ? this.price.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : '--';
    g.fillStyle = '#FFFFFF';
    g.textAlign = 'center';
    g.font = 'bold 92px "Consolas", "Courier New", monospace';
    g.fillText(txt, W / 2, H / 2 + 18);
    g.font = 'bold 34px "Consolas", monospace';
    g.fillText('USDT', W / 2, H / 2 + 62);

    // 24h arrow (real feed value) or trend-derived arrow when the page drives
    // setChange24h() itself (demo mode)
    g.font = 'bold 44px "Consolas", monospace';
    g.fillStyle = 'rgba(255,255,255,0.95)';
    if (this.chg24hText) {
      g.textAlign = 'left';
      g.fillText(this.chg24hText, 34, 58);
    } else {
      g.font = 'bold 56px "Segoe UI Symbol", sans-serif';
      g.textAlign = 'center';
      g.fillText(this.chg24h >= 0 ? '\u2191' : '\u2193', 62, 62);
    }

    this.texture.needsUpdate = true;
  }

  tickDir(d) { this._lastDir = d; }

  update(dt, rope, offsetX) {
    // spring bob
    this.bobVel += -this.bob * 30 * dt - this.bobVel * 4 * dt;
    this.bob += this.bobVel * dt;
    this.bob = THREE.MathUtils.clamp(this.bob, -0.12, 0.12);
    if (this.flash > 0) {
      this.flash -= dt;
      this.plane.material.color.setScalar(1 + Math.max(this.flash, 0) * 4);
    } else {
      this.plane.material.color.setScalar(1);
    }
    if (this.spin > 0) this.spin = Math.max(0, this.spin - dt * 2);

    const p = rope.pointAt(5);   // v18: segment 5 (x ~ -5.8) - segment 8 hung the banner over the wall tape board
    this.group.position.set(
      p.x, p.y + this.bob, THREE.MathUtils.clamp(p.z, -0.3, 0.3)
    );
    this.group.rotation.z = THREE.MathUtils.clamp(-rope.slopeAt(p.x) * 0.5, -0.35, 0.35);
    this.group.rotation.x = p.z * 0.8;
    // idle sway + Fountain Fumble spin
    this.plane.rotation.y = Math.sin(performance.now() * 0.0012) * 0.12 + this.spin * 6.28;
  }
}

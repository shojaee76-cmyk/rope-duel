// The Crowd: two packs of small cat silhouettes flanking the courtyard.
// The gaining side (pressure sign) cheers — bounce amplitude scales with
// |pressure| — while the losing pack sits still with drooping ears.
// Integration card t_e2039773 (fun touches). Built from one canvas silhouette
// per colorway, instanced as camera-facing planes (no per-cat draw cost).
import * as THREE from '../vendor/three.module.js';

// sitting-cat silhouette: body, head, two ears, curled tail
function catSilhouetteTexture(fill, outline) {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = fill;
  g.strokeStyle = outline;
  g.lineWidth = 4;
  g.lineJoin = 'round';
  // body: egg sitting on the baseline
  g.beginPath();
  g.ellipse(64, 88, 30, 34, 0, 0, Math.PI * 2);
  g.fill();
  // head
  g.beginPath();
  g.arc(64, 46, 22, 0, Math.PI * 2);
  g.fill();
  // ears
  g.beginPath();
  g.moveTo(47, 34); g.lineTo(42, 12); g.lineTo(58, 26); g.closePath(); g.fill(); g.stroke();
  g.beginPath();
  g.moveTo(81, 34); g.lineTo(86, 12); g.lineTo(70, 26); g.closePath(); g.fill(); g.stroke();
  // tail curling up the right side
  g.beginPath();
  g.moveTo(90, 104);
  g.bezierCurveTo(114, 100, 116, 72, 102, 62);
  g.lineWidth = 9;
  g.strokeStyle = fill;
  g.stroke();
  // baseline feet
  g.fillStyle = fill;
  g.beginPath();
  g.ellipse(52, 118, 12, 6, 0, 0, Math.PI * 2);
  g.ellipse(78, 118, 12, 6, 0, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const BUY_TINTS = ['#F5C542', '#D4A017', '#B98A2A'];   // gold pack (right, BUY)
const SELL_TINTS = ['#7FD48A', '#0F5D4E', '#3E7A5E'];  // jade pack (left, SELL)

function buildPack(scene, side, perRow, rows) {
  const group = new THREE.Group();
  scene.add(group);
  const tints = side === 'buy' ? BUY_TINTS : SELL_TINTS;
  const dirX = side === 'buy' ? 1 : -1;
  const cats = [];
  const textures = tints.map((c) => catSilhouetteTexture(c, 'rgba(5,6,15,0.8)'));
  let i = 0;
  for (let row = 0; row < rows; row++) {
    for (let k = 0; k < perRow; k++) {
      const tex = textures[i % textures.length];
      const mat = new THREE.MeshBasicMaterial({
        map: tex, transparent: true, depthWrite: false, fog: true
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.62), mat);
      const lane = k - (perRow - 1) / 2;
      // spectator packs BEHIND the rope plane (z<0): wide-frustum zone, they
      // read as a crowd gathered at the back wall watching the duel.
      // (Front-flank placement x>8 sits outside the 45deg/1.6 frustum.)
      const x = dirX * (6.1 + row * 0.85 + Math.random() * 0.45);
      const z = -3.3 + lane * 0.62 + (Math.random() - 0.5) * 0.3;
      const s = 0.75 + Math.random() * 0.4;
      m.position.set(x, 0, z);
      m.scale.setScalar(s);
      m.rotation.y = dirX * -(0.45 + Math.random() * 0.3); // angle toward the rope
      group.add(m);
      cats.push({
        m, baseY: 0.31 * s, s,
        phase: Math.random() * Math.PI * 2,
        speed: 5 + Math.random() * 4,
        hop: 0.6 + Math.random() * 0.8
      });
      i++;
    }
  }
  return { group, cats, side };
}

export class Crowd {
  constructor(scene, scale = 1) {
    const perRow = Math.max(3, Math.round(6 * scale));
    const rows = Math.max(2, Math.round(3 * scale));
    this.packs = [buildPack(scene, 'buy', perRow, rows), buildPack(scene, 'sell', perRow, rows)];
    this.cheer = { buy: 0, sell: 0 }; // smoothed cheer energy per side
    this.t = 0;
  }

  update(dt, pressure) {
    this.t += dt;
    const P = THREE.MathUtils.clamp(pressure || 0, -1, 1);
    // target energy: gaining side cheers with |P|, losing side sulks
    const targetBuy = P > 0.08 ? Math.min(1, P * 1.4) : 0;
    const targetSell = P < -0.08 ? Math.min(1, -P * 1.4) : 0;
    const k = Math.min(1, dt * 4);
    this.cheer.buy += (targetBuy - this.cheer.buy) * k;
    this.cheer.sell += (targetSell - this.cheer.sell) * k;
    for (const pack of this.packs) {
      const e = this.cheer[pack.side];
      for (const c of pack.cats) {
        // idle micro-sway always; full hop when cheering
        const idle = Math.sin(this.t * 1.4 + c.phase) * 0.012;
        const hopF = e > 0.02 ? Math.abs(Math.sin(this.t * c.speed + c.phase)) : 0;
        c.m.position.y = c.baseY + idle + hopF * e * 0.34 * c.hop;
        // slight lean-in while cheering
        c.m.rotation.z = hopF * e * 0.08 * (c.m.position.x > 0 ? -1 : 1);
      }
    }
  }
}

// tex.js - one place for every procedural canvas texture in the scene.
// v4: all textures get mipmaps + anisotropic filtering, because the courtyard
// is now framed close and viewed at an angle: without anisotropy the fine
// sebka / azulejo / floor-grout patterns shimmer and crawl (the "shaky
// background" complaint). Max anisotropy is handed over by scene.js once the
// renderer exists.
import * as THREE from '../vendor/three.module.js';

let MAX_ANISO = 4;

export function setMaxAnisotropy(n) {
  MAX_ANISO = Math.max(1, Math.min(16, Math.round(n) || 1));
}

export function canvasTexture(c, { repeatX = 1, repeatY = 1, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeatX, repeatY);
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = MAX_ANISO;
  return t;
}

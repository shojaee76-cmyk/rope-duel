// Small, deterministic costume maps. Ornament lives on cloth, not extra meshes.
import { canvasTexture, bumpFrom } from './tex.js';

function surface(w, h, color) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = color; g.fillRect(0, 0, w, h);
  return { c, g };
}
function path(g, points, color, width = 2) {
  g.strokeStyle = color; g.lineWidth = width;
  g.beginPath();
  points.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y));
  g.stroke();
}
function diamond(g, x, y, r, color) {
  path(g, [[x, y-r], [x+r, y], [x, y+r], [x-r, y], [x, y-r]], color, 2);
}
function weave(g, w, h) {
  g.fillStyle = 'rgba(255,255,255,0.055)';
  for (let x = 0; x < w; x += 4) g.fillRect(x, 0, 1, h);
  g.fillStyle = 'rgba(37,28,20,0.045)';
  for (let y = 0; y < h; y += 4) g.fillRect(0, y, w, 1);
}
function finish(c, relief = 0.2) {
  return { map: canvasTexture(c), bump: bumpFrom(c, relief) };
}
function braid(g, w, y, h, green = true) {
  const base = green ? '#187847' : '#721723';
  const stitch = green ? '#A8DFC1' : '#E8C078';
  g.fillStyle = base; g.fillRect(0, y, w, h);
  path(g, [[0,y+3],[w,y+3]], stitch, 2);
  path(g, [[0,y+h-3],[w,y+h-3]], stitch, 2);
  const step = h * 0.84;
  for (let x = step/2; x < w + step; x += step) {
    diamond(g, x, y+h/2, h*0.28, stitch);
    g.fillStyle = green ? '#4BBE81' : '#B98944';
    g.beginPath(); g.ellipse(x, y+h/2, h*0.07, h*0.13, 0.6, 0, Math.PI*2); g.fill();
  }
}

export function robeTexture(part = 'skirt') {
  const w = 512, h = 256;
  const { c, g } = surface(w, h, '#F2EFE9');
  // Broad low-contrast linen shading, not a grid that aliases at duel distance.
  const folds = part === 'sleeve' ? 8 : 12;
  for (let i = 0; i < folds; i++) {
    const x = i*w/folds;
    const shade = g.createLinearGradient(x, 0, x+w/folds, 0);
    shade.addColorStop(0, 'rgba(91,99,94,0.12)');
    shade.addColorStop(0.42, 'rgba(255,255,255,0.05)');
    shade.addColorStop(1, 'rgba(91,99,94,0.12)');
    g.fillStyle = shade; g.fillRect(x, 0, w/folds, h);
  }
  if (part === 'skirt') braid(g, w, 214, 34);
  if (part === 'sleeve') braid(g, w, 216, 32);
  if (part === 'body') {
    // Cylinder UV u=.25 is local +x, the actual front placket.
    g.save(); g.translate(w*0.25+12, 18); g.rotate(Math.PI/2);
    braid(g, 208, 0, 24); g.restore();
    path(g, [[w*0.25-17,18],[w*0.25-17,224],[w*0.25+17,224],[w*0.25+17,18]], '#54A879', 2);
  }
  weave(g, w, h);
  return finish(c, 0.14);
}

export function knightClothTexture(part = 'cape') {
  const w = 512, h = 512;
  const { c, g } = surface(w, h, '#A31621');
  for (let i = 0; i < 8; i++) {
    const x = i*64;
    const grad = g.createLinearGradient(x, 0, x+64, 0);
    grad.addColorStop(0, 'rgba(30,4,13,0.28)');
    grad.addColorStop(0.5, 'rgba(238,80,63,0.12)');
    grad.addColorStop(1, 'rgba(30,4,13,0.28)');
    g.fillStyle = grad; g.fillRect(x, 0, 64, h);
  }
  braid(g, w, h-45, 34, false);
  if (part === 'cape') {
    for (const x of [17, w-39]) {
      g.save(); g.translate(x+24, 0); g.rotate(Math.PI/2);
      braid(g, h, 0, 24, false); g.restore();
    }
    // One heraldic lozenge, small enough that the red field remains dominant.
    diamond(g, 256, 235, 74, '#D5AC65');
    diamond(g, 256, 235, 64, '#D5AC65');
    g.fillStyle = '#E4BC77';
    g.beginPath();
    g.moveTo(250,190); g.lineTo(262,190); g.lineTo(266,224);
    g.lineTo(293,220); g.lineTo(293,236); g.lineTo(266,233);
    g.lineTo(263,275); g.lineTo(249,275); g.lineTo(246,233);
    g.lineTo(219,236); g.lineTo(219,220); g.lineTo(246,224);
    g.closePath(); g.fill();
    // Tone-on-tone damask leaves, restrained away from the gold border.
    for (let y = 60; y < 440; y += 66) for (const x of [85, 427]) {
      path(g, [[x,y+25],[x,y-22]], '#BC4243', 2);
      g.strokeStyle = '#BC4243';
      for (const s of [-1,1]) {
        g.beginPath(); g.ellipse(x+s*8,y,7,15,s*0.6,0,Math.PI*2); g.stroke();
      }
    }
  } else {
    // Gold-bound slashes with warm linen showing between red velvet panels.
    for (let x = 32; x < w; x += 64) {
      g.fillStyle = '#D5AD65';
      g.beginPath(); g.ellipse(x,242,13,152,0,0,Math.PI*2); g.fill();
      g.fillStyle = '#52131B';
      g.beginPath(); g.ellipse(x,242,10,145,0,0,Math.PI*2); g.fill();
      g.fillStyle = '#E8D8B7';
      g.beginPath(); g.ellipse(x+2,250,5,122,0,0,Math.PI*2); g.fill();
    }
    braid(g, w, 45, 24, false);
  }
  weave(g, w, h);
  return finish(c, 0.18);
}

export function eyeTexture(color) {
  const { c, g } = surface(128, 128, '#211B19');
  const iris = g.createRadialGradient(64,65,6,64,64,64);
  iris.addColorStop(0, '#F9E5A4'); iris.addColorStop(0.40, color);
  iris.addColorStop(0.83, color); iris.addColorStop(1, '#19231C');
  g.fillStyle = iris; g.fillRect(0,0,128,128);
  // Tapered slit, not a box; reflected light is painted in the same draw call.
  g.fillStyle = '#090C10'; g.beginPath(); g.moveTo(64,10);
  g.bezierCurveTo(46,42,46,87,64,118);
  g.bezierCurveTo(80,88,80,40,64,10); g.fill();
  g.fillStyle = '#FFFCED'; g.beginPath(); g.ellipse(45,36,9,12,-0.4,0,Math.PI*2); g.fill();
  g.fillStyle = 'rgba(255,255,240,0.5)';
  g.beginPath(); g.arc(77,86,4,0,Math.PI*2); g.fill();
  return { map: canvasTexture(c) };
}

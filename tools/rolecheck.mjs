// tools/rolecheck.mjs - v18 ROLE RULE probe (user: "If the pressure is sell,
// make the sell cat to attack and the buy cat to sit down and defend with his
// sword").
// Drives the REAL scene API (scene.setPressure) through +0.85 (BUY tape) and
// -0.85 (SELL tape) and asserts from the director's own move log + state
// samples that:
//   1. the pressure side owns the ATTACKS (majority of offensive starts)
//   2. the other side is the DEFENDER (parries/beats/seated guard, no offensive
//      starts except the sanctioned post-lock winner follow-up)
//   3. the losing side actually SEATS into SIT_GUARD while the tape leans on him
//   4. flipping the sign flips the roles
//   5. zero page errors throughout
import { chromium } from 'playwright-core';
import { existsSync, writeFileSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  try {
    const d = await readFile(path.join(root, p));
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(d);
  } catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(8997, r));
const cands = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + (e.stack || e.message).split('\n')[0]));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });

await page.goto('http://localhost:8997/?mode=demo&seed=11', { waitUntil: 'load' });
await page.waitForTimeout(3000);

// ISOLATE THE PRESSURE SOURCE: the feed adapter forwards the tape's pressure to
// scene.setPressure ~4 Hz, which would fight the phase pressure this probe
// injects. Stop the feed (no more adapter pushes) and park the pressure at 0;
// the scene's internal demo driver is already off (the first setPressure call
// sets demo.on = false). From here the director reads ONLY what we set.
await page.evaluate(() => {
  window.__duelPage.feed.stop();
  window.__duelPage.scene.setPressure(0);
});
await page.waitForTimeout(1500);   // let pS settle to ~0 before phase 1

const OFFENSIVE = ['RUSH', 'LUNGE', 'THRUST', 'FEINT', 'SLASH_UP', 'SLASH_SPIN', 'RIPOSTE', 'TAUNT'];
const DEFENSIVE = ['PARRY_HOP', 'PARRY_BEAT', 'SIT_GUARD'];
const OFF_JSON = JSON.stringify(OFFENSIVE), DEF_JSON = JSON.stringify(DEFENSIVE);

// one phase: set pressure, let the director run, collect the log + state samples
async function phase(P, ms) {
  await page.evaluate((p) => {
    const d = window.__duelDebug;
    // boundary kick: a SIT_GUARD posture started under the PREVIOUS phase's
    // tape lives 3.4 s and would otherwise bleed into this phase's samples.
    d.catA.setState('IDLE'); d.catB.setState('IDLE');
    // pS is a 1.2 s exponential average: without this, the previous phase's
    // sign residue seats the WRONG side for the first ~1-2 s of the phase.
    d.director.pS = 0;
    d.logMark = d.director.log.length;           // count starts FROM here
    window.__duelPage.scene.setPressure(p);
    d.samples = [];
  }, P);
  const hold = Math.ceil(ms / 250);
  for (let i = 0; i < hold; i++) {
    await page.waitForTimeout(250);
    await page.evaluate(() => {
      const d = window.__duelDebug;
      d.samples.push({ a: d.catA.state.name, b: d.catB.state.name, P: d.director.pressure });
    });
  }
  return page.evaluate(({ OFF, DEF }) => {
    const OFFENSIVE = JSON.parse(OFF), DEFENSIVE = JSON.parse(DEF);
    const d = window.__duelDebug;
    const starts = d.director.log.slice(d.logMark || 0);
    const bySide = { A: { off: 0, def: 0, moves: {} }, B: { off: 0, def: 0, moves: {} } };
    for (const s of starts) {
      const kind = OFFENSIVE.includes(s.move) ? 'off' : (DEFENSIVE.includes(s.move) ? 'def' : 'other');
      if (bySide[s.side][kind] !== undefined) bySide[s.side][kind]++;
      bySide[s.side].moves[s.move] = (bySide[s.side].moves[s.move] || 0) + 1;
    }
    const sitA = d.samples.filter((x) => x.a === 'SIT_GUARD').length;
    const sitB = d.samples.filter((x) => x.b === 'SIT_GUARD').length;
    const offA = d.samples.filter((x) => OFFENSIVE.includes(x.a)).length;
    const offB = d.samples.filter((x) => OFFENSIVE.includes(x.b)).length;
    return {
      starts: starts.length, bySide, sitA, sitB, offA, offB,
      samples: d.samples.length, pS: +d.director.pS.toFixed(3),
      reasons: { ...d.director.reasons },
    };
  }, { OFF: OFF_JSON, DEF: DEF_JSON });
}

const results = { checks: [] };
const check = (name, ok, detail) => {
  results.checks.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  - ' + detail : ''}`);
};

console.log('== PHASE 1: BUY pressure (+0.85) ==');
const buy = await phase(0.85, 8000);
console.log(JSON.stringify(buy, null, 1));
check('[buy] fight produced moves', buy.starts >= 6, `${buy.starts} starts, pS=${buy.pS}`);
check('[buy] BUY side (A/Sultan) owns the attacks',
  buy.bySide.A.off >= buy.bySide.B.off * 2 && buy.bySide.A.off >= 3,
  `A off=${buy.bySide.A.off} vs B off=${buy.bySide.B.off}`);
check('[buy] SELL side (B/Don Gato) does not start attacks (winner follow-up is the only legal leak)',
  buy.bySide.B.off <= 1, `B offensive starts: ${buy.bySide.B.off} ${JSON.stringify(buy.bySide.B.moves)}`);
check('[buy] SELL side defends (parries/beats/guard)',
  buy.bySide.B.def >= 2, `B def=${buy.bySide.B.def} ${JSON.stringify(buy.bySide.B.moves)}`);
check('[buy] pressure reads BUY at the director', buy.pS > 0.5, `pS=${buy.pS}`);
check('[buy] SELL side SEATS into the guard', buy.sitA === 0 && buy.sitB >= 1,
  `A seated ${buy.sitA} samples, B seated ${buy.sitB}/${buy.samples}`);

console.log('== PHASE 2: SELL pressure (-0.85) ==');
const sell = await phase(-0.85, 8000);
console.log(JSON.stringify(sell, null, 1));
check('[sell] fight produced moves', sell.starts >= 6, `${sell.starts} starts, pS=${sell.pS}`);
check('[sell] SELL side (B/Don Gato) owns the attacks',
  sell.bySide.B.off >= sell.bySide.A.off * 2 && sell.bySide.B.off >= 3,
  `B off=${sell.bySide.B.off} vs A off=${sell.bySide.A.off}`);
check('[sell] BUY side (A/Sultan) does not start attacks',
  sell.bySide.A.off <= 1, `A offensive starts: ${sell.bySide.A.off} ${JSON.stringify(sell.bySide.A.moves)}`);
check('[sell] BUY side defends (parries/beats/guard)',
  sell.bySide.A.def >= 2, `A def=${sell.bySide.A.def} ${JSON.stringify(sell.bySide.A.moves)}`);
check('[sell] pressure reads SELL at the director', sell.pS < -0.5, `pS=${sell.pS}`);
check('[sell] BUY side SEATS into the guard', sell.sitB === 0 && sell.sitA >= 1,
  `B seated ${sell.sitB} samples, A seated ${sell.sitA}/${sell.samples}`);

check('zero page errors', errs.length === 0, errs.slice(0, 3).join(' | '));
await page.screenshot({ path: path.join(root, 'tools/shots/roles_final.png') });

writeFileSync(path.join(root, 'tools/role_verify.json'), JSON.stringify({ results, buy, sell }, null, 1));
await b.close(); srv.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(failed.length ? `\n${failed.length} FAILED` : '\nALL ROLE CHECKS PASS');
process.exit(failed.length ? 1 : 0);

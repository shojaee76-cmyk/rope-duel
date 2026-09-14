// The Fight Director: 8 named signature moves, cooldowns, priority, clash rule,
// fight drift with ring-out tease clamp (spec 7.1-7.5 and 1.3/1.4).
import * as THREE from '../vendor/three.module.js';
import { DIM } from './palette.js';

const clamp = THREE.MathUtils.clamp;
const V3 = THREE.Vector3;

// move table (spec 7.3)
const MOVES = {
  LUNGE:      { cat: 'A', len: 1.2, cool: 6, prio: 1 }, // Charge of the Golden Bull
  SLASH_UP:   { cat: 'A', len: 0.9, cool: 6, prio: 1 }, // Matador Moonrise
  TAUNT:      { cat: 'A', len: 1.5, cool: 6, prio: 2 }, // Cross of the Conquistador
  PARRY_HOP:  { cat: 'B', len: 0.8, cool: 6, prio: 1 }, // Zellij Sidestep
  SLASH_SPIN: { cat: 'B', len: 1.4, cool: 6, prio: 1 }, // Moorish Windmill
  RIPOSTE:    { cat: 'B', len: 1.2, cool: 6, prio: 2 }  // Crescent Riposte
};
const PRIORITY = { STUMBLE_PAIR: 4, TAUNT: 2, RIPOSTE: 2, LUNGE: 1, SLASH_UP: 1, PARRY_HOP: 1, SLASH_SPIN: 1, FREEZE: 0 };

export class FightDirector {
  constructor({ rope, cats, flag, vfx, arena }) {
    this.rope = rope;
    this.cats = cats; // { A, B }
    this.flag = flag;
    this.vfx = vfx;
    this.arena = arena;

    // data inputs
    this.pressure = 0;
    this.price = 0;
    this.priceHistory = []; // { t, px } for 1-min trend and 15m high/low
    this.high15m = -Infinity;
    this.low15m = Infinity;

    // triggers state
    this.prevP = 0;
    this.cools = {};       // move name -> time ready again
    this.sideCool = { A: 0, B: 0 };
    this.lowPTime = 0;     // sustained |P|<0.1 timer
    this.freezeUntil = 0;
    this.frozen = false;
    this.frozenPose = null;
    this.stumbling = false;
    this.active = {};      // catSide -> move
    this.now = 0;
    this.onClash = null;
    this._events = [];
  }

  // ---------- public API (called by the data module) ----------
  setPressure(P) {
    this.pressure = clamp(P, -1, 1);
    this._events.push({ type: 'pressure', P: this.pressure });
  }

  setPrice(px) {
    const t = this.now;
    const prev = this.price;
    this.price = px;
    this.priceHistory.push({ t, px });
    while (this.priceHistory.length && t - this.priceHistory[0].t > 60) this.priceHistory.shift();
    // 15m high/low tracking (rolling window)
    const win = this.priceHistory.filter((h) => t - h.t <= 900);
    if (win.length) {
      let hi = -Infinity, lo = Infinity;
      for (const h of win) { if (h.px > hi) hi = h.px; if (h.px < lo) lo = h.px; }
      if (px > this.high15m) { this.high15m = px; this._events.push({ type: 'newHigh' }); }
      if (px < this.low15m) { this.low15m = px; this._events.push({ type: 'newLow' }); }
      if (hi !== this._lastHi || lo !== this._lastLo) {
        if (px >= hi && this._lastHi !== undefined && hi > this._lastHi) this._events.push({ type: 'newHigh15' });
        if (px <= lo && this._lastLo !== undefined && lo < this._lastLo) this._events.push({ type: 'newLow15' });
        this._lastHi = hi; this._lastLo = lo;
      }
    }
  }

  // 1-minute trend M: sign + magnitude in [-1,1] scaled by 0.5% move
  trendM() {
    const h = this.priceHistory;
    if (h.length < 2) return 0;
    const oldest = h.find((x) => this.now - x.t <= 60);
    if (!oldest || oldest.px === this.price) return 0;
    const chg = (this.price - oldest.px) / oldest.px;
    return clamp(chg / 0.005, -1, 1);
  }

  // ---------- main update ----------
  update(dt) {
    this.now += dt;
    this._lastDt = dt;
    const A = this.cats.A, B = this.cats.B;

    // the cat advances its own state clock; here we just notice finished moves
    for (const side of ['A', 'B']) {
      const cat = this.cats[side];
      const mv = this.active[side];
      if (mv && cat.state.name !== mv) {
        delete this.active[side];
        if (mv === 'LUNGE') this.rope.injectImpulse(cat.x, 0, -0.4, 0);
      }
    }

    // FREEZE release
    if (this.frozen && Math.abs(this.pressure) >= 0.1) {
      this.frozen = false;
      for (const side of ['A', 'B']) this.cats[side].setState('IDLE');
    }

    // drift toward winning side (spec 1.3): M = sign of 1-min trend
    const M = this.trendM();
    if (!this.frozen && !this.stumbling) {
      const drift = M * 0.55 * dt;
      this._driftPair(drift);
    }

    if (!this.frozen && !this.stumbling) this._checkTriggers();
    this._events.length = 0;
  }

  _checkTriggers() {
    const P = this.pressure;
    const events = this._events; // consumed below
    const A = this.cats.A, B = this.cats.B;

    // ---- priority 4: STUMBLE_PAIR (|5s price change| > 0.5%) ----
    const h5 = this.priceHistory;
    let p5 = null;
    for (let i = h5.length - 1; i >= 0; i--) { if (this.now - h5[i].t >= 5) { p5 = h5[i].px; break; } }
    if (p5 && Math.abs(this.price - p5) / p5 > 0.005 && !this._stumbleCool) {
      this._startPair('STUMBLE');
      this._stumbleCool = this.now + 8;
      return;
    }
    if (this._stumbleCool && this.now > this._stumbleCool) this._stumbleCool = 0;

    // ---- FREEZE: |P| < 0.1 sustained 10s ----
    if (Math.abs(P) < 0.1) {
      this.lowPTime += this._lastDt || 0;
      if (this.lowPTime > 10 && !this.frozen) {
        this.frozen = true;
        for (const side of ['A', 'B']) {
          this.cats[side].setState('FREEZE', 0, { until: () => !this.frozen });
        }
        return;
      }
    } else {
      this.lowPTime = 0;
    }

    // ---- momentum flips (priority 2) ----
    const M = this.trendM();
    if (this._prevM !== undefined && M !== 0 && this._prevM !== 0 && Math.sign(M) !== Math.sign(this._prevM)) {
      if (M > 0 && this._canMove('A', 'TAUNT')) { this._start('A', 'TAUNT', { dir: 1 }); return; }
      if (M < 0 && this._canMove('B', 'RIPOSTE')) { this._start('B', 'RIPOSTE', { dir: -1 }); return; }
    }
    this._prevM = M;

    // ---- spike moves (priority 1) ----
    let sawSpike = false;
    for (const ev of events) {
      if (ev.type === 'pressure') {
        if (this.prevP <= 0.6 && ev.P > 0.6 && this._canMove('A', 'LUNGE')) {
          this._start('A', 'LUNGE', { dir: 1 }); sawSpike = true; break;
        }
        if (this.prevP >= -0.6 && ev.P < -0.6 && this._canMove('B', 'PARRY_HOP')) {
          this._start('B', 'PARRY_HOP', { dir: -1 }); sawSpike = true; break;
        }
        this.prevP = ev.P;
      }
    }
    if (!sawSpike) this.prevP = P;
    for (const ev of events) {
      if (ev.type === 'newHigh15' && this._canMove('A', 'SLASH_UP')) { this._start('A', 'SLASH_UP', { dir: 1 }); return; }
      if (ev.type === 'newLow15' && this._canMove('B', 'SLASH_SPIN')) { this._start('B', 'SLASH_SPIN', { dir: -1 }); return; }
    }
  }

  _canMove(side, move) {
    const now = this.now;
    if (this.active[side]) return false;
    if ((this.cools[move] || 0) > now) return false;
    if (this.sideCool[side] > now) return false;
    if (this.cats[side].state.name === 'RECOVER' && this.cats[side].state.t < 0.2) return false;
    return true;
  }

  _start(side, move, data = {}) {
    const spec = MOVES[move];
    const cat = this.cats[side];
    this.cools[move] = this.now + spec.cool;
    this.sideCool[side] = this.now + 3;
    this.active[side] = move;
    cat.setState(move, spec.len, data);
    this._pending = { side, move };
  }

  _startPair(move) {
    // Fountain Fumble: both cats tumble toward center, flag spins, coin pops
    const dur = move === 'STUMBLE' ? 2.5 : 1.5;
    this.stumbling = true;
    this.active.A = move; this.active.B = move;
    const aDist = clamp(Math.abs(this.cats.A.x) - 2, 0.4, 1.0);
    const bDist = clamp(Math.abs(this.cats.B.x) - 2, 0.4, 1.0);
    this.cats.A.setState(move, dur, { dir: this.cats.A.x > 0 ? -1 : 1, dist: aDist });
    this.cats.B.setState(move, dur, { dir: this.cats.B.x < 0 ? 1 : -1, dist: bDist });
    const mid = (this.cats.A.x + this.cats.B.x) / 2;
    const y = this.rope.yAt(mid);
    setTimeout(() => {
      if (this.vfx) {
        this.vfx.dustBurst({ x: mid, y: Math.max(y - 0.4, 0.4), z: 0.2 });
        this.vfx.furTuft({ x: mid + 0.3, y: y + 0.2, z: 0.1 });
        const coins = this.arena.userData.coins ? this.arena.userData.coins() : [];
        if (coins && coins[0]) {
          const c = coins[Math.floor(Math.random() * coins.length)];
          this.vfx.coinPop({ x: c.position.x, y: c.position.y + 0.4, z: c.position.z });
        }
      }
      if (this.flag) this.flag.spin = 1.5;
    }, dur * 500);
    setTimeout(() => { this.stumbling = false; }, dur * 1000 + 200);
  }

  // pair drift with clamp: no cat within 1.5 of a pole; ring-out tease at the clamp
  _driftPair(delta) {
    const A = this.cats.A, B = this.cats.B;
    const lim = DIM.spanHalf - DIM.poleClearance;
    for (const [side, cat] of [['A', A], ['B', B]]) {
      const nx = cat.x + delta;
      if (Math.abs(nx) > lim) {
        // ring-out tease: wobble, then reverse drift by nudging back inside
        cat.x = clamp(nx, -lim, lim);
        cat.wobble = 0.6;
      } else {
        cat.x = nx;
      }
    }
    // keep separation sane: B stays left of A
    if (B.x > A.x - 0.8) {
      const mid = (A.x + B.x) / 2;
      A.x = mid + 0.4; B.x = mid - 0.4;
    }
  }

  // ---------- clash rule (7.4): lunge meets parry window ----------
  tryClash(attacker) {
    const defenderSide = attacker === 'A' ? 'B' : 'A';
    const defMove = this.active[defenderSide];
    const parries = defenderSide === 'B' ? ['PARRY_HOP', 'SLASH_SPIN'] : ['LUNGE', 'SLASH_UP'];
    if (!defMove || !parries.includes(defMove)) return false;
    const def = this.cats[defenderSide];
    const frac = def.state.t / def.state.dur;
    if (frac < 0.2 || frac > 0.8) return false;
    // winner = current pressure favors
    const winner = this.pressure > 0 ? 'A' : this.pressure < 0 ? 'B' : (Math.random() < 0.5 ? 'A' : 'B');
    const loserSide = winner === 'A' ? 'B' : 'A';
    this.cats.A.setState('CLASH', 0.8, { dir: winner === 'A' ? 1 : -1, loser: loserSide === 'A' });
    this.cats.B.setState('CLASH', 0.8, { dir: winner === 'A' ? 1 : -1, loser: loserSide === 'B' });
    delete this.active.A; delete this.active.B;
    this.active.A = 'CLASH'; this.active.B = 'CLASH';
    if (this.onClash) this.onClash({ winner, loser: loserSide });
    return true;
  }
}

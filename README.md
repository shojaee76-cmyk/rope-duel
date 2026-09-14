# ⚔ THE ROPE DUEL — Live BTC/USDT Order-Flow Duel

Two Andalusian cats — **DON GATO** (BUY pressure, gold) and **SULTAN BIGOTES**
(SELL pressure, jade) — duel with swords on a suspended rope inside a moonlit
Andalusian courtyard. The fight is driven by **real Binance BTC/USDT trades**:
aggressive buy flow pushes Don Gato's attack, aggressive sell flow powers the
Sultan's counter. The rope-slung flag shows the live price and the real 24h
change; a gold/teal cat crowd cheers whichever side the order flow favors.

Integrated site for kanban task **t_e2039773**, combining:

- `feed.js` — live trade feed (task t_41492ad4): Binance WebSocket
  (trade + ticker), 30 s rolling buy/sell pressure in [-1, +1], 250 ms
  throttled emits, reconnect with backoff across 3 endpoints, deterministic
  simulation fallback. Zero dependencies.
- `src/` + `vendor/` — Three.js duel scene (task t_f39e467f): verlet rope,
  8 signature moves + clash rule, price flag, VFX, torch-lit courtyard.
  three r186, no build step needed to *run*.

## Run it

**Option A — just open the file** (double-click `index.html`):
the bundle is a classic IIFE script, so `file://` works. If your network can
reach Binance you get the live tape; otherwise the page falls back to
SIMULATION mode automatically (orange badge).

**Option B — any static server:**

    npm install          # dev-only: esbuild + playwright-core
    npm run serve        # http://localhost:8931
    # or: python -m http.server, npx serve, etc.

**Rebuild the bundle after editing `main.js` / `src/`:**

    npm run build        # esbuild -> bundle.js (IIFE, minified, ES2019)

## URL parameters

| param        | effect                                                       |
|--------------|--------------------------------------------------------------|
| `?mode=live` | force the real Binance feed (no demo fallback)               |
| `?mode=demo` | force the synthetic tape (works fully offline)               |
| `?mode=auto` | default: live first, demo fallback after 2 failed connects, auto-heals back to live every 60 s |
| `?seed=N`    | seed for the demo tape (reproducible)                        |
| `?nofx=1`    | heavy particle reduction for weak devices                    |

## What reacts to what

| market event                          | scene reaction (≤ ~1 s)                                  |
|---------------------------------------|----------------------------------------------------------|
| pressure crosses +0.6                 | Don Gato LUNGE (Charge of the Golden Bull)               |
| pressure crosses −0.6                 | Sultan PARRY_HOP (Zellij Sidestep)                       |
| new 15-min high / low                 | SLASH_UP slow-mo / SLASH_SPIN windmill                   |
| 1-min trend flip                      | TAUNT / RIPOSTE                                          |
| \|5 s move\| > 0.5%                   | STUMBLE_PAIR (Fountain Fumble, flag spins, coin pops)    |
| \|pressure\| < 0.1 for 10 s           | both FREEZE (Whisker Stalemate) until flow returns       |
| lunge meets parry window              | CLASH — blades lock, pressure side wins                  |
| single trade ≥ $50k (whale ≥ $250k)   | floating `+BUY` / `−SELL` callout, bigger for whales     |
| sustained pressure                    | cats lean with the flow; crowd hops on the gaining side  |

HUD: big live price, real 24h change (+$abs) from the Binance ticker,
trades/sec, sword-vs-sword pressure meter (gold right = BUY, teal left =
SELL), BUY/SELL cat tags, connection badge (green OPEN = live,
orange SIMULATION = fallback), `/ 24h` line painted on the rope flag.

## Verification (this workspace, real Chrome, headless)

- `node verify_integration.mjs` — **17/17 checks pass, 0 console errors**
  - live feed: HUD price, 48 onChange events in 12 s (exact 250 ms cadence),
    24 h fields, status ladder reaches `open`, flag texture driven (62.7 FPS)
  - demo fallback: ALL external requests blocked → SIMULATION badge, tape
    still runs, flag driven, 0 errors
  - callout plumbing: `+BUY $111.2K` DOM pop + whale styling
  - resize: canvas tracks viewport (480×720)
- `node verify_file_open.mjs` — **file:// direct open: PASS** (no server)
- `node shoot.mjs` / `node shoot_meter.mjs` — rendered screenshots
  (live, BUY lunge, SELL attack, mobile 375×667, demo badge, meter extremes),
  vision-reviewed: crowd visible, meter directions correct, mobile fits.

## Data & limits

- Public Binance market streams only — no API key, nothing sent after the
  handshake, ONE socket per page, reconnect well under the 300-connects /
  5-min cap. The socket is paused when the tab is hidden.
- Default endpoint `wss://data-stream.binance.vision` (market-data mirror),
  rotating to `stream.binance.com:9443` then `:443`.
- Simulation fallback means the page **always works**, even with Binance
  blocked; the badge tells you which tape you are watching.

## Files

    index.html            the page (HUD, meter, callouts, tags, boot styles)
    main.js               integration boot: feed ↔ scene ↔ HUD wiring
    feed-adapter.js       mapping contract: onChange payload -> scene API
    feed.js               BtcTradeFeed module (UMD, zero deps)
    bundle.js             built IIFE bundle (three + scene + adapter)
    src/scene.js          createDuelScene(container, {demo, debug, vfxScale})
    src/{cats,rope,director,flag,arena,vfx,crowd,palette}.js
    vendor/three.*.js     vendored three r186
    serve.mjs             tiny static server (PORT env, default 8931)
    verify_*.mjs          headless acceptance suites
    shoot*.mjs            screenshot capture

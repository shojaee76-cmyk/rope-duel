# THE ROPE DUEL (rope-duel)

## What it is
A single-page site: two Andalusian cats (DON GATO = BUY pressure, gold; SULTAN BIGOTES = SELL pressure, jade) duel with swords on a suspended rope in a moonlit courtyard. The fight is driven by the live Binance BTC/USDT tape: 30s rolling order-flow pressure pushes attacks/parries, the rope flag shows live price + 24h change, whales trigger callouts, crowd cheers the winning side. Falls back to a SIMULATION tape (orange badge) when Binance is unreachable, so the page always works.

- Origin: kanban task `t_02c9f4fe` (inrange board): "a fun webpage shows btc/usdt price".
- Live URL: https://shojaee76-cmyk.github.io/rope-duel/
- Source repo: https://github.com/shojaee76-cmyk/rope-duel (public, MIT not set)
- Local durable copy: `C:\Users\capit\rope-duel` (this dir)

## Architecture
- `feed.js` — BtcTradeFeed: Binance WS (trade + ticker), 30s rolling pressure [-1,+1], 250ms throttled emits, 3-endpoint reconnect w/ backoff, deterministic sim fallback. Zero deps.
- `src/scene.js` — `createDuelScene(container, {demo, debug})`: verlet rope, 8 signature moves + clash rule, price flag, VFX, crowd. three r186 (vendored in repo; bundled into bundle.js locally).
- `main.js` + `feed-adapter.js` — integration boot: feed onChange payload -> scene API + HUD.
- `index.html` — HUD, pressure meter, whale callouts, connection badge. Only 3 runtime files needed: index.html + feed.js + bundle.js (classic IIFE, works over file://).

## Status: DONE (2026-09-14)
- Kanban root `t_02c9f4fe` + children `t_c027c590` (research), `t_a1985f86` (design spec), `t_f39e467f` (scene), `t_41492ad4` (feed), `t_e2039773` (integration) all done.
- Verification: `verify_integration.mjs` 17/17 PASS, 0 console errors; live-URL headless Chrome pass: HUD 78,865.98 / 232 trades-s / badge OPEN / 0 errors; pixel assert 15% gold torchlight, 13% ivory, lum 0-231.
- Kanban artifacts (screenshots, zips, reports) survive in `%LOCALAPPDATA%\hermes\kanban\boards\inrange\attachments\`.

## Progress log
- 2026-09-14: children completed; root goal-mode run died to a commandcode/deepseek-v4.1-flash provider outage (5 stale attempts) -> goal judge blocked the task falsely; re-verified deliverable, deployed to GitHub Pages (Netlify deploy-credits exhausted until 2026-09-23), completed root with evidence. Workspaces GC'd by `kanban complete` (deliverables preserved via kanban_complete attachments).
- 2026-09-14 (later): **v2 ambience upgrade** shipped to the same URL. New `src/skydome.js` (multi-stop gradient dome, 3 twinkling parallax star layers + Milky Way band, moon-crossing cloud wisps, shooting stars) and `src/ambience.js` (fireflies, animated fountain water, ember drift). Side-arch voids replaced with painted village vistas (glowing windows, hills, cypresses). BTC moon now breathes + flares on whale trades / blade clashes (moonPulse). Mouse-parallax camera. Fixed pre-existing duplicate-callout bug (spawnCallout was registered twice). Verified: bundle byte-identical local vs live (sha256 d9feb05dea551243), live headless pass 0 errors / 90 FPS, vision-QA rated background 8/10. Gotcha logged: fog + transparent renderOrder overrides hide anything below y~8 at z<-5; wisps/vistas must be tuned to the visible sky sliver.

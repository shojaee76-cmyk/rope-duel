// feed-adapter.js — glue between BtcTradeFeed (feed.js) and the duel scene.
// Task t_e2039773 integration contract (see card comments from t_41492ad4).
//
//   const adapter = wireFeedToScene(feed, scene, { onCallout, onStatus, onState });
//   feed.start();
//
// Mappings (from the upstream contract):
//   s.pressure  -> scene.setPressure(P)      (+ = BUY/Don Gato lunges right)
//   s.price     -> scene.setPrice(px)        (rope flag + HUD)
//   s.change24hPct -> scene.setChange24hText('+2.41% 24h')  (real ticker value)
//   s.lastSide/lastQty/lastNotional -> big-trade callouts via onCallout
//   s.mode ('live'|'demo')          -> status badge ('SIMULATION' when demo)
// Reaction latency: onChange fires every 250 ms, so pressure reaches the
// director within ~0.25 s of market movement (contract: ~1 s).
export function wireFeedToScene(feed, scene, opts = {}) {
  const onCallout = typeof opts.onCallout === 'function' ? opts.onCallout : null;
  const onStatus = typeof opts.onStatus === 'function' ? opts.onStatus : null;
  const onState = typeof opts.onState === 'function' ? opts.onState : null;

  // big-trade threshold (USD notional). Modest: BTC trades are small in
  // quantity but the notional adds up; $50k prints = whale on this scale.
  const CALLOUT_MIN = 50000;

  // feed.onTrade fires per real trade (bypasses the 250 ms throttle);
  // the scene hook fans out; the page's single spawnCallout renders it.
  // (The page ALSO registers its DOM callback directly, so routing the same
  // trade through onCallout here printed every callout TWICE - v2 bug fix.)
  const offTrade = feed.onTrade((t) => {
    if (t.notional >= CALLOUT_MIN) {
      scene.tradeCallout && scene.tradeCallout({
        side: t.side, qty: t.qty, notional: t.notional, price: t.price, ts: t.ts
      });
    }
  });

  const offChange = feed.onChange((s) => {
    if (typeof s.pressure === 'number' && isFinite(s.pressure)) scene.setPressure(s.pressure);
    if (s.price) scene.setPrice(s.price);
    if (typeof s.change24hPct === 'number' && isFinite(s.change24hPct)) {
      const sign = s.change24hPct >= 0 ? '+' : '';
      scene.setChange24hText(`${sign}${s.change24hPct.toFixed(2)}% 24h`);
    }
    if (onState) onState(s);
  });

  const offStatus = feed.onStatus((st) => {
    if (onStatus) onStatus(st);
  });

  return function unwire() {
    offChange(); offStatus(); offTrade();
  };
}

# ORL Daily Report Stale Market QA Fix - 2026-07-17

Source: Damiano Telegram screenshots from 17 July 2026 showing Oasis Revenue Lab daily output repeating `Dubai 24% market occupancy` and then asking Damiano to check the market dashboard.

## What Went Wrong

The bot treated a repeated market benchmark as a normal conclusion instead of a data-quality event.

- The daily report used the same market occupancy figure as the previous day: `Dubai 24%`.
- When Damiano challenged it, the bot said the market situation was still the same and then asked him to check the PriceLabs/market dashboard.
- The answer made ORL feel like a report wrapper, not a revenue-management product.

For ORL, a market number that stays exactly unchanged across daily pulls is not automatically insight. It is an input that needs freshness, source and movement validation.

## Product Rule

ORL must never present repeated market data as a confident market read unless it can prove freshness.

If a market benchmark is unchanged from the prior report, ORL must classify it as one of:

1. `fresh_unchanged`: source was refreshed today and the value genuinely remains unchanged.
2. `stale_or_frozen`: source timestamp, fetch ID or observation history suggests the feed did not update.
3. `unverified`: the report has a value but cannot prove source freshness.

The user-facing report must show this distinction.

## Required Daily Brief Behaviour

Every daily market line must include:

- market metric name;
- source;
- source timestamp or fetch timestamp;
- comparison with yesterday and last 3-7 observed values where available;
- status: `fresh`, `stale_or_frozen`, or `unverified`;
- whether the market signal changed the pricing decision.

Bad output:

```text
Market: soft - Dubai 24% vs your 77%.
```

Acceptable output:

```text
Market benchmark: Dubai 24% occupancy, unchanged from yesterday.
Status: unverified freshness - same value repeated and source timestamp not available.
Decision impact: do not use the market number alone; rely on booking pace, floor, rank/visibility and live comparable checks until the feed is verified.
```

If the source timestamp proves the pull is fresh:

```text
Market benchmark: Dubai 24% occupancy, fresh pull at 17 Jul 09:30 GST, unchanged vs yesterday.
Decision impact: soft demand confirmed, but no price cut while the unit is above market occupancy and at/below floor.
```

## Chat QA Rule

If Damiano asks why the same market number appears again, the bot must not ask him to check the dashboard.

Correct first response:

```text
You are right to challenge it. I need to verify whether the 24% market figure is a fresh unchanged pull or a stale/frozen feed. I will check source timestamp, last observed values and comparable live market evidence before using it in a recommendation.
```

If the bot cannot check source freshness from its runtime:

```text
I cannot prove the 24% market benchmark is fresh from the current payload, so I am marking it unverified and excluding it from the pricing decision until the feed is validated.
```

## Implementation Acceptance Tests

1. Run two consecutive daily reports where market occupancy is exactly `24%`.
2. The second report must not simply say `same as yesterday`.
3. It must show market source freshness status.
4. If no timestamp/fetch proof exists, it must mark the benchmark `unverified` or `stale_or_frozen`.
5. Pricing recommendation must state whether the market benchmark was included or excluded.
6. Chat must not tell Damiano to manually check the dashboard for a source the agent is supposed to validate.

## Product State

Keep ORL in supervised/internal mode until the daily brief and chat can distinguish genuine market movement from stale or unverified data. This fix belongs beside the occupancy-window QA fix and the RevenueState consistency work.

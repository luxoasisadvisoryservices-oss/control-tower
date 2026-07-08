# ORL PriceLabs Customer API Extraction - 2026-07-08

Run time: 2026-07-08 11:15 Asia/Dubai

Verdict: useful for ORL. The Customer API is the official data pipe for PriceLabs data. ORL should use it read-only first for listing registry, prices, reservations, performance metrics, neighbourhood benchmarks, rate plans, report builder output and customisation reads. Write endpoints must stay approval-gated.

Core ORL mapping:

- `GET /v1/listings`: listing registry, PMS IDs, OTA channel IDs, min/base/max, group/tags, sync status.
- `POST /v1/listing_prices`: daily prices, user price, uncustomised price, min stay, booking status, blocked/unbookable flags, demand, discounts and reasons.
- `GET /v1/listing_metrics`: occupancy, revenue, ADR, RevPAR, adjusted occupancy, days-at-minimum-price, base-price ratio, last booked date, STLY and market comparisons.
- `GET /v1/reservation_data`: reservations, booked date, check-in/out, rental revenue, booking channel and confirmation code. Must reconcile with Hostaway/PMS before treating as truth.
- `GET /v1/neighborhood_data`: market/benchmark evidence for owner reports and scenario assumptions.
- report builder endpoints: saved PriceLabs report templates and async report output.
- `GET /v1/fetch_rate_plans`: derived rate-plan structure and adjustment data.

Approval-gated later:

- `POST /v1/listings`: base/min/max/tags.
- add/update/delete DSO: specific-date prices, min stay, check-in/out rules, lead-time expiry.
- create/update customisations at listing, group or account/PMS level.
- import newly added PMS listings.

Build order:

1. Finish Section A `RevenueState` consistency first.
2. Add read-only `PriceLabsCustomerApiClient`.
3. Sync listing registry.
4. Fetch prices for today, 30 days and 90 days.
5. Fetch metrics and market comparisons.
6. Pull reservations and reconcile with Hostaway/PMS.
7. Add neighbourhood benchmarks.
8. Add report-builder output if templates exist.
9. Add source trace to every ORL answer.
10. Add `PendingActionQueue` for any PriceLabs write action.

Product consequence:

ORL should not position itself as a PriceLabs replacement. ORL is the supervised Dubai STR revenue-manager layer that uses PriceLabs official data, Hostaway/PMS reconciliation, OTA/listing diagnosis, recommendation memory and owner-ready reporting.


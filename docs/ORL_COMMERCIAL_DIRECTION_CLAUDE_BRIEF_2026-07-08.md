# ORL Commercial Direction Claude Brief - 2026-07-08

Use this as the upgraded commercial/product direction brief for Oasis Revenue Lab.

```text
We should NOT build ORL around PriceLabs. We should build ORL around the client dashboard.

New ORL direction:

- one dashboard per client / listing / portfolio
- pricing software is only an input, not the product
- PriceLabs is connector 1, but later we can plug in Beyond, Wheelhouse, manual CSV, PMS rates or any other pricing API
- ORL owns the decision layer: revenue management, PMS truth, OTA ranking, market/news impact and owner-ready action plans

What makes us different from PriceLabs:

PriceLabs tells you pricing recommendations.

ORL tells the operator/owner what is happening across the whole business and what to do next.

PriceLabs sees pricing data.

ORL joins pricing + Hostaway/PMS + Airbnb/Booking.com page/ranking + news/events + recommendation history.

Dashboard modules we should build:

1. Revenue State
Realised revenue, secured future revenue, occupancy, ADR, RevPAR, pacing, gap nights, source freshness.

2. Pricing Input Layer
Connector-agnostic. PriceLabs first, but not locked to PriceLabs.

3. PMS Truth Layer
Hostaway first. Reservations, cancellations, revenue, channel source, mismatches between pricing tool and actual PMS truth.

4. OTA Ranking / Listing Health
Airbnb and Booking.com page checks, ranking/search visibility, bookability, restrictions, min-stay, promotions, photos, reviews, amenities. This is a big moat because PriceLabs is not the operator's OTA page auditor.

5. Daily Market / News Intelligence
Dubai events, tourism/flight/news signals, weather disruptions, school holidays, city announcements, demand spikes/drops. The agent explains if the news means rate opportunity, restriction change, promo risk, or no action.

6. Recommendation Ledger
Every recommendation, why we made it, whether approved, whether implemented, and what happened after 7/14/30 days.

7. Owner Report / Scenario Desk
Owner-ready monthly report and scenario plan: "to reach AED X, here are rates, assumptions, sensitivity and risk."

Build order:

1. Finish Section A RevenueState consistency.
2. Design the first client dashboard data model.
3. Build the neutral connector structure: pricing source, PMS source, OTA source, market/news source.
4. Add PriceLabs only as first read-only pricing connector.
5. Add Hostaway/PMS reconciliation as truth layer.
6. Build OTAChannelState for Airbnb/Booking.com page/ranking checks.
7. Add daily Dubai market/news brief module.
8. Add recommendation ledger.
9. Turn dashboard into Revenue Health Check report.
10. Sell consultancy first, dashboard as delivery layer, AI client-facing later.
```


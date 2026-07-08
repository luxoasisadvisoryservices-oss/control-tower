# ORL Claude Agent Direction Brief - 2026-07-08

Use this brief in Claude / Claude Code for Oasis Revenue Lab direction.

```text
You are working on Oasis Revenue Lab. The direction has changed.

Do not build ORL as a generic PriceLabs chatbot or cheaper PriceLabs competitor. Build it as a supervised STR revenue-management operating desk for Dubai operators.

Core direction:
ORL should become a client revenue dashboard and revenue-manager agent. The dashboard is the product centre. PriceLabs, Hostaway/PMS, Airbnb, Booking.com, market/news data and manual inputs are data sources feeding the dashboard.

Commercial direction:
Sell Damiano-led revenue-management consultancy first. ORL is the internal AI/reporting/delivery layer that helps Damiano produce better reports, recommendations, owner updates and action plans. Client-facing AI comes later, only after the numbers are stable.

Positioning:
ORL turns pricing data, PMS revenue truth, OTA listing health and market signals into daily revenue decisions, owner-ready reports and action plans.

Do not position as:
- AI pricing assistant
- ask PriceLabs in chat
- cheaper PriceLabs
- autonomous price-changing bot
- generic report builder

Build direction:
1. Finish RevenueState consistency first.
   - Occupancy, ADR, revenue, current month, last month, secured future revenue, tonight price and booking pace must all come from one consistent object.
   - Every answer must show source, date range, freshness and gross/net basis.

2. Build the client dashboard shell.
   - One dashboard per client/listing/portfolio.
   - Show Revenue State, secured future revenue, occupancy, ADR, RevPAR, gap nights, pacing, cost floor and source trace.
   - Dashboard first, chat second.

3. Add connector-agnostic pricing input.
   - PriceLabs is connector 1, not the whole product.
   - Later allow Beyond, Wheelhouse, Hostaway rates, manual CSV or other pricing APIs.
   - Keep a neutral PricingSource interface.

4. Add PriceLabs Customer API read-only layer.
   - Use listings, listing prices, metrics, reservations, neighbourhood data, report builder and rate plans.
   - Do not use write endpoints autonomously.
   - Any live price/listing/rate change must become an approval card first.

5. Add Hostaway/PMS reconciliation.
   - PriceLabs data is not final truth.
   - Reconcile reservations, booked revenue, future secured revenue, channels and payout/revenue truth with Hostaway/PMS.
   - Flag mismatches and missing data.

6. Build OTAChannelState.
   - Track Airbnb and Booking.com listing health, bookability, ranking/visibility where possible, restrictions, promotions, rate plans, reviews, photos, amenities and whether a guest can actually find and book.

7. Build recommendation ledger.
   - Store each recommendation, source evidence, assumption, expected effect, approval status, implemented/rejected state and result after 7/14/30 days.
   - This becomes the proof moat.

8. Upgrade monthly report into owner-ready action report.
   - What happened
   - Why it happened
   - What we recommended
   - What was done
   - What is next
   - Visible assumptions and source trace

9. Build Scenario Desk later.
   - Pro tier should build owner-ready scenario plans only from real dashboard data.
   - No open-ended document generator.
   - Scenarios must show secured revenue, remaining nights, required ADR, occupancy assumptions, cost floor, market benchmark, PriceLabs recommendation, PMS reconciliation and sensitivity.

Tier logic:
Basic = trusted source-traced answers and revenue snapshot.
Premium = diagnosis, tracking, OTA/listing checks, recommendation ledger and owner report.
Pro = Scenario Desk / Owner Plan Builder with visible assumptions and sensitivity.

Immediate next tasks:
1. Fix RevenueState Section A so the bot stops giving contradictory numbers.
2. Define the dashboard data model.
3. Define PricingSource and PriceLabs connector shape.
4. Define Hostaway/PMS reconciliation fields.
5. Define OTAChannelState fields.
6. Define recommendation ledger schema.
7. Make the first one-listing Revenue Health Check template.

Boundaries:
- Read-only/reporting first.
- No live pricing changes without approval.
- No autonomous write actions.
- No broad SaaS claims before proof.
- No PriceLabs replacement language.
- Use ORL internally for consultancy delivery first, then expose client AI after stability.
```


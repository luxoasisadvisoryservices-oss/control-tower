# ORL Client Dashboard Revenue OS Direction - 2026-07-08

## Decision

ORL should pivot from a PriceLabs-adjacent pricing assistant into a client dashboard revenue operating system.

The dashboard is the product centre. Pricing software is only an input.

This avoids direct competition with PriceLabs. PriceLabs owns pricing recommendations and dynamic pricing infrastructure. ORL should own the operator/owner decision layer: dashboard, source trace, OTA ranking, market news impact, PMS reconciliation, recommendation memory, and Damiano-led revenue-management action.

## Core Positioning

ORL is not:

- a generic AI pricing assistant
- an "ask PriceLabs" wrapper
- a cheaper PriceLabs
- an autonomous price-changing bot
- a generic report builder

ORL is:

- a client revenue dashboard
- a supervised revenue-management desk
- a connector-agnostic intelligence layer
- a daily decision system for STR operators and owners
- the place where pricing data, PMS truth, OTA visibility, market news and Damiano's advisory method come together

One-line positioning:

> ORL turns pricing data, PMS revenue, OTA ranking and market signals into a daily revenue dashboard and owner-ready action plan.

## Strategic Shift

Old centre:

- PriceLabs data
- pricing Q&A
- monthly pricing report
- AI assistant answering revenue questions

New centre:

- one dashboard per client
- one dashboard per listing or portfolio
- pricing-engine agnostic inputs
- Hostaway/PMS reconciliation
- OTA ranking and page checks
- daily news and market-impact watch
- recommendation ledger and outcome proof
- owner-ready reports and Scenario Desk

## Why This Avoids Losing To PriceLabs

PriceLabs can beat us on:

- pricing algorithm
- internal PriceLabs data
- native PriceLabs recommendations
- dynamic price pushes
- PriceLabs-native reports
- generic natural-language questions over PriceLabs data

ORL can win on:

- dashboard across multiple systems
- UAE/Dubai operator workflow
- revenue-manager judgement
- Hostaway/PMS truth versus pricing-system assumptions
- OTA page/ranking/bookability diagnosis
- market/news context that pricing engines may not explain
- owner-facing advisory artefacts
- implementation follow-through
- recommendation memory: what we advised, what happened, what improved

## Dashboard-First Product Architecture

Each client gets a dashboard with these modules:

1. Revenue State
   - realised revenue
   - secured future revenue
   - occupancy
   - ADR
   - RevPAR
   - pacing versus last year or market
   - gap nights
   - price floor / cost floor
   - source trace for every number

2. Pricing Input Layer
   - PriceLabs as first connector
   - ability to add Beyond, Wheelhouse, manual CSV, PMS rate table or any future pricing API
   - no product dependency on one pricing provider
   - clear distinction between recommended price, current live price, booked price and realised price

3. PMS Truth Layer
   - Hostaway first
   - reservations
   - cancellations
   - owner statements if available
   - channel source
   - payout/revenue reconciliation
   - flags when pricing software and PMS disagree

4. OTA Ranking / Listing Health Layer
   - Airbnb page check
   - Booking.com page check
   - ranking/search visibility where technically available
   - bookability
   - blocked or unbookable dates
   - minimum-stay restrictions
   - rate plans/promotions
   - photos, reviews, amenities and title/description checks
   - whether a guest can actually find and book the listing

5. Daily Market and News Intelligence
   - Dubai events
   - flights / tourism indicators where available
   - weather disruptions if relevant
   - visa, city, airport, school-holiday and event signals
   - competitor movement
   - demand spikes or demand drops
   - short explanation of how each item may affect rates, restrictions, promotions or minimum stay

6. Recommendation Ledger
   - recommendation
   - source evidence
   - assumption
   - expected effect
   - approval status
   - implemented or rejected
   - result after 7/14/30 days
   - learning for next month

7. Owner Report / Scenario Desk
   - monthly owner-ready PDF or doc
   - 30-day plan
   - scenario plan to hit AED X
   - sensitivity view
   - assumptions shown on the page
   - not open-ended document generation

## Build Order

1. Client Dashboard Shell
   - create one dashboard view per client
   - support listing cards and portfolio summary
   - show last updated time and source freshness
   - no live price changes

2. RevenueState Consistency
   - finish current Section A fix first
   - every answer must use the same data object as the dashboard
   - no contradictory month/current/forward revenue numbers

3. Connector Interface
   - define a neutral `PricingSource` contract
   - PriceLabs is connector 1
   - later connectors can be other pricing tools, manual upload or PMS rates
   - keep ORL language provider-agnostic

4. Hostaway/PMS Reconciliation
   - map listing IDs across PriceLabs, Hostaway, Airbnb and Booking.com
   - compare booked revenue, future secured revenue and booking status
   - flag mismatches and missing data

5. OTAChannelState
   - add listing URL intake
   - inspect Airbnb/Booking.com page state
   - track visibility/bookability/ranking signals
   - capture restrictions, reviews, photos, amenities and promotions

6. Daily News and Market Watch
   - create daily Dubai STR market brief
   - classify signals as rate opportunity, restriction risk, demand risk, listing opportunity or no action
   - attach news items to dashboard recommendations only when relevant

7. Recommendation Ledger
   - store every recommendation and outcome
   - this becomes the proof moat
   - owners can see that advice is tracked, not guessed

8. Owner Report Upgrade
   - dashboard exports into monthly owner report
   - report shows what happened, why, what was recommended, what was done, and what is next

9. Scenario Desk
   - Pro tier produces owner-ready scenario plans
   - only from real dashboard data and visible assumptions
   - no open-ended client document generator

10. Approval-Gated Actions
   - later: action queue for PriceLabs or PMS writes
   - every live price/listing change requires human approval
   - ORL recommends; Damiano/operator approves

## Tier Direction

Basic:

- dashboard
- source-traced answers
- revenue snapshot
- pricing/PMS visibility

Premium:

- diagnosis
- OTA ranking/listing checks
- daily news impact
- recommendation ledger
- monthly owner-ready report

Pro:

- Scenario Desk
- owner-ready plan builder
- sensitivity and assumptions
- advisory implementation support
- approval-gated action queue

## First Sellable Offer

Sell consultancy first:

Revenue Health Check:

- one listing or small portfolio
- dashboard snapshot
- PriceLabs or other pricing-source review
- Hostaway/PMS reconciliation
- OTA ranking/listing health check
- daily market/news context
- top 5 revenue actions
- 30-day owner-ready plan

This makes ORL stronger because the AI is helping deliver a consulting product before becoming a standalone software promise.

## Immediate Next Actions

1. Finish Section A `RevenueState` consistency.
2. Define the first client dashboard data model.
3. Create the neutral connector contract: pricing source, PMS source, OTA source, market/news source.
4. Build PriceLabs as the first read-only pricing connector.
5. Build Hostaway/PMS reconciliation as the truth layer.
6. Build first OTA page/ranking audit for Airbnb and Booking.com.
7. Create the first Dubai market/news daily brief module.
8. Create the first Revenue Health Check template from the dashboard.
9. Use Oasis2 and Wellspring as internal proof cases.
10. Start selling the consultancy, not the software alone.

## Product Rule

Never let ORL be dependent on one pricing provider.

Pricing tools feed ORL. They do not define ORL.

The product value is the dashboard plus judgement layer: revenue truth, OTA ranking, market context, recommendations, owner-ready plans and implementation follow-through.

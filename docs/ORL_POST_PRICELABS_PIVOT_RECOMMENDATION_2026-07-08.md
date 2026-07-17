# ORL Post-PriceLabs Pivot Recommendation - 2026-07-08

Created: 2026-07-08 11:25 Asia/Dubai  
Source context: Damiano Pro-tier direction from 2026-07-07, PriceLabs MCP/API check from 2026-07-08, Customer API extraction from 2026-07-08.

## One-Line Pivot

Do not build ORL as a generic PriceLabs chat assistant. Build ORL as a supervised STR revenue manager that turns PriceLabs + PMS/Hostaway + OTA/listing evidence into decisions, follow-through and owner-ready artefacts.

## What To Stop

- Stop positioning ORL as `ask PriceLabs in chat`.
- Stop making generic pricing Q&A the moat.
- Stop treating a monthly PriceLabs-style report as the main product.
- Stop building open-ended client document generation.
- Stop pushing Pro before data reliability and visible assumptions are proven.
- Stop treating PriceLabs recommendations as final truth without PMS reconciliation and operational judgement.

## What To Keep

- Keep the Basic / Premium / Pro direction.
- Keep Scenario Builder as the Pro headline.
- Keep visible assumptions as the trust rule.
- Keep the Telegram-first daily revenue-manager experience.
- Keep the monthly owner-ready PDF/report.
- Keep the recommendation ledger and outcome tracking.
- Keep approval-gated write actions.

## What To Pivot Toward

### 1. From PriceLabs Wrapper To Reconciliation Brain

ORL should join:

- PriceLabs prices, metrics, demand, reservations and reports;
- Hostaway/PMS actual booking and revenue truth;
- OTA/listing health from Airbnb, Booking.com and other channels;
- cost floor and owner payout logic;
- Damiano's STR judgement and local Dubai context.

The strongest line:

> PriceLabs tells you what pricing data says. ORL tells you what to do as an operator, why, what assumptions it uses, and what happened after.

### 2. From Chat To Operating Desk

ORL should feel less like chat and more like a daily revenue desk:

- morning revenue brief;
- red/yellow/green listing health;
- pricing calendar risk;
- no-booking diagnosis;
- upcoming-event/min-stay alerts;
- secured vs forecast revenue;
- owner/report notes;
- approval queue for live pricing changes.

### 3. From Pro Document Generator To Scenario Desk

Keep Pro, but rename the mental model:

- not `document generator`;
- not `ask anything and export`;
- yes: `Scenario Desk` or `Owner Plan Builder`.

Pro should build:

- hit-AED-X-this-month plan;
- owner monthly action plan;
- pricing change proposal;
- sensitivity table;
- landlord-facing performance note;
- recovery plan for underperforming listing.

Every artefact must show:

- current secured revenue;
- remaining nights;
- required ADR;
- occupancy assumptions;
- cost floor;
- market benchmark;
- PriceLabs recommendation;
- Hostaway/PMS reconciliation status;
- missing data;
- sensitivity.

## Revised Tier Logic

### Basic: Trusted Answers

Promise:

- ask about occupancy, ADR, revenue, tonight price, secured revenue, booking pace, last booked date.

Requirement:

- `RevenueState` must be consistent.
- Data source trace must be visible.

Do not sell Basic until Section A is stable.

### Premium: Diagnosis And Tracking

Promise:

- why am I not getting bookings?
- is pricing, visibility, bookability, review score, photos, restrictions or promotion stack the issue?
- what should we watch this week?
- what recommendations are open, accepted, rejected or proven?

Requirement:

- `RevenueState` + `OTAChannelState` + recommendation ledger.
- PriceLabs Customer API read layer.
- Hostaway/PMS reconciliation.

### Pro: Scenario Desk / Owner Plan Builder

Promise:

- build the plan, not just answer.
- owner-ready Excel/Word-style artefacts with assumptions and sensitivity.

Requirement:

- deterministic templates.
- visible assumptions.
- source freshness.
- QA scoring.
- approval-gated live actions.

## Immediate Build Pivot

Order now:

1. Finish Section A `RevenueState` consistency.
2. Add source trace to every revenue answer.
3. Add read-only PriceLabs Customer API client.
4. Reconcile PriceLabs reservation/revenue rows with Hostaway/PMS.
5. Build `OTAChannelState` for visibility, bookability, restrictions, promotions, rate plans, reviews/photos/amenities.
6. Build recommendation ledger with status and outcome.
7. Upgrade monthly PDF into an owner-ready action report.
8. Build Scenario Desk templates internally first.
9. Only after testing, define tier pricing.
10. Later, add approval-gated write-action queue for PriceLabs updates.

### 2026-07-17 QA Addition: Repeated Market Data

The daily report must treat an unchanged market figure as a data-quality question before using it as a market conclusion.

If a benchmark such as `Dubai 24% market occupancy` repeats exactly across daily reports, ORL must prove source freshness or label it `unverified` / `stale_or_frozen`. It should not say the market is simply unchanged, and it should not ask Damiano to check the market dashboard manually. The report must state whether that market benchmark was included or excluded from the recommendation.

## Website / Pitch Pivot

Bad positioning:

> AI pricing assistant powered by PriceLabs.

Better positioning:

> A supervised revenue manager for Dubai STR operators. ORL combines PriceLabs data, PMS revenue truth, OTA/listing diagnosis and operator judgement into daily actions, owner reports and scenario plans.

Short pitch:

> Basic answers. Premium diagnoses and tracks. Pro builds the owner-ready plan.

## Why This Survives PriceLabs MCP

PriceLabs can own:

- data access;
- Claude MCP;
- pricing Q&A;
- listing health;
- no-booking diagnosis;
- report builder;
- write actions.

ORL must own:

- local operator workflow;
- PMS reconciliation;
- owner-facing communication;
- cross-channel diagnosis;
- implementation queue;
- result memory;
- advisory packaging;
- Damiano-led follow-through.

## Decision

Pivot ORL after the PriceLabs discovery, but keep the business.

The pivot is:

- less generic AI assistant;
- more supervised revenue-management operating desk;
- less “chat with data”;
- more “diagnose, decide, track, build the plan”.

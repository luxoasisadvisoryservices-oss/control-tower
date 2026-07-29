# ORL PriceLabs July Updates Focus And Claude Prompt - 2026-07-29

## Sources Checked

- Forwarded email from Damiano: `FW: July Updates: New features now in your account`, Gmail ID `19fad2ba2b1b9da2`.
- PriceLabs MCP overview and tool docs.
- PriceLabs Customer API overview.
- PriceLabs integrations page.

Help Centre article extraction was partly blocked by the site, so use the forwarded email as the primary evidence for the Help Centre-only feature summaries.

## Executive Read

PriceLabs is moving in exactly the direction Oasis Revenue Lab expected:

- mobile-first revenue management;
- AI-connected PriceLabs accounts;
- listing-level revenue goals;
- better listing ranking/comparison;
- richer API/reporting;
- better comp matching for hotel/multi-unit inventory;
- report templates that answer operator questions;
- broader PMS/channel coverage.

This validates ORL, but it also raises the bar. A generic "AI connected to PriceLabs" is no longer a moat. ORL should become the revenue operating layer that uses PriceLabs data alongside PMS/Hostaway truth, owner goals, costs, listing health, daily actions and recommendation memory.

## What To Focus On

### 1. PriceLabs Mobile App

PriceLabs focus:

- pricing calendar;
- recommendations;
- quick price adjustments from phone.

ORL implication:

- Do not copy a mobile app first.
- Make Telegram / phone command cards excellent.
- The user need is mobile revenue control, not another dashboard.

Revenue-manager focus:

- Daily "what changed / what to do today" brief.
- Mobile approval cards for recommended price or min-stay changes.
- Short operator notes instead of long reports.

### 2. PriceLabs MCP AI Connector

PriceLabs focus:

- AI assistant can query listings, analyse performance, make settings changes and build tools.

ORL implication:

- Highest priority technical accelerator.
- Use as official data access where possible.
- Keep read-only-first and approval-gated for writes.

Revenue-manager focus:

- Ask better questions than generic users:
  - Which listings are off pace against goal?
  - Which dates need intervention?
  - Which recommendations conflict with actual booking pace?
  - Which changes should be approved today?

### 3. Revenue Goals Per Listing

PriceLabs focus:

- set listing goals individually or in bulk;
- track completion in Report Builder, Multi-Calendar and Pricing Dashboard;
- filter by goal completion.

ORL implication:

- This should become a core ORL object.
- Every listing needs a goal state:
  - monthly revenue target;
  - owner net target;
  - occupancy/ADR target;
  - pace against goal;
  - gap to goal;
  - required remaining revenue.

Revenue-manager focus:

- For Shajid/Wellspring and each client, define goals before discussing tactics.
- Revenue management should start with "target vs pace", not random price tweaks.

### 4. Listing Optimizer Ranking Overview

PriceLabs focus:

- ranking comparison now defaults to minimum-length-of-stay view;
- fairer competitor comparison across different stay lengths.

ORL implication:

- Use this for "why am I not booking?" diagnosis.
- Combine ranking with OTA/listing conversion checks:
  - price;
  - availability;
  - min stay;
  - photos;
  - reviews;
  - cancellation policy;
  - promotions;
  - restrictions;
  - visibility.

Revenue-manager focus:

- Do not treat ranking as a single magic number.
- Define exactly what date window and stay length the ranking uses before making recommendations.

### 5. Customer API

PriceLabs focus:

- read prices into custom systems;
- push updates from custom systems;
- now supports customisation updates and Report Builder data.

ORL implication:

- Core product enabler.
- Use Customer API / RM Partner API / MCP to feed `RevenueState`.
- Do not build around unpredictable high-frequency polling until API pricing/quotas are clear.

Revenue-manager focus:

- Use official API data to power:
  - monthly owner reports;
  - daily brief;
  - recommendation ledger;
  - price/min/max/base guardrail review;
  - direct-booking website price consistency.

### 6. Hotel Rate Shopper

PriceLabs focus:

- compare hotel/multi-unit room types against correct competitor room types;
- filter by length of stay, refundability and breakfast inclusion.

ORL implication:

- Not the top priority for Lux Oasis apartments today.
- Useful conceptually for comp quality: compare like with like.

Revenue-manager focus:

- For Dubai STR apartments, apply the same discipline:
  - same bedroom count;
  - same sleeps;
  - similar building/location/view;
  - same stay length;
  - similar cancellation/refundability;
  - similar amenity level.

### 7. Report Builder Updates

PriceLabs focus:

- day-of-week performance template;
- booking-source performance template;
- aggregate row for reports;
- total occupancy metric.

ORL implication:

- High priority.
- These are exactly the pieces ORL needs for owner-ready reports and operator diagnosis.

Revenue-manager focus:

- Weekly/monthly client review should include:
  - weekday/weekend performance;
  - booking source/channel performance;
  - total occupancy;
  - revenue gap against goal;
  - recommended next action.

### 8. PMS Integrations

PriceLabs focus:

- more PMS/channel integrations, including DubizzleHolidayHomes.

ORL implication:

- ORL should stay PMS-agnostic and integration-aware.
- Dubai-specific integrations strengthen the regional wedge.

Revenue-manager focus:

- Track which client uses which PMS/channel stack.
- Build onboarding questions around PMS, PriceLabs, Booking.com/Airbnb, owner reports and direct-booking setup.

## Priority Order For ORL

1. Goals object per listing.
2. Read-only PriceLabs MCP/API connector into `RevenueState`.
3. Hostaway/PMS reconciliation.
4. Daily command card from the same state.
5. Owner-ready monthly report using Report Builder fields.
6. Recommendation ledger and outcome tracking.
7. OTA/listing health diagnosis around ranking, visibility and conversion.
8. Approval-gated pricing actions.

## Claude Prompt

Paste this into Claude / Claude Code as context before ORL work:

```text
You are helping build Oasis Revenue Lab, a supervised revenue-management operating layer for short-term-rental operators. Do not treat ORL as a generic PriceLabs chatbot or a PriceLabs clone.

Current PriceLabs update context:
- PriceLabs has launched/expanded MCP AI Connector access, so AI assistants can query listings, pricing, reservations, performance, market data, listing health, no-booking diagnosis, Report Builder data and potentially update settings/DSOs where permissions allow.
- PriceLabs now has mobile app workflows, listing-level revenue goals, improved Listing Optimizer ranking by minimum length of stay, Customer API/report-builder/customisation improvements, Hotel Rate Shopper comp matching, new Report Builder templates for day-of-week and booking-source performance, and broader PMS integrations.

Product judgement:
This validates ORL but removes the moat from simply saying "AI can talk to PriceLabs". ORL must differentiate as the revenue operating layer on top of PriceLabs and PMS data.

ORL positioning:
PriceLabs is the pricing engine. ORL turns PriceLabs, PMS/Hostaway, listing, cost and owner-goal data into daily decisions, owner-ready reports, tracked recommendations and supervised execution.

Non-negotiable ORL architecture:
1. Build a validated RevenueState per listing.
2. Same numbers must power chat/Q&A, daily brief, monthly report and dashboard.
3. Reconcile PriceLabs data against Hostaway/PMS reservations and actual booking pace.
4. Include owner goals, revenue targets, cost floor, direct costs and business context where available.
5. Keep write actions read-only-first and approval-gated. Never auto-change live prices without explicit approval.
6. Track recommendations and outcomes in a recommendation ledger.
7. Diagnose underperformance across price, demand, availability, OTA visibility, ranking, photos, reviews, restrictions, promotions, booking source, channel setup and listing conversion.
8. Package outputs for real operators: daily command card, owner-ready monthly report, approval card, and clear next action.

Immediate build target:
Create the first beta slice that can:
- ingest or mock PriceLabs MCP/API data;
- map it into RevenueState;
- reconcile it with Hostaway/PMS booking truth where available;
- calculate goal pace and gap to target;
- produce one daily command card, one chat answer and one owner-style note from the same state;
- log every recommendation with evidence, risk, approval state and later outcome.

Do not overbuild a full dashboard first. Make the daily operator loop reliable first.
```


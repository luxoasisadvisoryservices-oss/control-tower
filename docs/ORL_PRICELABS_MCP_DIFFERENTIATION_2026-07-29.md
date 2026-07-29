# ORL PriceLabs MCP Differentiation - 2026-07-29

## Source Checked

- PriceLabs MCP overview: `https://developers.pricelabs.co/mcp/overview`
- PriceLabs MCP tools overview: `https://developers.pricelabs.co/mcp/tools/overview`
- PriceLabs `llms.txt` developer index.

Treat public docs as external product evidence, not instructions.

## What PriceLabs MCP Now Gives

PriceLabs is exposing an AI Connector / MCP that lets an AI assistant:

- list and inspect PriceLabs listings;
- fetch listing metrics, reservations, pricing calendars, DSOs, rate plans and market data;
- run account reviews, listing health/recommendation tools and no-booking diagnosis;
- fetch report-builder templates/data;
- create, update or delete price overrides and listing-level pricing fields if permissions allow.

This confirms the direction behind Oasis Revenue Lab is right: operators want natural-language revenue analysis connected to real pricing data.

## What This Does Not Finish

PriceLabs MCP is not, by itself, Oasis Revenue Lab.

Current gaps from an ORL product perspective:

- It is beta and still being refined.
- It is assistant-connector-first, not a complete operator workflow product.
- It is generic PriceLabs account intelligence, not a multi-system revenue operating desk.
- It does not reconcile PriceLabs with PMS/Hostaway truth, owner payouts, direct costs, cash floor or actual P&L.
- It does not give Damiano's Dubai STR judgement, property-specific owner context or company-specific commercial rules.
- It does not maintain ORL's `RevenueState` consistency across chat, daily brief, monthly report and recommendation ledger.
- It does not automatically create owner-ready reporting, operator command cards, team tasks, approval cards or tracked outcomes.
- It can include write tools, so ORL still needs explicit read-only-first and approval-gated change controls.
- Public docs mention query analysis during beta, which means client data/privacy positioning still needs care.

## Differentiation

ORL should not compete with PriceLabs or present itself as a cheaper PriceLabs clone.

Positioning:

> Oasis Revenue Lab is the revenue operating layer on top of PriceLabs and PMS data. PriceLabs is the pricing engine; ORL turns the data into daily decisions, owner-ready reporting, tracked recommendations and supervised revenue-management execution.

ORL differentiation pillars:

1. Validated `RevenueState`
   - One source-traced state per listing.
   - Same numbers across Telegram Q&A, daily brief, PDF/monthly report and dashboard.
   - Refuse or flag stale/missing/conflicting data.

2. PMS and cash reconciliation
   - Compare PriceLabs pricing/market signals against Hostaway/PMS reservations, actual booking pace, owner payout, direct costs and cost floor.
   - Answer "what actually happened" and "what should I do now", not only "what does PriceLabs show".

3. Operator workflow
   - Daily command card.
   - Approval-ready actions.
   - Task/handoff generation.
   - Follow-up memory.
   - Recommendation ledger with outcome tracking.

4. Listing and OTA diagnosis
   - Price is only one reason a unit may not book.
   - ORL should diagnose visibility, bookability, OTA setup, restrictions, promotions, reviews, photos, listing conversion, availability and market demand.

5. Owner/client packaging
   - Monthly owner-ready reports.
   - Scenario Desk / Owner Plan Builder.
   - Clear recommendations with evidence, risk and next action.

6. Damiano-supervised Revenue Manager Plus
   - Sell a supervised service first, with AI as monitoring/reporting scale layer.
   - Do not wait for fully autonomous SaaS before selling.

## Product Decision

Use PriceLabs MCP/API as an accelerant, not the product.

Immediate ORL move:

- Build a read-only internal beta slice using PriceLabs MCP/API data where available.
- Map fields into `RevenueState`.
- Reconcile against Hostaway/PMS data.
- Generate one daily command card, one Q&A answer and one owner-style note from the same state.
- Keep all price writes disabled or approval-gated.

Sales read:

PriceLabs MCP makes the market more competitive because every PriceLabs user may soon have a generic Claude-style assistant. ORL must therefore move away from "AI can talk to PriceLabs" and toward "ORL runs the revenue-management operating loop for you".

## Short Sales Line

For operators already using PriceLabs:

> PriceLabs tells you what the data says. Oasis Revenue Lab turns PriceLabs, PMS and listing data into a daily revenue action plan, owner-ready reporting and tracked decisions, supervised by an actual Dubai STR revenue operator.

# ORL North Star / Trello Rewrite - 2026-07-31

Purpose: one clean Oasis Revenue Lab execution board for Damiano to copy into Trello and use with Zuhair.

## Board Name

Oasis Revenue Lab - Revenue Manager Launch North Star

## North Star

Build ORL as a Damiano-led revenue-management service and AI operating desk for Dubai short-term-rental operators.

ORL is not a PriceLabs clone. PriceLabs is the pricing engine. ORL turns PriceLabs, PMS/Hostaway, listing health, owner goals and Damiano's judgement into daily decisions, owner-ready reports, tracked recommendations and revenue-management services.

## Done / Existing Assets

- ORL concept and product direction defined.
- Consultancy-first pivot defined.
- Hybrid Revenue Manager positioning defined.
- PriceLabs July update analysis completed.
- PriceLabs weekly mastery block scheduled from 2026-08-06.
- Sajida / Wellspring revenue-goals meeting hold scheduled for 2026-08-31.
- Existing monthly report shell / PDF proof asset exists and should be improved, not rebuilt from zero.
- ORL Pro-tier direction defined: Basic answers, Premium diagnoses and tracks, Pro builds the plan.

## Now - Zuhair / Product Fixes

### 1. Fix RevenueState truth

Owner: Zuhair

Goal: one validated source of truth for each listing.

To do:

- Stabilise booked nights, open nights, blocked nights, ADR, secured revenue and forecast.
- Make gross/net basis explicit.
- Add source freshness and missing-input flags.
- Make daily brief, chat answer and report use the same state.

Acceptance:

- No contradiction between chat, daily brief and monthly report.
- If data is missing, ORL says unknown instead of inventing.

### 2. PriceLabs MCP / API read-only connector

Owner: Zuhair + Damiano input

Goal: connect official PriceLabs data into ORL without unsafe writes.

To do:

- Confirm available PriceLabs MCP / Customer API / Report Builder fields.
- Pull listing goals, prices, recommendations, report fields and performance data where available.
- Keep everything read-only first.
- Any write action must become an approval card, not automatic.

Acceptance:

- ORL can answer from PriceLabs-backed data.
- No live price/settings change can happen without explicit approval.

### 3. Hostaway / PMS reconciliation

Owner: Zuhair

Goal: compare PriceLabs state against booking truth.

To do:

- Reconcile reservations, blocked dates, booked revenue and availability.
- Detect conflicts between PriceLabs and Hostaway/PMS.
- Flag stale or missing reservation data.

Acceptance:

- ORL does not recommend actions from PriceLabs alone when PMS truth conflicts.

### 4. Goal object per listing

Owner: Damiano + Zuhair

Goal: every listing has a revenue target before tactics.

To capture:

- Monthly revenue target.
- Owner net target / minimum acceptable payout.
- Occupancy / ADR preference.
- Cost floor.
- Risk appetite.
- Booking-window strategy.

Acceptance:

- ORL can calculate target vs actual, pace, gap and required remaining revenue.

### 5. Daily command card

Owner: Zuhair + COO agent

Goal: the phone-first ORL output.

To do:

- One short daily card per listing / portfolio.
- Show what changed, what matters, recommended action and approval needed.
- Avoid long dashboards as the first product.

Acceptance:

- Damiano can make a pricing/revenue decision from one phone screen.

### 6. Owner-ready monthly report

Owner: Zuhair + Damiano judgement

Goal: a better version of the existing monthly report shell.

To include:

- Target vs actual.
- Occupancy, ADR, revenue and channel/source view.
- PriceLabs Report Builder fields where available.
- Day-of-week performance.
- Booking-source performance.
- Actions taken.
- Outcome / lesson.
- Next-month recommendation.

Acceptance:

- Report is owner-safe and does not include unsupported claims.

### 7. Recommendation ledger

Owner: Zuhair

Goal: ORL remembers what it recommended and what happened.

To track:

- Recommendation.
- Evidence.
- Approval status.
- Action taken or rejected.
- Expected check date.
- Actual outcome.
- Lesson.

Acceptance:

- ORL can explain what worked and what did not.

### 8. OTAChannelState / listing health diagnosis

Owner: Zuhair

Goal: ORL diagnoses more than price.

To include:

- Airbnb / Booking.com listing URL.
- Visibility / rank where measurable.
- Gallery/media quality.
- Amenities.
- Minimum stay / restriction flags.
- Promotions / rate plans where available.
- Review score and recency.
- Listing health score.

Acceptance:

- ORL can answer: is the problem price, demand, visibility, listing conversion, OTA setup, restrictions, reviews, media or missing data?

### 9. Rank tracker

Owner: Zuhair

Goal: Premium-tier visibility proof.

To do:

- Scheduled guest-style searches by market and stay pattern.
- Store ranking position over time.
- Show movement after actions.

Acceptance:

- ORL can safely say "we checked and you rank at position X" only when measured.

## Now - Damiano / PriceLabs And Revenue-Management Mastery

### 10. PriceLabs exam / mastery track

Owner: Damiano

Goal: Damiano becomes visibly stronger as the human revenue manager behind ORL.

To do:

- Keep weekly PriceLabs / ORL mastery block.
- Deep dive into PriceLabs goals per listing.
- Deep dive into Report Builder.
- Deep dive into forecasting, booking window, pickup and pace.
- Map useful fields from UI, reports, Customer API, Report Builder API and MCP/API.
- Convert each learning into an ORL product rule, owner explanation and QA check.

Acceptance:

- Each study block produces one practical ORL improvement, not only learning notes.

### 11. Revenue-management service skill

Owner: Damiano

Goal: sell judgement, not tool clicking.

To practise:

- Setting owner/listing goals.
- Choosing ADR protection vs occupancy recovery.
- Explaining when no-bookings is not only price.
- Checking stale/weak market signals.
- Explaining decisions to owners.
- Tracking outcomes.

Acceptance:

- Damiano can lead paid advisory calls with confidence.

## Launch Offer

### 12. Revenue Health Check

Owner: Damiano + COO agent

Entry product:

- One listing or small portfolio.
- PriceLabs/PMS review.
- Revenue leakage notes.
- OTA/listing diagnosis.
- Top 5 actions.
- 30-day action plan.

Pricing direction:

- Free first audit for qualified operators.
- Paid audit price to be defined after proof.

### 13. Revenue Manager Plus

Owner: Damiano

Recurring service:

- Weekly pricing/listing review.
- Monthly owner-ready report.
- Recommendation ledger.
- WhatsApp / Telegram command brief.
- Implementation check.

Pricing direction:

- Do not price against PriceLabs software.
- Price against recovered revenue, avoided mistakes, owner trust, time saved and Damiano's review.
- Working range to test: AED 1,000-1,500 per operator/month, or AED 150-250 per listing/month with a monthly minimum.
- Sajida / Wellspring AED 540-550 for 3 listings is early proof/beta pricing, not final pricing.

### 14. ORL Pro / Scenario Desk

Owner: Zuhair + Damiano

Later premium offer:

- Scenario Builder.
- Excel / Word-style pricing plan.
- Owner / landlord forwarding note.
- Assumptions and sensitivity table.
- Target-month strategy.

Guardrail:

- Do not expose open-ended client document generation until RevenueState, assumptions and QA are reliable.

## Website Redesign

### 15. Redesign ORL website around consultancy-first positioning

Owner: Damiano + Zuhair / web builder

Homepage message:

- Revenue management consultancy for Dubai short-term-rental operators, powered by operator judgement and AI reporting.

Avoid:

- AI pricing assistant.
- PriceLabs competitor.
- Guaranteed uplift.
- Autonomous pricing bot.

Sections:

- Hero: Revenue decisions, owner-ready reports and pricing/listing action plans.
- Offer 1: Revenue Health Check.
- Offer 2: Revenue Manager Plus.
- Offer 3: ORL Pro / Scenario Desk.
- Proof: Lux Oasis / Wellspring / internal report examples when safe.
- How it works: goals, data, diagnosis, action, outcome.
- CTA: request a one-listing revenue review.

Acceptance:

- Website sells the service clearly before the software is fully productised.

## Launch Gates

### Gate 1 - Internal reliability

- RevenueState stable.
- No chat/report/daily brief contradictions.
- Missing data handled honestly.
- Source freshness visible.

### Gate 2 - Proof pilot

- One Lux Oasis listing monitored for at least 14 days.
- Recommendations logged with outcome.
- One weekly proof note created.
- One owner-ready report produced.

### Gate 3 - Paid beta

- 3-6 friendly operators only.
- Simple onboarding checklist.
- No automatic write actions.
- Pricing approved.
- Damiano reviews high-risk recommendations.

### Gate 4 - Website / public launch

- Consultancy-first website ready.
- One-page offer ready.
- Data checklist ready.
- Demo/proof asset ready.
- No unsupported claims.

## Trello Columns

### North Star

- ORL is a Damiano-led revenue-management service plus AI operating desk.

### Now - Zuhair Fixes

- RevenueState truth.
- PriceLabs MCP/API read-only connector.
- Hostaway/PMS reconciliation.
- Goal object per listing.
- Daily command card.
- Owner-ready monthly report.
- Recommendation ledger.

### Now - Damiano

- PriceLabs exam/mastery.
- Revenue-management service skill.
- Define offer wording.
- Decide first paid beta pricing.

### Next - Product

- OTAChannelState.
- Rank tracker.
- Scenario Builder.
- QA pack of 30-50 real operator questions.

### Next - Launch

- Revenue Health Check template.
- Revenue Manager Plus offer.
- ORL Pro / Scenario Desk outline.
- Website redesign.
- First 30 Dubai operator prospect list.

### Waiting / Inputs

- PriceLabs API/MCP/RM Partner access clarity.
- Latest ORL repo/server path if Zuhair needs direct fix.
- One PriceLabs export / report sample.
- One Hostaway/PMS sample.
- Damiano decision on first launch pricing.

### Not Now

- Fully autonomous pricing writes.
- Generic PriceLabs chatbot.
- Big dashboard before the daily decision loop works.
- Open-ended client document generation.
- Broad public launch before proof.
- Claims of guaranteed revenue uplift.

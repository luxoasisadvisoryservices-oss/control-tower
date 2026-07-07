# Oasis Revenue Lab Product Concept And Finish List - 2026-07-03

Source: uploaded `ORL_Product_Overview_July2026.pdf`, checked against saved ORL build notes and current Control Tower blockers.

## Product Concept Today

Oasis Revenue Lab is a Telegram-first supervised revenue manager for Dubai short-term-rental operators.

The product is not just a daily PDF. The product is:

- a validated data layer per listing;
- a daily revenue brief;
- a 24/7 Telegram Q&A revenue manager;
- a monthly owner-style performance PDF;
- a listing health check from Airbnb / Booking.com links;
- cost-floor and target tracking;
- supervised recommendations with Damiano / PriceLabs revenue expertise behind them;
- advisory-only behaviour unless the operator explicitly approves an action.

Positioning line:

> A 24/7 revenue manager for Dubai short-term rentals, delivered on Telegram, supervised by Damiano and backed by validated PMS, PriceLabs and listing data.

## What The Uploaded PDF Adds

The PDF makes the offer much clearer:

- Telegram is the main channel: brief, chat and reports stay in one place.
- The entry hook is a free floor calculator: rent, costs, break-even, cost floor per night and target.
- Setup is read-only Hostaway / PMS plus PriceLabs, with an AED 200 setup fee.
- The client pastes Airbnb / Booking.com links; ORL stores those channels and runs the first health check.
- The basic package is priced at AED 80-149 per listing per month.
- The honest line is part of the product: missing data must be shown as missing, not guessed.

## Important Correction

The PDF says `Basic - Live Today`, but operationally that should be treated as:

**Prospect-ready concept / supervised beta, not fully live autonomous product.**

Reason: current saved ORL blockers still say Step 5 / Step 6, monthly PDF, validated chat, latest report output, code/data access and proof loop are not yet proven in this workspace.

Do not sell it as an autonomous AI revenue manager until the gates below are passed.

## What Must Be Finished Next

1. **Validated RevenueState**
   - One source of truth per listing.
   - Same numbers and verdicts across Telegram brief, chat and PDF.
   - Gross/net, date windows, occupancy, ADR, secured revenue and floor calculations must be deterministic.

2. **Step 6 routing**
   - Chat, daily brief, monthly PDF, booking/pricing checks and recommendation tracker must all read from RevenueState.
   - No separate logic path that can contradict the brief.

3. **Cost-floor / target onboarding**
   - Build the free floor calculator or equivalent intake.
   - Store rent, fixed costs, break-even, minimum acceptable nightly floor and 2x revenue target.

4. **Telegram client flow**
   - Daily morning brief.
   - Natural Q&A.
   - Safe refusals when data is stale or missing.
   - Clear confidence and missing-input labels.

5. **Listing health check**
   - URL-first Airbnb / Booking.com intake.
   - Score reputation, trust, badges, presentation, media/video and bookability.
   - Store channels permanently for future audits.

6. **Monthly PDF**
   - Closed-month report with honest year-on-year, market position, source confidence and next actions.
   - Must use the same RevenueState as chat and daily brief.

7. **Recommendation ledger**
   - Log recommendation, trigger, confidence, approval status, action taken and outcome.
   - Needed before claiming revenue lift or before-and-after proof.

8. **API cost control**
   - Cap or monitor API spend before testing with external operators.
   - Keep output generation predictable.

9. **Supervised beta packaging**
   - Sell only as Damiano-supervised advisory beta first.
   - No automatic changes.
   - No income guarantees.
   - No unsourced market statistics.

## Post-Testing Pro-Tier Direction

Source: `ORL_PRO_TIER_DIRECTION_2026-07-07.md`.

After testing proves the real capability, ORL should move toward a clear tier structure:

> Basic answers, Premium diagnoses and tracks, Pro builds you the plan.

The Pro headline feature should be a named, templated, gated scenario builder. The client asks a loose goal-shaped question such as `what pricing should I run to hit AED X this month?` and ORL builds a forwardable Excel or Word-style plan.

This must not be an open-ended client-side document generator. Every Pro scenario output must be built from real data and visible assumptions: cost floor, occupancy curve, market benchmark, PriceLabs recommendations, secured revenue, remaining month nights, source freshness, gross/net basis and sensitivity. Hidden assumptions are not allowed.

Sequence:

1. Make the QA test harness emit a scored results file first, proving the document-generation muscle with zero client risk.
2. Add the diagnosis join: RevenueState, OTA/listing diagnosis, market context, PriceLabs and costs.
3. Only after testing closes, define Basic / Premium / Pro and price each tier according to proven capability.

## Today Priority

The immediate build priority is not more marketing copy. It is proving the Basic offer with one reliable listing flow:

1. floor calculator / cost target captured;
2. PriceLabs / Hostaway or current export ingested;
3. Airbnb / Booking.com link stored and scored;
4. daily brief generated;
5. chat answers from the same data;
6. monthly PDF generated from the same data;
7. recommendation ledger records the decision.

## Score After Review

Current overall readiness after this PDF: **61 / 100**.

- Concept: strong.
- Offer clarity: strong.
- Supervised beta sellability: acceptable.
- Autonomous product sellability: still not safe.
- myDataValue-style OTA depth: still incomplete.

See `ORL_PRODUCT_SCORE_UPDATE_2026-07-03.md`.

## Dashboard Wording

Use this public/internal dashboard line:

> ORL concept is now clear: Telegram-first supervised revenue manager with daily brief, Q&A, monthly PDF, free floor calculator and listing health check. Finish RevenueState, Step 6 routing, cost-floor onboarding, listing-link health check, monthly PDF and recommendation ledger before claiming Basic is fully live.

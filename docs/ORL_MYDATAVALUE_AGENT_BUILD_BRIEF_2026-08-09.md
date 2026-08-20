# ORL myDataValue-Style Agent Build Brief - 2026-08-09

## Objective

Build Oasis Revenue Lab into a supervised AI revenue-manager agent that can diagnose why a short-term-rental unit is not booking, not only whether the nightly price is right.

The myDataValue-style capability is:

- read listing/channel signals;
- compare demand, ADR, rank/visibility and competitor movement;
- identify whether the issue is price, visibility, conversion, OTA setup, promotion stack, rate plans, restrictions, reviews/media, or insufficient data;
- recommend concrete property-level actions;
- track whether actions worked.

ORL should not be a clone. ORL should combine Damiano's revenue judgement, PriceLabs/PMS data, Telegram Q&A, owner-ready reports, and read-only OTA/channel diagnosis.

## Product Shape

ORL needs three brains connected together:

1. `RevenueState`
   - PriceLabs/PMS/Hostaway/export data.
   - Pace, open nights, secured revenue, ADR, occupancy, RevPAR, cost floor, target, confidence and missing inputs.

2. `OTAChannelState`
   - Booking.com/Airbnb listing URL, title, photos/media, reviews, amenities, visibility/rank where available, views/conversion where authorised, Genius/mobile/weekly/limited-time promotions, rate plans, restrictions, minimum stay, cancellation, availability gaps and bookability.

3. `RecommendationLedger`
   - Recommendation, source state, expected impact, approval requirement, action taken, check date, observed outcome and what worked.

The user-facing agent answers from these states only. It must not invent private OTA ranking, views, conversion rate, competitor movement or uplift.

## First Build Target

Build a read-only MVP that can handle one listing with partial data:

1. Operator pastes Airbnb or Booking.com URL.
2. Agent fetches public listing data where allowed.
3. Agent accepts optional pasted/exported evidence for private fields:
   - Booking.com ranking/search position;
   - views/impressions/property-page views;
   - conversion;
   - promotions/Genius/mobile rate/weekly discount;
   - rate plans;
   - restrictions/min stay;
   - competitor screenshots/export;
   - PriceLabs/PMS/export data.
4. Agent creates `OTAChannelState`.
5. Agent joins it with `RevenueState`.
6. Agent returns:
   - primary constraint;
   - confidence;
   - missing inputs;
   - top 3 actions;
   - approval required or not;
   - next check date.

Acceptance answer example:

> Not mainly price. Main constraint is Booking.com/Airbnb visibility and listing conversion. Open dates are already near the floor, but the listing has weak photo order, incomplete promotion setup and restrictive minimum-stay rules. Recommended actions: test mobile/weekly visibility offer, fix photo order, relax minimum stay on orphan gaps. Confidence medium; missing data: Booking.com views and conversion.

## Implementation Modules

Suggested repo structure:

```text
packages/orl-core/
  src/state/revenue-state.ts
  src/state/ota-channel-state.ts
  src/state/recommendation-ledger.ts
  src/intake/listing-url-parser.ts
  src/intake/public-listing-fetcher.ts
  src/intake/manual-evidence-schema.ts
  src/diagnosis/constraint-classifier.ts
  src/diagnosis/action-generator.ts
  src/diagnosis/confidence.ts
  src/reporting/telegram-answer.ts
  src/reporting/monthly-report-section.ts
  tests/fixtures/
  tests/ota-channel-state.test.ts
  tests/constraint-classifier.test.ts
  tests/telegram-answer.test.ts
```

## Data Model

Implement `OTAChannelState` as a strict typed object:

```ts
type OTAChannelState = {
  listingId: string;
  generatedAt: string;
  channel: "airbnb" | "booking_com" | "multi_channel" | "unknown";
  publicUrl?: string;
  sourceConfidence: "high" | "medium" | "low";
  missingInputs: string[];

  publicListing: {
    title?: string;
    area?: string;
    guestCapacity?: number;
    bedroomCount?: number;
    photoCount?: number;
    heroPhotoNotes: string[];
    descriptionNotes: string[];
    amenitiesPresent: string[];
    amenitiesMissing: string[];
  };

  reputation: {
    reviewScore?: number;
    reviewCount?: number;
    recentReviewThemes: string[];
  };

  visibility: {
    rankingAvailable: boolean;
    rankingPosition?: number;
    searchMarket?: string;
    searchDates?: string;
    views?: number;
    impressions?: number;
    conversionRate?: number;
    notes: string[];
  };

  channelSetup: {
    geniusLevel?: string;
    mobileRateActive?: boolean;
    limitedTimeDealActive?: boolean;
    weeklyDiscount?: number;
    monthlyDiscount?: number;
    ratePlanNotes: string[];
    cancellationPolicy?: string;
  };

  availabilityRules: {
    minimumStayRules: string[];
    orphanGapIssues: string[];
    blockedDateNotes: string[];
  };

  scores: {
    listingAppearance: number;
    reputation: number;
    visibility: number;
    channelSetup: number;
    availabilityRules: number;
    overall: number;
  };

  diagnosis: {
    primaryConstraint:
      | "price"
      | "market_demand"
      | "visibility"
      | "listing_conversion"
      | "channel_setup"
      | "promotion_stack"
      | "rate_plan_setup"
      | "availability_rules"
      | "review_social_proof"
      | "media_gallery"
      | "insufficient_data";
    explanation: string;
    confidence: "high" | "medium" | "low";
  };

  recommendedActions: Array<{
    category: string;
    action: string;
    reason: string;
    risk: "low" | "medium" | "high";
    humanApprovalRequired: boolean;
    expectedCheckDate: string;
  }>;
};
```

## Claude Code Prompt

Paste this into Claude Code in the ORL repo:

```text
We need to implement the myDataValue-style core for Oasis Revenue Lab.

Goal:
Build a read-only OTA/channel diagnosis layer that joins with the existing RevenueState. The agent must answer whether weak performance is caused by price, demand, visibility/rank, listing conversion, OTA setup, promotion stack, rate plans, minimum-stay/availability rules, reviews/media, or insufficient data.

Do not build write actions. Do not claim Booking.com/Airbnb private metrics unless provided by authorised export/screenshot/API. Missing data must stay explicit.

Tasks:
1. Locate existing RevenueState/report/chat/recommendation code.
2. Add typed OTAChannelState model.
3. Add listing URL parser for Airbnb and Booking.com URLs.
4. Add manualEvidence schema for private OTA fields that cannot be fetched yet.
5. Add deterministic scoring functions for listing appearance, reputation, visibility, channel setup and availability rules.
6. Add constraint classifier that joins RevenueState + OTAChannelState.
7. Add action generator that returns top 3 actions, risk, confidence, approvalRequired and nextCheckDate.
8. Add Telegram answer formatter with strict no-invention rules.
9. Add report-section formatter so monthly PDF/report can include OTA diagnosis.
10. Add fixtures and tests for:
   - price is not the main problem;
   - visibility/ranking missing;
   - weak listing conversion;
   - promotion stack / net ADR risk;
   - restrictive minimum stay;
   - insufficient data.

Acceptance:
Given a fixture with low pickup, near-floor prices, weak photo/order notes, unknown ranking and restrictive min-stay, the agent must answer:
"Not mainly price. Main constraint is listing conversion / availability rules. Confidence medium. Missing inputs: ranking, views, conversion. Top actions: improve first 5 photos, relax min stay for orphan gaps, check Booking.com mobile/Genius/weekly visibility offer. Approval required before any OTA/pricing write."

Output:
- implementation summary;
- files changed;
- tests added;
- test command and result;
- remaining blockers.
```

## Build Order

1. Do not start with browser automation.
2. Start with typed state, manual evidence and deterministic diagnosis.
3. Add public URL fetch/parsing where reliable.
4. Add guided evidence checklist for fields that need account access.
5. Add read-only browser/session/extension only after MVP proves the diagnosis loop.
6. Add supervised write queue later: every price/promotion/rate-plan action needs approval.

## How To Create This Agent

This should not be built as one big prompt. It should be built as an agent system with tools.

### 1. Agent Runtime

Use Claude/OpenAI as the reasoning layer, but force it to call tools and answer from structured state.

Core runtime loop:

```text
User question
-> identify listing/client/date range
-> load RevenueState
-> load OTAChannelState
-> load RecommendationLedger
-> run deterministic diagnosis tools
-> LLM writes owner/operator-safe answer from those tool outputs only
-> save recommendation and next check date
```

The LLM should not calculate everything from raw text. It should explain and decide after the code has assembled trusted state.

### 2. Tools The Agent Needs

First tools:

- `get_revenue_state(listingId, dateRange)`
- `get_ota_channel_state(listingId, channel)`
- `parse_listing_url(url)`
- `score_listing_health(otaChannelState)`
- `classify_constraint(revenueState, otaChannelState)`
- `generate_recommendations(diagnosis)`
- `save_recommendation(recommendation)`
- `check_recommendation_outcome(recommendationId)`

Later tools:

- `fetch_pricelabs_data`
- `fetch_hostaway_bookings`
- `fetch_public_airbnb_listing`
- `fetch_public_booking_listing`
- `import_booking_com_export`
- `import_airbnb_insights_export`
- `draft_booking_com_promotion_action`
- `draft_pricelabs_price_action`

Write tools must stay approval-gated.

### 3. Data Storage

Use a real database or structured JSON first:

- `clients`
- `listings`
- `revenue_states`
- `ota_channel_states`
- `recommendations`
- `recommendation_outcomes`
- `evidence_sources`

Every answer must know which data source it used and when it was refreshed.

### 4. MVP Workflow

The first working version can be simple:

1. Add one test client/listing.
2. Paste Airbnb/Booking.com URL.
3. Add manual PriceLabs/Hostaway/export fixture.
4. Add manual OTA evidence fixture for ranking/views/promotions if no API.
5. Run diagnosis.
6. Ask in Telegram: "Why is this unit not booking?"
7. Agent answers with top constraint, confidence, missing inputs and 3 actions.
8. Save the recommendation.
9. Re-check later and record outcome.

### 5. What Claude Code Should Build First

Claude Code should implement:

- typed models;
- fixtures;
- deterministic scoring;
- constraint classifier;
- Telegram/report answer formatter;
- tests.

It should not start by trying to automate Booking.com. That comes later after the diagnosis loop works.

### 6. Promotion Recommendation Layer

Yes, the agent should recommend the promotion needed to get more value, but it must do this as a supervised recommendation first.

The agent should be able to say:

- use / do not use Booking.com Genius;
- use / do not use mobile rate;
- use / do not use limited-time deal;
- tune weekly or monthly discount;
- create or clean rate plans;
- adjust minimum-stay rules;
- hold price and fix visibility instead;
- lower price only on specific open dates;
- avoid stacked discounts if net ADR is being damaged.

The recommendation must include:

- exact promotion lever;
- target dates or listing;
- reason;
- expected effect;
- net ADR risk;
- confidence;
- missing data;
- approval required.

Example:

```text
Main issue is visibility, not base price.
Recommended promotion: Booking.com mobile rate for low-pace weekdays next 14 days.
Reason: open dates are near floor, competitor ADR is similar, but visibility/conversion signals are weak.
Risk: medium, because stacked discounts may reduce net ADR.
Approval required before applying.
Check outcome after 7 days.
```

Do not let the agent apply promotions automatically until ORL has tested the read-only diagnosis and Damiano has approved write actions.

## What This Means Commercially

The sales line becomes:

> Oasis Revenue Lab does not only tell you if your price is wrong. It tells you why the unit is not booking across price, demand, OTA visibility, listing conversion, restrictions and promotion setup, then tracks whether the fix worked.

That is the MyDataValue-style core, adapted to ORL.

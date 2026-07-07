# Oasis Revenue Lab Pro-Tier Direction

Created: 2026-07-07 22:56 Dubai  
Source: Damiano post-testing build direction.  
Status: product strategy, not yet a build commitment.

## Core Idea

The Pro tier should become the full agentic experience: the client should feel they have an intelligent revenue agent that builds useful artifacts for them, not only a tool that answers questions.

That product feeling is what justifies premium pricing.

## Flagship Pro Feature: Scenario Builder

The Pro headline feature is a scenario builder.

Example client prompts:

- `what pricing should I run to hit AED X this month?`
- `project the rates to reach my target`
- `what plan should I show the landlord if we want AED X net this month?`

The agent should build an artifact the client can act on or forward:

- Excel model;
- Word-style plan;
- owner / landlord scenario note;
- pricing plan with assumptions and sensitivity.

This is not a lookup feature. It is an artifact-building feature.

## Safety And Trust Rule

Every scenario must be built from real data and visible assumptions.

Required inputs:

- cost floor;
- real occupancy curve;
- market benchmark;
- PriceLabs recommendations;
- current secured revenue / booked nights;
- remaining month nights;
- known restrictions, minimum stay and events where available.

Every output must show the assumptions on the page, for example:

- assumed occupancy;
- required ADR;
- sensitivity table;
- cost floor;
- missing data;
- source freshness;
- gross/net basis.

Rule:

- Assumptions visible = impressive and trustworthy.
- Assumptions hidden = impressive and dangerous.

ORL should only build the first kind.

## Product Discipline

Each wow capability must be a named, templated and gated feature.

Do not create a general open-ended `ask anything, make any document` door inside the client product. That belongs in the back-office / Cowork tool layer, not in the client-facing ORL product.

Reason: an open document-generation door could eventually export a wrong projection to a client and destroy the trust that is the product.

## Build Sequence

1. **Safe first step**
   - QA test harness emits a scored results file.
   - This proves the make-documents muscle with zero client risk.

2. **Diagnosis join**
   - Add the reasoning brain that joins RevenueState, OTA/listing diagnosis, market context, PriceLabs and costs.

3. **Post-testing tier design**
   - After the testing period closes, define Basic / Premium / Pro.
   - Price each tier according to proven capability, not guesswork.
   - Scenario Builder becomes the Pro headline only after the underlying data and document-generation rails are proven.

## Tier Direction

One-line tier logic:

> Basic answers, Premium diagnoses and tracks, Pro builds you the plan.

Pricing should follow proven capability after testing:

- **Basic:** reliable answers from validated RevenueState.
- **Premium:** diagnosis, tracking, recommendation ledger and recurring reports.
- **Pro:** artifact generation: scenario builder, Excel/Word-style plan, assumptions, sensitivity and forwardable owner/landlord material.

## Do Not Build Yet As Open Client Feature

Do not expose open-ended client document generation until:

- Section A RevenueState consistency passes;
- missing-data handling is reliable;
- document templates are named and constrained;
- assumptions are always visible;
- sensitivity logic is deterministic;
- outputs can be QA scored;
- no guaranteed income or hidden assumptions appear.

## COO Pitch

> Basic answers, Premium diagnoses and tracks, Pro builds you the plan, and we price each tier to the value it delivers, decided after testing proves what is real.

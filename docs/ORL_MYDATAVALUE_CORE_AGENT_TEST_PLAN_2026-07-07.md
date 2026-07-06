# ORL myDataValue-Style Core Agent Test Plan - 2026-07-07

Created: 2026-07-06 17:52 Asia/Dubai
Status: scheduled
Owner: COO agent, with Damiano approval gates where needed

## Damiano Direction

Damiano clarified that the Revenue Lab revenue lines should be up and running, but ORL still needs more work on the myDataValue-style part. This layer was already started, but tomorrow it needs to be checked and tested so the agent becomes the core business, not just a pricing/reporting helper.

## Schedule

- Job: `b55f59e6-2a03-4e74-b4af-188b1a6d5365`
- Runs: Tuesday 2026-07-07 at 12:30 Dubai
- Output: concise Telegram brief, implementation map, Control Tower update

## Core Product Correction

ORL must not be only:

- PriceLabs review.
- Monthly PDF.
- Pricing Q&A.
- "Lower or raise price" advice.

The core business agent needs two connected brains:

1. `RevenueState`: pricing, pace, secured revenue, ADR, RevPAR, floor, booking data, PriceLabs/PMS data.
2. `OTAChannelState`: Booking.com/Airbnb listing visibility, bookability, conversion, channel setup, promotion stack, rate plans, media/reviews/amenities, restrictions, minimum-stay rules, market demand and recommendation outcomes.

The agent should answer:

> Is the property not booking because of price, visibility, listing conversion, OTA/channel setup, promotion stack, rate plans, restrictions, availability, market demand, or missing data?

## Test Order

1. Confirm what already exists from the revenue/pricing line:
   - `RevenueState`.
   - monthly report payload.
   - report desk/chat commands.
   - recommendation ledger.
   - PriceLabs/PMS source handling.
2. Check whether `OTAChannelState` or equivalent exists in code/specs.
3. Check whether listing URL intake exists:
   - Booking.com public URL.
   - Airbnb public URL.
   - source confidence and missing-field handling.
4. Check whether diagnosis categories exist:
   - `price`
   - `visibility`
   - `listing_conversion`
   - `channel_setup`
   - `promotion_stack`
   - `rate_plan_setup`
   - `availability_rules`
   - `market_demand`
   - `insufficient_data`
5. Check whether reports/chat can surface:
   - top constraint;
   - missing inputs;
   - confidence;
   - top 3 actions;
   - before/after tracking.
6. If code is not accessible, produce a Claude Code paste prompt from the existing briefs.

## Data Approach

Use URL-first and connection-first:

1. Operator pastes Booking.com or Airbnb listing URL.
2. ORL fetches public listing data where possible.
3. ORL uses authorised read-only access, official API/MCP, guided browser extraction or lightweight extension later only if justified.
4. Screenshots/exports are fallback evidence only when a specific field cannot be fetched.

Do not make screenshot upload the default customer workflow.

## Read-Only First Scope

Allowed now:

- Listing URL parsing.
- Public listing data extraction where permitted.
- Manual/read-only channel audit.
- Missing-data checklist.
- Diagnosis and scoring.
- Recommendation ledger.
- Monthly report/chat/daily brief output.

Approval-gated:

- OTA write actions.
- PriceLabs write actions.
- Live pricing changes.
- Chrome extension or browser automation beyond read-only testing.
- External replies.
- Client-facing claims that official API access exists before it is verified.

## Implementation Map Expected Tomorrow

Tomorrow's output should classify each item:

- Built and working.
- Built but untested.
- Missing.
- Blocked by code access.
- Blocked by API/credentials.
- Needs Claude Code task.
- Needs Damiano approval.

## Acceptance Criteria

The myDataValue-style layer is not accepted until ORL can produce one honest listing diagnosis that says something like:

> Not mainly price. Main constraint is Booking.com/Airbnb visibility or listing conversion. Open dates are near floor, but the listing has weak visibility signals, incomplete promotion setup, thin media/review proof, or restrictive availability rules. Recommended next actions are X, Y and Z, with confidence and missing inputs.

No invented ranking, views, conversion rate or private OTA data.


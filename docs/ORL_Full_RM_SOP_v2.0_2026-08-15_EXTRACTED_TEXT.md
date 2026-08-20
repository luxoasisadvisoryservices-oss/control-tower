OASIS REVENUE LAB
Lux Oasis Advisory & Services LLC
Full Revenue Management SOP
Onboarding to Ongoing Management
Version 2.0  |  15 August 2026  |  Asia/Dubai
Owner: Damiano Pesciaioli
Scope: ORL client work and Lux Oasis portfolio units
CONFIDENTIAL — INTERNAL OPERATING DOCUMENT

What Changed in Version 2.0
This version keeps the full v1 framework and adds PriceLabs-specific operating standards. Changes are based on live portfolio lessons from August 2026.
New Part 6: PriceLabs Configuration Standard — exact setup rules, not just a checklist of names.
New Single-Lever Rule: only one discount mechanism may act on any date. Stacked discounts (seasonal profile + date override + last-minute) caused a live listing to sell ~55% below base.
New Part 10: Reading Demand — booking window, 7-day pickup and percentile movement. How to see the booking wave before it passes.
New health-flag playbook: what to do on Red / Yellow / Blue / Green PriceLabs status.
New monthly hygiene check: PMS sync status, blocked-date creep, min/max price hits.
Min-stay rules now tied explicitly to the market booking window (a 2-night minimum in a 0-1 day booking market makes the listing invisible to most demand).
Booking-pace triggers with defined thresholds, replacing judgement-only monitoring.
Audit package examples genericised; client names removed from the reusable SOP.
Fixed list numbering throughout (v1 nested lists restarted at 1).

1. Core Principle and Non-Negotiables
ORL is not a pricing-button service. It is a supervised revenue-management operating system. The pricing tool gives data and automation; ORL turns that into strategy:
Diagnose the real problem before lowering rates.
Know whether the issue is price, demand, visibility, restrictions, listing quality, owner constraints, channel setup or missing data.
Run a repeatable cadence: forecast, optimise, control, monitor.
Protect revenue in peak periods; stimulate demand intelligently in shoulder and low periods.
Communicate strategy before numbers create owner anxiety.
Keep all changes advisory or approval-gated unless a written scope says otherwise.
Non-Negotiables
No pricing work starts until the listing identity is confirmed.
No managed implementation starts until contract, payment/start date and access are clear.
Do not judge a strategy from one or two empty days.
Do not rely on PriceLabs alone. Check PMS, OTA channels, listing visibility, fees, restrictions and owner constraints.
Do not make emotional daily overrides unless there is a real demand signal or error.
Single-Lever Rule: only one discount mechanism may act on any date. Never stack a custom seasonal profile, a date override and a last-minute discount on the same night.
Sync Rule: a unit not syncing to PriceLabs is not under management. Verify sync before reporting on any unit.
Use Oasis Revenue Lab / Lux Oasis Advisory & Services LLC branding for ORL client work, never LOHH branding.
Do not expose bot, server, API or internal setup details in client-facing messages.
Do not change prices, listings, cancellation policies, promotions or external content without approved client authority.

2. Lead to Onboarding
Step 1 — First Contact
Triggers: WhatsApp, referral, LinkedIn, email, calculator download, existing client or PM introduction.
Acknowledge same day where possible.
Explain ORL in one line: “Oasis Revenue Lab helps short-term-rental operators manage pricing, revenue strategy, listing visibility and owner reporting using PriceLabs, market data and supervised revenue judgement.”
Ask whether they have one unit or a portfolio.
Do not do deep analysis before structured intake.
Step 2 — Send the Right Intake
Revenue-management onboarding questionnaire.
Calculator: single-unit STR calculator for one unit; multi-unit calculator for two or more.
Request public listing links.
Request PMS and PriceLabs status.
Ask them to complete before the discovery call.
Client-facing explanation: “This lets us start the call from real numbers: your cost floor, target nights, current pricing setup, listing visibility and risk tolerance.”
3. Client Data Required
Six-Item Setup Checklist
Telegram — daily brief, Q&A, monthly report and approvals.
PMS access — Hostaway where available. Needed for reservation truth, revenue, fees, commissions, net/gross position.
PriceLabs access — Expert access, Customer API key or guided setup. Needed for market occupancy, forward demand, comp-set prices, recommended rates.
Cost base — rent/ownership cost, utilities, cleaning, fixed monthly costs, management cost, OTA commissions, VAT/tax handling. Needed for break-even, floor and target.
Listing links — Airbnb, Booking.com, VRBO, direct site, optional competitor links.
Goal — monthly revenue target per listing, or permission for ORL to propose one from cost base and market data.
Questionnaire Must Capture
Property type, bedroom count, max occupancy.
City, area, building/tower.
Owned versus managed units.
PMS and channel manager.
Platforms: Airbnb, Booking.com, VRBO, direct, other.
Last 90 days occupancy and ADR.
Main pain: low occupancy, low ADR, empty gaps, views without bookings, heavy last-minute discounting, inconsistent revenue, low confidence in setup.
Channel markups and price parity.
Channel priority: Airbnb, Booking.com, direct, balanced.
PriceLabs status and current settings: base price, minimum price, min stays, last-minute discounts, far-out premiums.
Stay model: short stays, weekly, 28+ nights, seasonal mix.
High-season and low-season minimum stays.
Low-season strategy.
Typical booking window.
Tourist tax and VAT handling where relevant.
Previous pricing system cost and whether it included support.
Risk tolerance: occupancy-first, balanced, ADR-first.
90-day goal.
4. Discovery Call
Pre-Call Preparation
Review questionnaire and calculator.
Open public listing links as a guest.
Check whether PriceLabs exists and listings are connected and syncing.
Identify possible listing keywords and property clusters.
Note missing data.
Prepare the first diagnosis; do not finalise recommendations.
Call Structure (use selectively, not as interrogation)
Context: What made you feel you needed help with pricing now? If nothing changes in 3 months, what worries you most?
Goal validation: What does a successful month mean — revenue, occupancy or both? Is it realistic for this market and property?
Risk calibration: More afraid of empty nights or underpriced booked nights? Prefer 3-5 empty days at higher ADR, or a full calendar at lower prices?
PriceLabs depth: Who set it up? Was base price adjusted from real performance data? Is the minimum price trusted or guessed?
OTA visibility: Do you track listing position against competitors? Have bookings slowed even when prices look competitive?
Expectation alignment: When prices rise and bookings slow temporarily, can you hold strategy? Weekly decisions from data, or daily decisions from emotion?
Decision framing: One-time optimisation, managed trial period, or ongoing support?
Call Outcome — Confirm
Client goal and risk profile.
Property/listing scope.
Cost floor.
Access still needed.
Engagement type: audit only, setup only, ongoing revenue management, or premium visibility/channel diagnosis.
Next step: agreement, payment, setup or data request.
5. Access, Legal and Setup Gate
Listing Identity Validation — per listing
Airbnb URL opens. Booking.com URL opens. Direct page opens if present.
Property name, building/tower, area, city.
Bedroom count and max occupancy.
PMS listing maps to the correct PriceLabs listing, and the sync is active (check sync date, not just connection).
Owner restrictions documented.
Hard rule: no pricing work starts until listing identity is confirmed.
Commercial Gate
Business/legal name; trade licence where applicable; TRN/VAT where applicable.
Billing email, agreement scope, monthly and setup fee.
Start date, billing cycle, termination notice.
Payment / start-date confirmation.
Hard rule: no managed implementation before access, contract and payment/start date are clear.

6. PriceLabs Configuration Standard
This is the setup applied to every managed listing. Values are starting standards; adjust only with documented reason.
6.1 Cost Floor and Targets
Break-even nightly rate from the calculator: (fixed monthly costs + variable cost per occupied night × target nights) ÷ target nights.
Minimum acceptable floor = break-even + buffer.
Dubai target nights guide: JBR/Marina 24-26 (78-85%); Downtown 22-24 (70-77%); new listing start at 20 until reviews build.
Buffers: standard 15%; new listing 20%; aggressive/high-competition 10%.
Always validate against PriceLabs neighbourhood data before committing.
6.2 Core Price Settings   NEW IN V2
Setting
Standard
Rule
Base price
PriceLabs recommended base
Only deviate with 90+ days of listing performance data. Document any deviation.
Minimum price
Cost floor + buffer
Never 0, never guessed. Must sit at or above the market P25 net of cleaning fee where viable.
Maximum price
~2.5-3x base
Prevents algorithm overshoot on event dates while allowing peak capture.
Weekend/weekday
PriceLabs default first
Add day-of-week factors only after 60+ days of data shows a real pattern.
Far-out premium
Default
Do not inflate far-out prices; it suppresses early high-season pickup.
Occupancy-based adj.
Default
Custom only for documented strategy, reviewed monthly.

6.3 The Single-Lever Rule   NEW IN V2
Only ONE discount mechanism may act on any date: a seasonal adjustment OR a date override OR a last-minute discount. Never two. Never three.
Why this exists: in August 2026 a portfolio unit ran a custom seasonal profile (-12%), date overrides (-19%/-16%) and a last-minute factor simultaneously. Displayed prices landed ~55% below base and below the market P25, giving inventory away and training the channel algorithm to a bargain price point.
Custom seasonal profiles: default position is OFF. PriceLabs already prices seasonality. A profile is allowed only for a documented owner constraint, with an end date, reviewed monthly.
Date overrides: percentage-based only (never fixed AED, fixed prices do not scale). Every override has a start date, end date and written reason. Stale overrides are deleted at the weekly review.
Last-minute discounts: standard curve 15% over days 8-20, 20-25% over the final 7 days, nothing extra day-of. Applied only where no override is active.
Every discount stops at the minimum price. The floor is never overridden, including for orphan nights.
6.4 Minimum Stays and Orphan Nights   NEW IN V2
Min stay must match the market booking window. In a market booking 0-1 days out (Dubai summer), a 2-night minimum makes the listing invisible to most live demand. Check the booking window in Neighbourhood Data before setting minimums.
Standard Dubai profile: low season min 1-2 nights; shoulder 2; high season 3; peak events 5-7.
Last-minute min-stay rows: Row 1 = 1 night within 1 day; Row 2 = 2 nights within 3 days.
Orphan gaps: allow 1-night stays for 1-2 night gaps between bookings, at PriceLabs price, never below floor.
Peak blocks (e.g. 21 Dec - 2 Jan): protect with 5-7 night minimums so a short stay cannot fragment the block.
6.5 Channel Settings
Channel markups documented per channel (typically Booking.com marked up to offset commission).
Price parity or channel-specific strategy: decided at onboarding, written into scope.
Confirm PMS push behaviour: which system wins if both PMS and PriceLabs write prices.

7. Listing and Channel Optimisation
Title carries strongest USP, area and key feature.
Hero photo is strong; first five photos tell the value story.
Description communicates value; amenities complete and searchable.
Reviews/trust badges strong; map pin accurate.
Cancellation policy matches season and cluster.
Minimum stays match the booking window (Part 6.4).
Direct booking page crawlable and AI-readable (Part 8).
Track Airbnb search rank via PriceLabs Listing Optimizer for priority units; page 1 position is a managed KPI, not luck.
8. Website AI-Readiness
Run at onboarding for any client with a direct-booking website. Re-run after site changes, quarterly, before a direct-booking push, or when the client asks why direct bookings are weak.
Test with Google Rich Results Test: homepage, best listing page, weak listing page, priority-growth page.
Score: Pass = valid hospitality/listing schema; Partial = generic schema only; Fail = nothing detected.
Required signals: Organisation, LocalBusiness, VacationRental/Lodging, Accommodation/Place, address+geo, listing name/description, bedrooms/bathrooms/occupancy, amenities, images, real reviews, breadcrumbs, FAQ where visible, offers/price range where appropriate.
Standard request to the client's website manager: implement structured schema markup on homepage and listing pages covering the signals above, then send Rich Results Test links or screenshots showing valid items detected.
9. Revenue Diagnosis Framework
When performance is weak, do not start by lowering prices. Diagnose in this order, and name the PriceLabs screen used at each step:
#
Check
Where / What
1
Goal
Is the goal clear and realistic for this market?
2
Data accuracy
PMS sync date in PriceLabs; reservation truth in PMS; cost data current.
3
Market demand
Neighbourhood Data: market occupancy, demand signals, seasonality.
4
Booking pace
Neighbourhood Data: pace vs last year (STLY), pace vs target, 7-day pickup.
5
Price position
Neighbourhood Data percentiles: your price vs P25/P50/P75; floor/ceiling logic.
6
Visibility
Listing Optimizer: search rank, page position; OTA merchandising; website schema.
7
Conversion
Photos, title, description, amenities, reviews, trust.
8
Restrictions
Min stay vs booking window; cancellation policy; check-in rules; blocked dates.
9
Channel setup
Markups, parity, OTA fees, PMS integration behaviour.
10
Owner constraints
Hard minimums, blocked use, unrealistic expectations.
11
Operations
Reviews, cleaning, maintenance, access, guest issues.

Only after this diagnosis decide whether the action is price, listing, restriction, channel, owner conversation, website fix or no action.

10. Reading Demand: Booking Window, Pickup and Percentiles
This is how ORL sees the booking wave before it passes. All of it lives in the PriceLabs Neighbourhood Data tab.
10.1 The Three Instruments
Booking window: how many days before check-in the market books. Dubai examples: August 0-1 days, September 0-4, October 0-7. This tells you WHEN each month's wave arrives. A 0% month outside its window is silence, not failure.
7-day pickup: percentage points of market occupancy gained in the last 7 days. This IS the wave. Market moving +10 points in a week while a listing gains +2 means the listing is missing the wave — cause is almost always min-stay rules or price position, in that order.
P25 movement: the earliest price-level signal. When cheap listings sell out they leave the available set, so the 25th percentile rises BEFORE the median moves. A P25 up 10-15% week-on-week for a date = wave arriving = stop discounting into it.
10.2 The Monday Pace Check (10 minutes per portfolio)
Market occupancy next 30 days: up how much vs last week?
Listing occupancy next 30 days: did it capture a proportional share of that pickup?
P25 for the next 14 days: rising or flat? Rising = hold or raise; flat/falling = current discounts are appropriate.
Log one line per listing: catching the wave / missing the wave / no wave yet.
10.3 Health-Flag Playbook (PriceLabs listing status)
Flag
Meaning
Standard Response
Green / Blue
At or above market pace
No action. Do not add discounts. Consider tightening min-stay if well ahead.
Yellow
Slightly behind market
Run Part 9 diagnosis steps 3-8. Usually a restriction or price-position issue. One adjustment, then watch 7 days.
Red
Clearly behind market
Full Part 9 diagnosis same day. Check min stay vs booking window FIRST, then discount stacking, then price percentile. Notify owner with strategy before they see the numbers.

10.4 Standard Pace Triggers
Trigger
Action
Next-month occupancy 0% when its booking window opens
Add -10% override for the first week of that month only, with removal date set. One booking seeds momentum.
Listing pickup < half of market pickup for 2 consecutive weeks
Min-stay audit first, then price percentile check. Do not blanket-discount.
High season above 50% booked 30+ days out
Raise min stay; remove any remaining discounts; let prices climb.
Peak block (NYE etc.) unbooked 30 days out
Reduce min stay one step. Hold rate. Market fills peaks late.
Cancellation on a high-value date
Reopen immediately at current PriceLabs price. Never discount a reopened premium date.

11. Operating Cadence
Daily (active managed clients and Lux Oasis units)
Pickup since yesterday; new bookings; cancellations.
Next 7 days gaps and same-week orphan nights.
Critical event dates; rate anomalies.
Min-stay problems on near dates.
PMS/channel sync errors if visible.
Guest/ops issues that can affect reviews or availability.
Daily discipline: do not rewrite strategy from emotion; do not lower price because one day is empty; do not override every small PriceLabs movement; do not chase vanity occupancy at the cost of ADR. Output: short internal note or Telegram brief only if something needs action.
Monday / Wednesday / Friday
Monday: portfolio pace check (Part 10.2); next 14/30-day gap review; owner watch items.
Wednesday: comp-set and demand movement; Listing Optimizer visibility for priority units; tactical adjustment queue.
Friday: weekend and next-week risk; event-date checks; owner brief if needed.
Weekly Revenue Review
Pace vs last year and vs target; occupancy by window (7/14/30/60/90 days).
ADR vs target; revenue vs floor and target.
Market demand and events; comp-set pricing.
Restrictions, cancellation fit, listing conversion/visibility, owner constraints.
Delete stale overrides (Single-Lever Rule audit).
Output: ahead / on track / behind; main reason; one action; one watch item; one question if needed.
Monthly (at month close)
Closed-month occupancy, ADR, revenue, RevPAR where useful; net vs gross.
Cost-floor performance and target achievement; YoY where data exists; market comparison.
Hygiene check: PMS-to-PriceLabs sync date current for every unit; blocked-date creep (count and question any growth); min/max price hit frequency next 60 days.
Listing/channel issues; strategy changes made; next-month plan.
Output: owner PDF answering — what happened, why, what we changed, what we do next.
Quarterly
Refresh cost base, floor, comp set, property clusters.
Website schema re-test; listing content competitiveness; review trend.
Commercial fee/scope still correct; client goal still current.
Seasonal / 90 Days Before Peak
Cluster properties; audit remaining inventory, pricing, restrictions and cancellation policy.
Divide the calendar into: days to protect, days to push, days needing immediate action.
Check pace vs last year and target, search activity, lead time, best-date fill speed.
Peak: protect rate and availability; avoid selling best dates too cheap or too early; stricter cancellation farther out; avoid short-notice cancellation exposure on high-value dates.
Shoulder: stimulate intelligently — longer-stay discounts, flexible cancellation, value adds (early check-in, late checkout, luggage storage), segment repositioning.
Low: consider monthly/mid-term stays; adjust guest segment; lower only with floor awareness; use downtime to fix SOPs, listings, schema and reporting.

12. Clustering (Portfolios)
Cluster before strategy. Cluster by: market/area, building/tower, bedroom count, quality tier, view/amenity tier, guest segment, seasonality, cancellation need, min-stay logic, owner constraints.
Cluster outputs: shared pricing rules, shared stay rules, shared cancellation logic, shared watch dates, and outliers requiring special treatment.
13. Owner and Client Communication
Explain the strategy before the numbers create anxiety.
The owner does not need every data point. They need: what is happening, why, what ORL is doing, what happens next, and when the result should be judged.
Do not wait for the owner to panic; do not over-report normal fluctuation.
Do not assess seasonal performance too early. For seasonal markets, final assessment at season end with interim pace updates.
One consistent communication person where possible.
14. Action Rules and Approvals
Level
Actions
Green (internal, no approval)
Read data; analyse; draft reports and messages; update trackers; prepare recommendations.
Approval required
Price changes without explicit client authority; listing changes; cancellation policy changes; promotions; external client messages; contract/payment/fee commitments; website changes; access changes.
Never automatic
Move money; change bank details; sign contracts; delete business-critical data; change passwords/security; publish public content.

15. Standard Recommendation Format
Status: ahead / on track / behind.
Main cause: price / demand / visibility / restrictions / listing conversion / owner constraint / data issue.
Evidence: 2-4 facts.
Recommended action: one clear action.
Risk: low / medium / high.
Timing: now / this week / watch.
Approval needed: yes / no.
What not to do: one warning.
16. Audit Package Workflow
Used for serious client or prospect audit packages. Keep internal workbooks separate from client-facing deliverables.
Internal vs Client-Facing
Internal workbook may contain
Client-facing report must contain
Uncertain public-source mapping; provisional hypotheses; weak competitor sets; internal commercial notes; missing-data warnings; implementation prompts.
Confirmed facts; clearly labelled assumptions; practical recommendations; no internal uncertainty disguised as confidence; no scraping references unless appropriate; no exact ADR/revenue claims without confirmed data.

Steps
Portfolio map: one row per LISTING (not per physical property): cluster, name, platform, product type, capacity, rating, link, host role, cross-platform counterparts, physical-unit mapping status, calendar overlap risk, priority, risk. Warning: with whole-unit and room-level listings, never price before mapping calendar relationships — room inventory can cannibalise whole-unit value.
Cluster strategy: by micro-market, product type, capacity, segment, seasonality, review strength, unit model, ownership model. Per cluster: base strategy, peak protection, shoulder stimulation, low-season alternative, min-stay and cancellation logic, photo priority, data still needed.
Unit strategy: per listing — immediate improvement, PriceLabs strategy, competitor focus, priority, risk.
Competitor verification: classify every competitor as like-for-like, ceiling reference, value reference, amenity reference, or ramp only. Only like-for-like drives base-price decisions. Weak-set flags: zero like-for-like, no same-platform comps, wrong micro-market, rooms vs whole apartments, dead URLs. When weak: find 3+ real like-for-like before any ADR decision.
Data request: official OTA links; unit-to-listing map; last 12 months per unit (occupancy, ADR, nights, revenue); PMS export (booking date, check-in/out, channel, amount, unit, cancellations); PriceLabs access; cleaning fees; commissions; payment fees; taxes; next 90-180 day calendar; owner restrictions; current min stays and cancellation policies.
Client-safe rules: never invent exact figures; mark public data provisional; keep commercial notes out; strong reviews are a signal, not a pricing decision; connect every recommendation to confirmed data or a labelled hypothesis; incomplete dataset = controlled pilot, not portfolio-wide reset.
Copy and title upgrades: lead with the strongest selling point; include location and capacity/use case; avoid vague emotional titles and clutter. First five photos tell the value story; money shot early; location friction explained; segment obvious; spaces clear; practical amenities explicit; nothing over-promised.
Risk dashboard: per listing and cluster — mapping/cannibalisation, weak comp set, reviews, min-stay, cancellation, floor/cost, markup, owner constraint, missing data, link uncertainty. Rated: critical now / high / medium / low / watch.
30-day pilot when data is incomplete or the portfolio is complex. Week 1: confirm mapping, clean comp set, validate floor, verify PriceLabs setup, identify restrictions. Week 2: implement approved changes, fix in-scope listing issues, set watch dates and owner comms. Week 3: monitor pace, compare pickup, inspect gaps, adjust only on evidence. Week 4: summarise, decide scale/revise/pause, plan next 30 days.
Deliverables: internal — workbooks, competitor verification, risk dashboard, data request, implementation notes. Client-facing — executive summary, segmentation, confirmed listing map, market/competitor logic, listing findings, pricing risks, revenue opportunities, PriceLabs audit plan, 30-day action plan, weekly KPI dashboard.
17. Client Package Production Checklist
Remove internal-only notes; remove or clearly label provisional claims.
Confirm official listing links.
Confirm whether the report is audit-only or implementation-ready.
Confirm no sensitive source, prompt or internal agent wording remains.
Confirm ORL branding and business name are correct.
Confirm pricing/fee language is current.
Confirm no external promises or price changes are implied.
Prepare an approval card before sending externally.
Final Operating Rule
The best revenue manager is not the one who touches prices the most.
The best revenue manager is the one who knows: when to protect rate, when to stimulate demand, when the problem is not price, when the owner needs explanation before anxiety, when software should act, and when human judgement must step in.

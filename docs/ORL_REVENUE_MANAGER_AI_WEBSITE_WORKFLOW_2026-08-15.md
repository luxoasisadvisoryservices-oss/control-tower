# ORL Revenue Manager AI Website Workflow

Source video: `4 AI Workflows Every Property Manager Should Start Using Today`

URL: https://www.youtube.com/watch?v=D7Tp2BCRvJs&t=14s

Created: 2026-08-15, Asia/Dubai

## Executive Use

This is the practical working model to take from the video and adapt for Oasis Revenue Lab:

1. Be the revenue manager who is on top of price, demand, visibility, listing quality and owner communication.
2. Use AI as the operating desk, not as a replacement for judgement.
3. For clients and their property managers, start with fast checks they can understand: website AI-readiness, PriceLabs/demand questions, listing health, owner reports and property SOP brains.
4. Keep all pricing or commercial actions supervised. AI can diagnose, draft and monitor; Damiano approves any external, pricing or client-facing commitment.

## What The Video Actually Shows

The video covers four usable AI workflows for short-term-rental operators:

1. **AI visibility for direct-booking websites**
   - Travellers increasingly ask ChatGPT, Claude, Gemini and similar tools for travel planning.
   - A direct-booking website can look good to humans but still fail AI/readability checks.
   - The quick test is Google Rich Results Test: `https://search.google.com/test/rich-results`.
   - If the test says `No items detected`, the site is probably missing structured schema.
   - Strong sites expose structured data such as local business, vacation rental, organisation, review snippets, location, property description and listing details.

2. **AI connected to PriceLabs or revenue tools**
   - PriceLabs now supports AI connection through an MCP-style connector.
   - The AI can answer questions like: `How am I pricing against the market this summer?`
   - It can combine PriceLabs data with external event/demand research.
   - It can generate dashboards, owner reports and market explanations.
   - Current useful mode is diagnosis and reporting; editing prices should stay approval-gated.

3. **Property brain for operations**
   - Use NotebookLM as a closed-source knowledge base for property managers and staff.
   - Upload property docs: house rules, access, maintenance contacts, check-in/out, owner approval thresholds, local guide and vendor details.
   - Staff ask operational questions and get answers only from approved source files.
   - Useful because NotebookLM can refuse when the answer is not in the sources instead of inventing.

4. **Brand design system for fast reports**
   - Use Claude Design or similar tools to create a reusable brand system.
   - Feed it website screenshots, logo, property photos, colours, tone notes and example documents.
   - Then generate owner reports, onboarding PDFs, invitation cards, banners and social visuals in the same brand style.
   - This is especially useful for ORL client deliverables because reports can look consistent without manual design each time.

## Damiano's Revenue Manager Way Of Working

### Client Intake Before Any Review

Use the attached onboarding questionnaire as the first intake layer before any revenue-manager diagnosis. The questionnaire is useful because it separates the client's facts, fears and pricing behaviour before we open PriceLabs or touch strategy.

Source PDF received: `ONBAORDING_QUESTIONNAIRE_copy---b79296e5-8d95-4be6-9bb4-8c495d1d34ef.pdf`

Additional onboarding files received:

- `ORL_Client_Onboarding_Checklist_July2026---09f9ff95-fb0b-480c-8caa-6f6d2292084c.pdf`
- `Questionario_ORL---eb56ac2c-c109-4de8-af79-f878763ef56e.pdf`
- `ORL_Client_Onboarding_SOP_Internal---ccdf6dd1-6d08-4eda-a1a9-13f702478118.docx`

Keep these as three separate layers:

1. **Client-facing setup checklist**
   - What the client must send for ORL to go live.
   - Short, confidence-building, low friction.

2. **Revenue discovery questionnaire**
   - What Damiano needs to understand the operator's pricing reality.
   - More detailed, completed before the call.

3. **Internal setup SOP**
   - What the ORL operator does privately after the client sends the information.
   - Keep server commands, bot details, client IDs, API keys and operational credentials out of client-facing documents.

### Six-Item ORL Client Setup Checklist

Use this as the clean client-facing onboarding checklist.

1. **Telegram**
   - Need: client's Telegram connection to the ORL bot/private chat.
   - Why: daily brief, 24/7 Q&A, monthly PDF, listing audits and approvals.

2. **PMS access**
   - Need: Hostaway Account ID and API key where the operator uses Hostaway.
   - Why: reservations, nightly revenue, fees, commissions and net/gross booking truth.
   - Rule: read-only/advisory. No reservation, pricing, listing or financial change without approval.

3. **PriceLabs access**
   - Need: PriceLabs account and Customer API key, or setup support if not active yet.
   - Why: market occupancy, forward prices, demand intensity and comp-set pricing signals.

4. **Cost base**
   - Need: rent/ownership cost, bills, cleaning cost per stay and fixed monthly listing costs.
   - Why: ORL must know break-even, cost floor and revenue target. A full calendar can still be a bad calendar if the net is wrong.

5. **Listing links**
   - Need: public Airbnb and/or Booking.com links for each listing, plus optional competitor links.
   - Why: ORL audits listings the way a guest sees them: trust, reviews, presentation, conversion and channel visibility.

6. **Goal**
   - Need: monthly revenue target per listing, or permission for ORL to propose one from the cost base.
   - Why: every brief and recommendation needs a target: survival floor, normal target and upside push.

### What Happens After Setup

Use this simple promise:

1. **Day 0**
   - Client sends items 1-6.
   - ORL connects read-only PMS/PriceLabs, sets cost floor and target, maps listing links and runs first listing health check.

2. **Day 1**
   - First morning brief arrives around 9:45.
   - It covers occupancy versus market, ADR net and gross, forward secured revenue and today's decisions with reasoning.

3. **Month 1**
   - First monthly performance report lands as a designed PDF.
   - It covers the closed month, year-on-year where available, market standing and next actions.

### Data Promise

Use this line consistently:

`ORL is advisory and read-only by default. It never invents a figure: every number traces to the client's PMS, PriceLabs/market data, a client-provided source, or a page it actually read. If ORL does not know, it says so.`

### ORL Master Onboarding Flow

Source received: `OasisRevenueLab_Onboarding_SOP---89e59c09-045a-484b-9e31-79ccd0fc52c7.docx`

Use this as the full operating path from first contact to ongoing management:

`Contact -> Questionnaire -> Discovery Call -> Cost Analysis -> Targets Set -> PriceLabs Access -> Contract -> Payment -> Setup -> Go-Live -> Monthly Report -> Ongoing Management`

#### Phase 1: First Contact And Qualification

1. Acknowledge the enquiry the same day where possible.
2. Explain ORL simply: pricing and revenue strategy for short-term rentals, powered by PriceLabs and supervised by Damiano.
3. Do not go deep into analysis before the questionnaire.
4. Ask whether they have one unit or a portfolio.
5. Send the correct questionnaire and, where useful, the correct calculator.

Outcome: client is interested, qualified and ready to share structured information.

#### Phase 2: Questionnaire And Calculator

Collect:

1. Listing links and Airbnb/Booking profile URL.
2. Location, building name, unit type and bedroom count.
3. PMS in use: Hostaway, Guesty, KrossBooking, none or other.
4. Current pricing approach: manual, dynamic or automated.
5. Risk tolerance: occupancy-first, balanced or ADR-first.
6. Revenue goals and timeline.
7. Cost base through the calculator.

Calculator rule:

- 1 unit: use single-unit STR calculator.
- 2+ units or portfolio: use multi-unit calculator.
- Client fills yellow/input cells only.
- Purpose: calculate break-even nightly rate, pricing floor and starting PriceLabs logic before the call.

#### Phase 3: Discovery / Strategy Call

Review the completed questionnaire and calculator before the call.

On the call:

1. Walk through the cost breakdown.
2. Confirm the break-even rate and what it means.
3. Set personalised target nights from market, area, building and past data.
4. Set buffer percentage:
   - Standard: 15%.
   - New listing: 20%.
   - Aggressive/high-competition growth: 10%.
5. Use PriceLabs market data to validate targets.
6. Explain dynamic pricing above the floor.
7. Align goals, risk tolerance and cadence.

Useful Dubai target-night guide:

- JBR / Marina: 24-26 nights, roughly 78-85%.
- Downtown: 22-24 nights, roughly 70-77%.
- New listing: start around 20 nights until reviews build.
- Exact benchmarks must come from PriceLabs market data, not memory.

Outcome: expectations aligned, pricing floor understood, client ready to proceed.

#### Phase 4: PriceLabs Access And Listing Validation

Before pricing work starts, confirm identity for every listing:

1. Airbnb listing link opens correctly.
2. Booking.com link opens correctly where relevant.
3. Property name and internal name.
4. Building/tower.
5. Area/community.
6. City.
7. Bedroom count and maximum occupancy.
8. PMS.
9. Listing matches the correct unit in PriceLabs.
10. Tower and location are correct for comp-set accuracy.

Hard rule:

`No pricing work starts until listing identity is confirmed.`

PriceLabs access options:

1. Client adds Damiano as PriceLabs Expert/Revenue Manager where available.
2. Client provides Customer API key for read-only ORL analysis where the ORL bot/reporting layer needs it.
3. If PriceLabs is not set up, treat setup as a separate service step before claiming ORL can manage revenue.

#### Phase 5: Commercial And Legal Gate

Before implementation:

1. Collect business/legal name.
2. Collect trade licence number where applicable.
3. Collect TRN/VAT details where applicable.
4. Collect billing email.
5. Prepare agreement with scope, monthly fee, start date, billing cycle and termination notice.
6. Send contract for review/signature.
7. Confirm payment and official start date.

Rule:

`No managed pricing implementation starts before contract, payment/start-date agreement and access are clear.`

#### Phase 6: Initial Pricing Setup

Use the completed calculator as baseline.

Initial setup should cover:

1. Market benchmarking from PriceLabs.
2. Base-price calibration from market and property quality.
3. Minimum price from the calculated floor.
4. Maximum price logic, often 3-4x floor for peak periods where justified.
5. Weekend versus weekday differential.
6. Orphan-night handling at or above break-even floor.
7. Event and seasonality overrides:
   - UAE public holidays.
   - GITEX.
   - New Year.
   - Ramadan.
   - Major Dubai events.
8. Strategy aligned with agreed risk tolerance.

#### Phase 7: Listing Optimisation If In Scope

If included in the scope, review:

1. Title positioning: lead with the strongest selling point, area and key feature.
2. Picture order: hero image first, living area second, bedroom third.
3. Minimum-stay logic:
   - 2 nights standard.
   - 3 nights for peak where justified.
   - 1 night only for orphan gaps or explicit strategy.
4. Gap-night strategy with break-even floor protection.
5. Listing description and amenities as conversion levers.
6. Website AI-readiness and schema if the client has direct booking pages.

#### Phase 8: Go-Live Communication

Go-live message should explain:

1. What was done.
2. Break-even rate and pricing floor.
3. The pricing strategy now active.
4. What to expect in the first 2-4 weeks.
5. That results are measured over 30-90 days, not overnight.
6. That no future major pricing or listing action is taken without agreed authority.

#### Phase 9: Ongoing Management Cadence

Use this cadence:

1. **Weekly**
   - Light check: calendar health, orphan gaps, upcoming events, overrides needed.

2. **Monthly**
   - Deep review: floor changes, ADR versus target, seasonality logic, owner/client report.

3. **Event-based**
   - Override/monitor UAE public holidays, GITEX, New Year, Ramadan and major Dubai demand events.

4. **Quarterly**
   - Refresh calculator with updated rent, overheads, cleaning cost and owner target.

Monthly report should include:

1. Occupancy.
2. ADR.
3. Revenue.
4. Pricing trend.
5. Market comparison.
6. Listing/visibility issues.
7. Actions taken.
8. Next recommendations.

#### Phase 10: Internal Bot/Agent Setup Boundary

The internal SOP includes bot, API, server and troubleshooting steps. Keep those internal.

Client-facing language should only say:

`Once your data is connected, ORL sends your daily brief in Telegram and your monthly report. The setup is handled privately by us; your role is only to provide the agreed access and confirm the first message/report arrives.`

### Onboarding Email / WhatsApp Templates

Source received: `Emails_for_Onboarding---cd6a36be-4e5f-4996-ae3c-1704773357ba.pages`

Use these as draft templates only. External sending is approval-gated. Before sending, update branding to:

`Damiano Pesciaioli, Oasis Revenue Lab, Lux Oasis Advisory & Services LLC`

Do not use old `Lux Oasis Holiday Homes` branding for ORL revenue-management client emails unless the client relationship is specifically with the holiday-homes company.

#### Template 1: PriceLabs Access Request

Subject:

`PriceLabs Access - Account ID & Onboarding`

Body:

```text
Hi [Client Name],

Great speaking with you earlier. Looking forward to getting started.

To begin the review of your pricing and setup, I need to connect your PriceLabs account to my Expert dashboard.

Please share your PriceLabs Account ID with me.

To make this easy, I have recorded a short video showing:

- where to find your PriceLabs Account ID
- how to grant the required access for onboarding

[Insert video link]

Once I receive the Account ID, I will coordinate the access setup and start the initial review.

If anything is unclear, just let me know.

Best regards,
Damiano
Oasis Revenue Lab
Lux Oasis Advisory & Services LLC
```

#### Template 2: Scope, Setup And Next Steps

Subject:

`Revenue Management Scope, Setup & Next Steps`

Body:

```text
Hi [Client Name],

Thanks. I have now connected to your PriceLabs account.

Based on our discussion, here is how I suggest we proceed.

Initial Setup & OTA Optimisation

This is a one-time setup required to position the listing correctly before ongoing optimisation begins.

Includes:
- Full PriceLabs configuration
- Base, minimum and maximum price alignment
- Minimum-stay rules
- Availability and gap-night logic
- Occupancy-based adjustments
- Last-minute and far-out rules
- Market and competitor analysis
- Airbnb / Booking.com listing visibility review
- Title positioning
- Photo-order clarity
- Description and value communication
- Amenity/filter review
- Map-pin/location accuracy where relevant
- Website AI-readiness/schema audit where there is a direct-booking page

Ongoing Revenue Management

After the setup, the monthly engagement covers:
- continuous dynamic-pricing review
- demand and seasonality checks
- event and holiday monitoring
- monthly performance tracking
- strategy adjustments between reports when needed
- owner/client explanation of what changed and why

Fee:
[Insert current approved fee and VAT treatment]

The first period should be treated as a measured trial: we do not judge the strategy from one or two quiet days, but from the 30-90 day trend, booking quality and net revenue.

If you are happy with this structure, I will prepare the agreement and start-date confirmation.

Best regards,
Damiano
Oasis Revenue Lab
Lux Oasis Advisory & Services LLC
```

#### Comms Rules

1. Never send these templates without checking the current commercial terms.
2. Never paste fixed fees from an old draft unless Damiano confirms they are current.
3. Replace any old `Lux Oasis Holiday Homes` revenue-management signature with the ORL / Lux Oasis Advisory signature.
4. Keep access instructions simple for the client; keep server, bot and API handling internal.
5. For any message requesting credentials or access, use a private channel and avoid group chats.
6. If the client is not yet signed/paid, phrase setup as the next step after agreement, not as already active.

Collect these answers before the call:

1. **Property and listing overview**
   - Property type: studio, 1BR, 2BR, 3BR+.
   - City, area and building.
   - Number of active listings.
   - Platforms used: Airbnb, Booking.com, VRBO, direct bookings or other.

2. **Current performance snapshot**
   - Average occupancy for the last 90 days.
   - Average Daily Rate.
   - Main challenge: low occupancy, low ADR, empty gaps, many views but few bookings, heavy last-minute discounting, inconsistent monthly revenue or low confidence in pricing setup.

3. **OTA listing health**
   - Photo quality.
   - Whether the title attracts clicks.
   - Whether the description clearly communicates value and key selling points.
   - Current page position, if known.

4. **Distribution channels and markups**
   - Whether the operator applies different markups by channel.
   - Airbnb markup.
   - Booking.com markup.
   - Direct-booking markup or discount.
   - Whether they want price parity across platforms.
   - Which channel they want to prioritise.
   - Commissions, fees, VAT handling or other pricing-structure notes.

5. **PriceLabs and pricing setup**
   - Whether PriceLabs is used actively, weakly, barely or not at all.
   - Whether base price is set.
   - Whether minimum price is set.
   - Minimum-stay rules.
   - Last-minute discounts.
   - Far-out premiums.

6. **Pricing philosophy and risk acceptance**
   - Maximum occupancy versus balanced strategy versus higher-paying guests.
   - Comfort with short-term empty gaps if it improves ADR and guest quality.
   - First reaction to empty calendar days: lower prices, wait, adjust minimum stays or ask for advice.

7. **Goals and expectations**
   - Primary 90-day goal: increase occupancy, increase ADR, improve booking consistency, prepare for high season or stabilise monthly revenue.
   - Whether they are open to changing prices, minimum stays, discounts/premiums and listing content.
   - Anything specific they want reviewed before the call.

### Italian Questionnaire Additions

The Italian `Questionario_ORL` adds a few useful items missing from the simpler English questionnaire:

1. **Portfolio model**
   - How many units are owned versus managed for third parties.
   - Whether the operator runs apartments, rooms/B&B, whole accommodation structures or a mix.

2. **PMS confirmation**
   - Confirm KrossBooking where relevant, or identify the actual PMS.
   - Ask whether last year's SmartPricing/KrossBooking reports or exports are available.

3. **Seasonality and stay model**
   - Short stays only, weekly stays, 28+ night stays or seasonal mix.
   - Current high-season and low-season minimum stays.
   - Whether 1-night stays are accepted in high season to fill gaps.
   - Low-season strategy: short rentals all year, monthly/transient, closed, property-by-property or undecided.

4. **Discount mechanics**
   - Weekly/monthly OTA discounts.
   - Typical booking window: 0-7 days, 1-4 weeks, over one month or unknown.

5. **Cost and tax detail**
   - Average monthly cost per unit.
   - Minimum nightly price below which they do not want to sell.
   - Tourist tax and how it is collected.
   - OTA commissions, VAT/tax regime and cleaning fees charged to guests.

6. **Previous pricing system**
   - What the previous pricing setup cost per month.
   - Whether it was software only or included support.

Use these additions for Italy/Nicola-style clients and any operator where PMS, tax, seasonality or stay-length strategy affects the pricing recommendation.

### Intake Triage Logic

After the questionnaire comes back, classify the client before spending time on deep strategy:

1. **Pricing setup problem**
   - PriceLabs not used, base/minimum price unclear, discounts/premiums not understood.
   - First ORL move: pricing setup audit and guardrails.

2. **Demand or seasonality problem**
   - Prices may be reasonable but pace is weak across the market.
   - First ORL move: demand calendar, events and realistic pickup expectations.

3. **Visibility/conversion problem**
   - Many views but few bookings, weak photos/title/description, poor listing position.
   - First ORL move: OTA listing health and website AI-readiness audit.

4. **Channel strategy problem**
   - Airbnb, Booking.com and direct prices are misaligned.
   - First ORL move: markup/parity review and channel-priority recommendation.

5. **Risk-tolerance mismatch**
   - Client wants high ADR but panics at every empty gap, or wants occupancy but dislikes discounts.
   - First ORL move: align owner expectations before touching prices.

6. **Data missing**
   - ADR, occupancy, page position, markups or PriceLabs settings are unknown.
   - First ORL move: data request, not strategy theatre.

### Full Call / Meeting Question Set

Source received: `FULL_CALL_MEETING_QUESTION_SET---6649fd18-c477-4ee2-adad-a62238a4f030.pages`

Use these selectively. Do not ask all of them in one call unless the client is comfortable and the call is explicitly a deep diagnostic.

1. **Context and motivation**
   - What made you feel you needed help with pricing now?
   - If nothing changes in the next 3 months, what worries you most?

2. **Revenue reality and risk calibration**
   - Are you more afraid of empty nights or underpricing booked nights?
   - If we look at a 30-day month, would you prefer 3-5 empty days at higher ADR, or a full calendar at lower prices?
   - How do you personally define a successful month: revenue, occupancy or both?

3. **PriceLabs and strategy depth**
   - Who originally set up your PriceLabs account?
   - Have you ever adjusted your base price using real performance data?
   - Do you fully trust your minimum price, or is it more a guess?

4. **OTA algorithm and positioning**
   - Do you actively track where your listing appears compared to competitors?
   - Have you noticed bookings slowing down even when your prices are competitive?
   - Are you open to occasionally not panicking early on empty days if it helps train the OTA algorithm to attract higher-paying guests?
   - Pause here. Let them answer before continuing.

5. **Expectation alignment**
   - When prices go up and bookings slow temporarily, how comfortable are you holding strategy instead of reacting?
   - Would you rather adjust weekly based on data, or daily based on emotions?

6. **Decision framing and next steps**
   - If I clearly show where revenue is leaking and how to fix it, would you prefer a one-time optimisation, managed trial period, or ongoing revenue-management support?
   - What would make you convinced after the first review: clearer numbers, a specific action plan, a booking improvement, a better owner explanation, or confidence that nothing is being guessed?

7. **Close**
   - Based on what I see, there are already areas we can improve without increasing risk.
   - The next step is to review your real data, listing visibility and pricing setup, then come back with the few changes that matter most.

8. **Internal note for Damiano**
   - Listen for whether the client is conservative, balanced or aggressive.
   - Before discussing targets, ask what range of outcomes they can emotionally support.
   - Build the recommendation around their real risk tolerance, not only the market opportunity.

### Daily Revenue Control

Every active client/property should have one daily answer:

`Is this unit behind, on track or ahead, and why?`

Check in this order:

1. **Pace**
   - Nights booked versus same period last year or market expectation.
   - Next 7, 14, 30, 60 and 90 days.
   - Pickup in the last 3, 7 and 14 days.

2. **Price**
   - Current rate versus PriceLabs recommendation.
   - Current rate versus competitor band.
   - ADR versus last year and market.
   - Floor and ceiling still make sense.

3. **Demand**
   - Market occupancy and search demand.
   - Events, holidays, school breaks, flight markets and local calendars.
   - Is weak pickup a price issue or a demand issue?

4. **Visibility**
   - Airbnb and Booking.com ranking/search presence where measurable.
   - Direct-booking website AI-readiness.
   - OTA listing title, amenities, photos, reviews and conversion signals.

5. **Restrictions**
   - Minimum stay.
   - Check-in/check-out rules.
   - Availability gaps.
   - Rate plans, cancellation policy, promotions and blocked dates.

6. **Action**
   - Recommend one change, one watch item and one owner/property-manager question.
   - Do not change prices automatically unless explicitly approved.

### Weekly Revenue Manager Review

Every week, produce a concise owner/operator brief:

1. Property status: ahead / normal / behind.
2. Main reason: price / demand / visibility / conversion / restriction / data missing.
3. What changed this week.
4. Next 2 weeks risk.
5. Next 30-60 days opportunity.
6. Recommended action.
7. Evidence used.
8. What the property manager must fix.
9. What the owner must approve, if anything.

### Monthly Client Deliverable

For each ORL client, monthly report should include:

1. Executive summary.
2. Revenue and occupancy trend.
3. ADR, RevPAR and booking pace.
4. Market comparison.
5. Listing quality and conversion notes.
6. Website/direct-booking AI-readiness score.
7. Actions completed.
8. Actions recommended.
9. Decisions needed.
10. Next-month strategy.

## Website AI-Readiness Audit

This is the specific website part Damiano asked to extract from the video.

### Step 1: Pick The URL

Test both:

1. Homepage.
2. One live property/listing page.

If the property manager has many listings, test:

1. Best-performing listing.
2. Worst-performing listing.
3. One listing they want to grow.

### Step 2: Run Google Rich Results Test

Open:

`https://search.google.com/test/rich-results`

Paste the URL and run the test.

### Step 3: Record The Result

Score the result:

- **Pass:** Valid items detected and relevant to hospitality/listings.
- **Partial:** Some generic schema exists, but no vacation rental/listing/review/local-business structure.
- **Fail:** No items detected.

### Step 4: Check For The Right Structured Data

Look for these schema signals:

1. Organisation.
2. Local business.
3. Vacation rental or lodging business.
4. Accommodation / apartment / place.
5. Address and geo location.
6. Listing name and description.
7. Bedrooms, bathrooms, occupancy and amenities.
8. Review snippets or aggregate rating.
9. Images.
10. Breadcrumbs.
11. FAQ, if the page has useful guest FAQs.
12. Offers or price range, where appropriate.

The key point from the video: big OTAs already structure this data clearly. Smaller direct-booking sites must do the same so Google and AI tools can understand what the page is.

### Step 5: Ask The Website Manager For The Fix

Send this to the client/property manager or web person:

```text
Please check our direct-booking website and listing pages for structured schema markup.

Google Rich Results Test currently shows: [PASS / PARTIAL / FAIL].

We need schema that clearly tells Google and AI tools that these pages are vacation-rental / short-term-rental listing pages, including organisation, local business/lodging, property location, listing description, bedrooms, bathrooms, occupancy, amenities, images and review/rating snippets where available.

Please implement this on the homepage and each listing page, then send screenshots or test links showing the valid rich-result items detected.
```

### Step 6: Re-Test

After the web manager says it is done:

1. Re-run Google Rich Results Test.
2. Save screenshots/results.
3. Re-test one week later if the site uses dynamic pages or a booking engine.
4. Add the result to the client revenue file.

## Website Audit Scorecard

Use this simple score:

- **0/5 Schema visibility:** No useful structured data detected.
- **1/5 Basic crawlability:** Website is indexable but no listing-specific schema.
- **2/5 Generic schema:** Organisation/breadcrumbs exist, but listings are not understood as STR inventory.
- **3/5 Listing schema:** Listing pages expose location, description, images and property details.
- **4/5 Trust schema:** Reviews, ratings, FAQ and local business/lodging signals are present.
- **5/5 AI-ready:** Homepage and listing pages are structured, indexable, fast, content-rich and clearly mapped as vacation-rental inventory.

## Property Manager Website Checklist

Give this to a client property manager:

1. Send homepage URL.
2. Send 3 listing URLs: best, worst and priority-growth property.
3. Confirm who manages the website.
4. Confirm platform: WordPress, Lodgify, Hostaway site, Guesty site, Webflow, custom or other.
5. Confirm whether every listing has its own indexable URL.
6. Confirm whether listings can appear on Google.
7. Run Rich Results Test for each URL.
8. Save number and type of valid items detected.
9. Fix missing structured schema.
10. Add vacation-rental/lodging/listing schema.
11. Add review/rating schema only where reviews are real and visible.
12. Add FAQ schema only where FAQs are actually shown on the page.
13. Re-test.
14. Send before/after screenshots.
15. Add the result to ORL monthly report.

## AI Revenue Manager Prompts

### PriceLabs / Revenue Review Prompt

```text
Act as a senior short-term-rental revenue manager.

For this property/portfolio, review the next 7, 14, 30, 60 and 90 days.

Tell me:
1. Are we behind, on track or ahead?
2. Is the issue price, demand, visibility, listing conversion, restrictions or missing data?
3. How do our prices compare with the market and same period last year?
4. What local events, holidays or demand signals may explain the result?
5. What is the one safest action now?
6. What should we watch before changing anything?

Use only the attached/exported data and clearly mark assumptions.
Do not recommend a price change unless you explain the evidence.
```

### Website AI-Readiness Prompt

```text
Act as a technical SEO and short-term-rental direct-booking website auditor.

I will give you:
- homepage URL
- listing page URLs
- Google Rich Results Test outputs
- screenshots if needed

Evaluate whether the site is easy for Google and AI travel-planning tools to understand.

Score:
1. structured schema
2. vacation-rental/lodging clarity
3. listing-page crawlability
4. review/rating trust signals
5. property-detail completeness
6. booking/conversion clarity

Return:
- pass/partial/fail
- what is missing
- exact request to send to the website manager
- what to re-test after the fix
```

### Property Brain Prompt

```text
Create a property brain for operations.

Use only the uploaded sources.
If the answer is not in the sources, say that it is not available.

The brain must answer questions about:
- access
- check-in and checkout
- house rules
- maintenance
- emergency contacts
- owner approval thresholds
- local recommendations
- cleaning and turnover
- guest issue escalation
- what not to do
```

### Owner Report Prompt

```text
Create an owner-ready revenue report in a calm, professional hospitality tone.

Include:
1. current status
2. revenue and occupancy performance
3. pricing versus market
4. demand and event explanation
5. listing/website visibility issues
6. actions completed
7. recommended next actions
8. decisions needed from owner

Keep it evidence-led.
Do not overpromise revenue.
Do not include internal notes.
```

## ORL Product Implication

This video reinforces that ORL should not only be a pricing helper. It should become a supervised revenue-manager operating desk:

1. **RevenueState:** price, pace, bookings, ADR, RevPAR and secured revenue.
2. **DemandState:** events, seasonality, market demand and school/flight calendars.
3. **OTAChannelState:** Airbnb/Booking/listing visibility, restrictions, conversion and reviews.
4. **WebsiteState:** direct-booking website AI-readiness and schema score.
5. **PropertyBrain:** operational source of truth for property managers.
6. **OwnerReport:** branded, repeatable monthly explanation.

The immediate commercial angle:

`Oasis Revenue Lab helps property managers stay on top of revenue, listing visibility and owner communication without asking them to become technical revenue analysts.`

## Next Actions

1. Add website AI-readiness as a standard section in ORL prospect/client audits.
2. Build a reusable Rich Results Test intake template.
3. For Nicola/Italy and Bali prospects, use the website audit as a quick diagnostic wedge.
4. Create a one-page client-facing version of this checklist after the next strategy video.
5. Keep PriceLabs/AI write actions read-only or approval-gated until the workflow is proven.

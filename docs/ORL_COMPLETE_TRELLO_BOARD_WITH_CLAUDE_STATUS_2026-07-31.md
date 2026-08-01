# ORL Complete Trello Board With Claude Status - 2026-07-31

Purpose: complete Oasis Revenue Lab board for Trello rewrite with Claude / CoWork. This combines the ORL business North Star, launch plan, PriceLabs mastery lane, website/service offer, and Claude's coding/architecture status pasted by Damiano.

Important: Claude's status is treated as a coding-lane report. Items marked done should still be verified before public claims or client-facing use.

## Board Name

Oasis Revenue Lab - Launch, Product, Revenue Service And Architecture

## North Star

Build ORL as a Damiano-led revenue-management service plus AI operating desk for Dubai short-term-rental operators.

PriceLabs is the pricing/data engine. ORL is the revenue operator layer: goals, PMS truth, listing health, recommendation memory, owner-ready explanation, approval cards, and Damiano's commercial judgement.

## List 1 - Confirmed / Done From Claude Coding Lane

Use this list as `Done - verify before public claim`.

- ORL rebuild core: multi-tenant registry.
- Structural tenant walls.
- Roles.
- Onboarding codes.
- Gates: fabrication, commercial, cross-consistency.
- About 120+ tests green.
- LLM front door live on `@OasisRevenueLabAgentBot`.
- Claude + tool registry.
- Tool allowlist in code.
- Caps.
- Deterministic fallback with explicit reasons.
- Agentic runtime: LLM planner, schema validation, tool loop.
- Artefact generator.
- Tasks.
- Approval cards.
- Ledger.
- Escalation.
- Audit.
- PriceLabs RM Partner API live daily.
- Both tenants mapped.
- Damiano data plus Shajidha / Wellspring three listings flowing.
- Cross-tenant artefact leak fixed with content binding.
- Seven permanent regressions for cross-tenant leak.
- Daily shadow package: Shajidha / Wellspring three briefs plus PDFs automated at 09:50.
- Search budget architecture.
- Daily provider health probe alerts to Damiano's phone.
- GitHub private repo live.
- Repo history secret-scanned.
- HEAD pushed.
- Tavily funded at 4,000 credits/month.
- Tavily switched DEV-side.
- Tavily probe green.
- Consent and tenant walls captured.
- Vikas on hold.
- Wellspring consent on record.

## List 2 - In Flight / Needs Verification

Use this list as `Verify today / tomorrow 09:50`.

### 1. Session persistence

Status: in flight, last seen mid-build.

Acceptance:

- `/as` survives restarts.
- Restart notice is shown clearly.
- Session state does not cross tenants.

### 2. Shadow-delivery recall

Status: in flight.

Acceptance:

- "these properties" resolves to Shajidha / Wellspring portfolio when in that tenant context.
- It never accidentally pulls Damiano JBR/Lux Oasis data.

### 3. Shadow format parity

Status: in flight.

Acceptance:

- Shajidha / Wellspring brief structure matches Damiano's preferred brief structure.
- One portfolio PDF is generated.
- Footers are compact.
- Tomorrow 09:50 shadow package is the visible test.

### 4. Experience harness

Status: in flight.

Acceptance:

- Daily 08:00 end-to-end suite runs.
- Morning sends are blocked if suite is red.
- Failure gives clear reason, not silent bad output.

### 5. Claude status-check paste

Status: needed.

Acceptance:

- Claude / CoWork confirms the truth on all four in-flight items above.
- Record exact pass/fail and blockers in Trello.

## List 3 - Blocked On Damiano

Use this list as `Damiano - unblock first`.

### 1. Prod Tavily key

Why it matters:

- Without prod Tavily key, morning briefs risk stale news.

Action:

- Add prod Tavily key into `/root/oasis-agents/.env`.
- Do not paste key into Telegram or Trello.

Status:

- Parked about five days per Claude status.

### 2. Hetzner 2FA

Why it matters:

- Claude called this the biggest security hole across both businesses.

Action:

- Complete Hetzner 2FA.

Status:

- High priority, small time cost.

### 3. Decodo web-scraping credentials

Why it matters:

- Rank rebuild and Market Position Audit are paused without it.

Action:

- Provide Decodo web-scraping credentials through the secure server/env route.

Blocked items:

- Rank rebuild.
- Market Position Audit workbook.

### 4. Shajidha Guesty + Airbnb links ask

Why it matters:

- Her cost rows, revenue verdict and full P&L stay incomplete until this is sent.

Action:

- Send the drafted message asking for Guesty + Airbnb links / required data.

Status:

- Drafted for about two weeks, still not sent.

## List 4 - Now / Zuhair And Claude Fixes

Use this list as `Now - Engineering`.

### 1. Verify the 09:50 shadow package

Owner: Claude / Zuhair, reviewed by Damiano.

Acceptance:

- Her three briefs generate.
- PDFs generate.
- No tenant leaks.
- Format matches expected structure.
- Compact footers.

### 2. Verify session persistence

Owner: Claude / Zuhair.

Acceptance:

- `/as` survives restart.
- Restart notice appears.
- No session confusion.

### 3. Verify experience harness

Owner: Claude / Zuhair.

Acceptance:

- 08:00 suite runs daily.
- Morning sends are blocked on red.
- Damiano gets clear failure reason.

### 4. Deploy generate_pnl tool

Status: queued after fixed plumbing.

Acceptance:

- Tool generates P&L from tenant-safe data.
- Missing cost rows show clearly.
- No cross-tenant data.

### 5. Continue old bot / new brain rewiring

Status: queued.

Acceptance:

- Old bot and new ORL architecture converge to one brain.
- Format unification plan exists.
- Cutover happens only after two-day test passes.

## List 5 - Now / Damiano Revenue Manager Work

Use this list as `Now - Damiano`.

### 1. PriceLabs exam / mastery

Purpose:

- Damiano becomes the visible revenue manager behind ORL, not just the owner of an AI tool.

To do:

- Continue PriceLabs weekly mastery block.
- Study goals per listing.
- Study Report Builder.
- Study forecasting, pickup, booking window and pace.
- Map useful PriceLabs fields into ORL.
- Convert each learning into product rule, owner explanation and QA check.

### 2. Revenue-management service skill

To practise:

- Owner goal setting.
- Target vs pace interpretation.
- ADR protection vs occupancy recovery.
- When no-booking is not only a pricing issue.
- Data freshness judgement.
- Owner-safe explanations.
- Outcome accountability.

### 3. Shajidha / Wellspring data ask

Action:

- Send the Guesty + Airbnb links / data request.

Why:

- Without this, full P&L and revenue verdict remain incomplete.

## List 6 - Revenue Service / Hybrid Offer

Use this list as `Service Offer`.

### 1. Revenue Health Check

Entry product:

- One listing or small portfolio.
- PriceLabs/PMS review.
- Revenue leakage notes.
- OTA/listing diagnosis.
- Top 5 actions.
- 30-day action plan.

### 2. Revenue Manager Plus

Recurring service:

- Weekly pricing/listing review.
- Monthly owner-ready report.
- Recommendation ledger.
- Telegram / WhatsApp command brief.
- Implementation check.

Pricing direction:

- Do not price against PriceLabs software.
- Price against recovered revenue, avoided mistakes, owner trust, time saved and Damiano's expert review.
- Working range to test: AED 1,000-1,500/operator/month, or AED 150-250/listing/month with a monthly minimum.
- Sajida / Wellspring AED 540-550 for three listings is early beta/proof pricing, not final pricing.

### 3. ORL Pro / Scenario Desk

Premium later:

- Scenario Builder.
- Excel / Word-style pricing plan.
- Owner / landlord forwarding note.
- Assumptions.
- Sensitivity table.
- Target-month strategy.

Guardrail:

- Do not expose open-ended client document generation until RevenueState, assumptions and QA are reliable.

## List 7 - Website Redesign

Use this list as `Website`.

### 1. Redesign positioning

Use:

- Revenue management consultancy for Dubai short-term-rental operators, powered by operator judgement and AI reporting.

Avoid:

- AI pricing assistant.
- PriceLabs competitor.
- Guaranteed uplift.
- Autonomous pricing bot.

### 2. Website sections

- Hero: revenue decisions, owner-ready reports and pricing/listing action plans.
- Offer 1: Revenue Health Check.
- Offer 2: Revenue Manager Plus.
- Offer 3: ORL Pro / Scenario Desk.
- Proof: Lux Oasis / Wellspring / internal report examples when safe.
- How it works: goals, data, diagnosis, action, outcome.
- CTA: request a one-listing revenue review.

### 3. Website launch acceptance

- No unsupported claims.
- No promise of revenue uplift.
- No claim ORL replaces PriceLabs.
- Clear service offer before software product claims.

## List 8 - Queued / Agreed Not Started

Use this list as `Queued`.

- Market Position Audit workbook: the agent that scrapes and builds the Excel. Needs Decodo.
- `generate_pnl` tool deployment on fixed plumbing.
- OpenClaw operator cockpit: on hold by Damiano order, pending two-day test.
- Operating Rhythm epic: triggers, follow-up chasing, command cards, initiative layer.
- Security Charter document.
- One-brain rewiring of old bot and eventual format unification/cutover.
- Zuhair architecture verdict: awaiting reply.

## List 9 - Parked By Design

Use this list as `Parked`.

- Key Data / Airbtics comp data until client-funded trigger.
- Pro-tier / Scenario Builder full client feature.
- OTA channel layer full build.
- Prod `GITHUB_TOKEN` rotation.
- Provider circuit-breaker bundle.
- Broad public launch before proof.
- Fully autonomous pricing writes.
- Generic PriceLabs chatbot.
- Big dashboard before daily decision loop works.
- Open-ended client document generation.

## List 10 - Launch Gates

### Gate 1 - Verify coding truth

- Claude status-check paste confirms in-flight items.
- 09:50 shadow package passes.
- 08:00 harness passes.
- No tenant leakage.
- No red morning sends.

### Gate 2 - Internal reliability

- RevenueState stable.
- Same data powers brief, PDF, chat and reports.
- Missing data handled honestly.
- Source freshness visible.

### Gate 3 - Proof pilot

- One Lux Oasis / Wellspring listing monitored for 14 days.
- Recommendations logged with outcome.
- One weekly proof note created.
- One owner-ready report produced.

### Gate 4 - Paid beta

- 3-6 friendly operators only.
- Simple data checklist.
- No automatic write actions.
- Damiano reviews high-risk recommendations.
- Pricing approved.

### Gate 5 - Website / public launch

- Consultancy-first website ready.
- One-page offer ready.
- Proof asset ready.
- Data checklist ready.
- No unsupported claims.

## Immediate Priority Order

1. Damiano unblocks the small blocked items: Hetzner 2FA, prod Tavily key, Decodo credentials, Shajidha data ask.
2. Claude / Zuhair verifies in-flight items: session persistence, shadow recall, format parity, experience harness.
3. Tomorrow 09:50 shadow package becomes the visible test.
4. Build / deploy `generate_pnl`.
5. Finish Revenue Health Check template and website copy.
6. Use PriceLabs mastery blocks to strengthen Damiano's service skill and ORL product rules.

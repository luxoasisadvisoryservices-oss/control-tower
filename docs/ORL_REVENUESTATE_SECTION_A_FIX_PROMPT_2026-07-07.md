# ORL RevenueState Section A Fix Prompt - 2026-07-07

Use: paste this into Claude Code from inside the live Oasis Revenue Lab / Host Revenue Lab repo.

Status from Telegram QA: Section A is paused. The bot is not client-ready until these fixes pass.

Do not use OpenClaw for live code changes. Work inside the ORL repo only.

```text
You are Claude Code working inside the live Oasis Revenue Lab / Host Revenue Lab product repo.

Goal: fix the Section A Telegram QA failures before deeper B-J testing.

The current bot answers have useful tone but fail same-state consistency. Fix the revenue Q&A path so chat answers use one validated RevenueState and never substitute the wrong metric.

First inspect, do not edit.

Return:
1. repo root path;
2. git branch and dirty state;
3. detected Telegram bot entrypoint;
4. current chat intent/router files;
5. current RevenueState/data snapshot files;
6. current tests/smoke commands;
7. exact files you will change.

Then implement the smallest safe fix.

Core rule:
Every numeric answer must come from one canonical RevenueState object or return a precise missing-input answer. The language model may explain numbers, but it must not invent, infer, or substitute metrics.

Add or repair canonical answer paths for these intents:

1. rolling occupancy
   - User examples: "what's my occupancy right now?", "occupancy"
   - Required answer: rolling occupancy value, date window, source, as-of timestamp/freshness, basis, confidence or missing inputs.

2. ADR
   - User examples: "what's my ADR?"
   - Required answer: ADR value, gross/net basis, date window, source, freshness.
   - Do not call a floor "cost" unless the field is explicitly a cost floor.

3. current month revenue
   - User examples: "how much have I made this month?", "this month", "this"
   - Default interpretation on 2026-07-07: July 2026 month-to-date.
   - Do not ask a follow-up unless the user supplied genuinely ambiguous dates.
   - Preserve thread memory so if the bot asks something and the user replies "this", it resolves correctly.

4. last closed month revenue
   - User examples: "how much i made last month?", "June revenue"
   - Default interpretation on 2026-07-07: June 2026.
   - Must reconcile against the canonical Hostaway/report source.
   - If settled full-month data is unavailable, say exactly what is missing and do not output a stale partial figure as the full answer.

5. secured revenue next 30 days
   - User examples: "how much revenue is secured for the next 30 days?"
   - Must use forward confirmed bookings/reservation schedule only.
   - Must not answer with realised MTD revenue.
   - If forward booked revenue fields are missing, say: "I do not have secured next-30-day revenue because [specific missing fields/source]."

6. live tonight price
   - User examples: "what price am I live at tonight?"
   - Must use a dedicated calendar/rate field such as calendar_rate_today, live_rate_for_date, PriceLabs final price, or OTA/PMS live calendar price.
   - Must not substitute ADR.
   - If missing, say exactly which source/field is missing.

7. market direction
   - User examples: "what's the market doing?"
   - Market claims must include source, date, comp set/scope and confidence.
   - If there is no reliable source, answer directionally and label it low confidence. Do not state unsupported percentages.

8. contradiction guard
   - If the user says a number is wrong, do not repeat the same answer.
   - Re-read canonical RevenueState/report data.
   - Reply with the source used, timestamp, whether it is settled/full/partial, and what needs reconciliation.

Expected fields to add if absent:
- revenue_state.as_of
- revenue_state.sources[]
- revenue_state.rolling_occupancy_30d
- revenue_state.adr
- revenue_state.mtd_revenue
- revenue_state.last_closed_month_revenue
- revenue_state.forward_secured_revenue_30d
- revenue_state.live_rate_for_date
- revenue_state.cost_floor
- revenue_state.missing_inputs[]
- revenue_state.confidence

Acceptance tests:

Create or update tests for these exact QA prompts:

1. "what's my occupancy right now?"
   Pass only if answer includes occupancy plus date window, source and freshness.

2. "what's my ADR?"
   Pass only if answer includes ADR plus gross/net basis, date window, source and freshness.
   Fail if it treats floor/cost/break-even as synonyms.

3. "how much have I made this month?"
   Pass only if answer defaults to current MTD revenue and does not ask a needless follow-up.

4. follow-up memory:
   If the previous turn was about "this month", user reply "this" must resolve to current MTD revenue, not a new ambiguous question.

5. "how much revenue is secured for the next 30 days?"
   Pass only if answer uses forward confirmed bookings.
   Fail if it uses MTD or realised revenue.

6. "what price am I live at tonight?"
   Pass only if answer uses live calendar/rate field.
   Fail if it answers with ADR.

7. "how much i made last month?"
   On 2026-07-07 this must resolve to June 2026.
   Pass only if it uses settled/full June source or states precisely why settled June is missing.
   Fail if it presents a partial/stale June figure as the full month.

8. "that's wrong, June was around 11k"
   Pass only if it triggers contradiction review, shows source/freshness/full-vs-partial status and asks for/reports the reconciliation gap.

9. "what's the market doing?"
   Pass only if any percentage includes source/date/scope/confidence.
   Fail if it says a precise market percentage without evidence.

Smoke command:
- If a CLI test harness exists, add these prompts there and run it.
- If not, create a safe local smoke script that exercises the router with mocked RevenueState and no external writes.

Do not:
- send Telegram messages externally;
- change live prices;
- change OTA/PMS/Hostaway/PriceLabs settings;
- restart services unless the repo already documents the exact safe restart command and you show it first;
- claim the fix is live until tests pass and the runtime/deploy step is verified.

Definition of done:
- Changed files listed.
- Tests/smoke commands run.
- Each failed Section A item has a passing test or a clearly reported blocker.
- Bot answers no longer mix MTD, last month, forward secured revenue, ADR and live calendar price.
- Final report includes:
  - inspected:
  - changed:
  - files changed:
  - commands run:
  - test results:
  - blockers:
  - mocked/missing:
  - restart/deploy status:
  - next retest question:

After this passes, retest manually through Telegram starting with:
1. what's my occupancy right now?
2. what's my ADR?
3. how much have I made this month?
4. how much revenue is secured for the next 30 days?
5. what price am I live at tonight?
6. how much i made last month?
```

## COO Notes

Known QA evidence is saved in `ORL_QA_TELEGRAM_BOT_TEST_RUN_2026-07-07.md`.

Current local OpenClaw workspace does not expose the live ORL repo or runtime. This prompt is the fix bridge for the repo-local Claude Code session.

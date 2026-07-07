# ORL Telegram Bot QA Test Run

Date: 2026-07-07
Source pack: `/Users/damianoagent/.openclaw/media/inbound/ORL_QA_Test_Pack_July2026---3bdf42d0-c86b-494a-9f56-5f41fe80b719.docx`
Target bot: `@OasisRevenuelab_bot`

## Status

Manual relay active.

Attempted first test message to `@OasisRevenuelab_bot`:

```text
what's my occupancy right now?
```

Telegram returned:

```text
USER_BOT_TO_BOT_DISABLED
```

Meaning: this agent is operating through a Telegram bot identity, and Telegram blocks bot-to-bot direct messages.

Damiano relayed screenshots from the bot conversation at 15:37 Dubai. The first slice shows enough to score Section A partially and log core fixes before continuing.

## Fallback QA Workflow

1. COO agent gives Damiano one exact test question at a time.
2. Damiano sends it to `@OasisRevenuelab_bot`.
3. Damiano forwards or pastes the bot reply back here.
4. COO agent scores the reply as `P`, `W` or `F`.
5. COO agent records the score, reason and fix needed.
6. Continue question by question.
7. Stop after any severe `F` if it points to a core bug, fix it, then continue.

## Section A Queue

| ID | Question | Status | Score | Notes |
|---|---|---|---|---|
| A1 | what's my occupancy right now? | Scored from screenshot | W | Bot answered `93%` and gave useful context, but did not label date window, source, gross/net basis or freshness. Needs `as of` timestamp and metric basis. |
| A2 | what's my ADR? | Scored from screenshot | W | Bot answered `AED 204 gross`, but over-framed the floor as "cost" and "losing revenue money on every night" without proving cost basis. Needs date window, gross/net basis and exact floor definition. |
| A3 | how much have I made this month? | Scored from screenshot | F | Bot should answer current month-to-date directly. It asked whether Damiano wanted MTD, then lost context after Damiano replied `this`. The later July MTD figures may be useful, but the conversational handling failed. |
| A4 | what's my cost floor? | Pending |  |  |
| A5 | how much revenue is secured for the next 30 days? | Scored from screenshot | F | Bot confused forward secured revenue with backward-looking July MTD realised revenue, then corrected only after pushback. If forward bookings are missing it must return a precise missing-input response, not answer with realised revenue. |
| A6 | when was my last booking? | Pending |  |  |
| A7 | what's the market doing? | Scored from screenshot | W | Bot gave a clear market direction, but the `Dubai STR occupancy is 23%` claim needs source, date, comp set and confidence. Market claims must not be unsupported. |
| A8 | what price am I live at tonight? | Waiting for visible answer |  | Damiano asked it, but no bot answer is visible in the provided screenshots. |

## Additional Relayed Question

| Question | Status | Score | Notes |
|---|---|---|---|
| how much i made last month? / June 2026 revenue challenge | Scored from screenshot | F | Bot first said it did not have full settled June, then gave `AED 2,597 gross / AED 2,182 net across 12 occupied nights`. Damiano challenged that June was around AED 11k. This is a severe canonical monthly revenue consistency failure until reconciled against Hostaway/report source. |

## Current Verdict After First Slice

This is not ready for client-facing autonomous use.

The bot has useful tone and can explain simple numbers, but it fails the main ORL product promise: same-state consistency across chat, report and booking data. The highest-risk issue is not wording. It is that the bot changes answer basis across the same conversation and uses stale or incomplete snapshots without clearly stopping.

## Fix Queue Before Continuing Deep QA

1. Add one canonical `RevenueState` answer path for:
   - current MTD realised revenue;
   - last closed month settled revenue;
   - rolling 30-day occupancy;
   - current ADR;
   - live price tonight;
   - secured forward revenue for next 30 days.
2. Every numeric answer must include:
   - date window;
   - source;
   - timestamp/freshness;
   - gross or net basis;
   - confidence or missing inputs.
3. Treat `this month` as current month-to-date by default. Do not ask a follow-up unless there are two genuinely plausible interpretations.
4. Treat `last month` as the last closed calendar month by default. On 2026-07-07 that means June 2026.
5. Forward-looking questions must use forward booking schedule and confirmed reservation values only. If missing, answer `I do not have forward booked revenue because [missing fields]`, not realised MTD revenue.
6. Market claims must include source/date/confidence, or be softened to directional language without pretending precision.
7. Add a contradiction guard: if a user says a number is wrong, the bot must re-check canonical state and report which data source it used rather than repeating the same stale figure.

## Next Test Decision

Pause deeper Section B-J QA until the June revenue and forward-booking paths are fixed or at least instrumented. Continue only A4, A6 and A8 if Damiano wants to finish Section A before fixes.

## Current Next Question

```text
what's my cost floor?
```

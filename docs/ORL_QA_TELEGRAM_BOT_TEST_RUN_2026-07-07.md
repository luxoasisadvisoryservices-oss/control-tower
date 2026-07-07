# ORL Telegram Bot QA Test Run

Date: 2026-07-07
Source pack: `/Users/damianoagent/.openclaw/media/inbound/ORL_QA_Test_Pack_July2026---3bdf42d0-c86b-494a-9f56-5f41fe80b719.docx`
Target bot: `@OasisRevenuelab_bot`

## Status

Blocked for direct bot-to-bot execution.

Attempted first test message to `@OasisRevenuelab_bot`:

```text
what's my occupancy right now?
```

Telegram returned:

```text
USER_BOT_TO_BOT_DISABLED
```

Meaning: this agent is operating through a Telegram bot identity, and Telegram blocks bot-to-bot direct messages.

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
| A1 | what's my occupancy right now? | Waiting for relay |  |  |
| A2 | what's my ADR? | Pending |  |  |
| A3 | how much have I made this month? | Pending |  |  |
| A4 | what's my cost floor? | Pending |  |  |
| A5 | how much revenue is secured for the next 30 days? | Pending |  |  |
| A6 | when was my last booking? | Pending |  |  |
| A7 | what's the market doing? | Pending |  |  |
| A8 | what price am I live at tonight? | Pending |  |  |

## Current Next Question

```text
what's my occupancy right now?
```


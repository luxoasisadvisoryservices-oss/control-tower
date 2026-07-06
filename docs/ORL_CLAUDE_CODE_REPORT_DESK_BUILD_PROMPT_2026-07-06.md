# ORL Claude Code Prompt - Report Desk Build

Created: 2026-07-06 Dubai  
Use: paste into Claude Code from inside the Oasis Revenue Lab repo.

```text
BUILD: the report desk, any report on demand in chat

You are working inside the Oasis Revenue Lab repo.

Goal:
Make the report desk live so any generated report can be requested from Telegram/chat and returned reliably, without the agent claiming report actions it cannot actually perform.

Business context:
Oasis Revenue Lab is a Telegram-first supervised revenue manager for Dubai short-term-rental operators. The monthly PDF/report shell is already an approved proof asset. The current week-of-5-July order is:
1. report desk;
2. residential proxy for Booking.com;
3. restart `oasis-bot`;
4. Telegram acceptance checks;
5. diagnosis-join build;
6. Thursday rank-pilot verdict.

Build scope:
Create or repair the report-desk layer so the bot can serve reports on demand in chat.

Required capabilities:
1. Report registry
   - Add a registry of available report types.
   - At minimum support:
     - June monthly report;
     - latest daily report;
     - latest weekly report.
   - Each registry entry must include:
     - report id;
     - display name;
     - type: monthly, daily, weekly, other;
     - generated file path or generator command;
     - generatedAt or source timestamp;
     - listing or portfolio scope;
     - status: available, stale, missing, blocked;
     - reason if blocked.

2. Chat command handling
   - Add or wire chat intent handling for requests such as:
     - `send me the June monthly report`
     - `send the latest daily report`
     - `send the weekly report`
     - `what reports are available?`
   - The bot must return the file when it exists and is allowed.
   - If the report is missing, stale, blocked, or not generated, it must say exactly what is missing and what command/action is needed.

3. Capability registry
   - Add a capability registry that lists what the bot can genuinely do.
   - The agent must not announce a capability unless it exists in the registry and passes its health check.
   - Add at least:
     - `report.list`
     - `report.send.monthly`
     - `report.send.daily`
     - `report.send.weekly`
     - `rank.airbnb.current`
     - `listing.booking_com.register_or_score`
   - For any capability not yet implemented, mark it `blocked` or `missing`, not `available`.

4. Source of truth
   - Reuse the existing report output paths and generated PDF/assets where possible.
   - Do not duplicate report generation logic unnecessarily.
   - If the repo currently has multiple report folders or naming schemes, create one small adapter layer rather than rewriting everything.

5. Safety and honesty
   - Do not fabricate a PDF/report.
   - Do not return stale reports without saying they are stale.
   - Do not claim Booking.com scoring works until the proxy path is available and tested.
   - Do not make live pricing, OTA, PMS, or channel changes.
   - Do not expose credentials or `.env` values in logs or chat.

6. Acceptance tests
   - Add tests or a manual test script covering:
     - report list shows available and missing reports honestly;
     - `send me the June monthly report` returns the approved June PDF if present;
     - daily report request returns latest daily report or a clear missing/stale reason;
     - weekly report request returns latest weekly report or a clear missing/stale reason;
     - unknown report request returns available options;
     - capability registry blocks unsupported claims.

7. Output expected from Claude Code
   - Files inspected.
   - Files changed.
   - Commands run.
   - Tests run and result.
   - Exact chat phrases tested.
   - What is still missing, mocked, blocked, or needs restart.
   - Whether `systemctl restart oasis-bot` is now safe to run.

Definition of done:
After the build, the bot can answer `what reports are available?` and `send me the June monthly report` from chat, either by sending the correct report or by returning a precise missing/stale/blocker reason. The capability registry prevents unsupported claims.
```

## COO Acceptance Checklist

After Claude Code finishes, collect:

- changed files;
- run/test command;
- test output;
- whether report retrieval works in chat;
- whether restart is required;
- any blockers;
- screenshot or copy of the three acceptance messages:
  - `what reports are available?`
  - `send me the June monthly report`
  - `send the latest daily report`


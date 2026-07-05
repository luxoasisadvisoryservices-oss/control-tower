# Oasis Revenue Lab Execution List - Week Of 5 July 2026

Created: 2026-07-05 18:16 Dubai  
Owner: Damiano + COO agent + Claude Code  
Status: COO record and current execution order

## Purpose

This is the week-of-5-July execution list for Oasis Revenue Lab. The goal is to close the myDataValue-style loop by making the report desk live, unlocking Booking.com access through a residential proxy, restarting the server, proving the Telegram acceptance flow, and then building the diagnosis brain.

The week should stay simple:

1. One paste into Claude Code.
2. One small proxy purchase.
3. One server restart.
4. One five-minute acceptance conversation.
5. One diagnosis-join build brief.
6. One Thursday pilot verdict.

## Step 1 - Now: Report Desk Build

Action: paste the brief titled `BUILD: the report desk, any report on demand in chat` into Claude Code.

What it does:

- Makes every generated report servable in chat on request.
- Supports June monthly, daily and weekly reports.
- Adds the capability registry so the agent cannot announce an action it cannot genuinely perform.
- Turns the monthly PDF/report work into a chat-accessible product surface.

Owner: Damiano pastes. Claude Code builds. COO agent tracks and records the result.  
Expected duration: 1-2 hours.  
Completion condition: Claude Code reports changed files, run command, tests, blockers, and confirms report retrieval works in chat.

## Step 2 - Parallel With Step 1: Residential Proxy Purchase

Action: buy one residential proxy so the server can reach Booking.com, which blocks datacentre addresses.

Approved options from the build report:

- Decodo residential, about USD 3.50 for the entry gigabyte.
- IPRoyal pay-as-you-go, about USD 4.90 per gigabyte, no subscription.

Budget line: under USD 5 per month. Usage at the intended politeness caps should be tiny, so one gigabyte should last months.

After purchase, collect:

- Host
- Port
- Username
- Password

Then give the credentials to Claude Code to set:

```text
OTA_PROXY_URL
```

in the server `.env`.

Owner: Damiano.  
COO status: approval-gated spend and credential item. The agent can track, prepare and record, but cannot buy, pay, or handle credentials without explicit approval and a safe handoff.  
Completion condition: proxy credentials exist and Claude Code confirms `OTA_PROXY_URL` is set without exposing secrets in logs.

## Step 3 - After Steps 1 And 2 Are Green: One Restart

Action:

```bash
systemctl restart oasis-bot
```

This activates the staged work in one controlled move:

- On-demand Airbnb rank checks in chat.
- Completed health check covering photos, amenities, recency and minimum stay.
- Booking.com end-to-end through the new proxy.
- Report desk.
- Approved monthly PDF automatic cadence.
- Terminology fixes.

Owner: Damiano.  
Expected duration: 2 minutes.  
Completion condition: service restarts cleanly and the bot responds.

## Step 4 - Same Day: Acceptance Conversation

Ask the bot three things in Telegram:

1. `which position are we on Airbnb right now?`
2. `send me the June monthly report`
3. Paste any Booking.com listing link.

Pass criteria:

- Airbnb rank question returns a real position with timestamp.
- June monthly report sends the approved PDF.
- Booking.com listing link is registered and scored.

Owner: Damiano.  
Expected duration: 5 minutes.  
Record: screenshot the conversation for COO record.  
Completion condition: all three tests genuinely deliver. If one fails, the failed test becomes the next Claude Code fix.

## Step 5 - Then: Diagnosis Join

Trigger: Step 4 passes.

Action: COO agent writes the next Claude Code brief for the formal reasoning layer.

Purpose: turn the collected data into one categorised verdict per listing across:

- Price
- Visibility
- Listing quality
- Promotions
- Market
- Booking.com/Airbnb health
- myDataValue-style diagnosis

Owner: COO agent writes the brief. Damiano pastes. Claude Code builds.  
Completion condition: each listing can produce one structured diagnosis with confidence, missing data, recommended action and evidence source.

## Step 6 - Thursday 10 July 2026: Pilot Verdict

Trigger: seven days of rank readings complete.

If the pilot is stable, ship two builds behind it:

1. Rank line inside the daily brief.
2. Portfolio redesign: short triage-style brief readable at 20 properties.

Owner: calendar trigger, then COO agent, then Claude Code.  
Completion condition: rank stability verdict recorded and the next build brief is issued.

## Also This Week - No Action Needed Yet

- Ariel / PriceLabs reply remains pending. It unlocks Zuhair's extension scope and possibly free Airbnb data.
- Wellspring's three listings wire into the approved monthly template after the restart settles.
- Monthly PDF template was approved on 5 July 2026.
- Graph design-pass is deferred until richer data exists.

## Purchase Summary

One item only this week:

- Residential proxy, under USD 5 per month.

No other purchases are approved or needed this week.

## COO Operating Rule

Do not let this become a broad build list. The current week is deliberately small:

1. Report desk.
2. Proxy.
3. Restart.
4. Acceptance conversation.
5. Diagnosis join.
6. Thursday pilot verdict.

End state by Friday: two-channel myDataValue agent live, diagnosis brain building, rank in the daily brief if stable, and the portfolio brief redesign shipping.

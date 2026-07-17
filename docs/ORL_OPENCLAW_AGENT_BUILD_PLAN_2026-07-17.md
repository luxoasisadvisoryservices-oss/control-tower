# ORL OpenClaw Agent Build Plan - 2026-07-17

## Answer To "How Do We Do It?"

Do not start by building a big SaaS platform.

Start by building one bounded ORL agent workspace that behaves like the COO agent, but only for revenue management and only for one client/portfolio.

The first goal is not scale. The first goal is a demoable agent conversation that a client can understand in 30 seconds.

## What We Build First

Build a private internal pilot called:

**Oasis Revenue Agent - Lux Oasis Workspace**

It needs five parts:

1. Client Workspace
   - One tenant: Lux Oasis / test operator.
   - One workspace memory/state file.
   - 3-5 listings.
   - Known pricing rules, owner notes, market assumptions, and team contacts.

2. RevenueState
   - One validated data object per listing/portfolio.
   - Pulls from PriceLabs/PMS/export/manual file first.
   - Stores date window, occupancy, ADR, RevPAR, booked nights, available nights, future revenue, freshness and source traces.

3. Agent Brain
   - A bounded system prompt and tools.
   - Answers only from RevenueState and saved client context.
   - Produces daily command cards.
   - Creates tasks and approval cards.
   - Refuses price changes or owner-facing sends without approval.

4. Channel Interface
   - Telegram first.
   - Later Slack/WhatsApp.
   - Client asks questions in the channel.
   - Agent replies like an operator, not like a report.

5. Control Dashboard
   - Evidence centre only.
   - Shows RevenueState, source freshness, tasks, approvals, recommendation ledger and weekly owner update.
   - The agent should use it; the client should not have to inspect it manually every day.

## The First Demo Conversation

The demo must show the agent doing real operating work.

Example:

Client: "What matters today?"

Agent:
- Unit A is under pace for the next 10 days.
- Market data freshness is verified/unverified.
- Current minimum stay may be blocking gap nights.
- Suggested action: reduce min stay on 21-23 July from 3 nights to 2 nights, keep price above floor.
- Approval needed before live price/restriction change.
- Task created for pricing assistant/team to verify the calendar.

Then the agent remembers the task until done/blocker.

This is the product moment. Not the PDF.

## Build Sequence

### Phase 1 - Fake The Connectors, Prove The Conversation

Use exports or fixture data first.

Build:
- `clients/lux-oasis/workspace.md`
- `clients/lux-oasis/revenue_state.json`
- `clients/lux-oasis/tasks.json`
- `clients/lux-oasis/recommendation_ledger.json`
- a Telegram/chat command handler
- a daily command card generator
- a weekly owner update generator

Acceptance:
- Ask 10 questions and get useful, consistent answers.
- No stale market number is treated as fresh.
- Agent creates and remembers tasks.
- Agent asks approval before any pricing/write action.

### Phase 2 - Add Real Read-Only Data

Connect read-only sources:
- PriceLabs export/API if available.
- Hostaway/PMS export/API if available.
- Booking/Airbnb listing health data if available.
- Manual upload fallback.

Keep every source timestamped.

No live price writes yet.

### Phase 3 - Make It Multi-Tenant

Turn the Lux Oasis workspace into a repeatable tenant template:

- `tenant_id`
- users
- listings
- data sources
- pricing rules
- approval rules
- team members
- memory/state
- dashboard
- channel mapping

Hard rule:
No client can ever see another client's data.

### Phase 4 - Sell 2-3 Pilots

Sell as:

**Supervised Revenue Operator Agent**

Offer:
- daily command card;
- revenue Q&A;
- listing underperformance diagnosis;
- team task routing;
- weekly owner/client update;
- human-reviewed recommendations.

Do not promise autonomous pricing.

### Phase 5 - Productise

After pilots:
- onboarding wizard;
- client dashboard;
- reusable connector setup;
- reusable prompts and skills;
- audit logs;
- approval centre;
- billing by listing count.

## What Not To Do

Do not:

- give clients full OpenClaw workspace access;
- connect broad Gmail/Slack/Drive permissions across tenants;
- sell autonomous price changes before trust is proven;
- build a large dashboard before the agent conversation works;
- rely on an LLM to calculate revenue metrics;
- let Telegram bot logic become the product brain.

## Technical First Sprint

Create an ORL repo structure:

```text
orl/
  apps/
    api/
    telegram-agent/
    dashboard/
  packages/
    core/
    agent/
    connectors/
  clients/
    lux-oasis/
      workspace.md
      revenue_state.json
      tasks.json
      recommendation_ledger.json
  docs/
    product/
    architecture/
    qa/
```

First sprint tasks:

1. Create the Lux Oasis client workspace.
2. Add fixture RevenueState for 3-5 listings.
3. Build the question-answer handler against RevenueState.
4. Build daily command card output.
5. Build task/approval-card state.
6. Build weekly owner update output.
7. Add regression tests for stale market data, occupancy windows and unsupported claims.
8. Record a demo conversation.

## Minimum Sellable Demo

The demo is ready when it can show:

- "What should I do today?"
- "Why is this listing not booking?"
- "What should I tell the owner?"
- "Create a task for the team."
- "What is still waiting?"
- "Prepare the weekly update."

And the agent answers like an operator with source freshness, action, owner, approval and memory.

## Commercial Packaging

Name options:

- Oasis Revenue Agent
- Revenue Operator Agent
- STR Revenue COO
- Revenue Desk Agent

Best initial offer:

**Revenue Operator Agent + Human Review**

Pricing idea:

- setup fee;
- monthly base;
- per-listing fee;
- optional advisory review by Damiano / Lux Oasis Advisory.

Start with operators who already feel revenue-management pain and have enough listings to pay.

## Immediate Next Action

Use this as the implementation brief for Claude Code inside the ORL repo:

Build the Lux Oasis ORL agent workspace first. Use fixture/export data. Do not touch production. Do not build the whole SaaS yet. The first milestone is a working agent conversation that uses RevenueState, creates tasks, requests approval, remembers status and produces a weekly owner update.

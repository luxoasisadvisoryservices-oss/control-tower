# ORL OpenClaw Agent Build Plan - 2026-07-17

## Answer To "How Do We Do It?"

Do not start by building a big SaaS platform.

Start by building one bounded ORL agent workspace that behaves like the COO agent, but only for revenue management and only for one client/portfolio.

The first goal is not scale. The first goal is a demoable agent conversation that a client can understand in 30 seconds.

## What We Build First

Build a private internal pilot called:

**Oasis Revenue Agent - Lux Oasis Workspace**

It needs its own bounded OpenClaw-style runtime, not just a prompt inside the main COO agent.

The main COO agent stays outside the product as founder/operator supervisor. The sellable ORL agent gets its own workspace, memory, ORL-only tools, policy rules, audit log, follow-up worker and channel adapter.

It needs six parts:

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

6. Agent Intelligence Layer
   - This is the missing "super agent" layer.
   - It connects conversation, RevenueState, memory, tools, tasks, approvals and follow-ups.
   - It decides whether to answer, ask for data, create a task, request approval, escalate, or wait.
   - It is not just a prompt. It is an operating loop.

The intelligence layer is what makes ORL feel agentic instead of like a bot.

7. Dedicated ORL Runtime
   - A separate ORL OpenClaw-style runtime for the product.
   - One isolated workspace per client/tenant.
   - ORL-only tools and memory.
   - No broad access to Damiano's main workspace.
   - Supervisor logs for hybrid human review.

The product should feel like OpenClaw, but it should not expose full OpenClaw.

## The Missing Intelligence Connection

The product needs an agent orchestrator between the chat interface and ORL Core.

Call it:

**ORL Agent Orchestrator**

It should run this loop:

1. Understand the message
   - Is the user asking for a number, diagnosis, action, task, owner update, report, or approval?

2. Load context
   - Tenant.
   - Listing/portfolio.
   - Current RevenueState.
   - Past recommendations.
   - Open tasks.
   - Approval rules.
   - Team roles.
   - Client memory.

3. Choose the next move
   - Answer now.
   - Ask for missing data.
   - Run a tool.
   - Create a task.
   - Create an approval card.
   - Draft an owner/team message.
   - Escalate to human review.
   - Do nothing and keep watching.

4. Use tools
   - Read RevenueState.
   - Read source traces.
   - Read recommendation ledger.
   - Create/update tasks.
   - Generate command card.
   - Generate owner update.
   - Run QA checks.
   - Pull fresh data when available.

5. Write state back
   - Save the answer.
   - Save new task/approval.
   - Save recommendation.
   - Save waiting status.
   - Save what evidence was used.

6. Follow up
   - If a task is waiting, check later.
   - If data is stale, mark stale.
   - If someone replies, continue the thread.

This is the layer that makes it feel like a real agent.

Without this layer, ORL is just a chat wrapper around reports.

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

### Phase 0 - Import The Hetzner Work Safely

Yes, include the work already done on Hetzner.

But do it as a controlled migration, not by continuing to patch the live bot.

Use the existing Hetzner work as source material:

- current Telegram bot logic;
- existing prompts;
- daily brief code;
- report generation code;
- PriceLabs / PMS parsing work;
- data fixtures and exports;
- known bugs and fixes;
- working message flows;
- useful utilities;
- prior Claude Code work;
- deployment lessons.

Migration method:

1. Copy the current Hetzner ORL code into the new repo under `legacy/`.
2. Do not treat `legacy/` as the final architecture.
3. Identify useful modules and promote them one by one into `packages/core`, `packages/connectors`, `apps/telegram-agent` or `apps/dashboard`.
4. Add tests before trusting each promoted piece.
5. Keep the live production bot locked until the new dev/staging path proves itself.

The principle:

Use the Hetzner work as the raw material and proof of learning. Do not use the patched Hetzner bot as the product foundation.

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
    channel-adapters/
    dashboard/
    supervisor-console/
  packages/
    core/
    orchestrator/
    tools/
    policy/
    qa/
    connectors/
  legacy/
    hetzner-bot/
  tenants/
    lux-oasis/
      workspace.md
      revenue_state.json
      tasks.json
      recommendation_ledger.json
      memory.md
  docs/
    product/
    architecture/
    qa/
```

First sprint tasks:

1. Copy the current Hetzner ORL bot/code into `legacy/hetzner-bot/`.
2. Inventory what is reusable: prompts, parsers, report code, Telegram handlers, validators, exports and fixtures.
3. Create the Lux Oasis client workspace.
4. Add fixture RevenueState for 3-5 listings.
5. Promote only the useful tested pieces from `legacy/` into the new clean packages.
6. Build the dedicated ORL runtime skeleton: tenant workspace, ORL-only tool registry, policy gates, audit log and channel adapter.
7. Build the Agent Orchestrator: intent detection, context loading, next-action decision, tool routing, state write-back and follow-up status.
8. Build the question-answer handler against RevenueState.
9. Build daily command card output.
10. Build task/approval-card state.
11. Build weekly owner update output.
12. Add supervisor logs and `needs_human_review` flags.
13. Add regression tests for stale market data, occupancy windows, unsupported claims, cross-tenant access and incorrect tool choice.
14. Record a demo conversation.

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

Build the Lux Oasis ORL agent workspace first. Import the existing Hetzner bot/work into `legacy/hetzner-bot/`, then promote useful tested pieces into the clean ORL architecture. Use fixture/export data first. Do not touch production. Do not build the whole SaaS yet. The first milestone is a working agent conversation that uses RevenueState, creates tasks, requests approval, remembers status and produces a weekly owner update.

The key missing layer is `packages/orchestrator` inside a dedicated ORL OpenClaw-style runtime: the agent intelligence loop that reads tenant context, selects ORL-only tools, creates tasks/approvals, writes state, and follows up. Build this before over-investing in dashboard polish or connectors.

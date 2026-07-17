# ORL Dedicated Runtime Build Sequence - 2026-07-17

## Objective

Build the sellable ORL agent as its own OpenClaw-style runtime:

- dedicated to ORL only;
- Claude underneath for reasoning;
- strict ORL orchestrator around Claude;
- tenant-isolated;
- supervised for hybrid mode;
- scalable to 60 / 100 / 200 clients.

Do not start by building a big SaaS UI.

Build one working Lux Oasis ORL runtime first.

## Target Architecture

```text
Client channel
  -> channel adapter
  -> tenant resolver
  -> ORL context loader
  -> Claude reasoning call
  -> ORL policy validator
  -> ORL tool registry
  -> state writer
  -> response / task / approval / follow-up
  -> supervisor audit log
```

Claude is inside the runtime. It does not control the runtime.

## Repository Structure

Create or reshape the ORL repo like this:

```text
orl-runtime/
  apps/
    api/
    channel-adapters/
      telegram/
      slack/
      whatsapp/
    supervisor-console/
  packages/
    orchestrator/
      agent-profile.ts
      context-loader.ts
      intent-router.ts
      claude-decision.ts
      policy-validator.ts
      tool-router.ts
      state-writer.ts
      follow-up-worker.ts
    core/
      revenue-state.ts
      source-trace.ts
      task.ts
      approval.ts
      recommendation.ts
      tenant.ts
    tools/
      get-revenue-state.ts
      list-source-traces.ts
      create-task.ts
      create-approval-card.ts
      create-recommendation.ts
      generate-daily-card.ts
      generate-weekly-update.ts
      run-revenue-qa.ts
    policy/
      allowed-actions.ts
      approval-gates.ts
      tenant-isolation.ts
    qa/
      turn-scorer.ts
      stale-data-check.ts
      unsupported-claim-check.ts
    connectors/
      pricelabs/
      hostaway/
      csv-import/
  tenants/
    lux-oasis/
      workspace.json
      revenue_state.json
      tasks.json
      approvals.json
      recommendation_ledger.json
      memory.md
  legacy/
    hetzner-bot/
  docs/
```

## Phase 0 - Import Hetzner Work

1. Copy current Hetzner ORL bot into `legacy/hetzner-bot/`.
2. Do not run it as the product.
3. Inventory reusable parts:
   - prompts;
   - Telegram handlers;
   - report generators;
   - PriceLabs parsing;
   - PMS parsing;
   - fixtures;
   - bug fixes;
   - working message flows.
4. Promote only tested pieces into `packages/`.

Output:

- `legacy/hetzner-bot/` exists.
- `docs/legacy-inventory.md` lists what is reusable.

## Phase 1 - Build The Runtime Skeleton

Build local/file-backed first. No database needed yet.

Create:

- tenant resolver;
- Lux Oasis workspace;
- fake channel adapter;
- ORL agent profile;
- ORL-only tool registry;
- policy validator;
- audit log.

Acceptance test:

- unknown tenant is rejected;
- cross-tenant access is impossible;
- non-ORL action is rejected;
- live price/write/send action creates approval, not action.

## Phase 2 - Build The Claude Decision Loop

Claude should receive a prepared context pack, not the whole workspace.

Input to Claude:

```json
{
  "agent_type": "orl_revenue_operator",
  "tenant": "...",
  "user": "...",
  "message": "...",
  "revenue_state_summary": "...",
  "open_tasks": [],
  "pending_approvals": [],
  "source_freshness": [],
  "allowed_actions": []
}
```

Claude output must be structured:

```json
{
  "intent": "revenue_diagnosis",
  "action": "create_task",
  "answer": "...",
  "tool_request": {
    "name": "createTask",
    "args": {}
  },
  "confidence": "medium",
  "needs_human_review": false,
  "evidence_used": []
}
```

The runtime validates the output before tool execution.

Acceptance test:

- Claude cannot request shell/general tools;
- Claude cannot switch tenant;
- stale data triggers `mark_data_stale` or review;
- pricing change creates approval card;
- answer includes evidence/source freshness.

## Phase 3 - Build ORL Tools

Build these first:

1. `getRevenueState`
2. `listSourceTraces`
3. `listOpenTasks`
4. `createTask`
5. `updateTask`
6. `createApprovalCard`
7. `createRecommendation`
8. `generateDailyCommandCard`
9. `generateWeeklyOwnerUpdate`
10. `runRevenueQA`

All tools require `tenant_id`.

All write tools append to audit log.

## Phase 4 - Build The First Conversation Demo

The first demo must handle:

1. "What matters today?"
2. "Why is this listing underperforming?"
3. "Create a task for Lin."
4. "What is waiting?"
5. "Prepare the weekly owner update."
6. "Can I change the price?"

Expected behaviour:

- answers from RevenueState;
- identifies stale data;
- creates tasks;
- creates approval cards;
- remembers waiting/done/blocker;
- refuses unsupported work;
- logs every turn.

## Phase 5 - Build Supervisor Console

First version can be simple.

Views:

- client/tenant list;
- agent health;
- data freshness;
- open tasks;
- pending approvals;
- QA flags;
- risky conversations;
- next human action.

Each turn log must include:

- tenant;
- user;
- channel;
- intent;
- tool used;
- RevenueState version;
- source traces;
- answer summary;
- confidence;
- policy result;
- human review flag.

## Phase 6 - Add Read-Only Connectors

Only after the fixture demo works:

1. PriceLabs read-only fetch/import.
2. Hostaway/PMS read-only fetch/import.
3. CSV/manual upload fallback.
4. Source freshness and reconciliation.

No live price writes.

## Phase 7 - Prepare For 60+ Clients

Move from file-backed to production infrastructure:

- Postgres or equivalent database;
- `tenant_id` on every row;
- row-level security or strict tenant-scoped queries;
- encrypted connector credentials;
- background queue for data refresh and follow-up;
- audit log table;
- supervisor queue;
- rate limits per tenant;
- billing by tenant/listing count;
- onboarding flow.

## First 7-Day Build Sprint

Day 1:

- create `orl-runtime` structure;
- import Hetzner into `legacy/hetzner-bot/`;
- create Lux Oasis tenant workspace.

Day 2:

- build tenant resolver, ORL agent profile and ORL-only tool registry.

Day 3:

- build context loader and Claude structured decision call.

Day 4:

- build policy validator, tool router and state writer.

Day 5:

- build task, approval and recommendation write-back.

Day 6:

- build follow-up worker and daily command card.

Day 7:

- run 20 demo conversations, fix failures, record best flows.

## Claude Code Prompt

Use this prompt inside the ORL repo:

```text
Build the first local ORL dedicated runtime.

Goal: one Lux Oasis tenant workspace, one ORL orchestrator, Claude reasoning underneath, ORL-only tools, file-backed state, audit log, and a fake channel adapter for demo conversations.

Do not connect production. Do not build a large dashboard. Do not add live price writes. Import existing Hetzner work into legacy/hetzner-bot/ first, inventory reusable pieces, then build the clean runtime.

Required first flow:
message -> tenant resolver -> context loader -> Claude structured decision -> policy validator -> ORL tool router -> state writer -> response.

Tools allowed:
getRevenueState, listSourceTraces, listOpenTasks, createTask, updateTask, createApprovalCard, createRecommendation, generateDailyCommandCard, generateWeeklyOwnerUpdate, runRevenueQA.

Acceptance:
- unknown tenant rejected;
- non-ORL request refused;
- cross-tenant access impossible;
- stale data marked stale/unverified;
- pricing/write actions create approval cards only;
- every turn logs tenant, intent, tools, RevenueState version, evidence, confidence, policy result and human review flag.
```

## Commercial Rule

Do not sell "a dashboard".

Sell:

**Supervised ORL Revenue Operator Agent**

The dashboard/supervisor console is the control room. The product moment is the useful agent conversation.

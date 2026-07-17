# ORL Agent Orchestrator Scope And Scale Plan - 2026-07-17

## Core Answer

The ORL orchestrator should not be a general agent.

It should live inside its own dedicated ORL OpenClaw-style runtime and be a scoped revenue-operations orchestrator with:

- one domain: short-term-rental revenue operations;
- one tenant at a time;
- one allowlisted tool registry;
- one policy engine;
- one state store;
- one audit log;
- no arbitrary file/server access;
- no broad OpenClaw workspace access;
- no price/write/send action without approval.

The prompt gives it personality and judgement. The code gives it boundaries.

The product should not use Damiano's main COO agent workspace as the client runtime. The COO agent supervises the ORL product, but each ORL client agent runs in its own bounded ORL workspace with its own memory, state, tools, policy, audit log and follow-up queue.

## Step By Step Build

### Step 1 - Define The ORL Hat

Create an ORL agent profile:

```json
{
  "agent_type": "orl_revenue_operator",
  "domain": "short_term_rental_revenue_management",
  "allowed_actions": [
    "answer_revenue_question",
    "diagnose_listing",
    "create_internal_task",
    "create_approval_card",
    "draft_owner_update",
    "generate_daily_command_card",
    "generate_weekly_update",
    "mark_data_stale",
    "escalate_to_human"
  ],
  "blocked_actions": [
    "change_live_prices",
    "send_owner_message_without_approval",
    "access_other_tenants",
    "read_unrelated_files",
    "use_general_workspace_tools",
    "make_financial_or_legal_commitments"
  ]
}
```

This makes the "hat" explicit. The agent is not "an agent that can do everything". It is "the revenue operator hat".

### Step 2 - Build The Tool Registry

Do not give it every tool.

Give it only ORL tools:

- `getRevenueState(tenant_id, listing_id, window)`
- `listSourceTraces(tenant_id, listing_id)`
- `listOpenTasks(tenant_id)`
- `createTask(tenant_id, payload)`
- `updateTask(tenant_id, task_id, status)`
- `createApprovalCard(tenant_id, payload)`
- `createRecommendation(tenant_id, payload)`
- `listRecommendationLedger(tenant_id, listing_id)`
- `generateDailyCommandCard(tenant_id)`
- `generateWeeklyOwnerUpdate(tenant_id)`
- `runRevenueQA(tenant_id, payload)`

No shell. No global Gmail. No broad Slack. No file system. No cross-tenant search.

### Step 2A - Build The Dedicated ORL Runtime

Create the product runtime before adding more conversation polish:

```text
orl-runtime/
  apps/
    api/
    channel-adapters/
    supervisor-console/
  packages/
    orchestrator/
    core/
    tools/
    policy/
    qa/
    connectors/
  tenants/
    lux-oasis/
```

Each tenant workspace stores:

- client profile;
- users and roles;
- listing records;
- RevenueState;
- tasks;
- approvals;
- recommendation ledger;
- memory;
- channel mappings;
- connector configuration;
- audit log.

This is the ORL version of OpenClaw. It gives the agent a home, memory and tools, while keeping it narrow enough to sell safely.

### Step 3 - Build The Context Loader

Every message must resolve to:

- tenant;
- user;
- role;
- channel;
- listing/portfolio if mentioned;
- current RevenueState;
- open tasks;
- pending approvals;
- recommendation history;
- source freshness;
- client memory.

If tenant is unclear, the agent must ask for workspace before answering.

### Step 4 - Build The Intent Router

Classify the message into one of these intents:

- metric question;
- revenue diagnosis;
- listing health question;
- pricing/restriction suggestion;
- task request;
- approval decision;
- owner/client update;
- report request;
- data freshness check;
- general unsupported request.

Unsupported requests are refused or redirected.

### Step 5 - Build The Decision Policy

The orchestrator chooses one next move:

- answer from validated data;
- ask for missing data;
- run ORL tool;
- create internal task;
- create approval card;
- draft update;
- escalate to human;
- mark data stale;
- wait and follow up.

It must not jump straight from question to confident answer if data freshness or metric definition is missing.

### Step 6 - Build State Write-Back

Every meaningful action writes back to state:

- answer log;
- evidence used;
- task;
- approval;
- recommendation;
- stale-data flag;
- waiting status;
- next follow-up time.

This is why it feels agentic: it remembers and continues.

### Step 7 - Build Follow-Up Worker

Separate from chat, run a worker that checks:

- overdue tasks;
- unanswered approvals;
- stale source data;
- open recommendations;
- scheduled daily command card;
- scheduled weekly update.

The agent is not only reactive. It watches.

### Step 8 - Add The Channel Adapter

Telegram/Slack/WhatsApp should only do:

- receive message;
- identify tenant/user/channel;
- pass message to orchestrator;
- send back response.

No business logic in the channel adapter.

### Step 9 - Add Tests

Required tests:

- cannot answer without tenant;
- cannot access another tenant;
- cannot call non-ORL tools;
- cannot change prices;
- stale market number becomes stale/unverified;
- unclear occupancy window returns review code;
- task request creates task and follow-up status;
- pricing suggestion creates approval card, not live change;
- unsupported general request is refused or redirected.

### Step 10 - Scale It

Scale by adding tenants, not by copying agents manually.

Each tenant has:

- tenant record;
- users/roles;
- listing records;
- connectors;
- RevenueState;
- tasks;
- approvals;
- recommendation ledger;
- memory;
- channel mappings.

The orchestrator service can be stateless. It loads tenant state, performs one turn, writes state back.

For scale:

- use a database with `tenant_id` on every row;
- use row-level security or strict tenant-scoped queries;
- use queues for background pulls and follow-ups;
- use audit logs;
- use idempotency keys for tasks/approvals;
- cache read-only RevenueState where safe;
- keep connector workers separate from chat;
- keep pricing/write actions behind approval gates.

## Minimal First Implementation

Build this first:

```text
packages/orchestrator/
  agent_profile.ts
  tool_registry.ts
  context_loader.ts
  intent_router.ts
  decision_policy.ts
  state_writer.ts
  follow_up_worker.ts
  tests/
```

First flow:

1. Telegram message arrives.
2. Channel adapter resolves tenant/user.
3. Orchestrator loads context.
4. Intent router classifies.
5. Decision policy selects next move.
6. ORL tool runs if needed.
7. Response is generated.
8. State writer saves task/approval/recommendation/evidence.
9. Follow-up worker checks later.

## Why This Is Scalable

It scales because the intelligence is reusable and the data is tenant-scoped.

For client 1, 2, 20 or 200:

- same orchestrator;
- same tool registry;
- same policies;
- different tenant data;
- different connectors;
- different memory;
- different channel.

The only thing that changes per client is configuration and data.

## What To Avoid

Do not build:

- one custom bot per client;
- one prompt per client as the main architecture;
- broad client access to OpenClaw;
- dashboard first;
- direct writes before approvals;
- all connectors before the conversation works.

## First Sellable Demo

Demo the orchestrator, not only the report:

Client: "What should I do today?"

Agent:

- Loads RevenueState.
- Finds stale market data.
- Flags one listing under pace.
- Creates a pricing-review task.
- Creates an approval card for any live restriction change.
- Saves waiting status.
- Says what it will check next.

That is the agentic moment.

# ORL Dedicated OpenClaw Runtime - 2026-07-17

## Core Decision

The sellable ORL agent should have its own OpenClaw-style runtime and orchestrator.

It should not run as a loose prompt inside Damiano's main COO agent workspace.

Claude can be the reasoning engine underneath, but Claude is not the product boundary.

The ORL runtime controls:

- what context Claude receives;
- which ORL tools Claude can request;
- which tenant Claude is operating inside;
- what gets written back to state;
- which actions require approval;
- which turns are escalated to supervisor review.

The product architecture is:

```text
Client channel
  -> ORL client workspace
  -> ORL orchestrator
  -> Claude / reasoning model inside ORL boundaries
  -> ORL-only tools
  -> tenant RevenueState / tasks / approvals / memory / audit log
  -> ORL supervisor console
  -> human review when needed
```

Damiano's main COO agent stays above the product as founder/operator/supervisor. It should not be the runtime sold to clients.

## What "Own OpenClaw" Means

Each ORL client agent needs a bounded operating environment:

- its own tenant workspace;
- its own memory/state;
- its own RevenueState records;
- its own task and approval queue;
- its own recommendation ledger;
- its own channel mapping;
- its own connector credentials;
- its own audit log;
- its own follow-up worker;
- its own ORL-only tool registry;
- its own policy rules.

This makes the agent feel like an operator, not a chatbot.

## What It Must Not Have

The ORL runtime must not receive:

- Damiano's full OpenClaw workspace;
- broad shell/file access;
- broad Gmail, Slack or Drive access;
- access to other clients;
- live pricing writes without approval;
- owner/client sends without approval;
- unrelated business memories;
- generic "do anything" tools.

The boundaries must be enforced by code, not only by prompt.

## Runtime Layers

### 1. ORL Workspace Runtime

This is the client-specific "home".

It stores:

- client profile;
- team roles;
- listing records;
- pricing rules;
- owner rules;
- RevenueState;
- tasks;
- approvals;
- recommendation ledger;
- memory;
- channel threads.

### 2. ORL Orchestrator

This is the agent brain.

It:

- understands the client message;
- loads only that tenant's context;
- selects an ORL tool;
- creates tasks or approval cards;
- answers from validated RevenueState;
- marks stale data;
- writes state back;
- schedules follow-up.

It should call Claude for judgement, explanation, drafting and conversation.

It should not let Claude roam freely. Claude receives a prepared ORL context pack, chooses from ORL-only actions, and returns a structured decision that the runtime validates before anything is saved or sent.

Simple loop:

```text
message -> context loader -> Claude reasoning call -> policy check -> ORL tool call -> state write-back -> response/follow-up
```

### 3. ORL Tool Registry

Only ORL tools are allowed:

- `getRevenueState`;
- `listSourceTraces`;
- `listOpenTasks`;
- `createTask`;
- `updateTask`;
- `createApprovalCard`;
- `createRecommendation`;
- `listRecommendationLedger`;
- `generateDailyCommandCard`;
- `generateWeeklyOwnerUpdate`;
- `runRevenueQA`.

Claude can request these tools. The runtime decides whether the request is valid.

### 4. ORL Supervisor Runtime

This is for hybrid mode.

It watches all client agents and flags:

- stale data;
- unsupported claims;
- wrong metric/window;
- risky recommendations;
- wrong tool choice;
- failed follow-ups;
- cross-tenant risk;
- pending approvals;
- conversations needing human review.

### 5. Human Revenue Lead

At first, Damiano.

Later, trained revenue ops staff.

They only review yellow/red items and high-value decisions.

## Scaling Model

Do not create one custom bot per client.

Create one ORL runtime template and provision one isolated workspace per client.

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
    client-002/
    client-003/
```

Every database row and object must carry `tenant_id`.

Every tool call must require `tenant_id`.

Every answer must log the RevenueState version and source traces used.

## Scaling To 60 / 100 / 200 Clients

The scalable product is not 60, 100 or 200 manually managed agents.

It is one multi-tenant ORL runtime:

```text
One ORL platform
  -> many isolated tenant workspaces
  -> one shared orchestrator codebase
  -> tenant-scoped data and tools
  -> shared supervisor console
  -> human review queues
```

For 1-5 clients:

- Damiano can be the human revenue lead;
- every yellow/red item can be reviewed manually;
- the priority is product proof and demo-quality conversations.

For 5-20 clients:

- add one trained revenue ops reviewer;
- supervisor console handles daily triage;
- Damiano reviews only red/high-value cases and product quality.

For 20-60 clients:

- split clients by portfolio size or market;
- add reviewer queues by priority;
- automate routine green answers, daily cards and weekly drafts;
- keep price writes and owner sends approval-gated.

For 60-200 clients:

- agents must be managed by exception only;
- use background queues for data refresh, follow-ups, weekly updates and QA;
- supervisor agent pre-scores turns as green/yellow/red;
- revenue managers work only the yellow/red queues;
- Damiano reviews enterprise clients, product QA and commercial strategy.

The core scaling metric is not number of agents. It is:

- percentage of turns handled green;
- number of yellow/red items per reviewer per day;
- data freshness rate;
- approval turnaround time;
- revenue impact per client;
- churn risk / client trust.

If too many turns become yellow/red, the product is not ready to scale.

## First Build Order

1. Create the Lux Oasis ORL workspace as tenant 001.
2. Import Hetzner work into `legacy/hetzner-bot/`.
3. Build the ORL runtime skeleton: workspace, tools, policy, audit log.
4. Build the orchestrator loop.
5. Connect fixture RevenueState.
6. Add task, approval and recommendation write-back.
7. Add follow-up worker.
8. Add supervisor log and QA flags.
9. Run a 7-day internal Lux Oasis pilot.
10. Use the best conversations as the sales demo.

## Infrastructure Needed Before 60+ Clients

Before serious scale, ORL needs:

- database with strict `tenant_id` isolation;
- encrypted connector credentials per tenant;
- idempotent background jobs;
- queue system for data refresh and follow-ups;
- audit log for every turn and tool call;
- supervisor console;
- rate limits per tenant;
- alerting for failed connectors and stale data;
- billing tied to tenant/listing count;
- onboarding flow that provisions a workspace without custom engineering each time.

## Product Rule

The sellable product is not full OpenClaw access.

It is:

**Dedicated ORL OpenClaw-style Revenue Operator Agent, tenant-isolated, supervised, and approval-gated.**

This is how it can feel like the main COO agent while staying narrow enough to sell safely.

Claude gives the intelligence. The ORL orchestrator gives the job description, memory, tools, boundaries, follow-up and supervision.

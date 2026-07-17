# ORL Server Orchestrator Deployment Path - 2026-07-17

## Core Answer

Yes, install the ORL orchestrator on a server, but do it as a staged product runtime.

Do not patch the current live Hetzner bot directly into the final product.

The path is:

```text
local build
  -> fixture demo
  -> staging server
  -> Hetzner legacy import
  -> read-only connectors
  -> Lux Oasis Telegram pilot
  -> supervisor console
  -> client pilot template
  -> production multi-tenant runtime
```

## What Gets Installed On The Server

Install the ORL runtime as services:

1. `orl-api`
   - Receives channel messages.
   - Resolves tenant/user.
   - Calls orchestrator.
   - Returns response.

2. `orl-worker`
   - Runs follow-ups.
   - Refreshes data.
   - Checks stale sources.
   - Generates daily/weekly cards.

3. `orl-supervisor`
   - Shows health, QA flags, approvals and review queue.

4. Database
   - Tenants.
   - Users.
   - Listings.
   - RevenueState.
   - Tasks.
   - Approvals.
   - Recommendations.
   - Audit logs.

5. Queue
   - Follow-ups.
   - Data refresh.
   - QA scoring.
   - Weekly updates.

For the first proof, this can be file-backed locally. For server staging, use Postgres plus a queue.

## Step-By-Step Build Path

### Step 1 - Freeze Production

Keep the existing Hetzner ORL bot working, but stop treating it as the product architecture.

Rules:

- no risky live rewrite;
- no broad production refactor;
- no live pricing writes;
- current bot becomes source material.

### Step 2 - Create The ORL Runtime Repo

Create or reshape the repo:

```text
orl-runtime/
  apps/api/
  apps/supervisor-console/
  packages/orchestrator/
  packages/core/
  packages/tools/
  packages/policy/
  packages/qa/
  packages/connectors/
  tenants/lux-oasis/
  legacy/hetzner-bot/
```

### Step 3 - Import Hetzner Into Legacy

Copy current Hetzner code into:

```text
legacy/hetzner-bot/
```

Then create:

```text
docs/legacy-inventory.md
```

Inventory:

- prompts;
- Telegram handlers;
- daily report logic;
- PriceLabs/PMS parsing;
- report generation;
- fixtures;
- bug fixes;
- working flows;
- known failures.

### Step 4 - Build Local Fixture Runtime

Before server deployment, prove the conversation locally.

Use:

- fake channel input;
- file-backed Lux Oasis tenant;
- fixture RevenueState;
- task/approval JSON files;
- Claude structured decision;
- ORL-only tool registry.

Acceptance:

- "What matters today?" works.
- "Why is this listing underperforming?" works.
- "Create a task for Lin" writes state.
- "Can I change price?" creates approval only.
- stale data is marked stale/unverified.

### Step 5 - Add Claude Code Build Loop

Use Claude Code to build feature slices, not the whole product in one prompt.

Order:

1. repo skeleton;
2. tenant workspace;
3. tool registry;
4. context loader;
5. Claude structured decision;
6. policy validator;
7. state writer;
8. follow-up worker;
9. supervisor log;
10. demo script/tests.

Each slice must include tests.

### Step 6 - Deploy To Staging Server

Only after local demo works.

Install on Hetzner or a separate staging VM:

- Node runtime;
- process manager such as `systemd` or `pm2`;
- Postgres;
- Redis/queue or simple worker queue;
- env secrets;
- reverse proxy;
- logs;
- backups.

Use staging domain/subdomain:

```text
orl-staging.luxoasis...
```

Do not attach real clients yet.

### Step 7 - Move File State To Database

Convert local JSON state into database tables:

- `tenants`;
- `users`;
- `listings`;
- `revenue_states`;
- `source_traces`;
- `tasks`;
- `approvals`;
- `recommendations`;
- `audit_logs`;
- `follow_ups`;
- `connector_accounts`.

Every row must have `tenant_id`.

### Step 8 - Plug In Existing Built Pieces One By One

Promote from legacy only after tests:

1. prompts;
2. Telegram flow;
3. daily report logic;
4. PriceLabs parser;
5. PMS parser;
6. report generator;
7. fixtures;
8. QA fixes.

Do not bulk-copy legacy logic into the orchestrator.

### Step 9 - Add Read-Only Connectors

Connect in this order:

1. CSV/manual import.
2. PriceLabs read-only.
3. Hostaway/PMS read-only.
4. OTA/listing health read-only.

All connector outputs must become RevenueState/source traces.

No live writes.

### Step 10 - Connect Lux Oasis Telegram Pilot

Only after staging passes tests.

Connect one private Lux Oasis Telegram channel/bot to staging.

Test:

- daily command card;
- revenue Q&A;
- task creation;
- approval card;
- follow-up;
- weekly owner update;
- stale-source warning.

### Step 11 - Add Supervisor Console

First version:

| Client | Agent status | Data freshness | Open tasks | Approvals | QA flags | Human action |
|---|---|---:|---:|---:|---:|---|

This is enough for hybrid mode v1.

### Step 12 - Productise Tenant Provisioning

To sell to more clients, onboarding must create:

- tenant;
- users/roles;
- listings;
- connector credentials;
- channel mapping;
- workspace memory;
- approval rules;
- billing record.

No custom engineering per client.

## Server Environments

Use three environments:

1. Local
   - fixture data;
   - fake channel;
   - fastest development.

2. Staging
   - real server;
   - Lux Oasis only;
   - read-only connectors;
   - no client promises.

3. Production
   - tenant-isolated;
   - monitored;
   - supervisor console;
   - backups;
   - billing;
   - client pilots.

## What Claude Code Should Do First

Give Claude Code this first task:

```text
Build the ORL runtime skeleton locally.

Create the repo structure, Lux Oasis tenant workspace, file-backed state, ORL-only tool registry, context loader, Claude structured decision wrapper, policy validator, state writer, audit log and fake channel adapter.

Do not deploy yet. Do not connect real PriceLabs/Hostaway yet. Do not build a large dashboard yet. The first acceptance test is a local demo conversation that creates tasks, approval cards and state write-back from fixture RevenueState.
```

## The Next Missing Pieces

After the runtime skeleton:

1. Claude structured output schema.
2. Policy validator.
3. Tool registry.
4. State writer.
5. Audit log.
6. Follow-up worker.
7. Supervisor queue.
8. Read-only connector import.
9. Staging deployment.
10. Lux Oasis Telegram pilot.

This is the build ladder.

# ORL Agentic Layer Owner Brief - 2026-07-25

## Decision

The COO agent owns the ORL agentic/product layer.

Zuhair should not be asked to invent "make it agentic" from a vague request. He should build from a bounded implementation brief with clear modules, tool limits, state model and acceptance tests.

## Minimum First Build Slice

Build one bounded Lux Oasis pilot workspace, not a full SaaS platform.

First slice:

- ORL intelligence loop: context loader, intent router, decision policy, state writer and follow-up worker.
- One tenant: Lux Oasis.
- Three to five listings.
- File-backed or fixture-backed `RevenueState` first.
- Tasks, approval cards, recommendation ledger, source traces and workspace memory/state.
- Telegram adapter first.
- Audit log and `needs_human_review` flag on meaningful turns.
- Regression tests for missing tenant, stale data, unsupported requests, cross-tenant isolation and approval gating.

## COO Agent Ownership

The COO agent owns:

- product behaviour and operating rules;
- ORL scope and approval boundaries;
- daily command-card logic;
- task, approval and follow-up workflow;
- QA standards and escalation rules;
- hybrid supervisor rules;
- acceptance tests for the first demo.

The COO agent does not become the client runtime. It supervises the ORL product.

## Zuhair Build Scope

Zuhair should build:

- dedicated ORL runtime scaffold;
- tenant-scoped workspace structure;
- `packages/orchestrator/` for the intelligence loop;
- ORL-only tool registry and policy gates;
- `RevenueState` ingestion from fixtures/read-only exports;
- Telegram channel adapter;
- task, approval, recommendation and audit-log state stores;
- first supervisor console views for health, stale data, QA flags, open tasks and pending approvals;
- safe Hetzner legacy import into `legacy/`, then promotion of useful tested modules.

## Demo Acceptance Criteria

The first demoable ORL revenue operator agent must:

- answer from tenant-scoped `RevenueState`, not generic chat;
- explain source freshness, date window and evidence used;
- create a task and remember it until done or blocked;
- create an approval card instead of changing live prices or sending owner-facing messages;
- refuse unsupported requests cleanly;
- never access another tenant's data;
- produce a useful daily command card and weekly owner update;
- log every meaningful turn with intent, tools, evidence, policy result and follow-up status;
- let a human reviewer see agent health, stale data, tasks, approvals, QA flags and next action in one console.

## Next Action

Prepare a tight Zuhair handoff only after Damiano approves sending it. Until then this is an internal build brief and Control Tower state.

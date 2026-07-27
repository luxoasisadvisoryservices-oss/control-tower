# ORL OpenClaw Operator Layer Prompt - Parked For 29 July Review

## Status

Parked. Do not execute now.

Damiano wants to revisit this after returning to Dubai, ideally with Zuhair and possibly Luca Ceschina Henley, before any OpenClaw install or Hetzner change.

## Decision Frame

The goal is not to build a general AI assistant for clients.

The goal is a bounded Oasis Revenue Lab revenue-management operator agent:

- OpenClaw or an equivalent agentic layer provides Telegram/chat UX, memory, heartbeat, follow-ups and multi-step operator behaviour.
- ORL remains the source of truth for RevenueState, metric grids, P&L artefacts, market research artefacts, tasks, approvals, tenant rules and audit logs.
- The agent can produce Excel, CSV, PDF, owner reports and apartment market research files only through ORL artefact endpoints.
- The agent must refuse personal-assistant or general-client tasks outside short-term-rental revenue management.

## Claude Code / Codex Prompt

```text
We are not executing this yet. First assess feasibility and implementation plan.

Build/design an isolated ORL Revenue Manager Agent layer for Hetzner.

Context:
The Hetzner server also hosts other projects, including a Conviva/messaging console and Ossian MailLab. Those must not be touched. Treat OpenClaw or any agentic layer as an untrusted tenant on the same server.

Goal:
Create a bounded OpenClaw/operator runtime that works only as a short-term-rental revenue-management assistant. It must not become a general personal assistant for clients.

Architecture:
1. ORL engine remains the source of truth.
2. OpenClaw or the agentic layer is only the operator layer: Telegram/chat UX, memory, heartbeat, follow-ups and multi-step task orchestration.
3. The operator layer must call only tenant-scoped ORL operator API endpoints.
4. The operator layer must never read ORL engine code, databases, raw exports, connector credentials, client .env files, /root/oasis-agents, Conviva/messaging console files, Ossian MailLab files, nginx configs, Docker containers, unrelated services or server files directly.

Server setup target:
- OS user: openclaw-orl
- Workdir: /srv/openclaw-orl
- State: /srv/openclaw-orl/state
- Workspace: /srv/openclaw-orl/workspace
- Env: /srv/openclaw-orl/env with 0600 permissions
- Logs: /srv/openclaw-orl/logs
- systemd service runs only as openclaw-orl
- no sudo
- no Docker group
- no root shell for runtime
- no DB socket access
- no access to /root, /root/oasis-agents, /srv/orl-dev, /srv/orl-production, Conviva/messaging console, Ossian MailLab, client env files or unrelated project folders

Allowed ORL skills/API only:
- metric grids
- P&L and artefact generation: CSV, XLSX, PDF, ledger summaries
- market and apartment research artefacts, only through ORL API
- revenue briefs
- tasks and approval cards
- tenant list and tenant switching
- funded research only if ORL API says funded/enabled

Scope rule:
The agent is not a general assistant. It must refuse requests unrelated to STR revenue management, listing performance, property-level P&L, market research, pricing, owner reports, task/approval follow-up or ORL-supported artefacts.

Allowed examples:
- analyse Paramount and make her P&L
- create an apartment market research Excel for tenant X
- compare Downtown vs Business Bay for revenue potential
- explain why listing X is underperforming
- prepare an owner report from ORL numbers
- create a revenue action list

Refused examples:
- manage my personal calendar
- write my CV
- scrape random websites unrelated to the property/revenue task
- access another tenant
- read server files
- send owner/client messages without approval
- change prices without approval
- inspect or modify Conviva, messaging console, Ossian MailLab or unrelated Hetzner projects

Cost/runtime direction:
The build can be developed with Codex/Claude Code, but production runtime must be provider-abstracted with per-tenant budgets, cheap-model routing for routine work and strong-model routing only for judgement-sensitive revenue decisions. Do not hardwire production to Claude Cloud as the only runtime.

Acceptance:
1. A client asking for unrelated personal tasks gets a clean refusal.
2. A tenant-scoped Paramount P&L request calls the ORL artefact endpoint and returns XLSX/CSV/PDF or an honest missing-source refusal.
3. Cross-tenant request fails through the operator layer, not only through API/unit tests.
4. openclaw-orl cannot read /root/oasis-agents, Conviva/messaging console, Ossian MailLab, client env files or unrelated project folders.
5. Audit log records tenant, user, endpoint, artefact ID, evidence, policy result and refusal reason.
6. Client channels remain on the existing hardened ORL path until Damiano explicitly approves routing them through OpenClaw after green acceptance.

Deliver:
- feasibility verdict;
- whether same Hetzner is acceptable for Damiano-only pilot;
- whether separate VPS is materially safer for first paying client pilot;
- exact commands proposed, but do not run them without approval;
- service file proposal;
- directory/permission plan;
- skill/API list;
- sample transcripts;
- regression plan;
- remaining blockers.
```

## Current Recommendation

Do not build or install now.

Review on or after 29 July with Zuhair, and optionally Luca Ceschina Henley, then decide:

1. same Hetzner for Damiano-only internal pilot;
2. separate small Hetzner VPS for first paying client pilot;
3. Codex as main build bench if it gives better subscription economics;
4. provider-abstracted production runtime with per-tenant budgets.


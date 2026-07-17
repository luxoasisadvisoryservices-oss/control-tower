# ORL Claude Secure Orchestrator Architecture Prompt - 2026-07-17

Copy/paste this into Claude or Claude Code.

```text
I am building Oasis Revenue Lab as a sellable AI revenue-operator agent for short-term-rental companies.

The goal is NOT a generic chatbot and NOT full OpenClaw access for clients.

The product I want:

One shared ORL "super brain" for all clients:
- same orchestrator code;
- same Claude reasoning pattern;
- same ORL tool definitions;
- same QA rules;
- same approval policy;
- same supervisor scoring;
- shared product improvements.

But every client must have isolated data:
- separate tenant workspace;
- separate RevenueState;
- separate listings;
- separate memory;
- separate tasks;
- separate approvals;
- separate recommendation ledger;
- separate connector credentials;
- separate channel history;
- separate audit logs.

The agent should feel like an OpenClaw-style operator, but it must only do ORL work:
- answer short-term-rental revenue questions;
- diagnose listing underperformance;
- explain source freshness and metrics;
- create team tasks;
- create approval cards;
- draft owner/team updates;
- generate daily command cards;
- generate weekly owner updates;
- follow up on waiting/done/blocker;
- escalate risky/uncertain cases to a supervisor queue.

Claude should be the reasoning layer underneath, but Claude must not roam freely.

Required runtime loop:

message
-> tenant resolver
-> context loader
-> Claude structured decision
-> policy validator
-> ORL-only tool router
-> state writer
-> response / task / approval / follow-up
-> audit log / supervisor QA

Claude should receive only a prepared ORL context pack:
- tenant_id;
- user role;
- channel;
- user message;
- relevant listing / portfolio scope;
- RevenueState summary;
- source freshness;
- open tasks;
- pending approvals;
- recommendation history;
- allowed ORL actions.

Claude should return structured output:
- intent;
- answer;
- requested ORL tool, if any;
- evidence used;
- confidence;
- human-review flag;
- follow-up status.

The runtime must validate Claude's output before executing anything.

Allowed tools only:
- getRevenueState;
- listSourceTraces;
- listOpenTasks;
- createTask;
- updateTask;
- createApprovalCard;
- createRecommendation;
- listRecommendationLedger;
- generateDailyCommandCard;
- generateWeeklyOwnerUpdate;
- runRevenueQA.

Blocked:
- shell;
- arbitrary file access;
- broad Gmail/Slack/Drive;
- other tenants' data;
- direct price changes;
- owner/client sends without approval;
- money/legal/security actions;
- generic "do anything" agent behaviour.

Scale target:
- start with Lux Oasis as tenant 001;
- prove the agent internally for 7 days;
- then sell 2-3 supervised pilots;
- eventually scale to 60 / 100 / 200 clients through one multi-tenant runtime, not one custom bot per client.

Security is critical. I need tenant isolation, prompt-injection resistance, approval gates, audit logs, least-privilege connector credentials, and supervisor review.

I also already have existing ORL / Hetzner bot work that should be imported as legacy source material, not treated as the final architecture:
- Telegram bot flows;
- prompts;
- daily reports;
- PriceLabs/PMS parsing;
- fixtures;
- bug fixes;
- working message flows.

Question:

Design the safest and most practical architecture to build this.

Please answer in this structure:

1. Should I use OpenClaw, Hermes, a custom lightweight orchestrator, or another framework for this ORL runtime?
   - Compare options.
   - Explain security risks.
   - Recommend the best path for a sellable multi-client product.

2. What should the first repo/server architecture look like?
   - folders;
   - services;
   - database tables;
   - queue/worker;
   - tenant isolation;
   - connector secrets;
   - audit logs;
   - supervisor console.

3. What is the exact first build milestone?
   - use Lux Oasis as tenant 001;
   - fixture/file-backed RevenueState first;
   - fake channel adapter first;
   - Claude structured decisions;
   - ORL-only tools;
   - policy validator;
   - state writer;
   - demo conversations.

4. How do I safely plug in the existing Hetzner ORL work?
   - what to import into legacy/;
   - what to promote first;
   - what to avoid;
   - how to test before using it.

5. What are the security boundaries?
   - tenant isolation;
   - tool allowlist;
   - approval gates;
   - prompt-injection handling;
   - connector credential storage;
   - audit logs;
   - supervisor review;
   - rate limits;
   - disaster recovery.

6. What is the step-by-step build plan for the next 7 days?
   - day-by-day tasks;
   - acceptance tests;
   - what not to build yet.

7. What should I ask Claude Code to build first?
   - provide a copy/paste Claude Code prompt for the first implementation slice.

Important constraints:
- Do not propose a generic autonomous agent with broad tools.
- Do not propose client access to my main OpenClaw workspace.
- Do not propose live price changes in v1.
- Do not build dashboard first.
- The first proof must be an agent conversation that answers from RevenueState, creates tasks, creates approval cards, remembers follow-up status, and logs evidence.
- UK English.
```

## Shorter Claude Chat Version

```text
I want to build Oasis Revenue Lab as a secure, sellable AI revenue-operator agent for short-term-rental companies.

Architecture direction: one shared ORL super brain/codebase for all clients, but isolated tenant workspaces and data per client. Claude is the reasoning layer underneath, but an ORL orchestrator controls context, allowed tools, policy, state write-back, approvals and supervision.

The agent must only do ORL work: revenue Q&A, listing diagnosis, tasks, approval cards, owner/team update drafts, daily command cards, weekly updates, follow-ups and supervisor escalation. No generic agent tools, no shell, no cross-tenant access, no live price writes or owner sends without approval.

I already have Hetzner ORL bot work: Telegram flows, prompts, reports, PriceLabs/PMS parsers, fixtures and bug fixes. It should be imported as legacy source material and promoted piece by piece into a clean product architecture.

Please design the safest architecture and build plan. Compare OpenClaw vs Hermes vs custom lightweight orchestrator for this use case. Recommend the best path, then give repo structure, server services, database/tenant model, tool allowlist, policy gates, supervisor console, security boundaries, and a 7-day build plan with the first Claude Code prompt.

Main priority: secure multi-client ORL runtime that can scale to 60/100/200 clients without sharing client data.
```

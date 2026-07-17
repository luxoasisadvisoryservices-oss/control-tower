# ORL Agent Supervision And Hybrid Mode - 2026-07-17

## Core Answer

If ORL is sold in hybrid mode, Damiano should not manually read every client-agent conversation.

He needs a supervisor layer:

**ORL Supervisor Console**

This is the dashboard/control room for all client revenue agents.

It shows:

- which agents are healthy;
- which clients need human review;
- which recommendations are waiting approval;
- which data is stale;
- which conversations are risky;
- which weekly updates are ready;
- which agents may be making bad calls.

Hybrid mode means:

- the client-facing agent handles routine questions and task creation;
- the supervisor system watches quality, risk and exceptions;
- Damiano or a revenue manager reviews only the important items.

## Three-Agent Structure

### 1. Client Revenue Agent

Works inside the client's Telegram/Slack/WhatsApp.

It runs in its own dedicated ORL OpenClaw-style workspace, not inside Damiano's main COO workspace.

It:

- answers revenue questions;
- creates tasks;
- creates approval cards;
- drafts owner/team updates;
- follows up on done/blocker;
- never changes prices or sends externally without approval.

### 2. ORL Supervisor Agent

Watches all client revenue agents.

This is a separate supervisor runtime above the client runtimes.

It:

- audits agent conversations;
- checks unsupported claims;
- checks source freshness;
- checks whether the correct tool was used;
- flags risky recommendations;
- scores answer quality;
- creates review tasks for Damiano/revenue manager;
- summarises the portfolio of client-agent activity.

### 3. Human Revenue Lead

Damiano or trained revenue manager.

They:

- approve high-impact recommendations;
- review flagged conversations;
- handle strategic pricing judgement;
- handle client-facing sensitive messages;
- tune agent rules and offer quality.

## Supervisor Console Views

### 1. Agent Health

For each client/agent:

- last active;
- last RevenueState refresh;
- stale data warnings;
- open tasks;
- pending approvals;
- unresolved escalations;
- failed tool calls;
- QA score.

### 2. Approval Queue

Only items that need human decision:

- price/restriction changes;
- owner-facing messages;
- strategic recommendation;
- low-confidence diagnosis;
- client complaint/sensitive issue;
- data contradiction.

### 3. QA Queue

Flagged conversations:

- unsupported claim;
- stale market data;
- missing date window;
- wrong metric definition;
- cross-tenant risk;
- overconfident recommendation;
- client asked something outside ORL scope;
- agent failed to create task/follow-up.

### 4. Client Portfolio Summary

For each client:

- what the agent did today;
- main listing risks;
- open approvals;
- expected revenue impact;
- next human action;
- whether weekly update is ready.

### 5. Recommendation Ledger

All meaningful recommendations:

- recommendation;
- source evidence;
- confidence;
- approval status;
- implemented or not;
- outcome;
- revenue impact when known.

## Required Logs Per Agent Turn

Every client-agent message should store:

- tenant_id;
- user_id;
- channel;
- timestamp;
- detected intent;
- listing/portfolio scope;
- tools used;
- RevenueState version;
- source traces used;
- answer summary;
- confidence;
- policy result;
- task/approval/recommendation created;
- whether human review is needed.

This is how the supervisor knows whether agents are doing correctly.

## Quality Scoring

Score each important agent answer:

- data correctness;
- source freshness;
- correct metric/window;
- useful recommendation;
- correct approval boundary;
- correct task/follow-up;
- tone/client clarity;
- no cross-tenant leakage.

Simple score:

- Green: safe/useful;
- Yellow: needs review;
- Red: unsafe/wrong/high risk.

## Hybrid Mode Operating Rhythm

Daily:

- Supervisor checks all agents.
- Damiano/revenue manager sees only red/yellow queue.
- Green routine work stays automatic.

Weekly:

- Review client outcome summaries.
- Approve/tune recurring recommendations.
- Pull demo-quality wins for sales.
- Update rules where agents struggled.

Monthly:

- Client performance review.
- Agent QA trend.
- Revenue impact review.
- Upsell/renewal risk.

## Scaling Model

This scales if the human reviews exceptions, not everything.

With 1-5 clients:

- Damiano can be the human revenue lead.

With 5-20 clients:

- hire/train one revenue ops reviewer;
- Damiano reviews only red/high-value items.

With 20+ clients:

- supervisor agents pre-score;
- revenue managers handle yellow/red queues;
- Damiano reviews product QA, top clients, and sales/demo assets.

## Build Order

1. Create the dedicated ORL runtime template for one tenant.
2. Add audit log to every orchestrator turn.
3. Add `needs_human_review` flag.
4. Build approval queue.
5. Build QA queue.
6. Build agent health page.
7. Build daily supervisor summary.
8. Add QA scoring.
9. Add weekly client outcome summary.

## First Version For Lux Oasis Pilot

Do not overbuild.

First supervisor view can be a simple table:

| Client | Agent status | Data freshness | Open tasks | Pending approvals | QA flags | Next human action |
|---|---|---:|---:|---:|---:|---|

The goal is simple:

Damiano can open one page and know whether the ORL agents are behaving correctly.

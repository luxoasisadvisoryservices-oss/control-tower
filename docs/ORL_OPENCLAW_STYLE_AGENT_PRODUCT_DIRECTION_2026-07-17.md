# ORL OpenClaw-Style Agent Product Direction - 2026-07-17

## Damiano's Product Correction

Damiano does not want Oasis Revenue Lab to be only a daily report, PDF generator, or static dashboard. The better product is an OpenClaw-style revenue operator agent: an agent that can hold a useful business conversation, remember the client/listing context, coordinate with the operator's team, and turn messy operational inputs into revenue actions.

The reference experience is the COO agent talking with Lin and Damiano: it reads context, understands the business objective, asks only when needed, sends internal handoffs, records state, follows up, and returns concise outcomes.

## Product Thesis

Oasis Revenue Lab should become a white-label STR revenue manager agent for operators.

It should feel like:

- "a revenue manager in Telegram/WhatsApp/Slack";
- "a business operator that watches my listings and tells my team what to do";
- "an agent that remembers my portfolio and revenue logic";
- "an always-on assistant that converts PMS, pricing, OTA, market and team messages into decisions".

It should not feel like:

- a generic chatbot;
- a PriceLabs wrapper;
- a static report;
- a dashboard that the client must inspect manually;
- an agent that repeats stale numbers.

## First Sellable Version

Sell the first version as a supervised revenue-operations agent, not full automation.

Package:

- Revenue Manager Agent for STR Operators.
- Runs inside the operator's preferred channel: Telegram first, then Slack/WhatsApp depending on client.
- Has one workspace per client/operator.
- Has one memory/control file per client and one validated RevenueState per listing or portfolio.
- Produces daily/weekly revenue command cards.
- Answers client questions from validated data only.
- Creates internal team tasks for pricing checks, listing fixes, gap-night strategy, owner updates and booking-risk items.
- Escalates uncertain or risky recommendations to a human revenue manager.

## Client Experience

The client should be able to message:

- "What should I do today?"
- "Why is this unit not booking?"
- "Which listings need attention?"
- "What should I tell the owner?"
- "Ask Lin/my team to check these prices."
- "Prepare this week's owner update."
- "Compare this unit against last month."

The agent should reply with:

- what matters now;
- the reason;
- the action;
- confidence/source freshness;
- whether it already routed an internal task;
- what needs approval.

## Architecture

Use OpenClaw-style structure, but productised and tenant-isolated.

1. ORL Core
   - RevenueState, MetricContracts, RecommendationLedger, ListingHealthState, OTAChannelState.
   - Deterministic validators before any LLM explanation.
   - Source freshness checks, especially for repeated market metrics.

2. Client Agent Layer
   - One agent identity per client/operator.
   - Reads only that client's tenant data.
   - Has memory files / state files for that client.
   - Speaks in the client's operating channel.
   - Can create drafts, tasks, summaries and internal handoffs.
   - Cannot change prices, send owner messages, or publish updates without permission.

3. Team Coordination Layer
   - Internal handoffs to the operator's team.
   - Examples: "Lin, please check this listing's min stay", "pricing team, confirm whether this promotion is live", "ops, confirm whether the photos match the current setup".
   - Every handoff needs owner, deadline, done/blocker reply and state update.

4. Client Dashboard
   - Dashboard is the evidence centre, not the whole product.
   - Shows listings, freshness, recommendations, pending tasks, approvals, revenue impact and history.
   - The agent uses the dashboard/state; the client should not need to inspect it manually every day.

5. Human Review Mode
   - Early commercial product stays supervised.
   - The agent prepares actions, but human review gates pricing changes, owner-facing messages, external sends and major strategy calls.

## What Makes It Sellable

Sell outcomes, not technology:

- Daily revenue command card.
- Listing underperformance diagnosis.
- Owner-ready performance notes.
- Pricing and restriction action queue.
- OTA/listing health watch.
- Team task routing and follow-up.
- Source-traced decisions.
- Human-supervised safety.

Positioning:

> A revenue-operations agent for short-term-rental operators. It watches your listings, pricing, booking pace, market signals and team follow-ups, then tells you what to do next and prepares the work for your team.

## Pricing Direction

Start service-led:

- Setup fee per operator or portfolio.
- Monthly retainer by listing count.
- Optional advisory layer with Damiano/revenue manager review.

Do not sell as cheap SaaS first. Sell as hybrid agent + advisory because reliability, trust and client onboarding matter more than self-serve scale at the beginning.

## First Build Target

Do not try to clone the full COO agent at once.

First build one client workspace with:

- one channel interface;
- one tenant;
- 3-5 listings;
- validated daily command card;
- chat Q&A against RevenueState;
- recommendation ledger;
- task handoff flow;
- stale-source guard;
- weekly owner/update draft;
- approval gate for risky actions.

Acceptance test:

- A client can ask what matters today.
- The agent answers from fresh validated state.
- It does not invent market data.
- It creates an internal action or approval card when needed.
- It remembers the action until done/blocker.
- It can produce a concise weekly owner/client update.

## Commercial Sequence

1. Fix current ORL data trust problems.
2. Build one OpenClaw-style ORL agent workspace for Lux Oasis / test client.
3. Use it internally until daily output is useful for 7 consecutive days.
4. Turn the best conversations into demo screenshots/video.
5. Sell 2-3 supervised pilots to operators.
6. Productise reusable onboarding, tenant isolation, dashboard and channel connector.

## Immediate Next Prompt For Claude Code

Build ORL as a tenant-isolated revenue operator agent, not only a report bot.

The first milestone is a supervised client agent that can:

- load one client/listing RevenueState;
- answer chat questions only from validated data;
- classify stale/repeated metrics as fresh_unchanged, stale_or_frozen or unverified;
- create internal tasks and approval cards;
- maintain a recommendation ledger;
- produce a daily command card;
- produce a weekly owner/operator update;
- refuse pricing/write/send actions without approval.

Do not expose a broad OpenClaw runtime to client data. Implement a bounded ORL agent layer that feels like OpenClaw operationally but is tenant-isolated, source-traced and supervised.

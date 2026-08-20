# Zuhair Meeting Brief - 2026-08-09

## Purpose

Use this meeting to align Zuhair on the next product priorities across Oasis Guest Lab and the wider Lux Oasis Advisory ecosystem.

Important correction: Zuhair has historically been assigned mainly to Oasis Guest Lab, not Oasis Revenue Lab. If Damiano wants Zuhair involved in ORL, this meeting should explicitly define that scope.

## Meeting Outcome Needed

By the end of the call, get:

1. Clear product name/dashboard naming plan.
2. Domain/subdomain decision and DNS/action owner.
3. Video/demo plan and who creates each asset.
4. Escalation and automation feature scope before launch.
5. Whether Zuhair is taking any Oasis Revenue Lab build responsibility.
6. PriceLabs MCP/API understanding and next technical step.
7. Wispr Flow notes captured into action items.

## Agenda

### 1. Oasis Guest Lab Naming

Current direction:

- Use `Oasis Guest Lab by Lux Oasis Advisory`.
- Stop using standalone `Oasis Guest Lab` as the future public name.
- the old demo domain can remain as a bridge/private demo/redirect until migration is clean.

Ask Zuhair:

- Where does the old name appear in the app/dashboard?
- What exact labels need changing?
- Can he rename dashboard/public UI to `Oasis Guest Lab` without breaking auth/routes?
- Does the code have hardcoded brand strings or config variables?

Decision needed:

- Final dashboard name: `Oasis Guest Lab`.
- Parent line: `by Lux Oasis Advisory`.

### 2. Domain / Subdomain

Current likely domain:

- `oasisguestlab.ai`.

Possible structure:

- Public site: `https://oasisguestlab.ai`
- App/dashboard: `https://app.oasisguestlab.ai`
- Admin: `https://admin.oasisguestlab.ai` only if needed later.
- Old bridge: `the old demo domain` redirects or says `Old demo domain redirects to Oasis Guest Lab by Lux Oasis Advisory`.

Ask Zuhair:

- Which hosting/deploy platform is current?
- What DNS records are needed?
- Should dashboard live on `app.oasisguestlab.ai`?
- Who owns domain registrar/DNS access?
- Can current auth/callback URLs support new domain/subdomain?

Damiano action after meeting:

- Provide registrar/DNS access or add records Zuhair gives.

### 3. Demo / Video

Damiano wants a video.

Clarify:

- Is the video for sales, product demo, website hero, or investor/product explanation?
- Should it show live dashboard, simulated guest conversation, escalation workflow, or all three?

Recommended first video:

- 60-90 second product demo.
- Flow: guest message comes in -> AI suggests/replies -> issue detected -> escalation to human -> dashboard shows status -> operator saves time.

Ask Zuhair:

- Can we use a clean demo account with fake guest data?
- Can he prepare a stable demo path with no broken buttons?
- What screen size and URL should be recorded?

### 4. Escalation And Automation

These are likely pre-launch requirements.

Must-have before broader launch:

- Urgent/uncertain guest messages escalate to human.
- Maintenance/access/refund/payment/legal/safety issues never auto-send.
- Human can approve/edit/reject suggested replies.
- Conversation status is visible: pending, replied, escalated, blocked, done.
- Team/user notification route is clear.
- Logs show what AI suggested, what human approved, and what was sent.

Ask Zuhair:

- What escalation logic exists today?
- Is there an approval queue?
- Can the system detect categories like maintenance, refund, access, angry guest, safety, legal, payment?
- Can we turn automation level on/off per property/client?
- What is the fastest safe MVP?

Launch rule:

- No full autopilot before the approval/escalation layer is reliable.

### 5. Oasis Revenue Lab / Ecosystem

Damiano wants to sell the Lux Oasis Advisory ecosystem, not isolated tools:

- Oasis Guest Lab: guest communication/ops AI.
- Oasis Revenue Lab: revenue manager agent.
- Nest Match: STR marketplace/network.
- Renovation: STR-ready renovation/project support.

For ORL, current direction:

- Not only price chat.
- Build MyDataValue-style layer: `RevenueState` + `OTAChannelState` + `RecommendationLedger`.
- Agent diagnoses why a unit is not booking across price, demand, OTA visibility, listing conversion, promotions, rate plans, minimum stay/restrictions, reviews/media and missing data.

Ask Zuhair:

- Is he involved in ORL or only Oasis Guest Lab?
- If involved, can he review `ORL_MYDATAVALUE_AGENT_BUILD_BRIEF_2026-08-09.md`?
- What repo/runtime would ORL use?
- What is missing to connect PriceLabs/PMS data to an agent?

### 6. PriceLabs MCP / API

Known direction:

- PriceLabs MCP/API should be an accelerant and official data source, not the whole product.
- ORL differentiates through validated `RevenueState`, Hostaway/PMS reconciliation, owner-ready reports, Telegram Q&A, recommendation ledger and supervised actions.

Ask Zuhair:

- What did PriceLabs release around MCP/API?
- Can we access official PriceLabs data now?
- Which endpoints/fields are available?
- Can we map them into `RevenueState`?
- What is still blocked by auth, partner access, API docs or account permission?

### 7. Wispr Flow Notes

Use Wispr Flow during the call, then convert notes into:

- decisions;
- open questions;
- owner/action/date;
- blockers;
- next sprint tasks.

## Talk Track

Use this framing:

> I want Oasis Guest Lab to be launchable, not just nice-looking. Before launch we need naming/domain clean, a demo video, escalation, human approval, and automation boundaries. Separately, I want Oasis Revenue Lab to move toward the MyDataValue-style revenue agent: it should diagnose why a unit is not booking and recommend exact promotions/actions, not only say whether the price is high or low.

## Decisions To Capture

- Final app/dashboard name.
- Domain/subdomain structure.
- DNS owner and exact records needed.
- Demo/video owner and deadline.
- Escalation MVP scope.
- Automation level allowed at launch.
- Whether Zuhair owns any ORL build items.
- PriceLabs MCP/API next step.

## Follow-Up After Call

After Wispr Flow notes are available:

1. Paste notes to the agent.
2. Agent converts into action list.
3. Update Control Tower and relevant product docs.
4. Send Slack/team tasks only for internal safe actions.
5. Approval-gate any public/domain/account/security/external changes.

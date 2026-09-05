# Luca / NHNCD Action Plan Review

Source: Luca Ceschinelli email forwarded by Damiano on 5 September 2026.  
Attachments reviewed:

- `Lux Oasis e NHNCD - Piano d'azione e metodo di lavoro - per Damiano - 5 Set 2026.pdf`
- `Lux Oasis and NHNCD - Request for access to GitHub repositories - 5 Sep 2026.pdf`

## Executive Verdict

The direction is mostly useful and aligned with the 4 September meeting.

Best parts:

- Luca correctly sees the bottleneck: three products, limited founder time, and unclear technical ownership.
- He puts Revenue Assist first for stability, cost, routing, load testing and resale readiness.
- He does not push Nest Match acquisition automation before checking marketplace, legal and compliance requirements.
- He treats Guest Lab as still mainly with Zuhair, which avoids too many hands in the most sensitive product lane.
- He proposes two weeks of analysis before discussing economics.
- His economics framing is acceptable in principle: no fixed fee now, no commitment until value is proven.

Main caution:

- Repository and demo access should not be granted by simply replying "accepted" to the email. It should be prepared as controlled, read-only, revocable access with secrets and client data removed or isolated.

## What Damiano Should Do

### 1. Reply Directionally, Not Legally

Do not sign or fully accept the access request as-is yet.

Suggested wording:

> Luca, thanks, I read the documents and the direction is broadly aligned. I agree with doing a first analysis phase before discussing the commercial structure. I will prepare limited read-only repository/demo access where possible, but I want to keep it controlled: no production credentials, no client/guest data, no personal credentials, and access remains revocable. I will send you the available items step by step.

### 2. Prepare Access Carefully

Before inviting Luca's `LC-NHNCD` GitHub account:

- Identify exactly which repositories are relevant.
- Remove or restrict `.env`, credentials, API keys, tokens, dumps, client exports and guest data.
- Prefer a read-only GitHub team or collaborator role.
- If the repo contains secrets or third-party data, create a cleaned review branch or mirror repo.
- For Revenue Assist, create a demo/read-only user or staging environment, not Damiano's credentials.
- Do not share Guest Lab code without deciding with Zuhair first.

### 3. Gather Luca's Requested Inputs

- GitHub repo list and which ones can be shared read-only.
- Demo/read-only access to the Revenue Assist site, if available.
- PriceLabs partner-program terms.
- Lux Oasis Advisory licence activity code and media-office feedback.
- Current Nest Match pricing/offers page.
- Zuhair Guest Lab knowledge base once Zuhair sends it.

### 4. Keep Luca's Proposed Sequence

Recommended priority order:

1. Revenue Assist stability and scale: cost, model routing, load testing, API limits.
2. Nest Match go-online requirements: activity code, media-office, data/privacy, T&Cs, certification checklist.
3. Nest Match acquisition-machine cost: scraping/enrichment/profile generation/outreach/channel limits.
4. Nest Match hosting and messaging-at-volume review.
5. Guest Lab stays with Zuhair unless there is a specific review need.

### 5. Commercial Structure

Do not discuss percentage, equity or exit bonus yet.

Acceptable next frame:

- No fixed fee for the two-week analysis.
- No economic commitment from Lux Oasis yet.
- After the written analysis, decide if Luca's role is paid technical review, fixed implementation sprint, fractional CTO/product adviser, success fee tied to measurable shipped milestones, or small upside/exit bonus only if he materially creates defensible product value.

Avoid open-ended equity, broad "percentage of everything", success fee before the product/lane and milestone are defined, and access before source-control/data boundaries are clear.

## Recommendation

Approve the analysis phase in principle, but do not yet accept the access request in a legally broad way. The next practical step is a controlled reply and a clean, read-only access package.

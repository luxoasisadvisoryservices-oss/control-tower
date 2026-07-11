# Conviva Zuhair Dashboard / Automation Recap - 2026-07-10

Purpose: keep Conviva launch scope clean after the 10 July meeting with Zuhair.

## Done Until Today

- Main dashboard is complete.
- Reservation dashboard is complete.
- HostAway data fetching is complete.

## Short-Term Before Dashboard Launch

Finish only the remaining dashboard gaps:

- In the property information edit flow, add a separate slot or section for extra property information.
- Do not mix this extra information into the same existing slot.
- Add location classification for each property using City + Location + Area.
- Use the location fields to summarise properties by geography as the portfolio scales.
- The property listing/dashboard should summarise units by location/area, for example Dubai, JBR, Dubai Marina, Downtown, Palm Jumeirah and The Greens.

## Conversation QA Dataset

Use real guest conversations to score Conviva quality before beta:

- Lin has been asked for the Cari conversation screenshot.
- The screenshot should make it easy to compare what the agent suggested or applied versus what the human replied.
- Harry and Ciara conversations are also scoring candidates.
- Build at least 4-5 scored real guest conversations by mid-September 2026.
- Use the scoring to judge AI suggestion quality, human-reply quality, hallucination risk, escalation handling, missing knowledge and product fixes.

## Beta Condition

Try launching the Conviva beta only after:

- the dashboard-side short-term items above are finished;
- 4-5 real guest conversations have been scored;
- the scores show Conviva can be trusted in supervised/shadow mode.

## Future Product Scope

These are future items after the dashboard launch, not blockers for the immediate dashboard launch:

- operator policy and tone controls for guest replies, including consumables, courtesy exceptions, paid-service boundaries, house rules, escalation owner and preferred tone;
- guest message automation;
- AI suggested replies;
- translation workflow;
- Shadow Mode, where Conviva suggests and tracks before anything is sent automatically.

## 11 Jul Product Direction - Policy And Tone

Damiano's latest guest-message example clarified a key Conviva requirement: operators must be able to define policies and tone so the AI knows how to answer boundary requests. Example: for long-stay consumables, the operator may want a warm but firm reply that says an extra courtesy refill is possible today, but ongoing consumables are not included in holiday homes and the guest should buy further items themselves.

This should not distract from the immediate dashboard launch. Capture it as a structured knowledge-base / Shadow Mode requirement: saved policy, free-versus-paid boundary, courtesy exception, escalation owner and preferred tone should guide AI suggested replies before any automation is trusted.

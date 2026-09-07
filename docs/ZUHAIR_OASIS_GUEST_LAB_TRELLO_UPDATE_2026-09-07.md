# Zuhair / Oasis Guest Lab Trello Update - 2026-09-07

Source: Damiano's 7 Sep transcript summary from the assistant dashboard walkthrough with Zohair Hadi / Zuhair.

Purpose: update Trello with what is done, what was decided, and what needs to move soon before rollout to Lin.

## Trello Board Summary

Oasis Guest Lab is moving from generic guest-reply setup toward a dashboard-controlled operator assistant. The dashboard walkthrough confirmed the current assistant configuration, maintenance ticket view and integration direction. Rollout to Lin should wait until the remaining dashboard controls, ticket-memory tests, translation, Hostaway / Chatwoot inbox flow and inquiry-status confusion are solved.

## Done / Confirmed

- Assistant dashboard exists and covers assistant name, company, check-in and checkout, policies, tone, language and sign-off.
- Per-reservation overrides will replace Chatwoot notes.
- Chatwoot notes should be decommissioned as the source of operational side notes.
- Autopilot mode is active, with the agent replying to guests directly.
- Maintenance tickets show open, in-progress and all-ticket views.
- Closing a ticket removes it from the active view while retaining the history.
- Staff numbers added directly to the agent are ignored; routing should be configured by request type instead.
- Property marketplace is nearly done, with security fixes still pending before the outreach system.

## Decisions Made

- Dashboard becomes the control layer for assistant behaviour, policies, overrides and routing.
- Per-reservation changes should be managed inside the dashboard, not in Chatwoot notes.
- Staff routing should be based on request type: maintenance, service, cleaning and other operational categories.
- Hostaway inbox should feed into Chatwoot and be labelled by OTA, including Airbnb and Booking.com.
- Inquiries must not appear as normal pre-arrival bookings because that confuses operations.
- Lin rollout comes after the dashboard additions and memory/integration tests are confirmed.

## Now / Next 7 Days

### Card: Add Custom Policy Boxes

Outcome: Dashboard supports optional custom policy fields for operator-specific rules.

Owner: Zuhair.

Next action: Add editable policy boxes for deposit, extra guests, pets and breakage charges, based on the Lux Oasis Advisory & Services policy list.

Due / review date: Review before Lin rollout.

Blocker: Needs Damiano / Lux Oasis policy tone and final policy list.

Business value: Lets Oasis Guest Lab answer boundary questions from real operator rules instead of guessing.

### Card: Add Cleaning Routing And Multi-Contact Staff Routing

Outcome: Maintenance, service and cleaning requests route to the right contacts.

Owner: Zuhair.

Next action: Add cleaning as a routing option and allow multiple contacts per request type.

Due / review date: Review before Lin rollout.

Blocker: Needs final staff-routing model and contact ownership.

Business value: Reduces manual escalation and prevents guest issues from going to the wrong person.

### Card: Test Ticket Memory And Recurring-Issue Recall

Outcome: Agent recalls recurring property issues and per-guest complaint history.

Owner: Zuhair.

Next action: Test whether closed and historic tickets influence future replies, especially repeated maintenance issues and repeat guest complaints.

Due / review date: Run test before enabling broader autopilot use.

Blocker: Needs test cases from real Lux Oasis tickets.

Business value: Makes the assistant operationally useful, not just a one-message reply bot.

### Card: Finish Translation Feature

Outcome: Assistant can handle guest language flow reliably.

Owner: Zuhair.

Next action: Finish and test translation so reply language can remain blank to mimic the guest's language unless overridden.

Due / review date: Review before Lin rollout.

Blocker: Needs live test across common guest languages.

Business value: Improves guest experience without Lin manually rewriting routine replies.

### Card: Integrate Hostaway Inbox Into Chatwoot

Outcome: Airbnb, Booking.com and other OTA inbox messages flow through Chatwoot with clear labels.

Owner: Zuhair.

Next action: Pipe Hostaway inbox into Chatwoot and label conversations per OTA.

Due / review date: Release-critical.

Blocker: Confirm Hostaway inbox access and Chatwoot mapping.

Business value: Centralises guest operations and makes OTA messages usable in the same assistant workflow.

### Card: Add Inquiry, Not Booked Status

Outcome: Inquiries stop appearing as real pre-arrival bookings.

Owner: Zuhair.

Next action: Add an explicit `Inquiry - not booked` status and adjust dashboard/Chatwoot logic so inquiries are visually separate from reservations.

Due / review date: Release-critical.

Blocker: Need to test current Hostaway inquiry payloads.

Business value: Prevents Lin and Damiano from treating non-booked leads as confirmed guests.

### Card: Rebrand And Update Dashboard UI

Outcome: Dashboard uses the current Oasis Guest Lab / Lux Oasis Advisory naming and looks ready for operator use.

Owner: Zuhair.

Next action: Rebrand and polish the dashboard UI before showing it to Lin or external operators.

Due / review date: Before Lin rollout.

Blocker: Needs final copy/name treatment from Damiano if not already applied.

Business value: Makes the product feel credible enough for demos and operator onboarding.

### Card: Finish Security Fixes Before Outreach System

Outcome: Property marketplace and outreach system are not rolled out while security fixes remain open.

Owner: Zuhair.

Next action: Complete pending security fixes, then reconnect to the outreach-system release path.

Due / review date: Before any broader outreach.

Blocker: Needs exact security checklist from Zuhair.

Business value: Avoids launching outreach on weak infrastructure.

## Waiting On Damiano / Lux Oasis Advisory

- Send subdomain credentials.
- Send final policy tone and policy list.
- Provide concrete policy examples for deposit, extra guests, pets and breakage charges.
- Provide a few real ticket-memory test cases if needed.
- Confirm when Lin should see the dashboard after Zuhair finishes the release-critical items.

## Blockers / Risks

- Meta tech provider approval is still blocked because the free-zone licence does not show a number. Zuhair will try a Virgin invoice as proof.
- Inquiry status is currently misleading because inquiries appear like pre-arrival bookings.
- Autopilot is active, so policy accuracy, routing and escalation controls are more urgent than cosmetic UI work.
- Trello direct update was blocked in this runtime until Trello connector access is authorised.

## Recommended Trello Lists

- Done / Confirmed: dashboard basics, per-reservation override decision, Chatwoot notes decommission decision, ticket views, autopilot active.
- Now / Zuhair: custom policy boxes, cleaning/multi-contact routing, ticket memory tests, translation, Hostaway inbox to Chatwoot, inquiry status, rebrand/UI, security fixes.
- Waiting on Damiano: subdomain credentials, policy tone/list, test examples, Lin rollout timing.
- Blocked / External: Meta tech provider proof path, Hostaway/Chatwoot integration access if not available.

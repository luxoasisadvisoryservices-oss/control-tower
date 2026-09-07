# Zuhair / Oasis Guest Lab Trello Update - 2026-09-07

Source: Damiano's 7 Sep transcript summary from the assistant dashboard walkthrough with Zohair Hadi / Zuhair.

Purpose: update Trello with what is done, what was decided, and what needs to move soon before rollout to Lin.

## Trello Board Summary

Oasis Guest Lab is moving from generic guest-reply setup toward a dashboard-controlled operator assistant. The dashboard walkthrough confirmed the current assistant configuration, maintenance ticket view and integration direction. Damiano has now supplied the fuller policy-settings scope for Lia. Rollout to Lin should wait until the essential policy controls, automated guest-journey messages, ticket-memory tests, translation, Hostaway / Chatwoot inbox flow and inquiry-status confusion are solved.

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
- Lin rollout comes after the dashboard additions, essential policy controls and memory/integration tests are confirmed.

## Now / Next 7 Days

### Card: Add Custom Policy Boxes

Outcome: Dashboard supports optional custom policy fields for operator-specific rules.

Owner: Zuhair.

Next action: Replace the small policy-box idea with configurable policy modules that can apply company-wide or only to selected properties/bookings. Each module needs: rule, fees, conditions, Lia authority level, exceptions/waivers, team-alert trigger and preferred wording/example reply.

Due / review date: Review before Lin rollout.

Blocker: Needs Damiano / Lux Oasis policy tone and final policy list.

Business value: Lets Oasis Guest Lab answer boundary questions from real operator rules instead of guessing.

First-version essential options:

- Security deposits: required yes/no, amount, booking scope, collection/release conditions, exception approval and deduction approval.
- Extra guests and visitors: guest limit, visitor rules, extra-person fee, child exemption and approval requirement.
- Pets: allowed, prohibited or approval-only, with restrictions, pet fee, extra cleaning charge and deposit.
- Damage, breakages and missing items: waived items, chargeable items, approved prices and review-before-charge threshold.
- Lost keys, access cards and lockouts: replacement fees, after-hours fee, identity check, available assistance and exceptions.
- Smoking, noise and parties: restrictions, quiet hours, warning wording, applicable charges and team-alert trigger.
- Refunds, discounts and compensation: no independent offer unless configured; define situation, limit and approval requirement.
- Cancellations and booking changes: extensions, shortened stays, cancellations and property changes; separate what Lia can explain, request or confirm.
- Payments: approved methods, balances, deadlines, instalment requests and disputed charges.
- Security, access and privacy: who may receive access instructions, verification, third-party access and unknown-number handling.
- Media in Lia conversations: approved photos/videos/documents/location pins, incoming media handling, voice-note forwarding and restrictions on sensitive material/access details.
- Company defaults versus custom rules versus no restrictions, so the dashboard does not make a missing rule look like permission.

Later-version options:

- Building and community rules by property: parking, pool, gym, deliveries, visitors and shared facilities.
- Photography and filming: personal photos, commercial shoots, creators, outside photographers/crew, restricted areas, privacy rules, extra fees and deposits.
- Add-a-policy option for operator-specific rules that do not fit predefined categories.
- Deeper tone controls: response length, language, greetings, emoji style, preferred phrases, complaint handling and whether Lia suggests alternatives when declining.

Existing settings to update with the same control model:

- Check-in/check-out, consumable top-ups, luggage, unavailable services and cleaning should all use the same structure: company default, property/booking override, rule, fee, Lia authority, waivers, team alert and example wording.
- The promise to replace missing or broken items must be configurable, not hardcoded.
- Operators should choose whether a declined request alerts the team.

### Card: Add Cleaning Routing And Multi-Contact Staff Routing

Outcome: Maintenance, service and cleaning requests route to the right contacts.

Owner: Zuhair.

Next action: Add cleaning as a routing option and allow multiple contacts per request type.

Due / review date: Review before Lin rollout.

Blocker: Needs final staff-routing model and contact ownership.

Business value: Reduces manual escalation and prevents guest issues from going to the wrong person.

### Card: Finish Automated Guest-Journey Messages

Outcome: Automated pre-arrival, check-in, in-stay, checkout and review-request messages are completed, configurable and safe to use in the dashboard flow.

Owner: Zuhair.

Next action: Finish the automated message sequence with channel labels, timing rules, property/booking overrides, pause/manual-review controls and clear escalation when data is missing or a guest replies with a non-routine issue.

Due / review date: Release-critical before Lin rollout.

Blocker: Needs final policy/tone list and a QA pass against real Hostaway reservations / Chatwoot conversations.

Business value: Lets Oasis Guest Lab run the repeatable guest communication journey without Lin manually triggering every standard message.

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

### Card: Review / Update The Edit Section In The Properties Dashboard

Owner: Zuhair.

Status: To do.

Next action: Review and update the edit section in the properties dashboard, as requested by Damiano. Confirm the specific changes needed before implementation.

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
- Now / Zuhair: custom policy boxes, automated guest-journey messages, cleaning/multi-contact routing, ticket memory tests, translation, Hostaway inbox to Chatwoot, inquiry status, rebrand/UI, security fixes.
- Waiting on Damiano: subdomain credentials, policy tone/list, test examples, Lin rollout timing.
- Blocked / External: Meta tech provider proof path, Hostaway/Chatwoot integration access if not available.

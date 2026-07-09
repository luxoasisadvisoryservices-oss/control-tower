# Conviva Zuhair Dashboard / Automation Meeting Brief - 2026-07-10

Purpose: keep tomorrow's Zuhair meeting focused on what makes Conviva reliable, demo-ready and closer to live operator use.

## Meeting Goal

Leave with a clear pass/fail status for the current dashboard and a short next build list.

Do not expand scope before the dashboard, reservation context, property information structure and agent core are reliable.

## 1. Dashboard Review

Check live screen by screen:

1. Reservation dashboard
   - reservations visible by property;
   - check-in / checkout dates;
   - guest name and source;
   - reservation status;
   - property/unit linked correctly;
   - guest contact / WhatsApp route available where allowed;
   - last sync time and sync failure visibility.

2. Property tab / information slots
   - add structured property information inside the property screen;
   - mandatory slots: check-in, checkout, access, Wi-Fi, parking, building entry, gym/pool, house rules, appliances, maintenance contacts, emergency contacts, guest guide links and video links;
   - visible missing-field status;
   - ability to update information without developer help.

3. Agent test area
   - show which property/reservation context the AI is using;
   - show exact guest question, answer, source fields used and confidence;
   - show escalation reason when answer is risky or data is missing.
   - show suggested reply after escalation, with approve / edit / reject / send controls.

## 2. What Zuhair Tested

Ask him to show:

- exact test questions;
- which property/unit was used;
- whether the test used real reservation context;
- expected answer versus actual answer;
- pass/fail list;
- any hallucination, missing data or escalation issue;
- logs/screenshots for the good tests Damiano saw.

Good replies are not enough. We need to know what was tested and what was not tested.

## 3. Hostaway / Automation Next Step

Main question:

Can Conviva fetch enough from Hostaway to drive guest-message automation safely?

Check whether Hostaway can provide:

- reservation dates;
- guest name;
- channel/source;
- property/unit;
- guest phone/WhatsApp if available and allowed;
- reservation status changes;
- extension / shortening / cancellation;
- scheduled message templates or existing committed/scheduled messages, if Hostaway exposes them.

If Hostaway cannot expose existing scheduled/committed messages cleanly, build Conviva's own journey-message rules from reservation events instead.

## 4. Guest Journey Automations

Do not jump straight to autonomous sending.

Build order:

1. read-only fetch from Hostaway;
2. generate draft journey messages;
3. show them in dashboard for approval;
4. send only after human approval / shadow-mode testing;
5. later automate low-risk messages once QA is stable.

Message types:

- booking confirmation / welcome;
- pre-arrival information;
- check-in day access help;
- first-night check-in;
- mid-stay support;
- checkout reminder;
- post-checkout / review message.

Escalation follow-up:

- when a conversation escalates, Conviva should still propose a safe suggested reply;
- user should be able to approve and send directly from the dashboard/chat control layer;
- this must be human-approved first, not autonomous sending;
- log who approved, what was sent and what context the AI used.

Translation:

- test whether translation works end to end before live use;
- verify guest language detection, translated suggested reply, original-language message preview and escalation for uncertain translation;
- translation should have a human-review toggle for high-risk or unclear messages.

## 5. Conviva Live Readiness

Before "live" or external beta:

- property information slots must be complete;
- missing mandatory fields must block activation or force escalation;
- reservation context must be correct;
- high-risk requests must escalate;
- manual approve/edit/reject must exist for risky replies;
- approve-and-send must exist for AI suggested replies after escalation;
- translation must work end to end with human review for risky messages;
- sync failures must be visible;
- no invented property facts;
- weekly QA / knowledge-gap report should exist or be exportable.

## 6. Decisions Needed From Meeting

Ask Zuhair to answer:

1. What is fully working today?
2. What is still mocked/manual?
3. What did he test, exactly?
4. What is missing from the property tab?
5. Can Hostaway provide the data needed for automation?
6. Are scheduled/committed Hostaway messages accessible, or must Conviva create its own journey rules?
7. Can the AI suggest a reply after escalation and let the user approve/send it safely?
8. Does translation work end to end, including original/translated preview and high-risk review?
9. What is the next 7-day build list?
10. What does Lin need to fill in before more testing?
11. What is the demo-ready date?

## 7. Recommended Next 7-Day Build List

1. Finish property tab and mandatory information slots.
2. Show reservation-to-property context clearly in dashboard.
3. Add missing field / knowledge gap visibility.
4. Add test log: prompt, answer, source, pass/fail, escalation.
5. Confirm Hostaway read-only data fields.
6. Build draft-only journey message generator from reservation events.
7. Add AI suggested-reply approve/send flow after escalation.
8. Test translation end to end with human-review toggle for risky messages.
9. Prepare dashboard demo script only after the flow is stable.

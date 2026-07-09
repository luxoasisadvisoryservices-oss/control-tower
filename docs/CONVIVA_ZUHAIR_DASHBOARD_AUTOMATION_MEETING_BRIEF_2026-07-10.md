# Conviva Zuhair Dashboard / Automation Meeting Brief - 2026-07-10

Purpose: keep tomorrow's Zuhair meeting focused on what makes Conviva reliable, demo-ready and closer to live operator use.

## Meeting Goal

Leave with a clear pass/fail status for the current dashboard and a short next build list.

## Dashboard Review

Check:

- reservations visible by property;
- check-in / checkout dates;
- guest name and source;
- reservation status;
- property/unit linked correctly;
- guest contact / WhatsApp route available where allowed;
- last sync time and sync failure visibility;
- property tab with structured information slots;
- missing-field status;
- agent test area showing question, answer, source fields and escalation reason.

## What Zuhair Tested

Ask him to show exact test questions, property/unit used, whether real reservation context was used, expected answer versus actual answer, pass/fail list, hallucinations, missing data, escalation issues and screenshots/logs.

Good replies are not enough. We need to know what was tested and what was not tested.

## Hostaway / Automation

Main question: can Conviva fetch enough from Hostaway to drive guest-message automation safely?

Check whether Hostaway can provide reservation dates, guest name, channel/source, property/unit, guest phone/WhatsApp if available and allowed, reservation status changes, extension/shortening/cancellation, and scheduled/committed message templates if exposed.

If Hostaway cannot expose existing scheduled/committed messages cleanly, build Conviva's own journey-message rules from reservation events instead.

## Guest Journey Automations

Build order:

1. read-only Hostaway fetch;
2. draft journey messages;
3. dashboard approval;
4. human-approved sending / shadow mode;
5. later automate low-risk messages once QA is stable.

Message types: booking confirmation, pre-arrival, check-in day, first-night check-in, mid-stay support, checkout reminder, post-checkout / review.

## Decisions Needed

Ask Zuhair:

1. What is fully working today?
2. What is still mocked/manual?
3. What did he test, exactly?
4. What is missing from the property tab?
5. Can Hostaway provide the data needed for automation?
6. Are scheduled/committed Hostaway messages accessible, or must Conviva create its own journey rules?
7. What is the next 7-day build list?
8. What does Lin need to fill in before more testing?
9. What is the demo-ready date?

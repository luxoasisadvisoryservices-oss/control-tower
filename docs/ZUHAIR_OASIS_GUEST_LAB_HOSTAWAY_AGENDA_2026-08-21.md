# Zuhair / Oasis Guest Lab Hostaway Agenda - 2026-08-21

## Purpose

Add one proof task to the Zuhair discussion: move Oasis Guest Lab from generic "let me check with the team" replies toward supervised answers grounded in live PMS availability data.

## New Discussion Item

### Hostaway Availability-Aware Guest Replies

Oasis Guest Lab has Hostaway API access, so the agent should be able to read the relevant unit's calendar or reservations before drafting a guest reply about extensions or date availability.

Proof example:

- Guest/case: Asad / Murjan 2 - UP01.
- Request: extend one day after 21 Aug 2026.
- Expected agent behaviour:
  1. Identify the relevant unit and requested extra date.
  2. Fetch the unit calendar/reservations from Hostaway in read-only mode.
  3. Detect whether the requested date is booked, free or a gap.
  4. Draft an intelligent reply from real availability, for example: "Unfortunately we're fully booked for that date because there is a booking from [x] to [y]. I can check alternative dates or nearby units."
  5. Escalate to a human for approval and closure before anything sensitive is sent.

## Guardrails

- Hostaway use is read-only.
- Never confirm, extend, cancel, amend or commit a reservation autonomously.
- Never change rates, costs, availability, payments, reservation fields or listing settings.
- Booking changes/extensions stay supervised: draft, explain evidence, ask human to approve/send.
- If Hostaway data is missing or ambiguous, escalate instead of guessing.

## Checklist For Zuhair

- Fetch unit calendar/reservations from Hostaway API for the relevant unit.
- Detect requested-date availability: booked, free or gap.
- Compose an availability-aware reply using actual booking evidence.
- Escalate booking extensions/changes to a human to confirm and close.
- Add an audit trail: unit, requested date, data source, detected conflict, suggested reply, approval status.
- Test on Asad / Murjan 2 - UP01 as the proof case.

## Meeting Outcome Needed

By the end of the call, agree whether this is in the next 7-day sprint and who owns:

- Hostaway read-only data mapping.
- Availability detection logic.
- Reply drafting prompt/guardrails.
- Approval/escalation UI or queue.
- Test evidence for the Asad / Murjan 2 - UP01 case.

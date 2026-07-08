# Lin LinkedIn Scheduled Call Handoff Rule - 2026-07-08

## Instruction From Damiano

When Lin posts something in the LinkedIn Slack channel about a person Damiano is interested in, ask Lin to include the date/time of any scheduled call so the agent can remind Damiano and prepare an update before the call.

## Operating Rule

LinkedIn leads should not stay as undated Slack chatter.

For every interesting LinkedIn candidate, agent, owner, operator, partner or lead that Lin posts, capture one of three states:

1. Scheduled call
   - person name;
   - profile link if available;
   - call date;
   - call time;
   - timezone;
   - call link or phone number if available;
   - why Damiano is interested.

2. Waiting for schedule
   - person name;
   - reason worth following;
   - Lin must tag the agent once date/time is fixed.

3. Parked / not worth call
   - reason it is not worth Damiano's time.

## Agent Action

When a date/time is known:

1. Add the call to Control Tower.
2. Create a reminder when timing is specific.
3. Prepare a short pre-call brief for Damiano:
   - who the person is;
   - why they matter;
   - what Damiano should ask;
   - intended outcome;
   - open risks or missing information.

## Instruction To Lin

When Lin posts a promising LinkedIn lead/candidate in the Slack LinkedIn channel, she should include:

`Call scheduled: [date], [time], [timezone], [link/phone if any]`

If not scheduled yet, she should write:

`Waiting for call date/time. I will tag the agent once fixed.`


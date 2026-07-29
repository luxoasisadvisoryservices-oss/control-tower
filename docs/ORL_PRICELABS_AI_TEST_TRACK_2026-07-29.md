# ORL PriceLabs AI Test Track - 2026-07-29

## Decision

Oasis Revenue Lab should actively test PriceLabs AI, not only read the docs or use PriceLabs as a data source.

The purpose is to understand where PriceLabs AI is going, what it can already answer well, where it is weak, and where Damiano plus ORL can stay ahead as the supervised revenue-management layer.

## Priority

1. Test PriceLabs AI with real revenue-manager questions.
2. Compare its answers against Hostaway/PMS truth and actual operator judgement.
3. Record gaps, hallucinations, missing context and strong answers.
4. Turn the gaps into ORL features, prompts, guardrails and client-facing service advantages.
5. Use the findings to make Damiano better as a hybrid revenue operator.

## Weekly Test Loop

Each PriceLabs / ORL mastery block should include a short PriceLabs AI test:

1. Pick 1-3 real listings or fixture listings.
2. Ask PriceLabs AI a clear operator question.
3. Save the question, answer and source context.
4. Check whether the answer matches actual booking/PMS data.
5. Score the answer:
   - correct;
   - useful but incomplete;
   - wrong;
   - risky;
   - not actionable.
6. Decide what a strong human revenue manager would add.
7. Decide what ORL should automate, explain or approval-gate.

## Questions To Test

- What is the revenue goal for this listing this month?
- Are we on pace or behind target?
- What revenue gap remains for the month?
- Should we prioritise occupancy or ADR for the next 14 days?
- Which dates should be adjusted first?
- Is low booking pace caused by price, availability, minimum stay, ranking, reviews, photos, OTA visibility or weak demand?
- What action should be taken today?
- What should be explained to the owner?
- What is risky about this recommendation?
- What changed after the last recommendation?

## What ORL Must Learn From The Test

ORL should not copy PriceLabs AI. It should observe it and build the missing operator layer:

- data truth check across PriceLabs and Hostaway/PMS;
- goal setup quality;
- pace/gap calculation;
- action priority;
- owner-ready explanation;
- recommendation ledger;
- approval gate before write actions;
- outcome tracking after recommendations;
- portfolio-level judgement across listings.

## Damiano Skill Focus

Damiano should become better at:

- setting revenue goals before touching price;
- spotting when AI lacks business context;
- asking better diagnostic questions;
- reading pace, occupancy, ADR and remaining demand together;
- deciding when to defend rate and when to chase occupancy;
- explaining revenue decisions to owners;
- turning AI answers into a paid revenue-management service.

## Product Direction

PriceLabs AI is a benchmark and accelerant.

ORL should become the supervised revenue desk that turns PriceLabs AI, PriceLabs data, PMS truth and Damiano's judgement into:

- daily command cards;
- owner-ready monthly notes;
- goal-to-action tracking;
- recommendation evidence;
- approval-safe execution;
- video/demo material showing a complete revenue-management workflow.


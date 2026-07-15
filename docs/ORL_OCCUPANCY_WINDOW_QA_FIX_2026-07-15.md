# ORL Occupancy Window QA Fix - 2026-07-15

Source: Damiano Telegram screenshots from 15 July 2026 showing the Oasis Revenue Lab bot answer after he asked why the report showed `83% occupancy`.

## What Went Wrong

The bot answered the wrong question twice.

- Damiano asked what `83% occupancy` meant.
- The bot explained visibility/ranking and recovery logic instead of defining the exact occupancy window.
- When Damiano asked whether it meant 30 days, the bot repeated `83% vs market 24%` without saying the date range or formula.

This is a RevenueState / chat QA failure, not just a tone issue.

## Correct Interpretation From The Visible Report

The report line says:

- `Occ 83% (+59.0pts vs market)`
- `Rev forward-secured 30d AED 5,148`

Unless the validated payload says otherwise, the answer should state:

> `83% occupancy` means the validated rolling next-30-day occupancy for the listing in the report window. It should be displayed as the exact date range and booked-night count, for example `25 of 30 nights booked from 15 Jul to 14 Aug`, if those counts are present in RevenueState. The market comparison is a benchmark for the same window only if the benchmark source and date window are validated.

If the bot cannot access the exact dates, booked-night count, or benchmark basis, it must say:

> I can see the report label says `83%`, but I cannot verify the exact date window/booked-night count from the current payload. Needs review before using this number.

## Required Fix

1. Every occupancy answer must include:
   - metric name;
   - exact date window;
   - booked nights / total nights where available;
   - source;
   - formula;
   - market benchmark window and source, if a market comparison is used.
2. Chat must answer the user's narrow metric-definition question before giving causal diagnosis.
3. If a user asks "why 83%" or "83% in what 30 days", the first sentence must define the 83% window. Diagnosis comes second.
4. If the date window or formula is missing from RevenueState, return `NEEDS_REVIEW_OCCUPANCY_WINDOW` instead of guessing.
5. The daily brief should render occupancy as:

```text
Occupancy: 83% next 30d (15 Jul-14 Aug; X/30 nights booked; source: Hostaway/PriceLabs; formula: booked nights / available nights)
Market: 24% same window (source: [source]; confidence: [level])
```

## Product State

Keep ORL in supervised/internal mode until chat Q&A can answer metric-definition questions from the same validated payload as the daily report and PDF.

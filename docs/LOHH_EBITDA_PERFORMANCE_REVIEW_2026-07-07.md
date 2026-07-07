# Lux Oasis Holiday Homes EBITDA Performance Review

Date: 2026-07-07
Source workbook: `/Users/damianoagent/.openclaw/media/inbound/LUX_OASIS_Holiday_Homes_EBITDA---a6e3ac20-7196-4599-bf82-f5017aa51ca9.xlsx`

## Executive Read

Lux Oasis Holiday Homes was EBITDA-negative in the reliable Dec 2024 to Jun 2025 build-out period.

This is not surprising, because one revenue-generating unit, Murjan 3, was carrying full company overhead while Murjan 2 was being set up and not yet producing revenue in the modelled period.

The issue is not only revenue. The issue is scale and fixed overhead absorption.

## Reliable EBITDA Base: Dec 2024 to Jun 2025

Period: 7 months

- Net revenue: AED 138,598
- Direct operating costs: AED 121,057
- Murjan 3 unit EBITDA: AED 17,541
- Company overhead: AED 45,350
- Core business EBITDA before Murjan 2 setup drag: AED -27,809
- Murjan 2 setup opex, excluding furniture capex: AED -14,799
- Total business EBITDA: AED -42,608
- EBITDA margin: -30.7%

Monthly average:

- Net revenue: AED 19,800/month
- Murjan 3 unit EBITDA: AED 2,506/month
- Company overhead: AED 6,479/month
- Total EBITDA: AED -6,087/month

## What This Means

Murjan 3 was profitable at unit level, but not profitable enough to cover business overhead alone.

Average unit EBITDA of about AED 2,506/month means:

- one unit cannot carry the business;
- three similar units would only roughly cover current fixed overhead;
- reaching AED 50,000/month operating profit would require either much stronger unit economics or many more units.

At historical AED 2.5k/month unit EBITDA, the business would need roughly 23 similar units to cover overhead and produce AED 50k/month operating profit.

At stronger AED 6k-8k/month unit EBITDA, the target starts to look more realistic around 8-10 good units, depending on overhead and staffing.

## Best And Worst Months In The Reliable Period

Best month:

- Feb 2025: AED 11,801 Murjan 3 unit EBITDA; AED 5,601 after overhead.

Weak months:

- Mar 2025: AED -4,148 Murjan 3 unit EBITDA; AED -10,648 after overhead.
- Jun 2025: AED -5,892 Murjan 3 unit EBITDA; AED -13,142 after overhead before Murjan 2 setup drag.

This shows seasonality and pricing/occupancy sensitivity. Scaling should be judged on trailing performance, not one good month.

## June 2026 Snapshot

June 2026 is useful but not reliable enough as a full EBITDA month because rent was not booked in the month.

Visible rows show:

- Airbnb room revenue: AED 8,550.91
- Recorded operating expenses excluding MacBook capex: AED 6,706.17
- EBITDA before rent and capex: about AED 1,844.74
- MacBook: AED 13,974, correctly treated as capex, not operating expense

Important issue: the workbook has formula/cache inconsistencies in the June 2026 tab.

- `B18` formula is `SUM(B5:B16)`, which misses Google One in `B17`.
- `B21` formula is `B3-B17`, which is not the correct EBITDA formula.
- The summary tab shows AED 508.65, while the June tab cached value shows AED -7.13.

Correct treatment should be:

- EBITDA before rent = revenue minus recorded operating expenses.
- EBITDA after rent = revenue minus recorded operating expenses minus monthly rent or rent allocation.

If a normal rent allocation around AED 8,333/month is included, June 2026 would be negative despite the pre-rent positive result.

## Business Implication

The business needs more units, but not any units.

Property #2 and #3 should be accepted only if the expected retained EBITDA after rent/direct costs is strong enough to absorb overhead and move toward the AED 50k/month target.

Priority should remain:

1. revenue-share acquisitions where downside is lower;
2. hybrid structures only when the unit is clearly strong;
3. sublease only when projected retained monthly EBITDA is strong after rent and operating costs;
4. avoid adding fixed people cost before 2-3 profitable units are live.

## Fixes Needed In The Workbook

1. Correct the June 2026 formulas:
   - `B18 = SUM(B6:B17)`
   - `B21 = B4-B18`
   - add a separate line for rent allocation if rent was paid by cheque outside the monthly expense list.
2. Add Jul 2025 to May 2026 data to create a full trailing 12-month P&L.
3. Split each month into:
   - unit revenue
   - direct unit costs
   - unit EBITDA
   - company overhead
   - setup opex
   - capex
   - owner distributions
4. Track each unit separately, then consolidate.
5. Add a forward-looking target model showing how many units are needed at AED 2.5k, AED 5k, AED 7.5k and AED 10k monthly unit EBITDA.

## COO Verdict

Current EBITDA evidence says the business is still in build-out mode, not yet self-sustaining.

The main lever is not cost cutting alone. It is adding profitable units while keeping overhead fixed and avoiding weak subleases.

For the resignation target, the next units must be judged by retained monthly EBITDA, not just revenue or occupancy.


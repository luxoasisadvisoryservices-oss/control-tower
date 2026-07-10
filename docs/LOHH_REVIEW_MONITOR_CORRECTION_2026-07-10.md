# LOHH Review Monitor Correction - 2026-07-10

Karri N's 5-star review was found after Damiano challenged the Airbnb check.

The initial Airbnb monitor said there was no new Airbnb item because it only watches forwarded `express@airbnb.com` content. The review arrived as a forwarded Hostaway notification from `info@luxoasisholidayhomes.com`.

Review details:

- Guest: Karri N
- Reservation ID: `62452936`
- Listing: JBR Poolfront Beach | 1BDR Family | Oasis 2
- Stay: 2026-07-04 to 2026-07-08
- Rating: 5
- Review: "A very good place to stay in JBR and near Marina. It’s a beautiful spacious apartment well maintained and suitable for long stays. Highly recommended."

Fix applied:

- `scripts/hostaway_bed_setup_scan.mjs` now searches forwarded Hostaway body content, not only direct Hostaway sender matches.
- It explicitly catches `left a review` and `Review star rating`.
- Verification returned the Karri review correctly.

Close-out:

- 2026-07-10 07:52 Asia/Dubai: review-reply task handed to Lin in Slack `#airbnb`, thread `1783655510.335849`.
- 2026-07-10 11:06 Asia/Dubai: Lin confirmed she replied to Karri N's 5-star review and attached a screenshot.
- The 11:30 follow-up job `783df34e-3534-4de2-b133-78c3c1ca3592` was cancelled after Lin confirmed done.

Operating rule:

Hostaway review notifications count as Airbnb/guest reputation monitoring even without `express@airbnb.com`. Five-star/no-issue reviews are recorded. Non-5-star or issue-bearing reviews are escalated.

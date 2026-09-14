window.CONTROL_TOWER_RUNTIME_SNAPSHOT = {
  "schemaVersion": 1,
  "phase1State": "ATTENTION",
  "phase1Detail": "Current scheduler inspection found 13 enabled definitions: 10 latest OK, 2 latest failed, and 1 with no recorded run. This is configuration and latest-result evidence, not continuous health or live telemetry.",
  "capturedAt": "2026-09-14T10:42:26+04:00",
  "jobsSourceModifiedAt": "2026-09-14T10:41:03+04:00",
  "auditAt": "2026-09-14T10:42:26+04:00",
  "verified": "2026-09-14T10:42:26+04:00",
  "configChecked": "2026-09-14T10:42:26+04:00",
  "title": "Current attention snapshot — 2 latest failures; Nest Match packet not yet delivered",
  "summary": "13 schedules are enabled as configuration: 10 latest OK, 2 failed, 1 never run. Nest Match has 42 Dubai-ready, 29 held, 71 audited; Hermes sent 0 and external/manual sends are unverified. Packet 8548e1c182e2 is configured for weekday 09:00 Dubai, next 15 Sep, but has not run or delivered.",
  "enabledCount": 13,
  "pausedCount": 28,
  "completedCount": 2,
  "jobHealth": {"ok": 10, "error": 2, "neverRun": 1},
  "metrics": [
    {"label": "Enabled schedules", "value": "13", "detail": "Configured on; not a health signal"},
    {"label": "Latest OK", "value": "10", "detail": "Enabled jobs only"},
    {"label": "Latest failed", "value": "2", "detail": "Enabled jobs only"},
    {"label": "Never run", "value": "1", "detail": "Nest Match packet job"}
  ],
  "services": [
    {"name": "Hermes cron scheduler", "state": "RUNNING", "detail": "hermes cron status reported the gateway running with 13 active jobs at 2026-09-14 10:42 Dubai. Point-in-time inspection only."},
    {"name": "Nest Match outreach packet", "state": "CONFIGURED", "detail": "Job 8548e1c182e2 is enabled for weekdays at 09:00 Dubai. Next run is 2026-09-15 09:00 Dubai. It has zero recorded attempts and no verified delivery."},
    {"name": "Nest Match Dubai provider queue", "state": "READY", "detail": "Source-backed board: 42 Dubai-ready, 29 held, 71 audited. Hermes sent 0 outreach messages; sends outside Hermes are unverified."},
    {"name": "LOHH immediate alerts", "state": "FAIL", "detail": "Latest recorded run failed because the approved backfill prerequisite was not proven. This snapshot does not claim an outbound alert was sent."},
    {"name": "Hermes local backup", "state": "FAIL", "detail": "Latest recorded run failed because the bounded restore limit was exceeded."},
    {"name": "Slack / email / LinkedIn writes", "state": "NOT TESTED", "detail": "No Slack, email, LinkedIn or provider outreach write was performed for this update."}
  ],
  "failures": [
    {"id": "e0ef2f40f360", "name": "LOHH immediate Hostaway booking and guest-message alerts", "lastRunAt": "2026-09-14T10:41:03.304169+04:00", "error": "Backfill prerequisite not proven"},
    {"id": "d7938862f17d", "name": "Hermes native daily local backup", "lastRunAt": "2026-09-14T03:18:26.124758+04:00", "error": "Bounded restore limit exceeded"}
  ],
  "workers": [
    {"name": "Latest recorded OK", "count": 10, "detail": "Enabled schedules; latest result only"},
    {"name": "Latest recorded failure", "count": 2, "detail": "Enabled schedules; inspect failures above"},
    {"name": "No recorded run", "count": 1, "detail": "Enabled but delivery unverified"},
    {"name": "Paused / held", "count": 28, "detail": "Not enabled; no activation implied"},
    {"name": "Completed one-shots", "count": 2, "detail": "Static store state, not an active worker"}
  ],
  "holds": [
    {"title": "Paused scheduler definitions", "count": 28, "state": "Held", "detail": "Paused in the current Hermes job store; this public snapshot does not expose private reasons or imply activation."},
    {"title": "Nest Match provider-source rows", "count": 29, "state": "Held", "detail": "28 targets/routes remain unverified and 1 company lacks explicit Dubai coverage. They are excluded from the 42-row Dubai-ready queue."}
  ],
  "note": "Static public-safe snapshot captured 2026-09-14T10:42:26+04:00 from Hermes jobs.json modified 2026-09-14T10:41:03+04:00, hermes cron status/doctor, and the verified 71-row Nest Match outreach audit. This is not live telemetry. The packet job is configured, not delivered; Hermes outreach sent count is 0 and external/manual sends were not verified. Latest-result status is not continuous health."
};

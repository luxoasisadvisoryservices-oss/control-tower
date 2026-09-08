window.CONTROL_TOWER_RUNTIME_SNAPSHOT = {
  "schemaVersion": 1,
  "phase1State": "PARTIAL",
  "phase1Detail": "Luna subscription request passed. Stale Desktop scheduler stopped; launchd gateway local scheduled execution passed. Telegram unattended delivery and fresh end-user inbound proofs remain incomplete. No Phase 2 started.",
  "capturedAt": "2026-09-08T21:50:08+04:00",
  "jobsSourceModifiedAt": "2026-09-08T21:49:48+04:00",
  "auditAt": "2026-09-08T21:50:08+04:00",
  "verified": "2026-09-08T21:50:08+04:00",
  "configChecked": "2026-09-08T21:50:08+04:00",
  "title": "Phase 1 PARTIAL \u2014 safe automation restored; messaging verification incomplete",
  "summary": "10 schedules are enabled as configuration. Latest recorded outcomes: 10 OK, 0 failed, 0 never run. Enabled does not mean healthy or running now.",
  "enabledCount": 10,
  "pausedCount": 29,
  "completedCount": 2,
  "jobHealth": {
    "ok": 10,
    "error": 0,
    "neverRun": 0
  },
  "metrics": [
    {
      "label": "Enabled schedules",
      "value": "10",
      "detail": "Configured on; not a health signal"
    },
    {
      "label": "Latest OK",
      "value": "10",
      "detail": "Enabled jobs only"
    },
    {
      "label": "Latest failed",
      "value": "0",
      "detail": "Enabled jobs only"
    },
    {
      "label": "Never run",
      "value": "0",
      "detail": "Enabled jobs with no result"
    }
  ],
  "services": [
    {
      "name": "Hermes launchd gateway",
      "state": "PASS",
      "detail": "Gateway-only local scheduled probe completed at 2026-09-08 21:27 Dubai; execution receipt identifies gateway PID 48083. Login autostart and crash restart verified."
    },
    {
      "name": "OpenClaw runtime",
      "state": "OFF",
      "detail": "Legacy services disabled and unloaded; no running legacy poller; rollback files retained."
    },
    {
      "name": "Hostaway read and guest-operation behavior",
      "state": "PASS",
      "detail": "Authenticated live reads HTTP 200; 38 regression and 10 adversarial checks passed. No guest messages. Six internal reservation checkpoints restored; Gmail source and Telegram escalation lanes held."
    },
    {
      "name": "Dedupe and state protection",
      "state": "PASS",
      "detail": "Cross-day retention, acknowledgement not completion, thread mapping, escalation dedupe, locks and checkpoints tested; production state unchanged by no-send verification."
    },
    {
      "name": "Gmail workers",
      "state": "PARTIAL",
      "detail": "One bounded recheck each for JBR/ORL returned Gmail query-cost rate-limit HTTP 403. No retry; dependent workers remain paused."
    },
    {
      "name": "Telegram unattended scheduled delivery",
      "state": "FAIL",
      "detail": "Single authorized test hit stale Desktop runtime and sent an error, not the intended verification. Desktop stopped; gateway-only local probe passed. No second Telegram test sent."
    },
    {
      "name": "Telegram inbound",
      "state": "UNVERIFIED",
      "detail": "Gateway getUpdates polling confirmed after restart; no fresh end-user inbound event observed."
    },
    {
      "name": "Slack",
      "state": "PARTIAL",
      "detail": "Post-restart Socket Mode, authentication, canonical home reads and operational channel/thread reads passed. Prior outbound message read back exactly. Fresh post-restart inbound/outbound message exchange not exercised."
    },
    {
      "name": "Models",
      "state": "PASS",
      "detail": "Main Astra; delegation Sol exercised; routine Luna live requests passed. All former Mini pins replaced. No routine Astra jobs."
    },
    {
      "name": "Backup / recovery",
      "state": "PASS",
      "detail": "Local archive checksum and isolated restoration passed; documented new-Mac procedure retained. No replacement-hardware test or verified off-device copy."
    }
  ],
  "failures": [],
  "workers": [
    {
      "name": "Latest recorded OK",
      "count": 10,
      "detail": "Enabled schedules; latest result only"
    },
    {
      "name": "Latest recorded failure",
      "count": 0,
      "detail": "Enabled schedules; inspect failures above"
    },
    {
      "name": "No recorded run",
      "count": 0,
      "detail": "Enabled but health unknown"
    },
    {
      "name": "Paused / held",
      "count": 29,
      "detail": "Not enabled; reasons shown separately"
    },
    {
      "name": "Completed one-shots",
      "count": 2,
      "detail": "Static store state, not an active worker"
    }
  ],
  "holds": [
    {
      "title": "Intentional safety / approval holds",
      "count": 10,
      "state": "Awaiting approval",
      "detail": "Outreach, external email/mailbox actions, Italy conflict, previously disabled and unbounded operational lanes remain held."
    },
    {
      "title": "Technical / verification holds",
      "count": 19,
      "state": "Blocked",
      "detail": "Includes Gmail source availability, unverified messaging delivery and unresolved worker dependencies; no activation implied."
    }
  ],
  "note": "Dated static snapshot, not live telemetry. Enabled means scheduled, not currently executing. Latest recorded success is not a continuous-health assertion. Source project information is static unless separately evidenced. No recurring publication is enabled.",
  "technicalHolds": 19,
  "intentionalHolds": 10,
  "jobs": [
    {
      "id": "7370be34f908",
      "name": "Daily COO briefing for Damiano",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "a078227d665e",
      "name": "Overnight COO backend execution scan",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "0fc24156af23",
      "name": "Airbnb email to Slack alert monitor",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "db165e47a6ea",
      "name": "JBR agent reply and lead monitor",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "e24568dfa635",
      "name": "Scheduled business inbox triage",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "5aaba7e9cf20",
      "name": "Daily COO briefing delivery watchdog",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "23e2bef52c2f",
      "name": "Commercial Growth prospect worker",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "c5354376cad7",
      "name": "Daily Growth Engine Results Report",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "3f4688f3a96d",
      "name": "Daytime Slack ops-only monitor",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "59923470fc46",
      "name": "Weekend Oasis Revenue Lab outreach prep",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "65c73027147e",
      "name": "Damiano daily 7 PM close-out report",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "dfce6339f7ef",
      "name": "Daily Control Tower phone dashboard update",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "4928db2a9d84",
      "name": "ORL PriceLabs Revenue Manager API availability watch",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "91090fe434d4",
      "name": "Oasis Revenue Lab product and API worker",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "565eab9cb47f",
      "name": "Social and owner-acquisition content worker",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "25bdc36329cf",
      "name": "Agent bench accountability audit",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "e332c01f686c",
      "name": "Control Tower watcher",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "98f8329e1aa7",
      "name": "Daily ORL Claude Code repo next action",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "753ee135b701",
      "name": "ORL carry-forward guard",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "68bb8f1fb298",
      "name": "Hostaway and Bed Setup ops monitor",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "711edba45e65",
      "name": "Agent bench dispatcher and output audit",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "500aaf867e5c",
      "name": "Monthly Google Business Profile report review",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "ef98a8591f84",
      "name": "daily-business-closeout-brief-1845-dubai",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "aa4beabaf25f",
      "name": "JBR outbound agent email engine",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "dabf89005241",
      "name": "Airbnb Italy Acquisition Agent",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "f61838a44d44",
      "name": "ORL Italy Rome/Milan host discovery and outreach",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "011433b6af91",
      "name": "Hostaway Airbnb inquiry direct router main wake",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "cdaef2023206",
      "name": "Airbnb Italy outbound reply monitor",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "b606beed39d3",
      "name": "Hostaway reservation ops frame checkpoints",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "6a5d6f20ed3e",
      "name": "Hostaway same-day check-in readiness checkpoint",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "3733779c93c0",
      "name": "Hostaway day-before check-in readiness at 15:00",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "b371bcd7fb38",
      "name": "Hostaway day-before checkout cleaning plan at 12:00",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "1fcd95731bc3",
      "name": "Hostaway same-day checkout cleaner-on-way at 10:35",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "d79987e52035",
      "name": "Hostaway property-manager Lin follow-up agent",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "error",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "bb2bc9e123df",
      "name": "ORL first batch reply monitor",
      "state": "awaiting approval",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "88873059ebed",
      "name": "orl_global_rm_prospecting_tue_thu_1045",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-luna"
    },
    {
      "id": "5727f0831612",
      "name": "Hostaway checkout carpet cleaning plan at 15:00",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "28f2efc24ddb",
      "name": "Luca NHNCD partnership day 3 reminder",
      "state": "blocked",
      "schedulerState": "paused",
      "latestRecordedStatus": "never run",
      "model": "gpt-5.6-sol"
    },
    {
      "id": "d3e6e520845e",
      "name": "Parity verification \u2014 ONE Telegram delivery test",
      "state": "completed",
      "schedulerState": "completed",
      "latestRecordedStatus": "ok",
      "model": "no-agent"
    },
    {
      "id": "d7938862f17d",
      "name": "Hermes native daily local backup",
      "state": "active",
      "schedulerState": "scheduled",
      "latestRecordedStatus": "ok",
      "model": "no-agent"
    },
    {
      "id": "211107424f3e",
      "name": "Phase1 gateway local-only runtime probe",
      "state": "completed",
      "schedulerState": "completed",
      "latestRecordedStatus": "ok",
      "model": "no-agent"
    }
  ]
};

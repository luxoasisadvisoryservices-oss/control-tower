window.CONTROL_TOWER_RUNTIME_SNAPSHOT = {
  "schemaVersion": 2,
  "phase1State": "ATTENTION",
  "phase1Detail": "Fresh bounded scheduler summary plus approved public-safe business facts. No prompts, contacts, private operational records, credentials, or raw errors are included.",
  "capturedAt": "2026-10-25T23:05:43+04:00",
  "jobsSourceModifiedAt": "2026-10-25T23:05:42+04:00",
  "auditAt": "2026-10-25T23:05:43+04:00",
  "verified": "2026-10-25T23:05:43+04:00",
  "configChecked": "2026-10-25T23:05:43+04:00",
  "title": "Control Tower freshness: attention · 2 latest scheduler failures",
  "summary": "24 schedules enabled as configuration: 22 latest OK, 2 latest failed, 0 never run. Business source: APPROVED. Latest-result evidence is not continuous health.",
  "enabledCount": 24,
  "pausedCount": 24,
  "completedCount": 1,
  "jobHealth": {
    "ok": 22,
    "error": 2,
    "neverRun": 0
  },
  "metrics": [
    {
      "label": "Enabled schedules",
      "value": "24",
      "detail": "Configured on; not a health signal"
    },
    {
      "label": "Latest OK",
      "value": "22",
      "detail": "Enabled jobs only"
    },
    {
      "label": "Latest failed",
      "value": "2",
      "detail": "Enabled jobs only; private details withheld"
    },
    {
      "label": "Never run",
      "value": "0",
      "detail": "Enabled jobs with no result"
    }
  ],
  "services": [
    {
      "name": "Hermes local scheduler source",
      "state": "CHECKED",
      "detail": "Read stably from the current local scheduler store; no scheduler state was changed."
    },
    {
      "name": "Approved public-safe business source",
      "state": "APPROVED",
      "detail": "Loaded from an explicitly approved allowlisted public-safe source; fact dates are source dates, not check times."
    },
    {
      "name": "External systems and contacts",
      "state": "NOT TOUCHED",
      "detail": "No messages, contacts, integrations, credentials, or other systems were written by this update."
    }
  ],
  "failures": [
    {
      "name": "Scheduled worker failure",
      "lastRunAt": "2026-10-25T21:32:42.468917+04:00",
      "error": "Execution timeout"
    },
    {
      "name": "Scheduled worker failure",
      "lastRunAt": "2026-10-25T04:17:44.087451+04:00",
      "error": "Execution timeout"
    }
  ],
  "workers": [
    {
      "name": "Latest recorded OK",
      "count": 22,
      "detail": "Enabled schedules; latest result only"
    },
    {
      "name": "Latest recorded failure",
      "count": 2,
      "detail": "Enabled schedules; private details withheld"
    },
    {
      "name": "No recorded run",
      "count": 0,
      "detail": "Enabled but health unknown"
    },
    {
      "name": "Paused / held",
      "count": 24,
      "detail": "Not enabled; private reasons withheld"
    },
    {
      "name": "Completed one-shots",
      "count": 1,
      "detail": "Static scheduler state"
    }
  ],
  "holds": [
    {
      "title": "Paused scheduler definitions",
      "count": 24,
      "state": "Held",
      "detail": "Paused in the current scheduler; private reasons and records are not published."
    }
  ],
  "businessState": {
    "status": "APPROVED",
    "sourceUpdatedAt": "2026-10-25",
    "facts": [
      {
        "id": "control-tower-business-data",
        "label": "Control Tower business data",
        "status": "Dated static records",
        "summary": "The public dashboard retains each business record's original source date unless a source-backed fact changes.",
        "sourceDate": "2026-10-25"
      },
      {
        "id": "nest-match-public-brief",
        "label": "Nest Match public brief",
        "status": "User-reported; not independently verified",
        "summary": "The public brief reports a stable Dubai experience and manual outreach positioning; no automated outreach is represented.",
        "sourceDate": "2026-10-25"
      }
    ],
    "detail": "Loaded from an explicitly approved allowlisted public-safe source; fact dates are source dates, not check times."
  },
  "note": "Static public-safe snapshot checked 2026-10-25T23:05:43+04:00. Scheduler source modified 2026-10-25T23:05:42+04:00. Business fact source dates are preserved and are not advanced when facts are unchanged. This is not live telemetry."
};

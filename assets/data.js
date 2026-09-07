window.CONTROL_TOWER_DATA = {
  snapshot: "07 Sep 2026, 22:28 Dubai",
  sourceNote: "Verified static snapshot. Runtime connectivity was not re-verified; historical worker assignments are not live-status evidence.",
  statuses: ["Not Started", "In Progress", "Waiting", "Blocked", "Review", "Completed"],
  projects: [
    {
      id: "lohh", name: "Lux Oasis Holiday Homes", short: "LOHH", status: "In Progress", priority: "P1", owner: "Damiano", team: ["Damiano", "Lin", "Hermes"], updated: "07 Sep 2026",
      summary: "Apartment growth and guest operations, with JBR acquisition blocked and current operations on controlled follow-through.",
      progress: {done: 2, total: 6}, latest: "Oasis 2 checkout cleaning was confirmed; Joey/Oasis 2 review handling is closed. JBR remains blocked for lack of a fresh eligible direct route.",
      completed: ["Oasis 2 checkout cleaning confirmed", "Joey/Oasis 2 review handoff closed and routing corrected"],
      current: ["Murjan 2 UP01 readiness follow-through", "Hostaway quiet watch", "Airbnb Italy reply watch"],
      next: ["Lin confirms Murjan 2 readiness or blocker", "Keep acquisition outreach evidence-led; no blind resend"],
      blockers: ["JBR has no eligible not-contacted direct-email lead", "Several Lin follow-ups still await confirmation"],
      decisions: ["Use proof-gated, unit-level acquisition economics", "No public posting, spend or outbound without approval"],
      docs: [["Scaling roadmap","./docs/LOHH_SCALING_ROADMAP_2026-07-05.md"],["Airbnb / Hostaway SOP","./docs/AIRBNB_HOSTAWAY_LIN_DAILY_OPS_SOP_SOURCE_2026-07-08.md"]]
    },
    {
      id: "guestlab", name: "Oasis Guest Lab", short: "Guest Lab", status: "In Progress", priority: "P1", owner: "Zuhair", team: ["Zuhair", "Damiano", "Lin", "Lia"], updated: "07 Sep 2026",
      summary: "Dashboard-controlled guest assistant moving toward safe operator rollout. Lia autopilot is reported active in source notes, but not live-verified here.",
      progress: {done: 3, total: 12}, latest: "Zuhair’s Trello-ready scope now includes the properties edit section, policy modules, automated guest journeys, routing, translation and inquiry status.",
      completed: ["Main dashboard exists", "Reservation dashboard exists", "Hostaway data fetching confirmed in source"],
      current: ["Review/update the edit section in the properties dashboard", "Build essential policy controls", "Finish automated guest-journey messages"],
      next: ["Confirm exact properties-edit changes", "Test ticket memory and translation", "Integrate Hostaway inbox into Chatwoot with OTA labels"],
      blockers: ["Final policy tone/list and examples needed from Damiano", "Meta tech-provider proof path remains blocked", "Release-critical integration QA is incomplete"],
      decisions: ["Dashboard is the control layer", "Per-reservation overrides replace Chatwoot notes", "Lin rollout waits for release-critical controls and tests"],
      docs: [["7 Sep Trello update","./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"],["Custom rebuild notes","./docs/ZUHAIR_CUSTOM_CONVIVA_REBUILD_MEETING_NOTES_2026-08-23.md"]]
    },
    {
      id: "orl", name: "Oasis Revenue Lab", short: "ORL", status: "Waiting", priority: "P1", owner: "Damiano", team: ["Damiano", "Hermes"], updated: "07 Sep 2026",
      summary: "Hybrid revenue-management advisory desk. Current September lane is controlled outreach and partnership review, not a new engineering push.",
      progress: null, latest: "Damiano sent the PriceLabs/Eriel terms email. It is waiting for reply; outreach packs remain approval-gated.",
      completed: ["Hybrid revenue-manager positioning documented", "PriceLabs/RevLabs research PDF published"],
      current: ["PriceLabs reply watch", "Host-style prospect packs held for approval"],
      next: ["Evaluate written PriceLabs response when received", "Choose send/edit/hold for approval-gated prospect packs"],
      blockers: ["No written PriceLabs clearance yet", "Product/data proof required before stronger claims"],
      decisions: ["Sell judgement and accountability, not generic AI access", "Pricing and write actions remain read-only-first and approval-gated"],
      docs: [["Hybrid positioning","./docs/ORL_HYBRID_REVENUE_MANAGER_POSITIONING_2026-07-29.md"],["PriceLabs research","./docs/ORL_PRICELABS_VIDEO_RESEARCH_REVENUE_MANAGEMENT_CONSULTANCY_2026-09-04.md"]]
    },
    {
      id: "nest", name: "Nest Match", short: "Nest Match", status: "Waiting", priority: "P2", owner: "Damiano", team: ["Damiano", "Hermes", "Lin"], updated: "07 Sep 2026",
      summary: "Global-capable STR professional marketplace launching city by city, with Dubai as the first controlled-beta market.",
      progress: null, latest: "Media-office/licensing email was sent and is waiting for reply. Provider outreach assets exist but remain approval-gated.",
      completed: ["Provider taxonomy and outreach master created", "Full outreach overview and LinkedIn provider board prepared"],
      current: ["Licensing/media-office reply watch", "Profile polish confirmation from Lin", "Legal/privacy and wording alignment"],
      next: ["Resolve registration and role-flow gates", "Verify payment-success safety and logged-in role paths before launch"],
      blockers: ["Written licensing guidance not received", "Controlled-beta QA and legal/privacy review remain open"],
      decisions: ["Seed supply first", "Do not market an empty shell", "Launch liquidity city by city"],
      docs: [["Full outreach overview","./docs/nest-match-full-outreach-overview.html"],["Requirements status","./docs/NEST_MATCH_LUCA_REQUIREMENTS_STATUS_2026-09-05.md"]]
    },
    {
      id: "luca", name: "Luca / NHNCD Collaboration", short: "Luca / NHNCD", status: "In Progress", priority: "P2", owner: "Luca", team: ["Luca", "Damiano", "Hermes", "Zuhair"], updated: "07 Sep 2026",
      summary: "Controlled first analysis phase across ORL, Nest Match and limited Guest Lab materials.",
      progress: {done: 2, total: 8}, latest: "Shams/media-office and PriceLabs emails were sent and are waiting for replies—not pending approval.",
      completed: ["Partnership review pack prepared", "Shams and PriceLabs emails sent"],
      current: ["Reply watch", "GitHub Read acceptance/coverage verification", "DLD/DET clarification route"],
      next: ["Obtain shareable Guest Lab docs", "Agree weekly call", "Track written analysis toward the proposed review target"],
      blockers: ["External replies pending", "Bot demo waits for Luca’s privately supplied BotFather token", "Commercial structure parked pending written analysis and legal review"],
      decisions: ["Access stays read-only and tenant-scoped", "No credentials, secrets or unnecessary guest/client data", "Damiano must choose 22 or 23 September first"],
      docs: [["Partnership tracker","./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"],["Partnership PDF","./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.pdf"]]
    },
    {
      id: "mission", name: "Mission Control", short: "Mission Control", status: "In Progress", priority: "P2", owner: "Hermes", team: ["Hermes", "Damiano"], updated: "07 Sep 2026",
      summary: "Internal prototype for running a portfolio through clear evidence, ownership, decisions and next actions.",
      progress: {done: 1, total: 4}, latest: "Frontend redesigned around a normalized static snapshot; runtime badges intentionally removed.",
      completed: ["Static Control Tower prototype retained with full legacy archive"],
      current: ["Validate the mission-control information model"],
      next: ["Define connector strategy and first beta-user profile", "Decide whether this remains internal or becomes a product"],
      blockers: ["Product scope, connector strategy and pricing are undecided"],
      decisions: ["Only verified source-backed updates belong in the current view"],
      docs: [["Original detailed archive","./legacy.html"]]
    },
    {
      id: "pankaj", name: "Pankaj Platform Catch-up", short: "Pankaj", status: "Waiting", priority: "P3", owner: "Damiano", team: ["Damiano", "Pankaj"], updated: "07 Sep 2026",
      summary: "Operator revenue-sharing platform conversation waiting for a confirmed meeting outcome.", progress: null,
      latest: "A calendar reminder existed for an 8 September coordination step; no later outcome is present in this snapshot.",
      completed: [], current: ["Await confirmed meeting state"], next: ["Record outcome only when verified"], blockers: ["No confirmed outcome in the source snapshot"], decisions: ["Do not infer progress from a scheduled reminder"], docs: []
    },
    {
      id: "renovation", name: "Lux Oasis Renovation", short: "Renovation", status: "Not Started", priority: "P3", owner: "Damiano", team: ["Damiano", "Hermes"], updated: "07 Sep 2026",
      summary: "Opportunity-gated STR project-management lane tied only to real owner or unit opportunities.", progress: null,
      latest: "No new verified change in the current snapshot.", completed: [], current: [], next: ["Activate only when a real unit or owner lead exists"], blockers: ["No verified pilot lead"], decisions: ["Do not present this as contracting; keep it opportunity-gated"], docs: [["Advisory ecosystem","./docs/LUX_OASIS_ADVISORY_PRODUCT_ECOSYSTEM_PRESENTATION_2026-08-04.md"]]
    }
  ],
  tasks: [
    {id:"t1",title:"Review/update the edit section in the properties dashboard",project:"guestlab",status:"Not Started",priority:"P1",owner:"Zuhair",needsDamiano:false,detail:"Confirm the specific changes Damiano needs before implementation.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t2",title:"Build essential Lia policy controls",project:"guestlab",status:"In Progress",priority:"P1",owner:"Zuhair",needsDamiano:true,detail:"Configurable rule, fee, authority, waiver, alert and wording at company/property/booking level.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t3",title:"Finish automated guest-journey messages",project:"guestlab",status:"In Progress",priority:"P1",owner:"Zuhair",needsDamiano:true,detail:"Pre-arrival through review request with timing, overrides, pause/review and escalation controls.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t4",title:"Add Inquiry — not booked status",project:"guestlab",status:"Blocked",priority:"P1",owner:"Zuhair",needsDamiano:false,detail:"Separate inquiries from confirmed reservations; test current Hostaway payloads.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t5",title:"Provide final policy tone, list and examples",project:"guestlab",status:"Waiting",priority:"P1",owner:"Damiano",needsDamiano:true,detail:"Needed for essential controls and automated-message QA.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t6",title:"Confirm Murjan 2 UP01 readiness or blocker",project:"lohh",status:"Waiting",priority:"P1",owner:"Lin",needsDamiano:false,detail:"Check Hostaway and return a clear ready/blocked state."},
    {id:"t7",title:"Hold JBR acquisition until a clean route appears",project:"lohh",status:"Blocked",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"No eligible not-contacted direct-email lead in the latest verified sweep."},
    {id:"t8",title:"Watch PriceLabs/Eriel for written reply",project:"orl",status:"Waiting",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"Email was sent by Damiano; do not represent it as pending approval.",doc:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {id:"t9",title:"Choose send, edit or hold for ORL prospect packs",project:"orl",status:"Review",priority:"P2",owner:"Damiano",needsDamiano:true,detail:"Outbound remains approval-gated."},
    {id:"t10",title:"Wait for Nest Match media-office/licensing reply",project:"nest",status:"Waiting",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"Email is sent; paid subscriptions and promoted placement are not cleared."},
    {id:"t11",title:"Confirm Nest Match profile screenshot and state",project:"nest",status:"Waiting",priority:"P2",owner:"Lin",needsDamiano:false,detail:"Return screenshot plus completed or blocked confirmation."},
    {id:"t12",title:"Verify Luca GitHub Read acceptance and coverage",project:"luca",status:"In Progress",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"Invitation was reported sent; acceptance and exact coverage remain unverified.",doc:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {id:"t13",title:"Choose 22 or 23 September to offer Luca first",project:"luca",status:"Review",priority:"P1",owner:"Damiano",needsDamiano:true,detail:"Meeting-date preference needed; the snapshot does not confirm a final choice.",doc:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {id:"t14",title:"Prepare DLD/DET clarification route",project:"luca",status:"In Progress",priority:"P2",owner:"Hermes",needsDamiano:true,detail:"Exact Nest Match feature and non-brokerage questions; submission requires approval."},
    {id:"t15",title:"Record Pankaj catch-up outcome",project:"pankaj",status:"Waiting",priority:"P3",owner:"Damiano",needsDamiano:true,detail:"No verified meeting outcome is present."},
    {id:"t16",title:"Define Mission Control connector strategy",project:"mission",status:"Not Started",priority:"P2",owner:"Hermes",needsDamiano:true,detail:"Product scope and first beta-user profile are open decisions."},
    {id:"t17",title:"Keep Renovation opportunity-gated",project:"renovation",status:"Waiting",priority:"P3",owner:"Hermes",needsDamiano:false,detail:"Activate only for a verified unit or owner lead."},
    {id:"t18",title:"Close Joey/Oasis 2 review handling",project:"lohh",status:"Completed",priority:"P2",owner:"Lin",needsDamiano:false,detail:"Closed in the current source; no active task remains."},
    {id:"t19",title:"Send Shams/media-office and PriceLabs emails",project:"luca",status:"Completed",priority:"P1",owner:"Damiano",needsDamiano:false,detail:"Both were sent on 7 September and moved to reply watch.",doc:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"}
  ],
  activity: [
    {date:"07 Sep 2026",type:"Happened",project:"guestlab",title:"Properties dashboard edit task added",body:"Zuhair owns the new To do item; exact requested changes must be confirmed before implementation.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {date:"07 Sep 2026",type:"Happened",project:"luca",title:"Shams and PriceLabs emails sent",body:"Both lanes moved to written-reply watch; neither is pending approval."},
    {date:"07 Sep 2026",type:"Happened",project:"lohh",title:"Oasis 2 checkout cleaning confirmed",body:"Joey/Oasis 2 same-day checkout follow-up was closed from Damiano’s confirmation."},
    {date:"07 Sep 2026",type:"Happening",project:"guestlab",title:"Guest Lab release scope expanded",body:"Policy controls, automated messages, routing, ticket memory, translation and inquiry status are now explicit."},
    {date:"07 Sep 2026",type:"Attention",project:"lohh",title:"JBR acquisition remains blocked",body:"No clean unsent approved direct-email route appeared in the latest source evidence."},
    {date:"07 Sep 2026",type:"Attention",project:"nest",title:"Licensing reply pending",body:"The media-office email is sent; monetization and promoted placement remain uncleared."},
    {date:"04 Sep 2026",type:"Happened",project:"orl",title:"PriceLabs / RevLabs research published",body:"Research note and PDF were completed and preserved in the file archive.",doc:"./docs/ORL_PRICELABS_VIDEO_RESEARCH_REVENUE_MANAGEMENT_CONSULTANCY_2026-09-04.md"}
  ],
  people: [
    {name:"Damiano",initials:"DP",role:"Founder · approvals and commercial decisions",assignments:["lohh","orl","nest","luca","mission"],state:"Human owner"},
    {name:"Lin",initials:"LI",role:"Operations · property, profile and follow-up confirmations",assignments:["lohh","guestlab","nest"],state:"Historical assignment snapshot"},
    {name:"Zuhair",initials:"ZH",role:"Product implementation · Oasis Guest Lab",assignments:["guestlab","luca"],state:"Historical assignment snapshot"},
    {name:"Luca",initials:"LU",role:"External technical collaborator · controlled analysis",assignments:["luca"],state:"Historical assignment snapshot"},
    {name:"Hermes",initials:"HE",role:"Main agent · research, preparation and control-layer tracking",assignments:["lohh","orl","nest","luca","mission","renovation"],state:"Not connected · last verified snapshot"},
    {name:"Lia",initials:"LA",role:"Guest assistant product agent",assignments:["guestlab"],state:"Reported autopilot active · not live-verified"}
  ],
  files: [
    {group:"Current",name:"Zuhair / Oasis Guest Lab Trello update",meta:"7 Sep · Markdown",url:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {group:"Current",name:"Luca / NHNCD partnership tracker",meta:"6 Sep · Markdown",url:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {group:"Current",name:"Luca / NHNCD partnership PDF",meta:"6 Sep · PDF",url:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.pdf"},
    {group:"Projects",name:"Nest Match full outreach overview",meta:"Interactive HTML",url:"./docs/nest-match-full-outreach-overview.html"},
    {group:"Projects",name:"ORL PriceLabs research",meta:"4 Sep · Markdown",url:"./docs/ORL_PRICELABS_VIDEO_RESEARCH_REVENUE_MANAGEMENT_CONSULTANCY_2026-09-04.md"},
    {group:"Projects",name:"Lin simple daily research tracker",meta:"Excel",url:"./docs/LIN_SIMPLE_DAILY_RESEARCH_TRACKER_2026-09-01.xlsx"},
    {group:"Archive",name:"Original Control Tower — full detailed history",meta:"Byte-preserved legacy page",url:"./legacy.html"}
  ]
};

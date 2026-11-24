window.CONTROL_TOWER_DATA = {
  dataVersion: "2026-11-24-portfolio-priority-alignment-1",
  dataUpdatedAt: "2026-11-24",
  dataUpdateLabel: "24 Nov 2026 · Portfolio priorities reconciled",
  snapshot: window.CONTROL_TOWER_RUNTIME_SNAPSHOT.capturedAt,
  sourceNote: "Active portfolio priorities reconciled with the working boards on 24 Nov 2026. Historical source dates are retained where applicable. This is a point-in-time snapshot, not a live sync.",
  runtime: window.CONTROL_TOWER_RUNTIME_SNAPSHOT,
  statuses: ["Not Started", "In Progress", "Waiting", "Blocked", "Review", "Completed"],
  nestMatchBrief: {
    asOf: "2026-10-25",
    evidence: "User-reported on 25 Oct 2026; not independently verified by Control Tower.",
    state: "Dubai live experience reported stable. Payments, subscriptions, invoices and admin were reported audited and fixed this week.",
    focus: "Outreach is starting manually. Lead with the permanent Free plan, profile directory, connections and messaging, using two role templates.",
    plans: [
      "Provider: AED 29 monthly / AED 290 annual for Pro; AED 59 monthly / AED 590 annual for Premium.",
      "Operator / agent: AED 39 monthly / AED 390 annual for Pro; AED 79 monthly / AED 790 annual for Premium.",
      "Free is permanent. Pro includes 3 managed responses per month. Premium includes 6 managed responses per month.",
      "30-day free Pro trial; paid subscription afterwards. This is separate from, and does not expire, the permanent Free plan."
    ],
    safeguards: [
      "No beta offer is represented.",
      "No automated outreach is authorised; prepared profiles and pending follow-ups are described without identities.",
      "Managed request matching requires a professional to confirm both the requested service and service area.",
      "No leads or jobs are promised. AI request assistance and a native app are not claimed as live."
    ]
  },
  projects: [
    {
      id: "pricelabs-review", name: "ORL · PriceLabs review", short: "PriceLabs review", status: "Review", priority: "P1", owner: "Damiano", team: ["Damiano", "Hermes"], updated: "02 Nov 2026",
      summary: "Three priorities: reconcile final guest prices, evaluate an owner revenue-estimator page, and strengthen ORL reporting and safeguards.",
      progress: null, latest: "Video transcript review summarised. This is a proposed checklist, not evidence that live pricing, integrations or account features have been audited or changed.",
      completed: ["Video review summary prepared; implementation remains unstarted"],
      current: ["Review base/minimum/maximum rates, overrides, discounts, minimum stays and sync quality", "Trace PriceLabs → PMS → booking channel → guest checkout → net proceeds", "Evaluate the Revenue Estimator widget separately from booking-rate and search-demand integrations"],
      next: ["Test representative stay lengths, lead times, seasons and guest counts; explain every final-price difference", "Choose the estimator website/domain and verify activation, lead capture, privacy, usage limits and full recurring costs", "Prioritise owner reports, comparable-property selection, exception alerts and approval/readback controls"],
      blockers: ["Live account configuration, PMS feature support and roadmap availability not verified", "Widget/API/RE Pro subscriptions, taxes, overages and partner entitlements require confirmation", "No website/domain selected for implementation"],
      decisions: ["Estimated revenue is not guaranteed income or owner profit", "No pricing writes, paid activation, website integration or outreach authorised by this summary", "Other project dates and Event Radar connection status are unchanged"],
      docs: [["PriceLabs review · summary and checklist", "./docs/pricelabs-review-2026-11-02.html"]]
    },
    {
      id: "lohh", name: "Lux Oasis Holiday Homes", short: "LOHH", status: "In Progress", priority: "P1", owner: "Damiano", team: ["Damiano", "Lin", "Hermes"], updated: "24 Nov 2026",
      summary: "Guest operations first, with new opportunities qualified on revenue-share terms.",
      progress: null, latest: "Oasis 2 physical guest-card test is not verified. Check access without the app before changing guest instructions.",
      completed: ["Oasis 2 checkout cleaning confirmed", "Joey/Oasis 2 review handoff closed and routing corrected"],
      current: ["Verify Oasis 2 physical-card access without the app","Qualify only revenue-share growth"],
      next: ["After a successful test, reconcile guest-facing access instructions","Assess fit and unit economics before advancing a property"],
      blockers: ["No verified guest-card test result"],
      decisions: ["Use proof-gated, unit-level acquisition economics", "No public posting, spend or outbound without approval"],
      docs: [["Scaling roadmap","./docs/LOHH_SCALING_ROADMAP_2026-07-05.md"],["Airbnb / Hostaway SOP","./docs/AIRBNB_HOSTAWAY_LIN_DAILY_OPS_SOP_SOURCE_2026-07-08.md"]]
    },
    {
      id: "guestlab", name: "Oasis Guest Lab", short: "Guest Lab", status: "In Progress", priority: "P1", owner: "Zuhair", team: ["Zuhair", "Damiano", "Lin", "Lia"], updated: "24 Nov 2026",
      summary: "P0 launch gate: safe replies to confirmed OTA bookings without a usable guest phone number.",
      progress: null, latest: "Known-number booking handoff works. No-number OTA flow still needs verification. Meta Tech Provider verification is complete; separate Meta App Review and official WhatsApp connection are unconfirmed.",
      completed: ["Main and reservation dashboards exist","Chatwoot core messaging and Hostaway fetching confirmed","Known-number booking-to-Lia handoff confirmed","Meta Tech Provider verification complete"],
      current: ["Verify no-number OTA replies in the original Hostaway conversation","Keep dashboard, policies and guest-journey work separate from completed foundations"],
      next: ["Check for duplicate automated messages, external links and payment requests","Escalate unresolved cases to a human; keep pre-booking human-handled"],
      blockers: ["No-number OTA end-to-end result remains unverified","Separate Meta App Review and official WhatsApp connection are unconfirmed"],
      decisions: ["Dashboard is the control layer", "Per-reservation overrides replace Chatwoot notes", "Lin rollout waits for release-critical controls and tests"],
      docs: [["7 Sep Trello update","./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"],["Custom rebuild notes","./docs/ZUHAIR_CUSTOM_CONVIVA_REBUILD_MEETING_NOTES_2026-08-23.md"]]
    },
    {
      id: "orl", name: "Oasis Revenue Lab", short: "ORL", status: "In Progress", priority: "P1", owner: "Damiano", team: ["Damiano", "Hermes"], updated: "24 Nov 2026",
      summary: "Dubai-first managed revenue: validate service economics and qualify operators.",
      progress: null, latest: "The historical 100-prospect research target is complete, not evidence of outreach. Current priorities are pricing cost audit and managed operator outreach. Draft video needs review.",
      completed: ["Hybrid revenue-manager positioning documented", "PriceLabs/RevLabs research PDF published", "Dubai 100 qualification spec and stable-ID board created"],
      current: ["Audit delivery cost and margins before public prices or release","Prioritise warm, qualified operator outreach without price promises","Review draft marketing video before publication"],
      next: ["Continue qualified private quote-based conversations","Keep outreach and paid-pilot outcomes distinct from research"],
      blockers: ["Pricing costs and margins not verified for public release","Draft video not approved for publication"],
      decisions: ["Use Luna for routine ORL research", "Sell judgement and accountability, not generic AI access", "No unsupported performance, PriceLabs or revenue claims"],
      docs: [["Dubai 100 prospect board","./docs/orl-dubai-100-prospects.html"],["Dubai 100 CSV","./docs/ORL_DUBAI_100_PROSPECTS.csv"],["Hybrid positioning","./docs/ORL_HYBRID_REVENUE_MANAGER_POSITIONING_2026-07-29.md"],["PriceLabs research","./docs/ORL_PRICELABS_VIDEO_RESEARCH_REVENUE_MANAGEMENT_CONSULTANCY_2026-09-04.md"]]
    },
    {
      id: "nest", name: "Nest Match", short: "Nest Match", status: "In Progress", priority: "P1", owner: "Damiano", team: ["Damiano", "Hermes", "Lin"], updated: "25 Oct 2026",
      summary: "Dubai-first marketplace: validate manual provider onboarding and a qualified home-service match before expanding.",
      progress: null, latest: "Current focus: manual provider signups and the first qualified single-apartment service match. The tenant pilot remains planned, not live. The October platform snapshot remains historical.",
      completed: ["Payments, subscriptions, invoices and admin tools reported audited and fixed in the 25 October brief; not independently verified by Control Tower"],
      current: ["Onboard providers manually and verify single-apartment AC or plumbing job fit","Track signups, qualified introductions and confirmed jobs separately","Review draft marketing video before publication"],
      next: ["Confirm service, building access and visit window before counting a qualified introduction","Near-term roadmap: tenant pilot for home services and rental-agent requests (planned, not live)","Keep permanent Free distinct from paid trial; make no lead or job promises","Keep Event Radar private and require authentication before connecting any source"],
      blockers: ["25 October operational claims are user-reported and not independently verified", "No automated outreach is authorised", "Event Radar authenticated access is not implemented or connected"],
      decisions: ["Lead with permanent Free, directory, connections and messaging", "Provider pricing: AED 29/59 monthly and AED 290/590 annual", "Operator/agent pricing: AED 39/79 monthly and AED 390/790 annual", "Pro includes 3 managed responses per month; Premium includes 6 per month", "Do not claim beta offers, promised leads/jobs, AI request help or a live native app"],
      docs: [["Dubai provider outreach board","./docs/nest-match-dubai-provider-outreach.html"],["Requirements status","./docs/NEST_MATCH_LUCA_REQUIREMENTS_STATUS_2026-09-05.md"]]
    },
    {
      id: "advisory", name: "Lux Oasis Advisory & Services", short: "Advisory", status: "Waiting", priority: "P1", owner: "Damiano", team: ["Damiano"], updated: "24 Nov 2026",
      summary: "Initial Advisory licence setup complete; real estate consultancy is a separate review.",
      progress: null, latest: "Waiting for written authority guidance on consultancy scope, approvals and fees. No licence change requested.",
      completed: ["Initial Advisory licence setup"], current: ["Written licensing clarification"], next: ["Review scope, approval steps and costs once received"],
      blockers: ["Written authorities’ guidance outstanding"], decisions: ["Do not treat an enquiry or acknowledgment as approval"], docs: []
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
      id: "mission", name: "Mission Control", short: "Mission Control", status: "In Progress", priority: "P2", owner: "Hermes", team: ["Hermes", "Damiano"], updated: "14 Sep 2026",
      summary: "Internal control surface for portfolio execution and a dated view of verified Hermes production state.",
      progress: {done: 1, total: 5}, latest: "At the 14 Sep 10:42 Dubai inspection, the cron gateway was running with 13 enabled definitions: 10 latest OK, 2 latest failed and 1 never run. The two latest failures are shown in the runtime panel. This is point-in-time evidence, not continuous health.",
      completed: ["Static Control Tower prototype retained with full legacy archive"],
      current: ["Show sanitized failure classes and current held paths", "Keep bounded component evidence separate from phase health", "Keep runtime source timestamps visible"],
      next: ["Resolve only the narrow external-write approvals that Damiano wants activated", "Define connector strategy and first beta-user profile"],
      blockers: ["Telegram unattended verification failed on the stale Desktop scheduler; gateway-only local execution now passes", "Fresh post-restart end-user messaging exchange remains unverified", "Isolated Gmail rate limits and worker dependencies remain held", "External-write and policy holds remain enforced"],
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
    {"id":"guestlab-ota-no-number","title":"P0 launch gate: reply to confirmed OTA bookings without a guest number","project":"guestlab","status":"In Progress","priority":"P1","owner":"Zuhair","needsDamiano":false,"detail":"Verify replies in the original Hostaway conversation with no external links, payment requests or duplicate automated messages. Unresolved cases and pre-booking go to a human."},
    {"id":"orl-pricing-audit","title":"Audit ORL delivery cost before publishing prices","project":"orl","status":"Not Started","priority":"P1","owner":"Damiano","needsDamiano":true,"detail":"Verify delivery cost and margins before public prices or release. No unaudited price promises."},
    {"id":"orl-managed-outreach","title":"Qualify managed revenue operator outreach","project":"orl","status":"In Progress","priority":"P1","owner":"Damiano","needsDamiano":true,"detail":"Work warm and suitable managed-service opportunities first. Track research, verified contact and paid pilot outcomes separately."},
    {"id":"nest-first-service-match","title":"Onboard providers and verify the first qualified service match","project":"nest","status":"In Progress","priority":"P1","owner":"Damiano","needsDamiano":true,"detail":"Manual single-apartment AC or plumbing pilot. Separate signup, qualified introduction and confirmed job; confirm access and visit timing."},
    {"id":"lohh-oasis2-guest-card","title":"Verify the Oasis 2 guest-card alternative","project":"lohh","status":"Waiting","priority":"P1","owner":"Lin","needsDamiano":false,"detail":"Check physical entry without the app before changing guest-facing instructions. The test is not yet verified."},
    {"id":"lohh-revenue-share-growth","title":"Qualify revenue-share growth only","project":"lohh","status":"In Progress","priority":"P1","owner":"Damiano","needsDamiano":true,"detail":"Check unit fit and economics before progressing a property."},
    {"id":"advisory-consultancy-guidance","title":"Await written real estate consultancy guidance","project":"advisory","status":"Waiting","priority":"P1","owner":"Damiano","needsDamiano":false,"detail":"Confirm scope, approval route and fees separately from the existing licence. No amendment requested."},
    {"id":"guestlab-foundation","title":"Chatwoot, Hostaway fetching and known-number handoff","project":"guestlab","status":"Completed","priority":"P1","owner":"Zuhair","needsDamiano":false,"detail":"Core messaging and known-phone booking path complete; this does not establish no-number OTA readiness."},
    {"id":"guestlab-tech-provider","title":"Meta Tech Provider verification","project":"guestlab","status":"Completed","priority":"P1","owner":"Zuhair","needsDamiano":false,"detail":"Separate Meta App Review and official WhatsApp connection are unconfirmed."},
    {"id":"guestlab-meta-review","title":"Verify separate Meta App Review and official WhatsApp connection","project":"guestlab","status":"Waiting","priority":"P1","owner":"Zuhair","needsDamiano":false,"detail":"Do not infer this from completed Tech Provider verification."},
    {"id":"orl-draft-video","title":"Review ORL draft video before publication","project":"orl","status":"Review","priority":"P2","owner":"Damiano","needsDamiano":true,"detail":"Consolidate feedback before approving a revised cut. No publication implied."},
    {"id":"nest-draft-video","title":"Review Nest Match draft video before publication","project":"nest","status":"Review","priority":"P2","owner":"Damiano","needsDamiano":true,"detail":"Consolidate feedback before approving a revised cut. No publication implied."},
    {"id":"advisory-initial-setup","title":"Initial Advisory licence setup","project":"advisory","status":"Completed","priority":"P1","owner":"Damiano","needsDamiano":false,"detail":"Initial setup is complete; this does not confirm any additional consultancy activity."},
    {id:"t1",title:"Review/update the edit section in the properties dashboard",project:"guestlab",status:"Not Started",priority:"P1",owner:"Zuhair",needsDamiano:false,detail:"Confirm the specific changes Damiano needs before implementation.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t2",title:"Build essential Lia policy controls",project:"guestlab",status:"In Progress",priority:"P1",owner:"Zuhair",needsDamiano:true,detail:"Configurable rule, fee, authority, waiver, alert and wording at company/property/booking level.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t3",title:"Finish automated guest-journey messages",project:"guestlab",status:"In Progress",priority:"P1",owner:"Zuhair",needsDamiano:true,detail:"Pre-arrival through review request with timing, overrides, pause/review and escalation controls.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t4",title:"Add Inquiry — not booked status",project:"guestlab",status:"Blocked",priority:"P1",owner:"Zuhair",needsDamiano:false,detail:"Separate inquiries from confirmed reservations; test current Hostaway payloads.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t5",title:"Provide final policy tone, list and examples",project:"guestlab",status:"Waiting",priority:"P1",owner:"Damiano",needsDamiano:true,detail:"Needed for essential controls and automated-message QA.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {id:"t6",title:"Confirm Murjan 2 UP01 readiness or blocker",project:"lohh",status:"Waiting",priority:"P1",owner:"Lin",needsDamiano:false,detail:"Check Hostaway and return a clear ready/blocked state."},
    {id:"t7",title:"Hold JBR acquisition until a clean route appears",project:"lohh",status:"Blocked",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"No eligible not-contacted direct-email lead in the latest verified sweep."},
    {id:"t8",title:"Watch PriceLabs/Eriel for written reply",project:"orl",status:"Waiting",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"Email was sent by Damiano; do not represent it as pending approval.",doc:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {id:"t9",title:"Build Dubai ORL research queue to 100 eligible prospects",project:"orl",status:"Completed",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"Historical target reached: the source ledger contains 100 unique eligible rows. Research only; this is not evidence of sends, replies or pilots."},
    {id:"t10",title:"Wait for Nest Match media-office/licensing reply",project:"nest",status:"Waiting",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"Email is sent; paid subscriptions and promoted placement are not cleared."},
    {id:"t11",title:"Confirm Nest Match profile screenshot and state",project:"nest",status:"Waiting",priority:"P2",owner:"Lin",needsDamiano:false,detail:"Return screenshot plus completed or blocked confirmation."},
    {id:"t12",title:"Verify Luca GitHub Read acceptance and coverage",project:"luca",status:"In Progress",priority:"P1",owner:"Hermes",needsDamiano:false,detail:"Invitation was reported sent; acceptance and exact coverage remain unverified.",doc:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {id:"t13",title:"Choose 22 or 23 September to offer Luca first",project:"luca",status:"Review",priority:"P1",owner:"Damiano",needsDamiano:true,detail:"Meeting-date preference needed; the snapshot does not confirm a final choice.",doc:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {id:"t14",title:"Prepare DLD/DET clarification route",project:"luca",status:"In Progress",priority:"P2",owner:"Hermes",needsDamiano:true,detail:"Exact Nest Match feature and non-brokerage questions; submission requires approval."},
    {id:"t15",title:"Record Pankaj catch-up outcome",project:"pankaj",status:"Waiting",priority:"P3",owner:"Damiano",needsDamiano:true,detail:"No verified meeting outcome is present."},
    {id:"t16",title:"Define Mission Control connector strategy",project:"mission",status:"Not Started",priority:"P2",owner:"Hermes",needsDamiano:true,detail:"Product scope and first beta-user profile are open decisions."},
    {id:"t17",title:"Keep Renovation opportunity-gated",project:"renovation",status:"Waiting",priority:"P3",owner:"Hermes",needsDamiano:false,detail:"Activate only for a verified unit or owner lead."},
    {id:"t18",title:"Close Joey/Oasis 2 review handling",project:"lohh",status:"Completed",priority:"P2",owner:"Lin",needsDamiano:false,detail:"Closed in the current source; no active task remains."},
    {id:"t19",title:"Send Shams/media-office and PriceLabs emails",project:"luca",status:"Completed",priority:"P1",owner:"Damiano",needsDamiano:false,detail:"Both were sent on 7 September and moved to reply watch.",doc:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {id:"orl-da485b8-zuhair-review",title:"Zuhair — pull and review latest ORL updates (da485b8)",project:"orl",status:"Not Started",priority:"P1",owner:"Zuhair",needsDamiano:false,detail:"Damiano reports master at da485b8 is clean and pushed. Retrieve that commit, review the four feature groups, then confirm receipt and report build/test results and issues. Review only—do not deploy or change live pricing.",doc:"./docs/ORL_ZUHAIR_REVIEW_DA485B8_2026-09-14.md"},
    {id:"nest-tenant-pilot",title:"Tenant pilot: home services and rental-agent requests",project:"nest",status:"Not Started",priority:"P2",owner:"Damiano",needsDamiano:false,detail:"Near-term roadmap only. Plan a small invited pilot so tenants can request home services or ask an agent to help find a rental. No release date is committed."}
  ],
  activity: [
    {date:"24 Nov 2026",type:"Happened",project:"mission",title:"Active portfolio priorities reconciled",body:"Working-board priorities and confirmed milestones were reflected in the portfolio snapshot. This is a one-time reconciliation, not automatic sync."},
    {date:"08 Sep 2026",type:"Attention",project:"mission",title:"Phase 1 safe internal recovery remains partial",body:"Luna passed, guest operations passed 38 regression and 10 adversarial checks, and the stale Desktop ticker was stopped. Gateway-only local scheduling passed. Telegram unattended delivery remains unverified; Gmail and intentional holds remain paused."},
    {date:"08 Sep 2026",type:"Attention",project:"mission",title:"External-write and policy holds remain enforced",body:"No broad write stage was activated. Narrow send/mailbox authority, Italy scope and broad Slack operation boundaries still require explicit clearance."},
    {date:"07 Sep 2026",type:"Happened",project:"guestlab",title:"Properties dashboard edit task added",body:"Zuhair owns the new To do item; exact requested changes must be confirmed before implementation.",doc:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {date:"07 Sep 2026",type:"Happened",project:"luca",title:"Shams and PriceLabs emails sent",body:"Both lanes moved to written-reply watch; neither is pending approval."},
    {date:"07 Sep 2026",type:"Happened",project:"lohh",title:"Oasis 2 checkout cleaning confirmed",body:"Joey/Oasis 2 same-day checkout follow-up was closed from Damiano’s confirmation."},
    {date:"07 Sep 2026",type:"Happening",project:"guestlab",title:"Guest Lab release scope expanded",body:"Policy controls, automated messages, routing, ticket memory, translation and inquiry status are now explicit."},
    {date:"07 Sep 2026",type:"Attention",project:"lohh",title:"JBR acquisition remains blocked",body:"No clean unsent approved direct-email route appeared in the latest source evidence."},
    {date:"07 Sep 2026",type:"Attention",project:"nest",title:"Licensing reply pending",body:"The media-office email is sent; monetization and promoted placement remain uncleared."},
    {date:"15 Sep 2026",type:"Happened",project:"orl",title:"Dubai 100 verified queue completed",body:"Bounded Luna web-research sessions brought the eligible Dubai queue to 100 unique source-backed prospects. Azure and GxDubai remain held/excluded; proof-backed sends remain 0.",doc:"./docs/orl-dubai-100-prospects.html"},
    {date:"04 Sep 2026",type:"Happened",project:"orl",title:"PriceLabs / RevLabs research published",body:"Research note and PDF were completed and preserved in the file archive.",doc:"./docs/ORL_PRICELABS_VIDEO_RESEARCH_REVENUE_MANAGEMENT_CONSULTANCY_2026-09-04.md"}
  ],
  people: [
    {name:"Damiano",initials:"DP",role:"Founder · approvals and commercial decisions",assignments:["lohh","orl","nest","advisory","luca","mission"],state:"Human owner"},
    {name:"Lin",initials:"LI",role:"Operations · property, profile and follow-up confirmations",assignments:["lohh","guestlab","nest"],state:"Historical assignment snapshot"},
    {name:"Zuhair",initials:"ZH",role:"Product implementation · Oasis Guest Lab",assignments:["guestlab","luca"],state:"Historical assignment snapshot"},
    {name:"Luca",initials:"LU",role:"External technical collaborator · controlled analysis",assignments:["luca"],state:"Historical assignment snapshot"},
    {name:"Hermes",initials:"HE",role:"Main agent · research, preparation and control-layer tracking",assignments:["lohh","orl","nest","luca","mission","renovation"],state:"Runtime configured · health shown in dated snapshot"},
    {name:"Lia",initials:"LA",role:"Guest assistant product agent",assignments:["guestlab"],state:"Reported product-agent status · not live-verified"}
  ],
  files: [
    {group:"Current",name:"Zuhair / Oasis Guest Lab Trello update",meta:"7 Sep · Markdown",url:"./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md"},
    {group:"Current",name:"Luca / NHNCD partnership tracker",meta:"6 Sep · Markdown",url:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"},
    {group:"Current",name:"Luca / NHNCD partnership PDF",meta:"6 Sep · PDF",url:"./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.pdf"},
    {group:"Projects",name:"Nest Match Dubai provider outreach",meta:"23 curated · 5 categories · 4 freelancers",url:"./docs/nest-match-dubai-provider-outreach.html"},
    {group:"Projects",name:"ORL Dubai 100 prospects",meta:"100 eligible · 0 remaining · browser-only contacted markers",url:"./docs/orl-dubai-100-prospects.html"},
    {group:"Projects",name:"ORL Dubai 100 CSV",meta:"100 verified eligible rows",url:"./docs/ORL_DUBAI_100_PROSPECTS.csv"},
    {group:"Projects",name:"ORL PriceLabs research",meta:"4 Sep · Markdown",url:"./docs/ORL_PRICELABS_VIDEO_RESEARCH_REVENUE_MANAGEMENT_CONSULTANCY_2026-09-04.md"},
    {group:"Projects",name:"Lin simple daily research tracker",meta:"Excel",url:"./docs/LIN_SIMPLE_DAILY_RESEARCH_TRACKER_2026-09-01.xlsx"},
    {group:"Archive",name:"Original Control Tower — full detailed history",meta:"Byte-preserved legacy page",url:"./legacy.html"}
  ]
};

const CACHE_NAME = "control-tower-v224";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./docs/ACTIVE_WORK_SNAPSHOT_2026-07-07_1655.md",
  "./docs/LOHH_Revenue_Share_Staffing_Model_2026-07-02.pdf",
  "./docs/LOHH_Acquisition_Ops_Partner_Term_Sheet_2026-07-03.pdf",
  "./docs/LOHH_Scaling_Roadmap_2026-07-05.pdf",
  "./docs/LOHH_SCALING_ROADMAP_2026-07-05.md",
  "./docs/LOHH_TUESDAY_FOCUS_2026-07-07.md",
  "./docs/LOHH_GOOGLE_BUSINESS_PROFILE_MONTHLY_REVIEW_WORKFLOW_2026-07-07.md",
  "./docs/LOHH_EBITDA_PERFORMANCE_REVIEW_2026-07-07.md",
  "./docs/LOHH_FULL_TIMELINE_EBITDA_REVIEW_2026-07-07.md",
  "./docs/LOHH_LINKEDIN_CALL_PREP_MOHSEN_FAHIM_2026-07-08.md",
  "./docs/LOHH_TAJIL_WORK_PERMIT_CALL_PREP_2026-07-08.md",
  "./docs/TOMORROW_PLAN_2026-07-08.md",
  "./docs/ORL_Execution_List_Week_2026-07-05.pdf",
  "./docs/ORL_EXECUTION_LIST_WEEK_2026-07-05.md",
  "./docs/ORL_CLAUDE_CODE_REPORT_DESK_BUILD_PROMPT_2026-07-06.md",
  "./docs/ORL_RESIDENTIAL_PROXY_APPROVAL_CARD_2026-07-06.md",
  "./docs/ORL_PRICELABS_REPLY_CODE_CHECK_2026-07-07.md",
  "./docs/ORL_MYDATAVALUE_CORE_AGENT_TEST_PLAN_2026-07-07.md",
  "./docs/ORL_QA_TELEGRAM_BOT_TEST_RUN_2026-07-07.md",
  "./docs/ORL_REVENUESTATE_SECTION_A_FIX_PROMPT_2026-07-07.md",
  "./docs/ORL_PRICELABS_MCP_THREAT_CHECK_2026-07-08.md",
  "./docs/ORL_PRICELABS_CUSTOMER_API_EXTRACTION_2026-07-08.md",
  "./docs/ORL_POST_PRICELABS_PIVOT_RECOMMENDATION_2026-07-08.md",
  "./docs/Nest_Match_Product_Readiness_Prompt_2026-07-05.pdf",
  "./docs/NEST_MATCH_PRODUCT_READINESS_PROMPT_2026-07-05.md",
  "./docs/Nest_Match_Full_Website_Readiness_Audit_2026-07-05.pdf",
  "./docs/NEST_MATCH_FULL_WEBSITE_READINESS_AUDIT_2026-07-05.md",
  "./docs/Nest_Match_Market_Competitor_Score_2026-07-05.pdf",
  "./docs/NEST_MATCH_MARKET_COMPETITOR_SCORE_2026-07-05.md",
  "./docs/Nest_Match_Global_App_Strategy_Correction_2026-07-05.pdf",
  "./docs/NEST_MATCH_GLOBAL_APP_STRATEGY_CORRECTION_2026-07-05.md",
  "./docs/NEST_MATCH_GLOBAL_CITY_READINESS_CHECK_2026-07-05.md",
  "./docs/NEST_MATCH_LIVE_RECHECK_2026-07-06.md",
  "./docs/NEST_MATCH_LOGGED_IN_QA_WEDNESDAY_2026-07-08.md",
  "./docs/GLOBAL_COHOST_REVENUE_MANAGEMENT_TOMORROW_ACTION_2026-07-06.md",
  "./docs/GLOBAL_COHOST_REVENUE_MANAGEMENT_ACTION_2026-07-07.md",
  "./docs/AIRBNB_LIGHT_COHOSTING_PROPOSAL_2026-07-06.md"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key === CACHE_NAME ? null : caches.delete(key))))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const freshRequest = new Request(event.request, { cache: "reload" });

  event.respondWith(
    fetch(freshRequest)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
  );
});

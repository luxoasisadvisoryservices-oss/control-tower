const CACHE_NAME = "control-tower-v154";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./docs/LOHH_Revenue_Share_Staffing_Model_2026-07-02.pdf",
  "./docs/LOHH_Acquisition_Ops_Partner_Term_Sheet_2026-07-03.pdf",
  "./docs/LOHH_Scaling_Roadmap_2026-07-05.pdf",
  "./docs/LOHH_SCALING_ROADMAP_2026-07-05.md",
  "./docs/ORL_Execution_List_Week_2026-07-05.pdf",
  "./docs/ORL_EXECUTION_LIST_WEEK_2026-07-05.md",
  "./docs/Nest_Match_Product_Readiness_Prompt_2026-07-05.pdf",
  "./docs/NEST_MATCH_PRODUCT_READINESS_PROMPT_2026-07-05.md",
  "./docs/Nest_Match_Full_Website_Readiness_Audit_2026-07-05.pdf",
  "./docs/NEST_MATCH_FULL_WEBSITE_READINESS_AUDIT_2026-07-05.md",
  "./docs/Nest_Match_Market_Competitor_Score_2026-07-05.pdf",
  "./docs/NEST_MATCH_MARKET_COMPETITOR_SCORE_2026-07-05.md",
  "./docs/Nest_Match_Global_App_Strategy_Correction_2026-07-05.pdf",
  "./docs/NEST_MATCH_GLOBAL_APP_STRATEGY_CORRECTION_2026-07-05.md"
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

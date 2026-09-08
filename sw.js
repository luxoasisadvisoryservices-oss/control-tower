const CACHE_NAME = "control-tower-v702-safe-area-header";
const APP_SHELL = [
  "./",
  "./index.html",
  "./legacy.html",
  "./assets/styles.css",
  "./assets/data.js",
  "./assets/app.js",
  "./manifest.json",
  "./icon.svg",
  "./docs/ZUHAIR_OASIS_GUEST_LAB_TRELLO_UPDATE_2026-09-07.md",
  "./docs/LUCA_NHNCD_PARTNERSHIP_CONTROL_TOWER_2026-09-06.md"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(new Request(event.request, {cache:"reload"})).then(response => {
    if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => caches.match(event.request).then(hit => hit || (event.request.mode === "navigate" ? caches.match("./index.html") : Response.error()))));
});

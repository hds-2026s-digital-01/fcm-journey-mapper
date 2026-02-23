/**
 * FCM Journey Mapper — Service Worker
 * Cache-first strategy for app shell. Keeps it simple for offline demo.
 */

const CACHE_NAME = "fcm-journey-mapper-v1";
const APP_SHELL = [
  "./index.html",
  "./sessions-data.js",
  "./sprint-narrative.js",
  "./icon.svg",
  "./manifest.json",
];

// Pre-cache app shell on install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Clean old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Cache-first for app shell, network-first for everything else
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // Cache successful GET requests for fonts/CDN resources
        if (
          response.ok &&
          event.request.method === "GET" &&
          (event.request.url.startsWith("https://fonts.") ||
            event.request.url.startsWith("https://unpkg.com"))
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Offline fallback — return cached index.html for navigation requests
      if (event.request.mode === "navigate") {
        return caches.match("./index.html");
      }
    })
  );
});

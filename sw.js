// Kip Ledger offline cache. Bump VERSION whenever any app file changes.
const VERSION = "kipledger-v6";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./firebase-app-compat.js",
  "./firebase-auth-compat.js",
  "./firebase-firestore-compat.js",
  "./jspdf.umd.min.js",
  "./jszip.min.js",
  "./tesseract.min.js",
  "./worker.min.js",
  "./tesseract-core-lstm.wasm.js",
  "./tesseract-core-simd-lstm.wasm.js",
  "./eng.traineddata.gz"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache first: the app opens instantly and with no internet.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => req.mode === "navigate" ? caches.match("./index.html") : Response.error());
    })
  );
});

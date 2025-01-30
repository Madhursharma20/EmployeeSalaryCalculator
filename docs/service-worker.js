self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("salary-calculator").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/style.css",
        "/script.js",
        "/icons/icon-192x192.png",
        "/icons/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(() => caches.match("index.html"))
    );
});
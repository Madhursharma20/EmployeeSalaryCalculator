self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(() => caches.match("index.html"))
    );
});
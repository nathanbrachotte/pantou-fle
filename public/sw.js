// Kill-switch service worker: replaces the old Gatsby offline SW.
// It clears all caches and unregisters itself so users get fresh content.
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (names) {
        return Promise.all(names.map(function (name) { return caches.delete(name); }));
      })
      .then(function () {
        return self.registration.unregister();
      })
      .then(function () {
        return self.clients.matchAll();
      })
      .then(function (clients) {
        clients.forEach(function (client) { client.navigate(client.url); });
      })
  );
});

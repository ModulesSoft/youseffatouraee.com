const CACHE_NAME = "offline-cache-v1.4.1";
const urlsToCache = ["index.html"];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone the request because it's a stream
      let fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clone the response because it's also a stream
        let responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

self.addEventListener("activate", function (event) {
  // Delete old caches
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName !== CACHE_NAME;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

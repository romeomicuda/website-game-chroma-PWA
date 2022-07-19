var STATIC_CACHE_CONTAINER = "static_v1";
var STATIC_FILES = [
  "./",
  "./app.js",
  "./serviceWorker.js",
  "./Sortable.min.js",
  "./style.css",
  "./images",
  "./bootstrap.min.css",
  "./bootstrap.min.css.map",
  "./colors.json",
  "./manifest.json",
  "./style.css.map",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(STATIC_CACHE_CONTAINER).then(function (cache) {
      cache.addAll(STATIC_FILES);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("service worker activated", event);
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
    })
  );
});

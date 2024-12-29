const CACHE_NAME = "uno-game-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/game.js",
  "/manifest.json",
  "/TemplateData/css/style.css",
  "/TemplateData/img/favicon.ico",
  "/TemplateData/img/Logo.png",
  "/TemplateData/img/background.png",
  "/TemplateData/img/progressEmpty.png",
  "/TemplateData/img/progressFull.png",
  "/TemplateData/img/fullScreen_on.png",
  "/Build/Classic_Uno.loader.js",
  "/Build/Classic_Uno.data",
  "/Build/Classic_Uno.framework.js",
  "/Build/Classic_Uno.wasm",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

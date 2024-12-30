const CACHE_NAME = "uno-cache-v1";

// Install event - 设置初始缓存
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME));
});

// Fetch event - 拦截请求并使用缓存策略
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 如果在缓存中找到响应,则返回缓存的版本
      if (response) {
        return response;
      }
      // 否则发送网络请求
      return fetch(event.request).then((response) => {
        // 检查是否收到有效响应
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // 克隆响应,因为它只能使用一次
        const responseToCache = response.clone();

        // 将新响应添加到缓存
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Activate event - 清理旧缓存
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

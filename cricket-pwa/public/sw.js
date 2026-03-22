self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('cricket-cache').then(cache => {
            return cache.addAll(['/']);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request);
        })
    );
});
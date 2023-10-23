self.addEventListener('fetch', function(event) {
    if (event.request.url.endsWith('.css') || event.request.url.endsWith('.png') || event.request.url.endsWith('.jpg')|| event.request.url.endsWith('.webp')|| event.request.url.endsWith('.gif')|| event.request.url.endsWith('.jpeg')|| event.request.url.endsWith('.png')) {
      event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      );
    } else {
      event.respondWith(
        fetch(event.request, { cache: 'no-store' })
      );
    }
  });
  
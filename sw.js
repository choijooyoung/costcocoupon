<<<<<<< HEAD
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
=======
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
>>>>>>> a5ecdf37fc1e62dc1144374231f49c358d4e1596
      return cache.addAll([
        '/costcocoupon/',
        '/costcocoupon/index.html',
        '/costcocoupon/index.js',
        '/costcocoupon/index.css',
        '/costcocoupon/coupon.js',
        '/costcocoupon/coupon.html',
        '/costcocoupon/manifest.json',
<<<<<<< HEAD
        '/costcocoupon/logo/logo1.png',
        '/costcocoupon/logo/logo2.png',
        '/costcocoupon/logo/logo3.png',
        '/costcocoupon/logo/logo4.png',
        '/costcocoupon/logo/logo5.png',
=======
>>>>>>> a5ecdf37fc1e62dc1144374231f49c358d4e1596
        '/costcocoupon/lunar.js'
      ]);
    })
  );
});

<<<<<<< HEAD
self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
=======
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
>>>>>>> a5ecdf37fc1e62dc1144374231f49c358d4e1596
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
<<<<<<< HEAD

=======
        
>>>>>>> a5ecdf37fc1e62dc1144374231f49c358d4e1596
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/costcocoupon/index.html');
      });
    }
  }));
<<<<<<< HEAD
});
=======
});
>>>>>>> a5ecdf37fc1e62dc1144374231f49c358d4e1596

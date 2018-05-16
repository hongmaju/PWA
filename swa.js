//在HTML页面请求时使用
// self.addEventListener('install', function(event) {
//   event.waitUntil(self.skipWaiting());
// });
//
//在HTML页面请求时使用
// self.addEventListener('activate', function(event) {
//   event.waitUntil(self.clients.claim());
// });

//缓存文件
var cacheName = 'helloWorld';
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                    cache.addAll([
                        'sw-toolbox.js',
                        'eat.png'
                    ]).then(function (data) {
                        console.log('缓存成功',data)
                    })
                }
            ))
});


//缓存类库sw-toolbox.js的使用

//请求匹配缓存文件
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//       caches.match(event.request)
//     .then(function (response) {
//         if (response) {
//         return response;
//         }
//         return fetch(event.request);
//     })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     if (/\.css$/.test(event.request.url)) {
//         //新的请求
//         fetch('postHtml.html', {
//             method: 'POST',
//             headers: {
//                 'auth': '1234'
//             },
//             body: JSON.stringify({
//                 name: 'dean',
//                 login: 'dean123',
//             })
//         }).then(function (data) {
//                 console.log('Request success: ', data);
//             })
//             .catch(function (error) {
//                 console.log('Request failure: ', error);
//             });
//
//     }
// });

self.addEventListener('fetch', function (event) {
    if (/\.css$/.test(event.request.url)) {
        event.respondWith(fetch('/main1.css'))

    }
});


//目前没有验证通过
// self.addEventListener('fetch', function (event) {
//   if (/\.css$/.test(event.request.url)) {
//     event.respondWith(
//        new Response('<p>This is a response that comes from your service worker!</p>', {
//           headers: { 'Content-Type': 'text/html' }
//   })
//   );
//   }
// });



//处理额外的查询参数
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request, {
//             ignoreSearch: true
//         }).then(function (response) {
//             return response || fetch(event.request);
//         })
//     );
// });



//完整的例子
// var cacheName = 'latestNews-v1';
// // 在安装过程中缓存我们已知的资源
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//     caches.open(cacheName)
//         .then( function(cache) { cache.addAll([
// './js/main.js',
//     './js/article.js',
//     './images/newspaper.svg',
//     './css/site.css',
//     './data/latest.json',
//     './data/data-1.json',
//     './article.html',
//     './index.html'
// ])})
// );
// });
// // 缓存任何获取的新资源
// self.addEventListener('fetch', function(event) {
// event.respondWith(
//     caches.match(event.request, { ignoreSearch: true })
// .then(function (response) {
//     if (response) {
//         return response;
//     }
//     var requestToCache = event.request.clone();
//     return fetch(requestToCache).then(
//         function (response) {
//             if (!response || response.status !== 200) {
//                 return response;
//             }
//             var responseToCache = response.clone();
//             caches.open(cacheName)
//                 .then(function (cache) {
//                     cache.put(requestToCache, responseToCache);
//                 });
//             return response;
//         });
// })
// );
// });
//在HTML页面请求时使用
// self.addEventListener('install', function(event) {
//   event.waitUntil(self.skipWaiting());
// });
//
//在HTML页面请求时使用
// self.addEventListener('activate', function(event) {
//   event.waitUntil(self.clients.claim());
// });

self.addEventListener('fetch', function (event) {
    if (/\.css$/.test(event.request.url)) {
        // event.respondWith(fetch('/main1.css'))

        //新的请求
        fetch('postHtml.html', {
            method: 'POST',
            headers: {
                'auth': '1234'
            },
            body: JSON.stringify({
                name: 'dean',
                login: 'dean123',
            })
        }).then(function (data) {
                console.log('Request success: ', data);
            })
            .catch(function (error) {
                console.log('Request failure: ', error);
            });
        
    }
});



// self.addEventListener('fetch', function (event) {
//   if (/\.css$/.test(event.request.url)) {
//     event.respondWith(
//        new Response('<p>This is a response that comes from your service worker!</p>', {
//           headers: { 'Content-Type': 'text/html' }
//   })
//   );
//   }
// });
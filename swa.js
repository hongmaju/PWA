

self.addEventListener('fetch', function(event) {     
  if (/\.css$/.test(event.request.url)) {            
    event.respondWith(fetch('/main1.css')); 
  }
});




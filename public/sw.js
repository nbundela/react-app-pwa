console.warn("sw file is in public folder");

let cacheData="appMyOne";
//first install - setting file inside cache
this.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                'static/js/bundle.js',
                '/index.html',
                '/',
                '/users'
            ])
        })
    )
})

//getting files from cache
this.addEventListener('fetch',(e) => {
    //notification
    //if front end get multiple if backend works fines
    //ouside works always
    //checking if internat is not online then only data come from service worker
    if (!navigator.onLine) {
        if (e.request.url = 'http://localhost:3000/static/js/bundle.js') {
            e.waitUntil(
                this.registration.showNotification('internet', {
                    body:"Internet not working"
                })
            )
        }
        e.respondWith(
            caches.match(e.request).then((resp) => {
                if (resp) {
                    return resp;
                }
                //if data not cached or rerender required
                let requestUrl = e.request.clone();
                fetch(requestUrl);

            })
        )
    }
})
const CACHE_NAME = "comprobante-pago-v3";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

self.addEventListener("install", function (event) {

    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(ARCHIVOS);
        })
    );

    self.skipWaiting();
});


self.addEventListener("activate", function (event) {

    event.waitUntil(

        caches.keys().then(function (nombres) {

            return Promise.all(

                nombres.map(function (nombre) {

                    if (nombre !== CACHE_NAME) {
                        return caches.delete(nombre);
                    }

                })

            );

        })

    );

    self.clients.claim();
});


self.addEventListener("fetch", function (event) {

    event.respondWith(

        caches.match(event.request).then(function (respuesta) {

            if (respuesta) {
                return respuesta;
            }

            return fetch(event.request);

        })

    );

});

const CACHE_NAME = "comprobante-pago-v2";

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
});


self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (respuesta) {
            return respuesta || fetch(event.request);
        })
    );
});

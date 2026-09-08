# Comprobante de Pago — PWA

Esta versión mantiene HTML + CSS + JavaScript y agrega solamente lo necesario para instalarla como PWA:

- manifest.json
- sw.js
- icons/icon-192.png
- icons/icon-512.png

No usa Angular, Node.js ni base de datos.

IMPORTANTE:
Una PWA debe abrirse desde un contexto seguro (HTTPS) para poder instalarse normalmente en Android.
No es necesario un backend: puede publicarse como sitio estático.

Una alternativa sencilla es GitHub Pages, que permite publicar estos archivos como sitio estático.

En el Xiaomi:
1. Abrir la dirección HTTPS en Chrome.
2. Abrir el menú de Chrome.
3. Seleccionar "Instalar aplicación" o "Añadir a pantalla de inicio", según lo que muestre el navegador.
4. La aplicación aparecerá como una app independiente.

Para desarrollo local, algunos navegadores permiten probar PWA mediante localhost, pero para el teléfono la publicación HTTPS es la opción práctica.

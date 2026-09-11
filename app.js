const paymentForm = document.getElementById("paymentForm");

const formView = document.getElementById("formView");
const resultView = document.getElementById("resultView");

const resultMerchant = document.getElementById("resultMerchant");
const resultAmount = document.getElementById("resultAmount");

const receiptButton = document.getElementById("receiptButton");
const exitButton = document.getElementById("exitButton");


/*
 * Formatea el precio utilizando el formato chileno.
 * Ejemplo:
 * 6970 -> $6.970
 */
function formatPrice(value) {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    }).format(value);
}


/*
 * Recibe los datos del formulario y muestra
 * la pantalla de confirmación.
 */
paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const merchant = document.getElementById("merchant").value.trim();
    const amount = Number(document.getElementById("amount").value);

    if (!merchant || !amount || amount <= 0) {
        return;
    }

    resultMerchant.textContent = merchant;
    resultAmount.textContent = formatPrice(amount);

    formView.classList.add("hidden");
    resultView.classList.remove("hidden");

    window.scrollTo(0, 0);
});


/*
 * Botón "Salir":
 * vuelve al formulario inicial.
 */
exitButton.addEventListener("click", function () {
    resultView.classList.add("hidden");
    formView.classList.remove("hidden");

    paymentForm.reset();

    window.scrollTo(0, 0);
});

/* ================================
   REGISTRO DEL SERVICE WORKER
================================ */

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js")
            .then(function () {
                console.log("Service Worker registrado correctamente.");
            })
            .catch(function (error) {
                console.error("Error al registrar Service Worker:", error);
            });
    });
}


/*
 * Por ahora mostramos un mensaje.
 * Más adelante podemos reemplazarlo por un comprobante
 * real o una ventana/modal.
 */
receiptButton.addEventListener("click", function () {
    alert("Aquí podremos mostrar el comprobante.");
});

const paymentForm = document.getElementById("paymentForm");

const formView = document.getElementById("formView");
const resultView = document.getElementById("resultView");

const resultMerchant = document.getElementById("resultMerchant");
const resultAmount = document.getElementById("resultAmount");

const receiptButton = document.getElementById("receiptButton");
const exitButton = document.getElementById("exitButton");

const receiptView = document.getElementById("receiptView");

const receiptAmount = document.getElementById("receiptAmount");
const receiptMerchant = document.getElementById("receiptMerchant");
const receiptRut = document.getElementById("receiptRut");
const receiptDate = document.getElementById("receiptDate");
const receiptTime = document.getElementById("receiptTime");
const receiptOperation = document.getElementById("receiptOperation");

const backReceiptButton = document.getElementById("backReceiptButton");

let operationDate = "";
let operationTime = "";
let operationNumber = "";

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

    

    const now = new Date();

    operationDate = now.toLocaleDateString("es-CL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    operationTime = now.toLocaleTimeString("es-CL", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).replace(/:/g, "/");

    operationNumber = "80" + Math.floor(100000 + Math.random() * 900000);

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

    receiptAmount.textContent = resultAmount.textContent;
    receiptMerchant.textContent = resultMerchant.textContent;

    receiptRut.textContent = "15.211.848-1";

    receiptDate.textContent = operationDate;
    receiptTime.textContent = operationTime;
    receiptOperation.textContent = operationNumber;

    resultView.classList.add("hidden");
    receiptView.classList.remove("hidden");

    window.scrollTo(0, 0);
});

backReceiptButton.addEventListener("click", function () {

    receiptView.classList.add("hidden");
    resultView.classList.remove("hidden");

    window.scrollTo(0, 0);
});

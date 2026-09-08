const paymentForm = document.getElementById("paymentForm");

const formView = document.getElementById("formView");
const resultView = document.getElementById("resultView");

const resultMerchant = document.getElementById("resultMerchant");
const resultAmount = document.getElementById("resultAmount");

const receiptButton = document.getElementById("receiptButton");
const exitButton = document.getElementById("exitButton");

function formatPrice(value) {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    }).format(value);
}

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

exitButton.addEventListener("click", function () {
    resultView.classList.add("hidden");
    formView.classList.remove("hidden");

    paymentForm.reset();
    window.scrollTo(0, 0);
});

receiptButton.addEventListener("click", function () {
    alert("Aquí podremos mostrar el comprobante.");
});

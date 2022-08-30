const stocksQuantity = document.querySelector("#stocks-quantity");
const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const outputBox = document.querySelector("#output-box");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    let ip = Number(initialPrice.value);
    let qty = Number(stocksQuantity.value);
    let curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss / (initial * quantity)) * 100;
        showOutput(
            `You lost ₹${loss} and the percent is ${lossPercentage}%`
        );
    } else if (current > initial) {
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / (initial * quantity)) * 100;
        showOutput(
            `You gained ₹${profit} and the percent is ${profitPercentage}%`
        );
    } else {
        showOutput(`You broke even.`);
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}
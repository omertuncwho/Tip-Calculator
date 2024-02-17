document.addEventListener('DOMContentLoaded', function () {
    const totalInput = document.getElementById('total');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsDiv = document.getElementById('results');

    calculateBtn.addEventListener('click', calculateTip);

    function calculateTip() {
        const totalBill = parseFloat(totalInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);

        if (isNaN(totalBill) || isNaN(tipPercentage) || totalBill <= 0 || tipPercentage < 0) {
            displayError("Please enter valid numbers.");
            return;
        }

        const tipAmount = (totalBill * tipPercentage) / 100;
        const totalAmount = totalBill + tipAmount;

        displayResults(tipAmount, totalAmount);
    }

    function displayResults(tipAmount, totalAmount) {
        resultsDiv.innerHTML = `
            <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
            <p>Total Bill (including tip): $${totalAmount.toFixed(2)}</p>
        `;
    }

    function displayError(message) {
        resultsDiv.innerHTML = `<p class="error">${message}</p>`;
    }
});

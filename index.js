"use strict";

window.onload = function () {
    let estimateTotalCost = document.getElementById("estimateTotalCost");
    estimateTotalCost.onclick = estimateTotalCostClicked;
}

function estimateTotalCostClicked() {
    let numberOfDays = Number(document.getElementById("numberOfDays").value);
    let tollTag = document.getElementById("tollTag");
    let gps = document.getElementById("gps");
    let roadside = document.getElementById("roadside");

    let basePay = 29.99 * numberOfDays;

    let optionPrice = 0;
    let under25 = 0;

    if (tollTag.checked) {
        optionPrice += 3.95 * numberOfDays; // Multiply options price by number of days
    }
    if (gps.checked) {
        optionPrice += 4.95 * numberOfDays; // Multiply options price by number of days
    }
    if (roadside.checked) {
        optionPrice += 2.95 * numberOfDays; // Multiply options price by number of days
    }

    let selectedOption = document.querySelector("input[name='ageLimit']:checked");

    if (selectedOption.value === 'yes') {
        under25 = basePay * 0.03; // Apply a 3% surcharge if under 25
        under25 *= numberOfDays; // Multiply under 25 surcharge by number of days
    }

    let carRentalPrice = basePay;
    let optionsPrice = optionPrice;
    let totalCost = carRentalPrice + optionsPrice + under25;

    let carRental = document.getElementById("carRental");
    let optionTotal = document.getElementById("optiontotal");
    let under25SurchargeElement = document.getElementById("under25");
    let totalDue = document.getElementById("totalDue");

    carRental.innerHTML = "Car rental: $" + carRentalPrice.toFixed(2);
    optionTotal.innerHTML = "Options: $" + optionsPrice.toFixed(2);
    under25SurchargeElement.innerHTML = "Under 25 surcharge: $" + under25.toFixed(2);
    totalDue.innerHTML = "Total Due: $" + totalCost.toFixed(2);
}
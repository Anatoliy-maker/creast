var sliderForCost = document.getElementById("slideContainerForCost");
var outputForCost = document.getElementById("slideContainerForCostValue");
outputForCost.innerHTML = sliderForCost.value;

sliderForCost.oninput = function() {
    outputForCost.innerHTML = this.value;
}

var sliderForInstallment = document.getElementById("slideContainerForInstallment");
var outputForInstallment = document.getElementById("slideContainerForInstallmentTime");
outputForInstallment.innerHTML = sliderForInstallment.value;

sliderForInstallment.oninput = function() {
    outputForInstallment.innerHTML = this.value;
}
document.addEventListener("DOMContentLoaded", function () {
    carMakeOptions();
});

function carMakeOptions() {
    const carMakeSelection = document.getElementsByName("carMakeSelection")[0];
    const carModelSelection = document.getElementById("carModelSelection");

    // Clear existing options
    carModelSelection.innerHTML = "<option value='non'>Select</option>";

    const selectedCarMake = carMakeSelection.value;

    if (selectedCarMake === "acura") {
        addCarModelOption(carModelSelection, "csx4DoorSedan2006-2011", "CSX 4 Door Sedan (2006-2011)");
        
    }
}

function addCarModelOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
}
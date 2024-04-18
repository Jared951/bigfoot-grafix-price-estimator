document.addEventListener("DOMContentLoaded", function () {
    carMakeOptions();
    populateCarMakes(); 

    const estimateButton = document.getElementById("estimateButton");
    estimateButton.addEventListener("click", calculateEstimate);

    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    wrapSizeSelection.addEventListener("change", handleWrapSizeChange);

    const carModelSelection = document.getElementById("carModelSelection");
    carModelSelection.addEventListener("change", handleCarModelChange);

    const carMakeSelection = document.getElementsByName("carMakeSelection")[0];
    carMakeSelection.addEventListener("change", handleCarMakeChange);
    carMakeSelection.addEventListener("change", populateCarWrapMaterials); 

    const carWrapMaterialSelection = document.getElementById("carWrapMaterialSelection");
    carWrapMaterialSelection.addEventListener("change", handleCarWrapMaterialChange);

    document.getElementById("partialSelection").addEventListener("change", function() { 
        const partialWrapSelection = this.value; 
        console.log("Selected Partial Wrap Area:", partialWrapSelection); 
    })
});

function populateCarMakes() {
    const carMakeSelection = document.getElementById("carMakeSelection");
    fetch('/api/car-makes')
        .then(response => response.json())
        .then(data => {
            data.forEach(make => {
                const option = document.createElement("option");
                option.value = make.value;
                option.textContent = make.label;
                carMakeSelection.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching car makes:', error));
}; 

function carMakeOptions() {
    const carMakeSelection = document.getElementsByName("carMakeSelection")[0];
    const carModelSelection = document.getElementById("carModelSelection");
    const carWrapMaterialSelection = document.getElementById("carWrapMaterialSelection");
    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    const estimateDisplay = document.getElementById("fullEstimateDisplay");

    clearCustomEstimateDisplay();
    clearPartialEstimateDisplay();

    carModelSelection.innerHTML = "<option value='non'>Select</option>";
    carWrapMaterialSelection.innerHTML = "<option value='Select'>Select</option>";
    wrapSizeSelection.value = "select"; 
    estimateDisplay.innerHTML = ""; 

    const selectedCarMake = carMakeSelection.value;

    if (selectedCarMake !== 'select') {
        fetch(`/api/car-models?make=${selectedCarMake}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(model => {
                    const option = document.createElement("option");
                    option.value = model;
                    option.textContent = model;
                    carModelSelection.appendChild(option);
                });
            })
            .catch(error => console.error('Error fetching car models:', error));
    }
};

function addCarModelOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
};

function handleCarModelChange() {
    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    const estimateDisplay = document.getElementById("fullEstimateDisplay");

    wrapSizeSelection.value = "select";

    hidePartialOptions();
    hideCustomOptions();
    clearCustomOptions();
    clearPartialEstimateDisplay();
    clearCustomEstimateDisplay();

    estimateDisplay.innerHTML = "";
};

function populateCarWrapMaterials() {
    const carWrapMaterialSelection = document.getElementById("carWrapMaterialSelection");

    carWrapMaterialSelection.innerHTML = "";

    const carWrapMaterials = {
        "Select": "",
        "Chrome": 8.00, 
        "Carbon Fiber": 5.00,
        "Vinyl Gloss": 2.50,
        "Vinyl Matte": 3.00
    };

    // Populate car wrap materials dropdown
    for (const material in carWrapMaterials) {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material === "Select" ? "Select" : `${material} - $${carWrapMaterials[material]} per square foot`;
        carWrapMaterialSelection.appendChild(option);

        // Log only if the material is not "Select"
        if (material === "Select") {
            console.log("Select Car Wrap Material:", material);
        };
    };
};

function handleWrapSizeChange() {
    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    const selectedWrapSize = wrapSizeSelection.value;

    clearEstimationDisplay();
    clearPartialEstimateDisplay();
    clearCustomEstimateDisplay();

    if (selectedWrapSize === "partial") {
        showPartialOptions();
        hideCustomOptions();
    } else if (selectedWrapSize === "custom") {
        showCustomOptions();
        hidePartialOptions();
    } else {
        hidePartialOptions();
        hideCustomOptions();
    }

    console.log("Selected Wrap Size:", selectedWrapSize);
};

function showPartialOptions() {
    const partialOptionsDiv = document.getElementById("partialOptions");
    partialOptionsDiv.style.display = "block"; 
};

function hidePartialOptions() {
    const partialOptionsDiv = document.getElementById("partialOptions");
    partialOptionsDiv.style.display = "none";
};

function showCustomOptions() {
    const customOptionsDiv = document.getElementById("customOptions");
    customOptionsDiv.style.display = "block"; 
};

function hideCustomOptions() {
    const customOptionsDiv = document.getElementById("customOptions");
    customOptionsDiv.style.display = "none";
};

function calculateEstimate() {
    const carWrapMaterialSelection = document.getElementById("carWrapMaterialSelection");
    const selectedMaterial = carWrapMaterialSelection.value;

    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    const selectedWrapSize = wrapSizeSelection.value;

    let squareFootage = 0;
    
    if (selectedWrapSize === "full"){
        const carModelSelection = document.getElementById("carModelSelection");
        const selectedCarModel = carModelSelection.value; 

        fetch(`/api/car-total-sq-ft?model=${selectedCarModel}`)
            .then(response => response.json())
            .then(data => {
                console.log("Total square footage for", selectedCarModel, ":", data.total_sq_ft);
                squareFootage = data.total_sq_ft;
                calculateTotalSquareFeet(squareFootage, selectedMaterial);
            })
            .catch(error => console.error('Error fetching total square footage:', error));

    } else if (selectedWrapSize === "partial") {
        const carModelSelection = document.getElementById("carModelSelection");
        const selectedCarModel = carModelSelection.value; 

        const partialWrapSelection = document.getElementById("partialSelection").value;

        console.log("Selected Partial Wrap Area:", partialWrapSelection);

        fetch(`/api/partial-sq-ft?car_model=${selectedCarModel}&part_of_car=${partialWrapSelection}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.partial_wrap_sq_ft) {
                    const partialSquareFootage = data.partial_wrap_sq_ft;
                    calculatePartialWrapEstimate(partialSquareFootage, partialWrapSelection, selectedMaterial);
                } else {
                    console.error("Partial square footage data not found.");
                }
            })
            .catch(error => console.error('Error fetching partial wrap square footage:', error));

    } else if (selectedWrapSize === "custom") {
        const customWidth = document.getElementById("customWidth").value;
        const customHeight = document.getElementById("customHeight").value;

        squareFootage = customWidth * customHeight;

        calculateCustomEstimate(squareFootage, selectedMaterial);
    }
};

function calculateTotalSquareFeet(squareFootage, selectedMaterial) {
    const carWrapMaterials = {
        "Chrome": 8.00,
        "Carbon Fiber": 5.00,
        "Vinyl Gloss": 2.50,
        "Vinyl Matte": 3.00
    };

    const pricePerSquareFoot = carWrapMaterials[selectedMaterial];

    const estimate = squareFootage * pricePerSquareFoot;
    
    console.log("Estimated Price:", estimate);
    
    const estimateDisplay = document.getElementById("fullEstimateDisplay");
    estimateDisplay.innerHTML = `<p>Estimated Full Wrap Price: $${estimate.toFixed(2)}</p>`;
};

function calculateCustomEstimate(squareFootage, selectedMaterial) {
    const carWrapMaterials = {
        "Chrome": 8.00,
        "Carbon Fiber": 5.00,
        "Vinyl Gloss": 2.50,
        "Vinyl Matte": 3.00
    };

    const pricePerSquareFoot = carWrapMaterials[selectedMaterial];

    const estimate = squareFootage * pricePerSquareFoot;

    console.log("Custom Estimated Price:", estimate);

    const estimateDisplay = document.getElementById("customEstimateDisplay");
    estimateDisplay.innerHTML = `<p>Estimated Custom Wrap Price: $${estimate.toFixed(2)}</p>`;
}

function calculatePartialWrapEstimate(partial_sq_ft, partialWrapSelection, selectedMaterial) {
    let squareFootage = partial_sq_ft;

    console.log('Selected Partial Wrap Area:', partialWrapSelection);
    console.log('Square Footage from Database:', squareFootage);

    const carWrapMaterials = {
        "Chrome": 8.00,
        "Carbon Fiber": 5.00,
        "Vinyl Gloss": 2.50,
        "Vinyl Matte": 3.00
    };

    const pricePerSquareFoot = carWrapMaterials[selectedMaterial];
    const estimate = squareFootage * pricePerSquareFoot;

    console.log('Price per square foot:', pricePerSquareFoot);
    console.log('Estimated Partial Wrap Price:', estimate.toFixed(2));

    const partialEstimateDisplay = document.getElementById("partialEstimateDisplay");
    partialEstimateDisplay.innerHTML = `<p>Estimated Partial Wrap Price: $${estimate.toFixed(2)}</p>`;
};

function clearEstimationDisplay() {
    const estimateDisplay = document.getElementById("fullEstimateDisplay");
    estimateDisplay.innerHTML = "";
};

function clearPartialEstimateDisplay() {
    const partialEstimateDisplay = document.getElementById("partialEstimateDisplay");
    partialEstimateDisplay.innerHTML = "";
}

function clearCustomEstimateDisplay() {
    const customEstimateDisplay = document.getElementById("customEstimateDisplay")
    customEstimateDisplay.innerHTML = "";
}

function handleCarMakeChange() {
    clearCustomOptions();
    hidePartialOptions();
    hideCustomOptions();
};

function handleCarWrapMaterialChange() {
    const selectedMaterial = carWrapMaterialSelection.value;
    console.log("Selected Car Wrap Material:", selectedMaterial);

    clearCustomOptions();
};

function clearCustomOptions() {
    const customWidthInput = document.getElementById("customWidth");
    const customHeightInput = document.getElementById("customHeight");

    customWidthInput.value = "";
    customHeightInput.value = "";
};
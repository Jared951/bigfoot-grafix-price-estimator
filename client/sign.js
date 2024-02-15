document.addEventListener("DOMContentLoaded", function () {
    signOptions();
})

function signOptions() {
    const signTypeSelection = document.getElementById("signTypeSelection");
    const signMaterialSelection = document.getElementById("signMaterialSelection");
    document.getElementById("signWidth").value = "";
    document.getElementById("signHeight").value = "";

    // Clear existing options
    signMaterialSelection.innerHTML = "<option value='non'>Select</option>";

    // Get selected Sign Material Type
    const selectedSignMaterialType = signTypeSelection.value;

    // Populate Sign Select Material based on the selected material type
    if (selectedSignMaterialType === "backlit") {
        addSignOption(signMaterialSelection, "10.50_per_square_foot", "$10.50 per square foot");
    } else if (selectedSignMaterialType === "acrylic") {
        addSignOption(signMaterialSelection, "acrylic_half_clear", "Acrylic 1/2 Clear: $23.25 per square foot");
        addSignOption(signMaterialSelection, "acrylic_quarter_clear", "Acrylic 1/4 Clear: $16.75 per square foot");
        addSignOption(signMaterialSelection, "acrylic_eighth_clear", "Acrylic 1/8 Clear: $12.35 per square foot");
    } else if (selectedSignMaterialType === "windowDecal") {
        addSignOption(signMaterialSelection, "window_perf_50_50", "Window Perf 50/50: $6.25 per square foot");
        addSignOption(signMaterialSelection, "window_perf_65_35", "Window Perf 65/35: $6.50 per square foot");
    }
}

function addSignOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

function calculateSignPrice() {
    // Retrieve the value of the width input field and convert it to an integer
    const signWidth = parseInt(document.getElementById("signWidth").value, 10);
    // Retrieve the value of the height input field and convert it to an integer   
    const signHeight = parseInt(document.getElementById("signHeight").value, 10);
    // Retrieve the value of the selected sign material
    const selectedMaterial = document.getElementById("signMaterialSelection").value;

    // Check if either signWidth or signHeight is NaN (not a number)
    if (isNaN(signWidth) || isNaN(signHeight)) {
        // Display an alert if either width or height is not a valid number
        alert("Please enter a valid number for the width and height.");
        // Exit the function if the inputs are invalid
        return; 
    }

    // Calculate the area of the sign by multiplying the width and height
    const signArea = signWidth * signHeight;

    // Retrieve the price per square foot based on the selected material
    let signPricePerSquareFoot; 
    switch (selectedMaterial) {
        case "10.50_per_square_foot":
            signPricePerSquareFoot = 10.50;
            break;
        case "acrylic_half_clear":
            signPricePerSquareFoot = 23.25;
            break;
        case "acrylic_quarter_clear":
            signPricePerSquareFoot = 16.75;
            break;
        case "acrylic_eighth_clear":
            signPricePerSquareFoot = 12.35;
            break;
        case "window_perf_50_50":
            signPricePerSquareFoot = 6.25;
            break;
        case "window_perf_65_35":
            signPricePerSquareFoot = 6.50;
            break;
        default:
            // Handle the case where the selected material is not recognized
            alert("Please select a valid sign material.");
            return;
    }

    // Calculate the total price by multiplying the sign area by the sign price per square foot
    const totalSignPrice = signArea * signPricePerSquareFoot;

    // Display the price in the HTML
    const signPriceDisplay = document.getElementById("signPriceDisplay");
    // Access the text content of the signPriceDisplay element and then show the content on the HTML
    signPriceDisplay.textContent = "Total Price: $" + totalSignPrice.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function () {
    signOptions();
})

function signOptions() {
    const signTypeSelection = document.getElementById("signTypeSelection");
    const backlitMaterialSelection = document.getElementById("backlitMaterialSelection");

    // Clear existing options
    backlitMaterialSelection.innerHTML = "<option value='non'>Select</option>";

    // Get selected Sign Material Type
    const selectedSignMaterialType = signTypeSelection.value;

    // Populate Sign Select Material based on the selected material type
    if (selectedSignMaterialType === "backlit") {
        addOption(backlitMaterialSelection, "10.50_per_square_foot", "10.50 per square foot");
    }
}

function addOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}
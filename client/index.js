document.addEventListener("DOMContentLoaded", function () {
    signOptions();
})

function signOptions() {
    const signTypeSelection = document.getElementById("signTypeSelection");
    const materialSelection = document.getElementById("materialSelection");

    // Clear existing options
    materialSelection.innerHTML = "<option value='non'>Select</option>";

    // Get selected Sign Material Type
    const selectedSignMaterialType = signTypeSelection.value;

    // Populate Sign Select Material based on the selected material type
    if (selectedSignMaterialType === "backlit") {
        addOption(materialSelection, "10.50_per_square_foot", "10.50 per square foot");
    } else if (selectedSignMaterialType === "acrylic") {
        addOption(materialSelection, "acrylic_half_clear", "Acrylic 1/2 Clear: $23.25 per square foot");
        addOption(materialSelection, "acrylic_quarter_clear", "Acrylic 1/4 Clear: $16.75 per square foot");
        addOption(materialSelection, "acrylic_eighth_clear", "Acrylic 1/8 Clear: $12.35 per square foot");
    } else if (selectedSignMaterialType === "windowDecal") {
        addOption(materialSelection, "window_perf_50_50", "Window Perf 50/50: $6.25 per square foot");
        addOption(materialSelection, "window_perf_65_35", "Window Perf 65/35: $6.50 per square foot");
    }
}

function addOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}
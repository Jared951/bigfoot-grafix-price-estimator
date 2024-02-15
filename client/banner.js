document.addEventListener("DOMContentLoaded", function () {
    bannerOptions();
});

function bannerOptions() {
    const bannerTypeSelection = document.getElementsByName("bannerTypeSelection")[0];
    const bannerMaterialSelection = document.getElementById("bannerMaterialSelection");
    
    bannerMaterialSelection.innerHTML = "<option value='non'>Select</option>";

    const selectedBannerMaterialType = bannerTypeSelection.value;

    if (selectedBannerMaterialType === "vinyl") {
        addBannerOption(bannerMaterialSelection, "vinyl_6.00", "$6.00 per square foot");
    } else if (selectedBannerMaterialType === "mesh") {
        addBannerOption(bannerMaterialSelection, "mesh_5.25", "$5.25 per square foot");
    } else if (selectedBannerMaterialType === "fabric") {
        addBannerOption(bannerMaterialSelection, "fabric_5.50", "$5.50 per square foot");
    }
}

function addBannerOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
}

document.addEventListener("DOMContentLoaded", function () {
    bannerOptions();
});

function bannerOptions() {
    const bannerTypeSelection = document.getElementsByName("bannerTypeSelection")[0];
    const bannerMaterialSelection = document.getElementById("bannerMaterialSelection");
    document.getElementById("bannerWidth").value = "";
    document.getElementById("bannerHeight").value = "";

    bannerMaterialSelection.innerHTML = "<option value='non'>Select</option>";

    const selectedBannerMaterialType = bannerTypeSelection.value;

    if (selectedBannerMaterialType === "vinyl") {
        addBannerOption(bannerMaterialSelection, "vinyl_6.00", "$6.00 per square foot");
    } else if (selectedBannerMaterialType === "mesh") {
        addBannerOption(bannerMaterialSelection, "mesh_5.25", "$5.25 per square foot");
    } else if (selectedBannerMaterialType === "fabric") {
        addBannerOption(bannerMaterialSelection, "fabric_5.50", "$5.50 per square foot");
    }
};

function addBannerOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
};

function calculateBannerPrice() {
    const bannerWidth = parseInt(document.getElementById("bannerWidth").value, 10);
    const bannerHeight = parseInt(document.getElementById("bannerHeight").value, 10);
    const selectedBannerMaterial = document.getElementById("bannerMaterialSelection").value;

    if (isNaN(bannerWidth) || isNaN(bannerHeight)) {
        alert("Please enter a valid number for the width and height.");
        return; 
    };

    const bannerArea = bannerWidth * bannerHeight;

    let bannerPricePerSquareFoot;
    switch (selectedBannerMaterial) {
        case "vinyl_6.00":
            bannerPricePerSquareFoot = 6.00;
            break;
        case "mesh_5.25":
            bannerPricePerSquareFoot = 5.25;
            break;
        case "fabric_5.50":
            bannerPricePerSquareFoot = 5.50;
            break;
        default:
            alert("Please select a valid banner material");
            return;
    };

    const totalBannerPrice = bannerArea * bannerPricePerSquareFoot;

    const bannerPriceDisplay = document.getElementById("bannerPriceDisplay");

    bannerPriceDisplay.textContent = "Total Price: $" + totalBannerPrice.toFixed(2);
};
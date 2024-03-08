document.addEventListener("DOMContentLoaded", function () {
    carMakeOptions();
    populateCarWrapMaterials();

    const estimateButton = document.getElementById("estimateButton");
    estimateButton.addEventListener("click", calculateEstimate);

    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    wrapSizeSelection.addEventListener("change", handleWrapSizeChange);

    const carModelSelection = document.getElementById("carModelSelection");
    carModelSelection.addEventListener("change", handleCarModelChange);

    const carMakeSelection = document.getElementsByName("carMakeSelection")[0];
    carMakeSelection.addEventListener("change", handleCarMakeChange);

    const carWrapMaterialSelection = document.getElementById("carWrapMaterialSelection");
    carWrapMaterialSelection.addEventListener("change", handleCarWrapMaterialChange);
});

function carMakeOptions() {
    const carMakeSelection = document.getElementsByName("carMakeSelection")[0];
    const carModelSelection = document.getElementById("carModelSelection");
    const carWrapMaterialSelection = document.getElementById("carWrapMaterialSelection");
    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    const estimateDisplay = document.getElementById("fullEstimateDisplay");

    // Clear existing options
    carModelSelection.innerHTML = "<option value='non'>Select</option>";
    carWrapMaterialSelection.innerHTML = "<option value='Select'>Select</option>";
    wrapSizeSelection.value = "select"; // Reset wrap size selection
    estimateDisplay.innerHTML = ""; // Clear estimation display

    const selectedCarMake = carMakeSelection.value;

    populateCarWrapMaterials()

    if (selectedCarMake === "acura") {
        addCarModelOption(carModelSelection, "csx4DoorSedan2006-2011", "CSX 4 Door Sedan (2006-2011)");
        addCarModelOption(carModelSelection, "elSeries4Door2001-2002", "EL Series 4-Door (2001-2002)");
        addCarModelOption(carModelSelection, "integra3Door1989-1993", "Integra 3-Door (1989-1993)");
        addCarModelOption(carModelSelection, "integra3Door2000-2002", "Integra 3-Door (2000-2002)");
        addCarModelOption(carModelSelection, "integra5Door1989-1993", "Integra 5-Door (1989-1993)");
        addCarModelOption(carModelSelection, "intergra4DoorSedan1994-2002", "Intergra 4-Door Sedan (1994-2002)");
        addCarModelOption(carModelSelection, "mdx2000-2006", "MDX (2000-2006)");
        addCarModelOption(carModelSelection, "mdx2007-2012", "MDX (2007-2012)");
        addCarModelOption(carModelSelection, "rdx2007-2012", "RDX (2007-2012)");
        addCarModelOption(carModelSelection, "rsxCoupe2001-2006", "RSX Coupe (2001-2006)");
        addCarModelOption(carModelSelection, "tlx2015-2020", "TLX (2015-2020)");
        addCarModelOption(carModelSelection, "mdx2014-2020", "MDX (2014-2020)");  
    } else if (selectedCarMake === "audi") {
        addCarModelOption(carModelSelection, "a3Wagon2006-2008", "A3 Wagon (2006-2008)");
        addCarModelOption(carModelSelection, "a42001-2005", "A4 (2001-2005)");
        addCarModelOption(carModelSelection, "a4Allroads2000-2006", "A4 Allroads (2000-2006)");
        addCarModelOption(carModelSelection, "a4AvantWagon2002-2008", "A4 Avant Wagon (2002-2008)");
        addCarModelOption(carModelSelection, "q72007-2008", "Q7 (2007-2008)");
        addCarModelOption(carModelSelection, "ttCoupe2000-2006", "TT Coupe (2000-2006)");
        addCarModelOption(carModelSelection, "ttCoupe2007-2014", "TT Coupe (2007-2014)");
    } else if (selectedCarMake === "austin") {
        addCarModelOption(carModelSelection, "austin_minicooper", "Austin Mini Cooper");
    } else if (selectedCarMake === "bmw") {
        addCarModelOption(carModelSelection, "3Series2005-2011", "3 Series (2005-2011)");
        addCarModelOption(carModelSelection, "3SeriesCoupe2001-2005", "3 Series Coupe (2001-2005)");
        addCarModelOption(carModelSelection, "3SeriesSaloon2001-2005", "3 Series Saloon (2001-2005)");
        addCarModelOption(carModelSelection, "i32014-2020", "i3 (2014-2020)");
        addCarModelOption(carModelSelection, "miniCooper2002-2007", "Mini Cooper (2002-2007)");
        addCarModelOption(carModelSelection, "miniCooperConvertible2002-2007", "Mini Cooper Convertible (2002-2007)");
        addCarModelOption(carModelSelection, "miniCooperS2002-2007", "Mini Cooper S (2002-2007)");
        addCarModelOption(carModelSelection, "x32003-2010", "X3 (2003-2010)");
        addCarModelOption(carModelSelection, "x52000-2008", "X5 (2000-2008)");
        addCarModelOption(carModelSelection, "z3Convertible1999-2002", "Z3 Convertible (1999-2002)");
        addCarModelOption(carModelSelection, "z3Coupe1999-2002", "Z3 Coupe (1999-2002)");
        addCarModelOption(carModelSelection, "z4Roadster2003-2004", "Z4 Roadster (2003-2004)");
    } else if (selectedCarMake === "buick") {
        addCarModelOption(carModelSelection, "enclave2008-2017", "Enclave (2008-2017)");
        addCarModelOption(carModelSelection, "encore2014-2020", "Encore (2014-2020)");
        addCarModelOption(carModelSelection, "parkAvenue1998-2000", "Park Avenue (1998-2000)");
        addCarModelOption(carModelSelection, "rainier2004-2007", "Rainier (2004-2007)");
        addCarModelOption(carModelSelection, "regal4Door1998-1999", "Regal 4-Door (1998-1999)");
        addCarModelOption(carModelSelection, "rendezvous2001-2008", "Rendezvous (2001-2008)");
        addCarModelOption(carModelSelection, "terrazza2005-2008", "Terrazza (2005-2008)");
    } else if (selectedCarMake === "cadillac") {
        addCarModelOption(carModelSelection, "cts2003-2007", "CTS (2003-2007)");
        addCarModelOption(carModelSelection, "deVille2000-2001", "De Ville (2000-2001)");
        addCarModelOption(carModelSelection, "escalade1999-2000", "Escalade (1999-2000)");
        addCarModelOption(carModelSelection, "escalade2001-2006", "Escalade (2001-2006)");
        addCarModelOption(carModelSelection, "escalade2007-2014", "Escalade (2007-2014)");
        addCarModelOption(carModelSelection, "escaladeESV2001-2006", "Escalade ESV (2001-2006)");
        addCarModelOption(carModelSelection, "escaladeESV2007-2014", "Escalade ESV (2007-2014)");
        addCarModelOption(carModelSelection, "ext2002-2006", "EXT (2002-2006)");
        addCarModelOption(carModelSelection, "srx2005-2009", "SRX (2005-2009)");
    }
    
};

function addCarModelOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
};

// Changes to car model reset wrap size and estimate display
function handleCarModelChange() {
    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    const estimateDisplay = document.getElementById("fullEstimateDisplay");

    // Reset wrap size selection
    wrapSizeSelection.value = "select";

    hidePartialOptions();

    hideCustomOptions();

    clearCustomOptions();

    // Clear estimation display
    estimateDisplay.innerHTML = "";
}

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
    };
};

function handleWrapSizeChange() {
    const wrapSizeSelection = document.getElementById("wrapSizeSelection");
    const selectedWrapSize = wrapSizeSelection.value;

    clearEstimationDisplay();

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
};

function showPartialOptions() {
    const partialOptionsDiv = document.getElementById("partialOptions");
    partialOptionsDiv.style.display = "block"; // change how it is styled
};

function hidePartialOptions() {
    const partialOptionsDiv = document.getElementById("partialOptions");
    partialOptionsDiv.style.display = "none";
};

function showCustomOptions() {
    const customOptionsDiv = document.getElementById("customOptions");
    customOptionsDiv.style.display = "block"; // change how it is styled

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

        // Acura
        if (selectedCarModel === "csx4DoorSedan2006-2011") {
            squareFootage = 201.7;
        } else if (selectedCarModel === "elSeries4Door2001-2002") {
            squareFootage = 202.7;
        } else if (selectedCarModel === "integra3Door1989-1993") {
            squareFootage = 189.3;
        } else if (selectedCarModel === "integra3Door2000-2002") {
            squareFootage = 182.3;
        } else if (selectedCarModel === "integra5Door1989-1993") {
            squareFootage = 206.8;
        } else if (selectedCarModel === "intergra4DoorSedan1994-2002") {
            squareFootage = 199.5;
        } else if (selectedCarModel === "mdx2000-2006") {
            squareFootage = 247.1;
        } else if (selectedCarModel === "mdx2007-2012") {
            squareFootage = 247.1;
        } else if (selectedCarModel === "rdx2007-2012") {
            squareFootage = 237.3;
        } else if (selectedCarModel === "rsxCoupe2001-2006") {
            squareFootage = 187;
        } else if (selectedCarModel === "tlx2015-2020") {
            squareFootage = 238.7;
        } else if (selectedCarModel === "mdx2014-2020") {
            squareFootage = 248.9;
        // Audi
        } else if (selectedCarModel === "a3Wagon2006-2008") {
            squareFootage = 199.2;
        } else if (selectedCarModel === "a42001-2005") {
            squareFootage = 203.3;
        } else if (selectedCarModel === "a4Allroads2000-2006") {
            squareFootage = 189.7;
        } else if (selectedCarModel === "a4AvantWagon2002-2008") {
            squareFootage = 196.4;
        } else if (selectedCarModel === "q72007-2008") {
            squareFootage = 276.2;
        } else if (selectedCarModel === "ttCoupe2000-2006") {
            squareFootage = 186.1;
        } else if (selectedCarModel === "ttCoupe2007-2014") {
            squareFootage = 189.1;
        // Austin
        } else if (selectedCarModel === "austin_minicooper") {
            squareFootage = 144;
        // BMW
        } else if (selectedCarModel === "3Series2005-2011") {
            squareFootage = 208.2;
        } else if (selectedCarModel === "3SeriesCoupe2001-2005") {
            squareFootage = 202.5;
        } else if (selectedCarModel === "3SeriesSaloon2001-2005") {
            squareFootage = 212.2;
        } else if (selectedCarModel === "i32014-2020") {
            squareFootage = 220.4;
        } else if (selectedCarModel === "miniCooper2002-2007") {
            squareFootage = 163.9;
        } else if (selectedCarModel === "miniCooperConvertible2002-2007") {
            squareFootage = 138.2;
        } else if (selectedCarModel === "miniCooperS2002-2007") {
            squareFootage = 163.9;
        } else if (selectedCarModel === "x32003-2010") {
            squareFootage = 215.1;
        } else if (selectedCarModel === "x52000-2008") {
            squareFootage = 222.9;
        } else if (selectedCarModel === "z3Convertible1999-2002") {
            squareFootage = 133.3;
        } else if (selectedCarModel === "z3Coupe1999-2002") {
            squareFootage = 154.5;
        } else if (selectedCarModel === "z4Roadster2003-2004") {
            squareFootage = 127.7;
        // Buick
        } else if (selectedCarModel === "enclave2008-2017") {
            squareFootage = 245.8;
        } else if (selectedCarModel === "encore2014-2020") {
            squareFootage = 215.4;
        } else if (selectedCarModel === "parkAvenue1998-2000") {
            squareFootage = 260.1;
        } else if (selectedCarModel === "rainier2004-2007") {
            squareFootage = 258.4;
        } else if (selectedCarModel === "regal4Door1998-1999") {
            squareFootage = 221.2;
        } else if (selectedCarModel === "rendezvous2001-2008") {
            squareFootage = 261.9;
        } else if (selectedCarModel === "terrazza2005-2008") {
            squareFootage = 289;
        // Cadillac
        } else if (selectedCarModel === "cts2003-2007") {
            squareFootage = 207.1;
        } else if (selectedCarModel === "deVille2000-2001") {
            squareFootage = 226.6;
        } else if (selectedCarModel === "escalade1999-2000") {
            squareFootage = 284.7;
        } else if (selectedCarModel === "escalade2001-2006") {
            squareFootage = 287.4;
        } else if (selectedCarModel === "escalade2007-2014") {
            squareFootage = 299.9;
        } else if (selectedCarModel === "escaladeESV2001-2006") {
            squareFootage = 286;
        } else if (selectedCarModel === "escaladeESV2007-2014") {
            squareFootage = 326;
        } else if (selectedCarModel === "ext2002-2006") {
            squareFootage = 302.5;
        } else if (selectedCarModel === "srx2005-2009") {
            squareFootage = 271.4;
        }

    } else if (selectedWrapSize === "partial") {
        const carModelSelection = document.getElementById("carModelSelection");
        const selectedCarModel = carModelSelection.value; 

        if (selectedCarModel === "csx4DoorSedan2006-2011") {
            const partialSelection = document.getElementById("partialSelection");
            const selectedPartial = partialSelection.value;

            if (selectedPartial === "side") {
                squareFootage = 68;
            } else if (selectedPartial === "back") {
                squareFootage = 24.3;
            } else if (selectedPartial === "hood") {
                squareFootage = 13.8;
            } else if (selectedPartial === "roof") {
                squareFootage = 27.6;
            }
        } else {
            alert("Partial wrap option is only available for CSX 4 Door Sedan (2006-2011). Please select a different option.");
        } // add remaining car models with the sqft per partial here

    } else if (selectedWrapSize === "custom") {
        const widthInput = document.getElementById("customWidth").value;
        const heightInput = document.getElementById("customHeight").value;

        squareFootage = widthInput * heightInput
    };

    const carWrapMaterials = {
        "Chrome": 8.00,
        "Carbon Fiber": 5.00,
        "Vinyl Gloss": 2.50,
        "Vinyl Matte": 3.00
    };

    const pricePerSquareFoot = carWrapMaterials[selectedMaterial];

    const estimate = squareFootage * pricePerSquareFoot;

    const estimateDisplay = document.getElementById("fullEstimateDisplay");
    estimateDisplay.innerHTML = `<p>Estimated Full Wrap Price: $${estimate.toFixed(2)}</p>`;
};

function clearEstimationDisplay() {
    const estimateDisplay = document.getElementById("fullEstimateDisplay");
    estimateDisplay.innerHTML = "";
};

function handleCarMakeChange() {
    clearCustomOptions();
    hidePartialOptions();
    hideCustomOptions();
};

function handleCarWrapMaterialChange() {
    clearCustomOptions();
};

function clearCustomOptions() {
    const customWidthInput = document.getElementById("customWidth");
    const customHeightInput = document.getElementById("customHeight");

    customWidthInput.value = "";
    customHeightInput.value = "";
};
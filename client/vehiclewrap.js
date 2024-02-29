document.addEventListener("DOMContentLoaded", function () {
    carMakeOptions();
    populateCarWrapMaterials();
});

function carMakeOptions() {
    const carMakeSelection = document.getElementsByName("carMakeSelection")[0];
    const carModelSelection = document.getElementById("carModelSelection");
    const carWrapMaterialSelection = document.getElementById("carWrapMaterialSelection");

    // Clear existing options
    carModelSelection.innerHTML = "<option value='non'>Select</option>";

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
    }
};

function addCarModelOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
};

function populateCarWrapMaterials() {
    const carWrapMaterialSelection = document.getElementById("carWrapMaterialSelection");

    // Clear exisisting options
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
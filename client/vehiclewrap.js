const carMakes = [
    "Acura", 
    "Audi", 
    "Austin", 
    "BMW", 
    "Buick", 
    "Cadillac", 
    "Chevrolet", 
    "Chrysler", 
    "Daewoo", 
    "Dodge", 
    "Fiat", 
    "Ford", 
    "Freightliner", 
    "Geo", 
    "GM", 
    "GMC", 
    "Hino", 
    "Honda", 
    "HUMV", 
    "Hyundai", 
    "Infiniti", 
    "International", 
    "Isuzu", 
    "Jaguar", 
    "Jeep", 
    "Kenworth", 
    "Kia", 
    "Land Rover", 
    "Lexus", 
    "Lincoln", 
    "Mack", 
    "Mazda", 
    "Mercedes", 
    "Mercury", 
    "Mini", 
    "Mitsubishi", 
    "Nissan", 
    "Oldsmobile", 
    "Peterbilt", 
    "Plymouth", 
    "Pontiac", 
    "Saab", 
    "Saturn", 
    "Scion", 
    "Smart", 
    "Sterling", 
    "Subaru", 
    "Suzuki", 
    "Tesla", 
    "Toyota", 
    "Volkswagen", 
    "Volvo", 
    "Western Star"
];

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");
    const carMakeDropdown = document.getElementById("carMakeDropdown");
    const carModelSelection = document.getElementById("carModelSelection");
    console.log("carMakeDropdown:", carMakeDropdown);
    console.log("carModelSelection:", carModelSelection);

    populateCarMakes(carMakeDropdown);

    carMakeDropdown.addEventListener("change", function() {
        console.log("Car make dropdown changed");
        console.log("Selected car make:", carMakeDropdown.value);
        populateCarModels(carMakeDropdown.value, carModelSelection);
    });
});

const carModels = {
    "Acura": ["CSX 4 Door Sedan", "EL Series 4-Door", "Integra 3-Door (89-93)", "Integra 3-Door (00-02)", "Integra 5-Door", "Integra 4-Door Sedan", "MDX (00-06)", "MDX (07-12)", "MDX (14-20)", "RDX", "RSX Coupe", "TLX"],
    "Audi": ["A3 Wagon", "A4", "A4 Allroads", "A4 Avant Wagon", "Q7", "TT Coupe (00-06)", "TT Coupe (07-14)"],
    "Austin": ["Mini Cooper"]
};

function populateCarMakes(carMakeDropdown) {
    console.log("Populating car makes dropdown");
    carMakes.forEach(function(carMake) {
        const option = document.createElement("option");
        option.value = carMake.toLowerCase();
        option.textContent = carMake;
        carMakeDropdown.appendChild(option);
    });
};

function populateCarModels(selectedCarMake, carModelSelection) {
    console.log("Populating car models dropdown for:", selectedCarMake);
    // Clear existing options in car model dropdown
    carModelSelection.innerHTML = "<option value='non'>Select</option>";

    // Populate car model dropdown based on selected car make
    if (selectedCarMake !== "non") {
        // Ensure selectedCarMake is properly capitalized
        selectedCarMake = selectedCarMake.charAt(0).toUpperCase() + selectedCarMake.slice(1).toLowerCase();

        const models = carModels[selectedCarMake];
        if (models) {
            models.forEach(function(model) {
                const option = document.createElement("option");
                option.value = model.toLowerCase();
                option.textContent = model;
                carModelSelection.appendChild(option);
            });
        } else {
            console.log("No models found for", selectedCarMake);
        }
    }
};
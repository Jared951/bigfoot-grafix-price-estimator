document.addEventListener("DOMContentLoaded", function() {
    const carMakeSearchInput = document.getElementById("carMakeSearch");
    const searchButton = document.getElementById("searchButton");

    carMakeSearchInput.addEventListener("input", function() {
        handleCarMakeSearch(carMakeSearchInput.value.trim().toLowerCase());
    });

    searchButton.addEventListener("click", function() {
        const selectedCarMake = carMakeSearchInput.value.trim().toLowerCase();
        if (carMakes.includes(selectedCarMake)) {
            alert("Selected car make: " + selectedCarMake);
        } else {
            alert("Car make not found: " + selectedCarMake);
        }
    });
});

const carMakes = [
    "acura", 
    "audi", 
    "austin", 
    "bmw", 
    "buick", 
    "cadillac", 
    "chevrolet", 
    "chrysler", 
    "daewoo", 
    "dodge", 
    "fiat", 
    "ford", 
    "freightliner", 
    "geo", 
    "gm", 
    "gmc", 
    "hino", 
    "honda", 
    "humv", 
    "hyundai", 
    "infiniti", 
    "international", 
    "isuzu", 
    "jaguar", 
    "jeep", 
    "kenworth", 
    "kia", 
    "land rover", 
    "lexus", 
    "lincoln", 
    "mack", 
    "mazda", 
    "mercedes", 
    "mercury", 
    "mini", 
    "mitsubishi", 
    "nissan", 
    "oldsmobile", 
    "peterbilt", 
    "plymouth", 
    "pontiac", 
    "saab", 
    "saturn", 
    "scion", 
    "smart", 
    "sterling", 
    "subaru", 
    "suzuki", 
    "tesla", 
    "toyota", 
    "volkswagen", 
    "volvo", 
    "western star"
];

function handleCarMakeSearch(searchTerm) {
}
document.addEventListener("DOMContentLoaded", function() {
    const carMakeDropdown = document.getElementById("carMakeDropdown");

    // Loop through the carMakes array and create an option element for each car make
    carMakes.forEach(function(carMake) {
        const option = document.createElement("option");
        option.value = carMake.toLowerCase(); // Set the value to lowercase for consistency
        option.textContent = carMake; // Set the text content to display the car make
        carMakeDropdown.appendChild(option); // Append the option to the dropdown
    });
});

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
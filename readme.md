# Bigfoot Grafix Pricing Estimator

This web application, created for BigFoot Grafix, assists their sales team in creating estimates for clients by allowing the sales team to estimate the cost of various custom graphic services, including vehicle wraps, signs, banners, and apparel. It provides a user-friendly interface for selecting options and calculating prices.

- https://bigfoot-price-estimator.onrender.com/ 

## Features

- Vehicle Wrap: Users can select car make and model, wrap material, wrap size (full, partial, or custom), and get price estimates based on their selections.
- Sign: Users can choose sign type, material, input dimensions, and get price estimates. Material type is based on the selected sign type.
- Banner: Users can select banner type, material, input dimensions, and get price estimates. Material type is based on the selected banner type.
- Apparel: Users can choose apparel type, material, specify quantity, and get price estimates. 

## Technologies Used

- Python
- JavaScript
- Flask 
- SQLite
- TailwindCSS
- HTML

## Frontend

JavaScript, HTML, and TailwindCSS

### Frontend Operations

- The vehicle wrap estimation feature initializes options, sets up event listeners, updates car models and wrap materials, fetches car makes, and handles all estimation logic, clearing displays as needed.
- The sign, banner, and apparel estimation feature initializes form fields, populates materials based on type, and displays prices based on user inputs and selected options.

## Backend

Python, Flask, and SQLite

### Database Operations

- Fetch Car Makes: Retrieves a list of distinct car makes from the database.
- Fetch Car Models: Retrieves car models based on the selected make.
- Fetch Total Square Footage: Retrieves total square footage for a selected car model.
- Fetch Partial Wrap Square Footage: Retrieves square footage for partial wraps based on the car model and selected part of the car.

### API Endpoints

- /api/car-makes: Returns a list of car makes.
- /api/car-models: Returns a list of car models for the selected make.
- /api/car-total-sq-ft: Returns the total square footage for a selected car model.
- /api/partial-sq-ft: Returns the partial wrap square footage for a car model and specific part.
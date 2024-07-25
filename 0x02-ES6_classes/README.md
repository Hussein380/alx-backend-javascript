
## JavaScript ES6 Classes Project

## Overview

This project explores advanced concepts in JavaScript ES6 classes, including inheritance, static properties, method overriding, and object cloning. The project includes a series of tasks to implement and extend various classes, demonstrating the use of ES6 features to build and manage complex class structures.

## Table of Contents

- [Project Structure](#project-structure)
- [Tasks](#tasks)
  - [1. Currency](#1-currency)
  - [2. Pricing](#2-pricing)
  - [3. Building](#3-building)
  - [4. SkyHighBuilding](#4-skyhighbuilding)
  - [5. Airport](#5-airport)
  - [6. Car](#6-car)
  - [7. EVCar](#7-evcar)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project directory contains the following files:

- `3-currency.js`: Implements the `Currency` class.
- `4-pricing.js`: Implements the `Pricing` class.
- `5-building.js`: Implements the `Building` class.
- `6-sky_high.js`: Implements the `SkyHighBuilding` class.
- `7-airport.js`: Implements the `Airport` class.
- `10-car.js`: Implements the `Car` class.
- `100-evcar.js`: Implements the `EVCar` class.
- `9-hoisting.js`: Demonstrates the use of class properties and methods with examples.

## Tasks

### 1. Currency

**File:** `3-currency.js`

- Implemented the `Currency` class with `code` and `name` attributes.
- Provided getters and setters for each attribute.
- Added a method `displayFullCurrency` to return the currency in the format `name (code)`.

### 2. Pricing

**File:** `4-pricing.js`

- Implemented the `Pricing` class with `amount` and `currency` attributes.
- Added getters and setters for each attribute.
- Implemented `displayFullPrice` to return the price in the format `amount currency_name (currency_code)`.
- Added a static method `convertPrice` to convert prices based on a conversion rate.

### 3. Building

**File:** `5-building.js`

- Implemented an abstract `Building` class with `sqft` attribute.
- Added getters and setters for the attribute.
- Ensured subclasses must implement `evacuationWarningMessage`.

### 4. SkyHighBuilding

**File:** `6-sky_high.js`

- Extended `Building` to create `SkyHighBuilding`.
- Added `floors` attribute with getters and setters.
- Overridden `evacuationWarningMessage` to return a warning message including the number of floors.

### 5. Airport

**File:** `7-airport.js`

- Implemented the `Airport` class with `name` and `code` attributes.
- Added getters and setters for each attribute.
- Used `Symbol.toStringTag` to return the airport code when the object is cast to a string.

### 6. Car

**File:** `10-car.js`

- Implemented the `Car` class with `brand`, `motor`, and `color` attributes.
- Added a method `cloneCar` to return a new instance of the class using the `Symbol.species` property.

### 7. EVCar

**File:** `100-evcar.js`

- Extended `Car` to create `EVCar` with an additional `range` attribute.
- Overrode `cloneCar` to return an instance of `Car` instead of `EVCar`.

## Installation

To run the project, clone the repository and navigate to the project directory. Ensure you have Node.js installed.

```bash
git clone https://github.com/yourusername/alx-backend-javascript.git
cd alx-backend-javascript/0x02-ES6_classes
npm install
```

## Usage

To run the examples provided in each file:

```bash
npm run dev <file>
```

Replace `<file>` with the filename (e.g., `4-main.js`) to execute the corresponding script.

## Contributing

Feel free to submit issues and pull requests. Please ensure your code adheres to the project's coding standards and includes appropriate comments and documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



import Car from './10-car.js';

// Define the EVCar class extending the Car class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this.range = range; // Add the range attribute
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Setter for range
  set range(value) {
    this._range = value;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    const Species = Car[Symbol.species]; // Use the Car class
    return new Species(); // Return an instance of Car
  }
}


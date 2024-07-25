export default class Car {
  constructor(brand, motor, color) {
    // Initialize attributes
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Setter for brand
  set brand(value) {
    this._brand = value;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Setter for motor
  set motor(value) {
    this._motor = value;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Setter for color
  set color(value) {
    this._color = value;
  }

  // Static property Symbol.species
  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the car object
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}


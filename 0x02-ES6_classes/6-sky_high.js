// 6-sky_high.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   * Constructor to initialize sqft and floors.
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor to set sqft
    this.floors = floors; // Initialize floors
  }

  /**
   * Getter for sqft.
   * @returns {Number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Setter for sqft.
   * @param {Number} value - The new square footage value to set.
   */
  set sqft(value) {
    this._sqft = value;
  }

  /**
   * Getter for floors.
   * @returns {Number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Setter for floors.
   * @param {Number} value - The new number of floors to set.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Method to return a specific evacuation warning message.
   * @returns {String} Evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}


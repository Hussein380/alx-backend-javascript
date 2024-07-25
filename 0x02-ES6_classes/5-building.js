// 5-building.js

export default class Building {
  /**
   * Constructor to initialize the sqft attribute.
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    // Initialize the sqft attribute
    this.sqft = sqft;

    // Check if the current class is a subclass of Building
    if (this.constructor !== Building) {
      // Ensure that the subclass implements the evacuationWarningMessage method
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
  }

  /**
   * Getter for the sqft attribute.
   * @returns {Number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Setter for the sqft attribute.
   * @param {Number} value - The new square footage value to set.
   */
  set sqft(value) {
    this._sqft = value;
  }
}


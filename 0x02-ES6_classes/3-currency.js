// 3-currency.js
export default class Currency {
  constructor(code, name) {
    this.code = code; // This will use the setter with validation
    this.name = name; // This will use the setter with validation
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code with type validation
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type validation
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

// 4-pricing.js
import Currency from './3-currency.js';

export default class Pricing {
  // Constructor to initialize amount and currency
  constructor(amount, currency) {
    this._amount = 0; // Default value for amount
    this._currency = null; // Default value for currency

    this.amount = amount; // Set the initial amount
    this.currency = currency; // Set the initial currency
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount with validation
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency with validation
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * Creates the full string representation of the price.
   * @returns {String} A formatted string showing amount and currency details.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts a price amount using a conversion rate.
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The conversion rate to apply.
   * @returns {Number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

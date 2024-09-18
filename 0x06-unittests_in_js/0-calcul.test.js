const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  // Test for floating point whole numbers, no rounding needed
  it('should return sum of whole numbers with floating point format', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  // Test for rounding down the second number
  it('should round down the second number and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  // Test for rounding down both numbers
  it('should round down both numbers and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  // Test for rounding down the first number only
  it('should round down the first number and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  // Test for rounding up the second number
  it('should round up the second number and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  // Test for rounding up both numbers
  it('should round up both numbers and return the correct sum', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  // Test for rounding up the first number only
  it('should round up the first number and return the correct sum', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  // Test for rounding down fractional numbers with trailing 9's
  it('should round down both fractional numbers with trailing 9\'s and return the correct sum', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

  // Test for rounding up when both numbers are exactly 0.5
  it('should round up both numbers when exactly 0.5', () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });

  // Test for mixed positive and negative numbers
  it('should correctly sum rounded positive and negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, 2.6), 2);
  });

  // Test for handling large numbers
  it('should handle large numbers and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1000.4, 2000.6), 3001);
  });

  // Test for edge case when both numbers are zero
  it('should return 0 when both numbers are zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});


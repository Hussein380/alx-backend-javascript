const assert = require('assert'); // Import the assert module for testing
const calculateNumber = require('./1-calcul'); // Import the function to be tested

// Main test suite for calculateNumber function
describe('calculateNumber', () => {

  // Test cases for SUM operation
  describe('operation == "SUM"', () => {
    
    // Test for adding two whole positive numbers
    it('should correctly sum two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    // Test for rounding and adding two fractional positive numbers
    it('should round and sum fractional positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    // Test for adding two whole negative numbers
    it('should correctly sum two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    // Test for rounding and adding two fractional negative numbers
    it('should round and sum fractional negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    // Test for summing a negative and a positive number
    it('should sum a negative and a positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    // Test for summing a positive and a negative number
    it('should sum a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    // Test for summing two zeros
    it('should sum two zeros correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  // Test cases for SUBTRACT operation
  describe('operation == "SUBTRACT"', () => {
    
    // Test for subtracting two positive numbers
    it('should correctly subtract two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    // Test for rounding and subtracting two fractional positive numbers
    it('should round and subtract fractional positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    // Test for subtracting two negative numbers
    it('should correctly subtract two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    // Test for rounding and subtracting two fractional negative numbers
    it('should round and subtract fractional negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    // Test for subtracting a positive from a negative number
    it('should subtract a positive from a negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4);
    });

    // Test for subtracting a negative from a positive number
    it('should subtract a negative from a positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4);
    });

    // Test for subtracting two zeros
    it('should subtract two zeros correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  // Test cases for DIVIDE operation
  describe('operation == "DIVIDE"', () => {

    // Test for dividing two positive numbers
    it('should correctly divide two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    // Test for dividing numbers with different signs
    it('should divide a negative by a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    // Test for dividing numbers with different signs (positive by negative)
    it('should divide a positive by a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    // Test for dividing two negative numbers
    it('should correctly divide two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    // Test for dividing a number by zero (should return 'Error')
    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });
    
    // Test for rounding and dividing a number rounded down to zero
    it('should return "Error" when divisor rounds to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });
  });
});


const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
  it('returns the sum of two rounded numbers for SUM operation', () => {
    // Test case 1: SUM operation
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('returns the subtraction result for SUBTRACT operation', () => {
    // Test case 2: SUBTRACT operation
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('returns the division result for DIVIDE operation', () => {
    // Test case 3: DIVIDE operation
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('returns "Error" for division by zero in DIVIDE operation', () => {
    // Test case 4: DIVIDE operation with division by zero
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('returns "Error" for invalid type in operation', () => {
    // Test case 5: Checking if operation is correct
    assert.strictEqual(calculateNumber(5, 1, 4), 'Error');
  });

  it('returns "Error" for unknown operation type', () => {
    // Test case 6: Checking correct type for operation
    assert.strictEqual(calculateNumber('plus', 1, 4), 'Error');
  });
});

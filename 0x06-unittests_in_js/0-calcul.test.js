const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checking if numbers round', () => {
    // Test case 1: Both arguments are integers
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('checking if numbers round 2nd round', () => {
    // Test case 2: One argument is a decimal
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('checking if numbers round 3nd round', () => {
    // Test case 3: Both arguments are decimals
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('checking if numbers round 4nd round', () => {
    // Test case 4: Both arguments are decimals
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('checking negative return', () => {
    // Test case 5: Both arguments are negative decimals
    assert.strictEqual(calculateNumber(-1.3, -3.7), -5);
  });

  it('checking if numbers round', () => {
    // Test case 6: Both arguments are zeros
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('checking if numbers round', () => {
    // Test case 7: One argument is+ve decimal, the other is -ve decimal
    assert.strictEqual(calculateNumber(1.4, -1.3), 0);
  });
});

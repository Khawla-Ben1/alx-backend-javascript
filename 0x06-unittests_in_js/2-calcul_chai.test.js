const expect = require('chai').expect;
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {

  // Test suite for SUM operation
  describe('SUM', () => {
    // Test case: checking if numbers round
    it('returns the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    // Test case: checking if numbers round (decimal inputs)
    it('returns the sum of two rounded numbers (decimal inputs)', () => {
      expect(calculateNumber('SUM', 1.6, 2.6)).to.equal(5);
    });
  });

  // Test suite for SUBTRACT operation
  describe('SUBTRACT', () => {
    // Test case: checking if numbers round
    it('returns the difference of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.3)).to.equal(-1);
    });
    
    // Test case: checking if numbers round (decimal inputs)
    it('returns the difference of two rounded numbers (decimal inputs)', () => {
      expect(calculateNumber('SUBTRACT', 4.9, 2.7)).to.equal(2);
    });
    
    // Test case: checking if numbers round (negative inputs)
    it('returns the difference of two rounded numbers (negative inputs)', () => {
      expect(calculateNumber('SUBTRACT', -4.9, -2.7)).to.equal(-2);
    });
  });

  // Test suite for DIVIDE operation
  describe('DIVIDE', () => {
    // Test case: checking if numbers round
    it('returns the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    
    // Test case: checking if numbers round (decimal inputs)
    it('returns the division of two rounded numbers (decimal inputs)', () => {
      expect(calculateNumber('DIVIDE', 4.6, 1.8)).to.equal(2.5);
    });
    
    // Test case: returns "Error" for division by zero
    it('returns "Error" for division by zero', () => {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
  });
});

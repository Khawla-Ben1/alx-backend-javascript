const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('checking if numbers round with spies', () => {
    // Create a spy for the calculateNumber function in the Utils module
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function being tested
    sendPaymentRequestToApi(1, 3);

    // Assert that the spy was called once
    expect(calculateNumberSpy.calledOnce).to.be.true;

    // Assert that the spy was called with the correct arguments
    expect(calculateNumberSpy.calledWith('SUM', 1, 3)).to.be.true;

    // Restore the original implementation of the spy
    calculateNumberSpy.restore();
  });
});

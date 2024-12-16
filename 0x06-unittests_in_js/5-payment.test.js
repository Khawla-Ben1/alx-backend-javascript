const { expect } = require('chai');
const { it, describe, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy to monitor console.log calls before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the console.log spy after each test
    consoleSpy.restore();
  });

  it('should log the correct message for totalAmount = 100 and totalShipping = 20', () => {
    // Call the function being tested
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount = 10 and totalShipping = 10', () => {
    // Call the function being tested
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});

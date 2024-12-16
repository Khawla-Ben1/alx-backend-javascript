const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should log the correct message and call the stub', () => {
    // Create a stub for Utils.calculateNumber and make it always return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy to monitor console.log calls
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function being tested
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and the spy
    stub.restore();
    consoleSpy.restore();
  });
});

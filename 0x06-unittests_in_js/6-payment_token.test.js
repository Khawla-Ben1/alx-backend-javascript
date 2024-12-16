const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('should return the expected response for success = true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
	// Invoke done with an error if the promise is rejected
        done();
      })
      .catch((error) => {
	// Invoke done with an error if the promise is rejected
        done(error);
      });
  });
});

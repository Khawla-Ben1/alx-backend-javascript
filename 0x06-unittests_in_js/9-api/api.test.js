const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      // Verify the status code is correct
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      // Verify the response body is correct
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      // Verify the status code is correct
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      // Verify the status code is correct
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Other?', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      done();
    });
  });
});

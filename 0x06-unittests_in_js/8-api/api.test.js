const request = require('request');
const { expect } = require('chai');

// Tests index page of payment system
describe('Index page', () => {
  // Checks status code is 200 OK
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      // The response status =200 (OK)
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Checks result is: display message
  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      // The response body to be displayed
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Allows for additional assertions or tests
  it('Other?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      // Add any other assertions or tests you want to perform
      done();
    });
  });
});

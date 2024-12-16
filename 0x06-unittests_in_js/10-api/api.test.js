const request = require('request'); // Import the request module
const { expect } = require('chai'); // Import the expect function from the chai module

const baseUrl = 'http://localhost:7865'; // Define the base URL for API requests

describe('API', () => {
  // Test suite for the /cart/:id endpoint
  describe('GET /cart/:id', () => {
    // Test for correct status code when :id is a number
    it('responds with status 200 when :id is a number', (done) => {
      request.get(`${baseUrl}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    // Test for correct status code when :id is not a number
    it('responds with status 404 when :id is not a number', (done) => {
      request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test suite for the /available_payments endpoint
  describe('GET /available_payments', () => {
    // Test for correct status code and result
    it('responds with status 200 and correct result', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  // Test suite for the /login endpoint
  describe('POST /login', () => {
    // Test for correct status code and result
    it('responds with status 200 and welcome message', (done) => {
      const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        json: true,
        body: { userName: 'Betty' }
      };
      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});

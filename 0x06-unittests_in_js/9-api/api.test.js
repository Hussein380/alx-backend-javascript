// Import the request module to make HTTP requests
const request = require('request');
// Import the expect function from chai for assertions
const { expect } = require('chai');

// Define a test suite for API integration tests
describe('API integration test', () => {
  // Base URL for the API
  const API_URL = 'http://localhost:7865';

  // Define a test suite for the root page
  describe('Index page', () => {
    it('GET / returns correct response', (done) => {
      // Send a GET request to the root URL
      request.get(`${API_URL}/`, (_err, res, body) => {
        // Assert that the response status code is 200
        expect(res.statusCode).to.be.equal(200);
        // Assert that the response body is the expected message
        expect(body).to.be.equal('Welcome to the payment system');
        // Call done to signal that the asynchronous test is complete
        done();
      });
    });
  });

  // Define a test suite for the /cart/:id page
  describe('Cart page', () => {
    it('GET /cart/:id returns correct response when :id is a number', (done) => {
      // Send a GET request to the /cart/12 URL
      request.get(`${API_URL}/cart/12`, (_err, res, body) => {
        // Assert that the response status code is 200
        expect(res.statusCode).to.be.equal(200);
        // Assert that the response body contains the expected message
        expect(body).to.be.equal('Payment methods for cart 12');
        // Call done to signal that the asynchronous test is complete
        done();
      });
    });

    it('GET /cart/:id returns 404 when :id is not a number', (done) => {
      // Send a GET request to the /cart/hello URL (invalid ID)
      request.get(`${API_URL}/cart/hello`, (_err, res, _body) => {
        // Assert that the response status code is 404
        expect(res.statusCode).to.be.equal(404);
        // Call done to signal that the asynchronous test is complete
        done();
      });
    });
  });
});


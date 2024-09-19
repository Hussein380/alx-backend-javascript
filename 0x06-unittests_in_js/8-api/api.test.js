// Import the request module to make HTTP requests
const request = require('request');
// Import the expect function from chai for assertions
const { expect } = require('chai');

// Define a test suite for API integration tests
describe('API integration test', () => {
  // Base URL for the API
  const API_URL = 'http://localhost:7865';

  // Define a test case for the GET / route
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


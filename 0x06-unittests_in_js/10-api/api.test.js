// Import the request module to make HTTP requests
const request = require('request');
// Import the expect function from chai for assertions
const { expect } = require('chai');

// Define a test suite for API integration tests
describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  // Define a test suite for the root page
  describe('Index page', () => {
    it('GET / returns correct response', (done) => {
      request.get(`${API_URL}/`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    });
  });

  // Define a test suite for the /cart/:id page
  describe('Cart page', () => {
    it('GET /cart/:id returns correct response when :id is a number', (done) => {
      request.get(`${API_URL}/cart/12`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      });
    });

    it('GET /cart/:id returns 404 when :id is not a number', (done) => {
      request.get(`${API_URL}/cart/hello`, (_err, res, _body) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });

  // Define a test suite for the /available_payments endpoint
  describe('Available payments page', () => {
    it('GET /available_payments returns the correct payment methods object', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        const parsedBody = JSON.parse(body);
        expect(parsedBody).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  // Define a test suite for the /login endpoint
  describe('Login page', () => {
    it('POST /login with userName returns correct response', (done) => {
      request.post(
        {
          url: `${API_URL}/login`,
          json: { userName: 'Betty' },
        },
        (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome Betty');
          done();
        }
      );
    });

    it('POST /login without userName returns 400 status', (done) => {
      request.post(
        {
          url: `${API_URL}/login`,
          json: {},
        },
        (_err, res, _body) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        }
      );
    });
  });
});


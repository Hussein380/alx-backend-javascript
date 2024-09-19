const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // Assert that the response matches the expected value
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        // Indicate that the test is complete
        done();
      })
      .catch(done); // Catch any errors and fail the test
  });
});


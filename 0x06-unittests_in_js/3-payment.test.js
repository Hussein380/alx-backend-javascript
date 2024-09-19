// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Create a spy for Utils.calculateNumber
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the original method
    spy.restore();
  });

  it('should use the calculateNumber method of Utils', () => {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Check if calculateNumber was called with the correct arguments
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.callCount).to.equal(1);
  });
});

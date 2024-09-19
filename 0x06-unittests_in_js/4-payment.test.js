const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleSpy;

  beforeEach(() => {
    // Stub the calculateNumber method to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log to verify the output
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and the spy
    stub.restore();
    consoleSpy.restore();
  });

  it('should use the stubbed calculateNumber and log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that calculateNumber was called with the correct arguments
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});


# 0x06. Unittests in JS

## Overview
This project involves writing unit tests in JavaScript for various backend functionalities using tools like Mocha, Chai, and Sinon. The project focuses on unit testing techniques, including the use of spies, stubs, hooks, and handling asynchronous code with Mocha's `done` callback. By the end of this project, you'll be equipped with the skills to write comprehensive unit test suites for your backend code.

## Learning Objectives
By completing this project, you will learn:
- How to write a test suite using Mocha.
- How to use assertion libraries like Node's assert or Chai's expect/assert.
- Techniques for writing, organizing, and managing long test suites.
- When and how to use spies and stubs with Sinon.
- How to work with hooks (`before`, `after`, `beforeEach`, `afterEach`) for test setup and teardown.
- How to unit test asynchronous functions.
- Basics of integration testing in Node.js with Express.

## Requirements
- All code will be executed on Ubuntu 18.04 using Node 12.x.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- JavaScript files should use the `.js` extension.
- Tests should be run using `npm run test *.test.js`.
- Every test should pass without any warnings or errors.

## Project Tasks

### Task 0: Basic test with Mocha and Node Assertion Library
**Objective**: Install Mocha and write a test suite using Node's built-in `assert` module.

- **Files**: 
  - `0-calcul.js`: Implements a function `calculateNumber` that rounds two numbers and returns their sum.
  - `0-calcul.test.js`: Contains test cases using `assert` to validate the behavior of `calculateNumber`.

### Task 1: Combining Descriptions
**Objective**: Extend the previous function to support different operations (SUM, SUBTRACT, DIVIDE).

- **Files**:
  - `1-calcul.js`: Extends `calculateNumber` to accept an operation type (SUM, SUBTRACT, DIVIDE).
  - `1-calcul.test.js`: Contains test cases for the extended function.

### Task 2: Basic test using Chai Assertion Library
**Objective**: Refactor the previous test suite using Chai's `expect` style for better readability.

- **Files**:
  - `2-calcul_chai.js`: Copy of `1-calcul.js`.
  - `2-calcul_chai.test.js`: Contains refactored test cases using Chai's `expect`.

### Task 3: Spies
**Objective**: Use Sinon to create a spy that verifies a function call without altering the original function.

- **Files**:
  - `utils.js`: Defines a `calculateNumber` function inside a `Utils` module.
  - `3-payment.js`: Calls `Utils.calculateNumber` to calculate the total payment.
  - `3-payment.test.js`: Tests the behavior of `sendPaymentRequestToApi` using a Sinon spy.

### Task 4: Stubs
**Objective**: Use Sinon to create a stub that alters the behavior of a function during testing.

- **Files**:
  - `4-payment.js`: Similar to `3-payment.js`.
  - `4-payment.test.js`: Tests `sendPaymentRequestToApi` using a stub to mock the behavior of `Utils.calculateNumber`.

### Task 5: Hooks
**Objective**: Introduce hooks (`beforeEach`, `afterEach`) to manage setup and teardown in test cases.

- **Files**:
  - `5-payment.js`: Similar to `4-payment.js`.
  - `5-payment.test.js`: Uses hooks to manage test execution.

### Task 6: Async Tests with Done
**Objective**: Write tests for an asynchronous function using Mocha’s `done` callback.

- **Files**:
  - `6-payment_token.js`: Implements a function `getPaymentTokenFromAPI` that simulates an API call.
  - `6-payment_token.test.js`: Tests the function's behavior using `done`.

### Task 7: Skip Failing Tests
**Objective**: Learn how to skip failing tests instead of commenting them out.

- **Files**:
  - `7-skip.test.js`: Contains tests where one of them will be skipped.

### Task 8: Basic Integration Testing
**Objective**: Set up a small Express server and write basic integration tests.

- **Files**:
  - `8-api`: A folder that contains an Express app and integration tests.

## How to Run the Tests
1. Clone the repository:
   ```
   git clone https://github.com/your-username/alx-backend-javascript.git
   cd 0x06-unittests_in_js
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the tests:
   ```
   npm test *.test.js
   ```

## Repository
GitHub repository: [alx-backend-javascript](https://github.com/Hussein380/alx-backend-javascript)


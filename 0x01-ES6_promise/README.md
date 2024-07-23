
# 0x01. ES6 Promises

## Overview
This project explores the use of Promises in JavaScript, a fundamental concept for handling asynchronous operations. You will learn how to create and manage Promises, use methods like `then`, `catch`, and `resolve`, and employ asynchronous functions with `async` and `await`.

## Learning Objectives
By the end of this project, you should be able to:
- Explain the concept of Promises, their importance, and how to use them.
- Use the `then`, `resolve`, and `catch` methods.
- Utilize every method of the Promise object.
- Understand and use the `throw` and `try` statements.
- Apply the `await` operator.
- Implement and use asynchronous functions (`async`).

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- Code should use the `.js` extension.
- Code will be tested using Jest and the command `npm run test`.
- Code will be verified against lint using ESLint.
- All functions must be exported.

## Setup
### Install NodeJS 12.11.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # Should output v12.11.1
npm -v  # Should output 6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, use the provided `package.json` and run:
```bash
npm install
```

### Configuration Files
- **package.json**: Configuration file for npm dependencies.
- **babel.config.js**: Babel configuration for compiling ES6+ JavaScript.
  ```javascript
  module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };
  ```
- **.eslintrc.js**: Configuration file for ESLint to ensure code quality and style consistency.

### Utility Functions
- **utils.js**: Contains helper functions `uploadPhoto` and `createUser`.
  ```javascript
  export function uploadPhoto() {
    return Promise.resolve({
      status: 200,
      body: 'photo-profile-1',
    });
  }

  export function createUser() {
    return Promise.resolve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  }
  ```

## Tasks
### Task 0: Keep every promise you make and only make promises you can keep
- **File**: `0-promise.js`
- **Function**: `getResponseFromAPI()`
- **Description**: Return a Promise using the prototype function `getResponseFromAPI()`.

### Task 1: Don't make a promise...if you know you can't keep it
- **File**: `1-promise.js`
- **Function**: `getFullResponseFromAPI(success)`
- **Description**: Return a promise that resolves or rejects based on the boolean parameter `success`.

### Task 2: Catch me if you can!
- **File**: `2-then.js`
- **Function**: `handleResponseFromAPI(promise)`
- **Description**: Append three handlers to manage the resolved and rejected states of the promise.

### Task 3: Handle multiple successful promises
- **File**: `3-all.js`
- **Function**: `handleProfileSignup()`
- **Description**: Resolve multiple promises from `uploadPhoto` and `createUser`, logging their responses.

### Task 4: Simple promise
- **File**: `4-user-promise.js`
- **Function**: `signUpUser(firstName, lastName)`
- **Description**: Return a resolved promise with an object containing `firstName` and `lastName`.

### Task 5: Reject the promises
- **File**: `5-photo-reject.js`
- **Function**: `uploadPhoto(filename)`
- **Description**: Return a rejected promise with an error message including the `filename`.

### Task 6: Handle multiple promises
- **File**: `6-final-user.js`
- **Function**: `handleProfileSignup(firstName, lastName, fileName)`
- **Description**: Call two functions and return an array with the results of the promises.

### Task 7: Load balancer
- **File**: `7-load_balancer.js`
- **Function**: `loadBalancer(chinaDownload, USDownload)`
- **Description**: Return the value of the first resolved promise between `chinaDownload` and `USDownload`.

### Task 8: Throw error / try catch
- **File**: `8-try.js`
- **Function**: `divideFunction(numerator, denominator)`
- **Description**: Throw an error if `denominator` is 0, otherwise return the result of division.

### Task 9: Throw an error
- **File**: `9-try.js`
- **Function**: `guardrail(mathFunction)`
- **Description**: Execute `mathFunction`, appending its result or error message to an array.

## Running Tests
Run the tests using Jest:
```bash
npm run test
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- Hussein Yussuf Garane

---



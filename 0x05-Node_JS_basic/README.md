Here is a `README.md` file for the "NodeJS Basics" project, covering all the tasks and requirements:

---

# NodeJS Basics Project

This project focuses on fundamental concepts of Node.js, including creating HTTP servers, handling files, and using Express. The project is structured to help you learn and apply basic Node.js concepts and tools.

## Learning Objectives

By the end of this project, you should be able to:

- Run JavaScript code using Node.js.
- Use Node.js modules for various tasks.
- Read files synchronously and asynchronously.
- Create HTTP servers using both Node.js and Express.
- Use ES6 features in Node.js with Babel.
- Use Nodemon for faster development.

## Prerequisites

- Node.js (version 12.x.x)
- npm (Node Package Manager)
- Babel for ES6 support
- Nodemon for development

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Hussein380/alx-backend-javascript.git
   cd alx-backend-javascript/0x05-Node_JS_basic
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setup Babel**

   Install Babel and its CLI if you haven't:

   ```bash
   npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
   ```

4. **Update `package.json` Scripts**

   Ensure the `dev` script in `package.json` is set up to use `babel-node`:

   ```json
   "scripts": {
     "dev": "nodemon --exec babel-node --presets @babel/preset-env ./full_server/server.js ./database.csv"
   }
   ```

## Tasks

### 0. Executing Basic JavaScript with Node.js

**File:** `0-console.js`

Create a function named `displayMessage` that prints a string argument to STDOUT.

**Example:**

```javascript
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");
```

### 1. Using Process stdin

**File:** `1-stdin.js`

Create a program that:
- Displays a prompt asking for the user's name.
- Displays the user's name upon input.
- Displays a closing message when the program ends.

**Example:**

```bash
node 1-stdin.js
```

### 2. Reading a File Synchronously with Node.js

**File:** `2-read_file.js`

Create a function named `countStudents` that reads the `database.csv` file synchronously and logs the number of students per field.

**Example:**

```bash
node 2-main_1.js
```

### 3. Reading a File Asynchronously with Node.js

**File:** `3-read_file_async.js`

Create a function named `countStudents` that reads the `database.csv` file asynchronously and returns a Promise.

**Example:**

```bash
node 3-main_1.js
```

### 4. Create a Small HTTP Server Using Node.js

**File:** `4-http.js`

Create a simple HTTP server that listens on port 1245 and displays "Hello Holberton School!" for any endpoint.

**Example:**

```bash
node 4-http.js
```

### 5. Create a More Complex HTTP Server Using Node.js

**File:** `5-http.js`

Enhance the HTTP server to display a list of students when accessing the `/students` endpoint.

**Example:**

```bash
node 5-http.js database.csv
```

### 6. Create a Small HTTP Server Using Express

**File:** `6-http_express.js`

Create an HTTP server using Express that displays "Hello Holberton School!" for the `/` endpoint.

**Example:**

```bash
node 6-http_express.js
```

### 7. Create a More Complex HTTP Server Using Express

**File:** `7-http_express.js`

Enhance the Express HTTP server to display the student list for the `/students` endpoint.

**Example:**

```bash
node 7-http_express.js database.csv
```

## Testing

- **Run Tests:** Use Jest for testing your code.
  ```bash
  npm run test
  ```

- **Run Linting:** Use ESLint to verify code quality.
  ```bash
  npm run lint
  ```

- **Full Test:** Run all tests and linting.
  ```bash
  npm run full-test
  ```

## Files

- **`database.csv`**: Contains sample student data.
- **`package.json`**: Contains project metadata and dependencies.
- **`babel.config.js`**: Babel configuration for ES6 support.
- **`.eslintrc.js`**: ESLint configuration for code linting.

## Contributions

Feel free to fork the repository and contribute improvements or fixes. For any issues, please create a GitHub issue or submit a pull request.

---

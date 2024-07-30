```markdown
# 0x03. ES6 Data Manipulation

## Project Overview

This project focuses on manipulating data using ES6 features in JavaScript. By the end of this project, you should be able to handle arrays, typed arrays, sets, maps, and weak maps efficiently. The project includes various tasks that will help you understand how to use methods like `map`, `filter`, and `reduce` on arrays, as well as how to work with different ES6 data structures.

## Resources

### Read or Watch:
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Learning Objectives

By the end of this project, you should be able to explain the following to anyone, without the help of Google:
- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The Set, Map, and WeakMap data structures

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint using the supplied `package.json` and run `npm install`.

### Configuration Files

Add the following files to your project directory:

#### `package.json`
```json
{
  "scripts": {
    "test": "jest",
    "lint": "eslint .",
    "full-test": "npm run lint && npm run test"
  },
  "dependencies": {
    "babel-jest": "^24.9.0",
    "eslint": "^6.6.0",
    "jest": "^24.9.0"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}
```

#### `babel.config.js`
```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ]
};
```

#### `.eslintrc.js`
```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off'
  }
};
```

Don’t forget to run `$ npm install` when you have the `package.json`.

## Tasks

### 0. Basic List of Objects

Create a function named `getListStudents` that returns an array of objects with three attributes: `id` (Number), `firstName` (String), and `location` (String).

```js
// 0-get_list_students.js
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
}
```

### 1. More Mapping

Create a function `getListStudentIds` that returns an array of ids from a list of objects. This function should use the `map` method and handle non-array arguments by returning an empty array.

```js
// 1-get_list_student_ids.js
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.map(student => student.id);
}
```

### 2. Filter

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city. Use the `filter` method.

```js
// 2-get_students_by_loc.js
export default function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}
```

### 3. Reduce

Create a function `getStudentIdsSum` that returns the sum of all the student ids using the `reduce` method.

```js
// 3-get_ids_sum.js
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
```

### 4. Combine

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

```js
// 4-update_grade_by_city.js
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A'
      };
    });
}
```

### 5. Typed Arrays

Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

```js
// 5-typed_arrays.js
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  if (position >= length) throw new Error('Position outside range');
  int8View[position] = value;
  return new DataView(buffer);
}
```

### 6. Set Data Structure

Create a function `setFromArray` that returns a Set from an array.

```js
// 6-set.js
export default function setFromArray(array) {
  return new Set(array);
}
```

### 7. More Set Data Structure

Create a function `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

```js
// 7-has_array_values.js
export default function hasValuesFromArray(set, array) {
  return array.every(value => set.has(value));
}
```

### 8. Clean Set

Create a function `cleanSet` that returns a string of all the set values that start with a specific string.

```js
// 8-clean_set.js
export default function cleanSet(set, startString) {
  if (startString === '') return '';
  return [...set]
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}
```

### 9. Map Data Structure

Create a function `groceriesList` that returns a map of groceries.

```js
// 9-groceries_list.js
export default function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  return groceries;
}
```

### 10. More Map Data Structure

Create a function `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

```js
// 10-update_uniq_items.js
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });
  return map;
}
```

### 11. Weak Link Data Structure

Export a const instance of `WeakMap` and name it `weakMap`. Export a function `queryAPI` to track the number of times it is called for each endpoint.

```js
// 100-weak.js
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);
  if (count >= 5) throw new Error('Endpoint load is high');
}
```

## Repository

- GitHub repository: `alx

-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- All files should be created and pushed to the `main` branch

Good luck!
```

This README.md file provides an overview of the project, including resources, learning objectives, setup instructions, task descriptions, and the structure of your repository. Follow these guidelines to complete the project successfully.

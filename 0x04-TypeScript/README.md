# Task 5: Brand Convention & Nominal Typing

## Description

This task involves creating a TypeScript project that employs brand convention and nominal typing to ensure type safety and distinct type identification. We will define two interfaces, `MajorCredits` and `MinorCredits`, each with a `credits` property, and create functions to sum these credits while maintaining type safety.

## Project Structure

```bash
task_5/
│
├── js/
│   └── main.ts
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Installation

1. **Clone the Repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the Task Directory:**
    ```bash
    cd task_5
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

## Usage

### Build the Project

To compile the TypeScript code, run:
```bash
npm run build
```

### Run the Code

After building the project, you can execute the compiled JavaScript file. Ensure you have a way to run the built files, typically via a server setup if using Webpack.

## TypeScript Interfaces and Functions

### MajorCredits Interface

Defines a `credits` property branded to distinguish `MajorCredits` from other types.
```typescript
export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}
```

### MinorCredits Interface

Defines a `credits` property branded to distinguish `MinorCredits` from other types.
```typescript
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}
```

### sumMajorCredits Function

Sums two `MajorCredits` objects and returns a new `MajorCredits` object.
```typescript
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}
```

### sumMinorCredits Function

Sums two `MinorCredits` objects and returns a new `MinorCredits` object.
```typescript
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
```

## Example Usage

In `main.ts`, we create instances of `MajorCredits` and `MinorCredits` and use the sum functions:

```typescript
// Example usage of sumMajorCredits and sumMinorCredits functions
const major1: MajorCredits = { credits: 3 as MajorCredits['credits'] };
const major2: MajorCredits = { credits: 4 as MajorCredits['credits'] };
const totalMajor = sumMajorCredits(major1, major2);
console.log(`Total Major Credits: ${totalMajor.credits}`);

const minor1: MinorCredits = { credits: 1 as MinorCredits['credits'] };
const minor2: MinorCredits = { credits: 2 as MinorCredits['credits'] };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log(`Total Minor Credits: ${totalMinor.credits}`);
```

## Requirements

- TypeScript 3.6.4 or later
- Node.js and npm
- Webpack for bundling the project

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Author

Hussein Yussuf Garane


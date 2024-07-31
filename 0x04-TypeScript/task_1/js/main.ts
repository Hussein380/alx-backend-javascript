// Interface for Teacher
export interface Teacher {
  // First name of the teacher; cannot be modified after initialization
  readonly firstName: string;
  // Last name of the teacher; cannot be modified after initialization
  readonly lastName: string;
  // Indicates if the teacher is a full-time employee
  fullTimeEmployee: boolean;
  // Optional property for the number of years of experience
  yearsOfExperience?: number;
  // Location where the teacher is based
  location: string;
  // Allows additional properties with any name and type
  [index: string]: any;
}

// Interface for Directors that extends Teacher
export interface Directors extends Teacher {
  // Number of reports the director has
  numberOfReports: number;
}

// Interface defining the signature of the printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function
export function printTeacher(firstName: string, lastName: string): string {
  // Returns the first letter of the first name and the full last name
  return `${firstName[0]}. ${lastName}`;
}

// Interface for the constructor of the StudentClass
export interface IStudentClassConstructor {
  // Constructor signature for creating instances of IStudentClass
  new (firstName: string, lastName: string): IStudentClass;
}

// Interface defining the structure of the StudentClass
export interface IStudentClass {
  // Method to return a string indicating the student is working on homework
  workOnHomework(): string;
  // Method to return the student's first name
  displayName(): string;
}

// Implementation of the StudentClass
export class StudentClass implements IStudentClass {
  // Private properties to hold the first and last names
  private _firstName!: string;
  private _lastName!: string;

  // Constructor to initialize the StudentClass
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Method to return a string indicating the student is working on homework
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method to return the student's first name
  displayName(): string {
    return this._firstName;
  }
}

// Function to create an instance of IStudentClass using a constructor
export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  // Returns a new instance of the class defined by the constructor
  return new ctor(firstName, lastName);
}


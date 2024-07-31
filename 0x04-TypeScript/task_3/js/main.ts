// Import the type definitions from crud.d.ts
/// <reference path="./js/crud.d.ts" />

// Import types and functions
import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';


// Create a row object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get a new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow and deleteRow functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);


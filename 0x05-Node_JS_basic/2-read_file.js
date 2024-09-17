const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @throws {Error} Throws an error if the file cannot be loaded.
 */
const countStudents = (dataPath) => {
  // Check if the file exists
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  
  // Check if the path is a file
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read the file and split into lines
  const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  
  // Object to store students grouped by their field
  const studentGroups = {};
  
  // Extract field names from the header
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Process each student record
  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];

    // Initialize the field group if it doesn't exist
    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }

    // Map student properties to an object
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate total number of students
  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => pre + cur.length, 0);

  // Print total number of students
  console.log(`Number of students: ${totalStudents}`);
  
  // Print number of students in each field and their names
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map(student => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;

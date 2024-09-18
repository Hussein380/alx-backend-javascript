// Import the necessary modules
const express = require('express');
const fs = require('fs');

// Initialize the Express application
const app = express();

// Define the port for the server
const PORT = 1245;

// Get the database file path from command-line arguments, or an empty string if not provided
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Function to count students from a CSV file.
 * @param {String} dataPath - The path to the CSV data file.
 * @returns {Promise} - Resolves with a string containing student information.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Check if the database path is valid
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  // Read the file from the given path
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database')); // Reject if there's an error reading the file
      return;
    }

    const reportParts = []; // Array to store the final report
    const fileLines = data.toString('utf-8').trim().split('\n'); // Split the file content by lines
    const studentGroups = {}; // Object to store students by their field of study
    const dbFieldNames = fileLines[0].split(','); // Extract column names from the first line (headers)
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1); // Remove the last field (e.g., 'field')

    // Process each student record
    fileLines.slice(1).forEach((line) => {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1); // Student properties (excluding 'field')
      const field = studentRecord[studentRecord.length - 1]; // Get the field of study

      // If the field is not already in studentGroups, initialize it
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      // Combine student property names with their values (e.g., {firstname: 'John', ...})
      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentPropValues[idx],
      ]);

      // Add the student to the appropriate group (field of study)
      studentGroups[field].push(Object.fromEntries(studentEntries));
    });

    // Count total students across all fields
    const totalStudents = Object.values(studentGroups).reduce((prev, curr) => prev + curr.length, 0);
    reportParts.push(`Number of students: ${totalStudents}`);

    // Generate report for each field of study
    Object.entries(studentGroups).forEach(([field, group]) => {
      reportParts.push(
        `Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`
      );
    });

    // Resolve the promise with the complete report
    resolve(reportParts.join('\n'));
  });
});

// Root route handler for "/"
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Route handler for "/students"
app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  // Use countStudents to generate the student report
  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report); // Append the report to the response
      const responseText = responseParts.join('\n'); // Join all parts into a single string
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length); // Set the length of the response
      res.statusCode = 200; // Success status code
      res.write(Buffer.from(responseText)); // Write the response
      res.end(); // End the response
    })
    .catch((err) => {
      // Handle any errors
      responseParts.push(err instanceof Error ? err.message : err.toString()); // Add error message to response
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200; // Still send a 200 status even if there's an error
      res.write(Buffer.from(responseText));
      res.end();
    });
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app (for testing or external usage)
module.exports = app;

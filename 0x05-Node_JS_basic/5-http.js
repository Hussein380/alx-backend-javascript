const http = require('http');
const fs = require('fs');

// Constants for server configuration
const PORT = 1245;
const HOST = 'localhost';
const DB_FILE_PATH = process.argv[2] || '';  // Database file path provided as command line argument

/**
 * Reads and processes the student CSV file asynchronously.
 * @param {String} filePath - The path to the CSV data file.
 * @returns {Promise<String>} - A Promise that resolves to the formatted student data.
 */
const processStudentData = (filePath) => {
  return new Promise((resolve, reject) => {
    // If the file path is empty, reject the promise
    if (!filePath) {
      return reject(new Error('Cannot load the database'));
    }

    // Asynchronously read the CSV file
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      // Split the file contents into lines and initialize variables
      const lines = data.trim().split('\n');
      const studentGroups = {};  // Object to hold students grouped by their field
      const headers = lines[0].split(',');  // CSV headers (first line)
      const studentProps = headers.slice(0, -1);  // All columns except the last (field)

      // Loop through each line (student record) and group students by field
      lines.slice(1).forEach((line) => {
        const record = line.split(',');
        const field = record[record.length - 1];  // The last value is the field

        // Initialize the group for this field if it doesn't exist
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        // Create a student object with key-value pairs from headers and values
        const student = studentProps.reduce((obj, prop, idx) => {
          obj[prop] = record[idx];
          return obj;
        }, {});

        // Add the student to the appropriate field group
        studentGroups[field].push(student);
      });

      // Generate the final report from the grouped data
      const totalStudents = Object.values(studentGroups).reduce((sum, group) => sum + group.length, 0);
      const report = [`Number of students: ${totalStudents}`];
      
      Object.entries(studentGroups).forEach(([field, group]) => {
        const studentNames = group.map(student => student.firstname).join(', ');
        report.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      });

      resolve(report.join('\n'));  // Resolve the promise with the formatted report
    });
  });
};

/**
 * Handles the '/' route: Displays a welcome message.
 * @param {http.IncomingMessage} req - The HTTP request object.
 * @param {http.ServerResponse} res - The HTTP response object.
 */
const handleRootRoute = (req, res) => {
  const message = 'Hello Holberton School!';
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': message.length });
  res.end(message);
};

/**
 * Handles the '/students' route: Displays student data.
 * @param {http.IncomingMessage} req - The HTTP request object.
 * @param {http.ServerResponse} res - The HTTP response object.
 */
const handleStudentsRoute = (req, res) => {
  processStudentData(DB_FILE_PATH)
    .then((report) => {
      const message = `This is the list of our students\n${report}`;
      res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': message.length });
      res.end(message);
    })
    .catch((err) => {
      const errorMessage = `This is the list of our students\n${err.message}`;
      res.writeHead(500, { 'Content-Type': 'text/plain', 'Content-Length': errorMessage.length });
      res.end(errorMessage);
    });
};

// Route handlers
const routeHandlers = {
  '/': handleRootRoute,
  '/students': handleStudentsRoute,
};

// Create the server
const app = http.createServer((req, res) => {
  const handler = routeHandlers[req.url] || handleRootRoute;  // Default to root handler
  handler(req, res);  // Call the appropriate handler
});

// Start the server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}/`);
});

module.exports = app;

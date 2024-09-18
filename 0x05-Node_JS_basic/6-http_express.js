// Import the Express module
const express = require('express');

// Create an instance of Express and assign it to the app variable
const app = express();

// Define the port for the server
const PORT = 1245;

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  // Send the response: "Hello Holberton School!"
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Export the app
module.exports = app;

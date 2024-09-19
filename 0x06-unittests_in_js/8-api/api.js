// Import the express module to create the server
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port where the server will listen
const PORT = 7865;

// Define a route for the root path
app.get('/', (_, res) => {
  // Send a response with a welcome message
  res.send('Welcome to the payment system');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  // Log a message indicating the server is running
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app instance for use in testing
module.exports = app;


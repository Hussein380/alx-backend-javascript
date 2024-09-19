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

// Define a route for /cart/:id with regex validation for :id (only numbers allowed)
app.get('/cart/:id([0-9]+)', (req, res) => {
  // Extract the cart id from the request parameters
  const cartId = req.params.id;
  // Send a response with a message that includes the cart id
  res.send(`Payment methods for cart ${cartId}`);
});

// Handle invalid cart id by responding with a 404 Not Found status for non-numeric values
app.get('/cart/*', (_, res) => {
  res.status(404).send('Not Found');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  // Log a message indicating the server is running
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app instance for use in testing
module.exports = app;


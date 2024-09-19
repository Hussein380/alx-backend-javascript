// Import the express module to create the server
const express = require('express');

// Create an Express application instance
const app = express();

// Use express.json middleware to parse JSON request bodies
app.use(express.json());

// Define the port where the server will listen
const PORT = 7865;

// Define a route for the root path
app.get('/', (_, res) => {
  // Send a response with a welcome message
  res.send('Welcome to the payment system');
});

// Define a route for /cart/:id with regex validation for :id (only numbers allowed)
app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Define a route for /available_payments that returns available payment methods
app.get('/available_payments', (_, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

// Define a POST /login route that accepts a userName in the body and returns a welcome message
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('Bad Request');
  }
  res.send(`Welcome ${userName}`);
});

// Handle invalid cart id by responding with a 404 Not Found status for non-numeric values
app.get('/cart/*', (_, res) => {
  res.status(404).send('Not Found');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app instance for use in testing
module.exports = app;


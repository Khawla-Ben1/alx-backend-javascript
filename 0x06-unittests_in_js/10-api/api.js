const express = require('express'); // Import the express module

const port = 7865; // Define the port number

const app = express(); // Create an instance of Express
app.use(express.json()); // Parse incoming requests with JSON payloads

// Define routes and handlers
app.get('/', (req, res) => res.send('Welcome to the payment system'));
app.get('/cart/:id', (req, res) => {
  if (!isNaN(req.params.id)) res.send(`Payment methods for cart ${req.params.id}`);
  else res.status(404).end();
});
// Endpoint to get available payment methods
app.get('/available_payments', (req, res) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.send(obj);
});

// Endpoint to handle login
app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

// Start the server and listen on the specified port
app.listen(port, () => console.log(`API available on localhost port ${port}`));

module.exports = app; // Export the app instance

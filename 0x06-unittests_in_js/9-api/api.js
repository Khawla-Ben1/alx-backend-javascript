const express = require('express');

const app = express();
const port = 7865; // Set the port number

app.listen(port, () => {
  // Log the server availability
  console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
  // Return a welcome message for the index page
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  // Return payment methods for a specific cart
  res.send(`Payment methods for cart ${id}`);
});

module.exports = app;

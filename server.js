const express = require('express');
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use((req, res, next) => {
  // Replace '*' with your actual frontend's domain if needed
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Define a sample API endpoint
app.get('/api/data', (req, res) => {
  const data = {
    message: 'CORS in action: You successfully fetched data from a different origin!'
  };
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

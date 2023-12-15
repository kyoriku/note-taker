// Importing the 'express' module and creating an instance of the express application
const express = require('express');
const app = express();

// Importing custom route handlers for API and HTML routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Setting the port for the server, using the environment variable PORT if available, otherwise defaulting to 3001
const PORT = process.env.PORT || 3001;

// Middleware setup for parsing JSON and URL-encoded data, and serving static files from the 'public' directory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Setting up routes for API and HTML using the imported route handlers
app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  // Logging a message when the server starts successfully
  console.log(`Server running on PORT ${PORT}`);
});
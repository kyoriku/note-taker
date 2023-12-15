// Creating an instance of the Express Router
const htmlRouter = require('express').Router();

// Importing required modules
const path = require('path');

// GET method to serve the 'notes.html' file
htmlRouter.get('/notes', (req, res) => {
  // Sending the 'notes.html' file in response
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Catch-all GET method to serve the 'index.html' file for any other route
htmlRouter.get('*', (req, res) => {
  // Sending the 'index.html' file in response for any unmatched route
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exporting the router for use in other parts of the application
module.exports = htmlRouter;
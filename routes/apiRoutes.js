// Creating an instance of the Express Router
const apiRouter = require('express').Router();

// Importing required modules
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// GET method to retrieve all notes
apiRouter.get('/', (req, res) => {
  // Reading the existing notes from the JSON file
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  // Sending the notes as a JSON response
  res.json(notes);
});

// POST method to add a new note
apiRouter.post('/', (req, res) => {
  // Extracting the new note data from the request body
  const newNote = req.body;
  // Generating a unique ID for the new note using UUID
  newNote.id = uuidv4();
  // Reading the existing notes from the JSON file
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  // Adding the new note to the existing notes
  notes.push(newNote);
  // Writing the updated notes back to the JSON file
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  // Sending the new note as a JSON response
  res.json(newNote);
});

// DELETE method to remove a note by ID
apiRouter.delete('/:id', (req, res) => {
  // Extracting the note ID from the request parameters
  const noteId = req.params.id;
  // Reading the existing notes from the JSON file
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  // Filtering out the note with the specified ID
  notes = notes.filter(note => note.id !== noteId);
  // Writing the updated notes back to the JSON file
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  // Sending a JSON response indicating successful deletion
  res.json({ message: 'Note deleted' });
});

// Exporting the router for use in other parts of the application
module.exports = apiRouter;
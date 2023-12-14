const apiRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

apiRouter.get('/', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  res.json(notes);
});

apiRouter.post('/', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  notes.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  res.json(newNote);
});

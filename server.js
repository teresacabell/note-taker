// require dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const database = require('./db/db.json')
const router = require('express').Router();

// initialize express
const PORT = process.env.PORT || 3001;
const app = express();

// link
app.use(express.static('public'));

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// notes variable
fs.readFile('db/db.json', (err, data) => {
    if (err) throw err;

    // otherwise create notes variable
    var notes = JSON.parse(data);
})

// update JSON 
function updateDB() {
    fs.writeFile('db/db.json', JSON.stringify(notes,'\t'), err => {
    if (err) throw err;
    return true;
    });
}

// html for index
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

// html for Notes
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

// displays index.html with anything after /api/notes/
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

// GET all notes
app.get('/api/notes', (req, res) => {
    res.json(database);
})

// gets note by id
app.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
});

// post new note
app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    updateDB();
    return console.log('New note created' + newNote.title);
})

// DELETE route for note by id
app.delete('/api/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    updateDB();
    console.log('Deleted ' + req.params.id + ' note');
});


// listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

module.exports = router;
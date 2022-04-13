const fs = require('fs');
const path = require('path');
const router = require('express').Router();

// notes variable
fs.readFile('db/db.json', (err, data) => {
    if (err) throw err;

    // otherwise create notes variable
    var notes = JSON.parse(data);
})

// all posts for homepage
router.get('./api/notes', (req, res) => {
    res.json(notes);
});


// POST route
router.post('/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    updateDB();
    return console.log('New note created' + newNote.title);
});

// gets note by id
router.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
});

// DELETE route for note by id
router.delete('/api/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    updateDB();
    console.log('Deleted ' + req.params.id + ' note');
});

// update JSON 
function updateDB() {
    fs.writeFile('db/db.json', JSON.stringify(notes,'\t'), err => {
    if (err) throw err;
    return true;
    });
}


module.exports = router;


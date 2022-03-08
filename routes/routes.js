const fs = require('fs');
const path = require('path');
const router = requrie('express').Router();

// all posts for homepage
router.get('/api/notes', (req, res) => {
    res.json(notes);
});

// view index.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// view notes.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})


// POST route
router.post('/api/notes', (req, res) => {
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


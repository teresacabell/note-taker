// require dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const database = require('./db/db.json')


// initialize express
const PORT = process.env.PORT || 3001;
const app = express();

// link
app.use(express.static('public'));

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html for index
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

// html for Notes
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})


// listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

module.exports = router;
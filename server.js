// require dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const router = require('express').Router();

// initialize express
const PORT = process.env.PORT || 3001;
const app = express();

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// maybe this should be __dirname?
app.use(express.static('public'));


// listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

module.exports = router;
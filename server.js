// require dependencies
const express = require('express');

// initialize express
const app = express();

// listener
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});
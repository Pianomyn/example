const express = require('express');
const path = require('path');
const app = express();

// a test route to make sure we can reach the backend
//this would normally go in a routes file
app.get('/button', (req, res) => {
res.send('Hello from Express backend!')
})

//Set the port that you want the server to run on
const port = 5000;
app.listen(port);
console.log('App is listening on port ' + port);
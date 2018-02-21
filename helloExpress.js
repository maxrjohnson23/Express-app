const express = require('express');
const app = express();

// Respond with Hello World on the homepage
app.get('/', (req, res) => res.send('Hello World!'));

// POST response
app.post('/', (req, res) => res.send('Got a POST request'));

// PUT on /user route
app.put('/user', (req, res) => res.send('Got a PUT request at /user'));

// DELETE on /user route
app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'));


app.listen(3000, () => console.log('Example app listening on port 3000!'));
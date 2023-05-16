const express = require('express');
const app = express();

app.post('/register', (req, res) => {
    res.status(201).json('test okdsadsa');
})

app.listen(4000, () => {
    console.log("Server is on port 4000..")
})
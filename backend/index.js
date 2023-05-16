const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const User = require("./models/User");
const app = express();

mongoose.connect('mongodb+srv://pranetallu:cBoaOLpwR9nyCLXI@cluster0.at3fbou.mongodb.net/');

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('MongoDB connection successful');
});

app.use(cors({
    origin: (origin, callback) => {
      // Allow requests from the specified origin
      // Replace 'http://localhost:3000' with your frontend origin
      callback(null, origin === 'http://localhost:3000');
    },
    credentials: true,
    allowedHeaders: 'Content-Type'
  })); // provides permission to backend 

app.use(express.json()); // parses reequest JSON data 

/*app.get('/', (req, res) => {
    res.status(201).json("dsadasd");
})*/

app.post('/signup', async(req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.create({
        username,
        password
    });
    res.status(201).json(userDoc);
})

app.listen(3001, () => {
    console.log("Server is on port 3001..")
})

// pranetallu
// cBoaOLpwR9nyCLXI
// mongodb+srv://pranetallu:cBoaOLpwR9nyCLXI@cluster0.at3fbou.mongodb.net/
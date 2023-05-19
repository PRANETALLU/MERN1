const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/User.js");
const Post = require("./models/Post.js");
const bcrypt = require('bcrypt'); // encrypting the password module
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

const salt = bcrypt.genSaltSync(10); // encryption
const secret = 'dsadsaewqerffrfrgrgrgbth5657';

mongoose.connect('mongodb+srv://pranetallu:cBoaOLpwR9nyCLXI@cluster0.at3fbou.mongodb.net/');

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('MongoDB connection successful');
});

app.use(cors({
  origin:'http://localhost:3000',
  credentials: true,
  allowedHeaders: 'Content-Type'
})); // provides permission to backend 

app.use(express.json()); // parses reequest JSON data 

app.use(cookieParser()); // cookie parser

/*app.get('/', (req, res) => {
    res.status(201).json("dsadasd");
})*/

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt) // Replacing password with encrypted salt code from above
    });
    res.status(201).json({ userDoc });
  }
  catch (e) {
    res.status(400).json({ e });
  }
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passAuthen = bcrypt.compareSync(password, userDoc.password); // result is true/false
  if (passAuthen) {
    //login
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) {
        throw err;
      }
      else {
        res.cookie('token', token).json({
          id: userDoc._id,
          username
        });
      }
    });
  }
  else {
    res.status(400).json("invalid username/password")
  }
})

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      throw err;
    }
    else {
      res.json(info);
    }
  })
  res.json(req.cookies);
})

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('logged out'); // setting token to empty to log out
})

app.post('/post', async (req, res) => {
  const { token } = req.cookies;
  const { title, summary, content, image } = req.body;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) {
      throw err;
    }
    else {
      try {
        const postDoc = await Post.create({
          title,
          summary,
          content,
          image,
          author: info.id
        });
        res.status(201).json({ postDoc });
      }
      catch (e) {
        res.status(400).json("error with model");
      }
    }
  })
})

app.put('/post', async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) {
      throw err;
    }
    else {
      const {id, title, summary, image, content} = req.body; 
      const postDoc = await Post.findById(id);
      if (info.id == postDoc.author) {
        await postDoc.updateOne({
          title, 
          summary, 
          content,
          image
        });
        res.status(201).json(postDoc); 
      }
      else {
        res.status(400).json("You are not the author");
      }
    }
  })
})

app.get('/post', async (req, res) => {
  try {
    const postList = await Post.find().sort({ title: 1 }).populate('author', ['username']); // populates connects with other schemas
    res.status(201).json({ postList });
  }
  catch (e) {
    res.status(400).json('Error with getting all posts')
  }
})

app.get('/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']); 
  res.json(postDoc);
})


app.listen(3001, () => {
  console.log("Server is on port 3001..")
})

// pranetallu
// cBoaOLpwR9nyCLXI
// mongodb+srv://pranetallu:cBoaOLpwR9nyCLXI@cluster0.at3fbou.mongodb.net/
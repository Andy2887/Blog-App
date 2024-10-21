const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({dest:'uploads/'});

const salt = bcrypt.genSaltSync(10);
const secret = 'sdfsheuif324324sheofhsoehfsfe';

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://blog:pQD9iAEP5vc3U1gI@cluster0.i5s9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try{
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
    
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({username});
    const passOK = bcrypt.compareSync(password, userDoc.password);
    if (passOK){
        // logged in
        jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    }
    else{
        res.status(400).json('wrong credentials');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('logged out');
});

app.post('/post', uploadMiddleware.single('file'), (req, res) => {
    res.json({files:req.file});
});

app.listen(4000);

// database user
// username: blog
// password: pQD9iAEP5vc3U1gI

// connection string: mongodb+srv://blog:pQD9iAEP5vc3U1gI@cluster0.i5s9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
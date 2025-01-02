const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const Post = require('./models/Post');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bycrypt.genSaltSync(10);
const cookieParser = require('cookie-parser');


app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI);

app.get('/test', (req, res) => {
    res.json("test ok")
});

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username, 
            password: bycrypt.hashSync(password, salt)});
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.findOne({username});
        
        // check if the password is correct
        const success = bycrypt.compareSync(password, userDoc.password);

        if (success){
            // token
            jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '1h'}, (err, token) => {
                if (err){
                    res.status(400).json(err);
                }
                else{
                    res.cookie('token', token).json("logged in");
                }
            });
        }
        else{
            res.status(400).json("wrong credentials");
        }

    }catch(e){
        res.status(400).json(e);
    }
});

// api endpoint to create new post
app.post('/create-post', async (req, res) => {
    // verify the token
    const token = req.cookies.token;
    const author = jwt.decode(token).username;
    const { title, description, content } = req.body;
    // save the post to the database
    try{
        const postDoc = await Post.create({
            title, description, content, author
        });
        res.json(postDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

// This would return the profile information of the user
app.get('/profile', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
        res.json(decoded);
    });
});

app.post('/logout', (req, res) => {
    res.clearCookie('token').json("mamba out");
});

app.listen(4000);
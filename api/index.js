const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.get('/test', (req, res) => {
    res.json("test ok")
});

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({username, password});
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

app.listen(4000);
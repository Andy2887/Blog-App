
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.post('/register', (req, res) => {
    res.json('Hello World2!');
    
});

app.listen(4000);
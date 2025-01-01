const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true, min: 4, max: 20},
    password: {type: String, required: true}
    
});


module.exports = model('User', userSchema);
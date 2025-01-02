const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, ref: 'User', required: true},
    description: {type: String, required: true},
});

module.exports = model('Post', postSchema);

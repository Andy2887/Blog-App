const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new mongoose.Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
    // reference to the author of the post
    author: {type: Schema.Types.ObjectId, ref: 'User'},
},{
    // know when the post was created and updated
    timestamps:true,
});

// add a virtual field to the schema
const PostModel = model('Post', PostSchema);

// export the model
module.exports = PostModel;
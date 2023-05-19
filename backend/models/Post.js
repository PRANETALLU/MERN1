const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    image: String,
    author:{type:Schema.Types.ObjectId, ref:'User'}
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel; 
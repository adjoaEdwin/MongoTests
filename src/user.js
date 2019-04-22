const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('../src/post');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        validate: {
            validator: (name) => name.length > 3,
            message: 'Name should be more than three characters'
        }
    },
    likes: Number,
    posts: [PostSchema]
})

const User = mongoose.model('user', UserSchema);

module.exports = User;
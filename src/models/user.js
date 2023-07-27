const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    profilePictUrl: {
        type: String,
    },
});

module.exports = mongoose.model('User', userSchema, 'users');

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'videos',
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model('Comment', commentSchema, 'comments');

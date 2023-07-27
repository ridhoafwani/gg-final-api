const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'videos',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Product', productSchema, 'products');

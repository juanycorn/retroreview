const mongoose = require('mongoose');

const { Schema } = mongoose;


const reviewSchema = new Schema({
    author: {
        type: String,
        trim: true,
    },
    content: {
    type: String,
    trim: true,
    },
    datePosted: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

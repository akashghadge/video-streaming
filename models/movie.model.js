const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// here i am creating new schema where i store users email and otp associat to it
const MovieSchema = new Schema
    ({
        name: {
            type: String,
            required: [true, 'please enter name'],
            lowercase: true,
        },
        lang: {
            type: String,
            required: [true, 'please enter lang'],
            default: 'NA'
        },
        year: {
            type: Date,
            required: [true, 'please enter year of movie']
        },
        thumbURL:
        {
            type: String,
            required: true
        },
        videoURL:
        {
            type: String,
            required: true
        },
        createdAt: { type: Date, default: Date.now }
    })
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;

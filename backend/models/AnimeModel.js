const mongoose = require('mongoose')

const Schema = mongoose.Schema

const animeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    lastEpisode: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Anime', animeSchema)
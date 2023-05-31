const express = require('express')
const Anime = require('../models/AnimeModel')
const {
    createAnime,
    getAnime,
    getAllAnime,
    deleteAnime,
    updateAnime
} = require('../controllers/AnimeController')

const router = express.Router()

router.get('/', getAllAnime)

router.get('/:id', getAnime)

router.post('/', createAnime)

router.delete('/:id', deleteAnime)

router.patch('/:id', updateAnime)
module.exports = router
const Anime = require('../models/AnimeModel')
const mongoose = require('mongoose')

const getAllAnime = async(req, res) => {
    const anime = await Anime.find({})
    res.status(200).json(anime)
}

const getAnime = async(req, res) => {
    const {id} = req.params

    const anime = await Anime.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No anime found'})
    }

    if(!anime) {
        return res.status(400).json({error: 'No anime found'})
    }

    res.status(200).json(anime)
}

const createAnime = async(req, res) => {
    
    const {title, id, image, lastEpisode, finished} = req.body
    try {
        const anime = await Anime.create({title, id, image, lastEpisode, finished})
        res.status(200).json(anime)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

const deleteAnime = async(req, res) => {
    
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'No anime found'})
    }

    const anime = await Anime.findOneAndDelete({_id: id})

    if(!anime) {
        res.status(400).json({error: 'No anime found'})
    }

    res.status(200).json(anime)
}

const updateAnime = async(req, res) => {
    
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'No anime found'})
    }

    const anime = await Anime.findOneAndUpdate({_id: id} ,{
        ...req.body
    })

    res.status(200).json(anime)
}

module.exports = {
    createAnime,
    getAnime,
    getAllAnime,
    deleteAnime,
    updateAnime
}
import axios from "axios";



export const getAnime = async (pageParam=1, genres=[],query=null, options={}) => {
    if(genres === null) {
        console.log("no genre searched")
        const response = await axios.get("https://api.consumet.org/meta/anilist/advanced-search", {params: {page:pageParam, }})
        return response.data
    }
    if(genres.length === 0) {
        console.log("no genre searched")
        const response = await axios.get("https://api.consumet.org/meta/anilist/advanced-search", {params: {page:pageParam, query: query , }})
        return response.data
    }
    
    const response = await axios.get("https://api.consumet.org/meta/anilist/advanced-search", {params: {page:pageParam, genres: `["${genres}"]` , }})
    console.log(response, "getanime") 
    return response.data
}


export const getTrendingAnime = async (pageParam=1, perPage= 5, options={}) => {

    const response = await axios.get("https://api.consumet.org/meta/anilist/trending", {params: { page:pageParam, perPage: perPage}})
    console.log(response, "gettrending")
    return response.data
}

export const getAnimeById = async (id, provider= "gogoanime", options={}) => {

    const response = await axios.get(`https://api.consumet.org/meta/anilist/info/${id}`, {params: {provider: provider}})
    console.log(response, "getepisodeids") 
    return response.data
}

export const getServers = async(id, options={}) => {
    const response = await axios.get(`https://api.consumet.org/anime/gogoanime/servers/${id}`)
    console.log(response, "getServers") 
    return response.data
}

export const getSeasonalAnime = async (pageParam=1, perPage= 5, season="SPRING", year="2023", options={}) => {

    const response = await axios.get("https://api.consumet.org/meta/anilist/trending", {params: { page:pageParam, perPage: perPage, season: season, year: year}})
    console.log(response, "gettrending")
    return response.data
}

export const getEpisode = async(id, options={}) => {
    const response = await axios.get(`https://api.consumet.org/anime/gogoanime/watch/${id}`)
    console.log(response, "getEpisode") 
    return response.data.sources
}

export const getRandomTrendingAnimeId = async (pageParam=1, options={}) => {

    const response = await axios.get("https://api.consumet.org/meta/anilist/trending", {params: { page:pageParam }})
    const randomIndex = Math.floor(Math.random() * response.data.results.length)
    console.log(response.data.results[randomIndex].id, "get random trending anime")
    return response.data.results[randomIndex].id
}

export const getTrailer = async (options={}) => {
    const id = await getRandomTrendingAnimeId()
    const response = await axios.get(`https://api.consumet.org/meta/anilist/info/${id}`)
    console.log(response.data.trailer.id, "get trailer id")
    return response.data.trailer.id
}


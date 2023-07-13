import React, { useEffect, useState } from 'react'
import { getRandomTrendingAnimeId, getTrendingAnime } from '../api/axios'
import { Carousel } from 'react-bootstrap'
import Strip from '../components/Strip'
import LoadingSpinner from '../components/LoadingSpinner'
import Billboard from '../components/Billboard'
import ReactPlayer from 'react-player/lazy'

const Home = () => {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)
  
  const getData = async () => {
    try {
        const response = await getRandomTrendingAnimeId()
        const data = response
        setAnime(data)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    getData();
    setLoading(false)
}, []);

  
  return (
    <>
    {loading ? <LoadingSpinner/> : <>
  <Billboard />
  
  <Strip />
  </>
    }
  </>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import { getTrendingAnime } from '../api/axios'
import { Carousel } from 'react-bootstrap'
import Strip from '../components/Strip'
import LoadingSpinner from '../components/LoadingSpinner'


const Home = () => {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)
  
  const getData = async () => {
    try {
        const response = await getTrendingAnime(1)
        const data = response.results
        setAnime(data)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    getData();
    setLoading(false)
}, []);

  const content = 
    anime.map((a) => {
      return (
        <Carousel.Item key={a.id} title={a.title.romaji} style={{background: `${a.color}`}}>
          <img className='d-block w-100' src={a.image} alt="anime cover pic" ></img>
          <Carousel.Caption>
            <h3>{a.title.romaji}</h3>
          </Carousel.Caption>
        </Carousel.Item> 
      )
      
    })
  return (
    <>
    {loading ? <LoadingSpinner/> : <>
  <Carousel  fade className=''>
    {content}
  </Carousel>
  
  <Strip />
  </>
    }
  </>
  )
}

export default Home
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getAnimeById } from '../api/axios'
import EpisodeList from './EpisodeList'
import { Carousel } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner'
import Bookmark from '../components/Bookmark'
const DescriptionPage = () => {
    const id = useLocation()
    const [anime, setAnime] = useState([])
    
    const [loading, setLoading] = useState(true)


    const getData = async () => {
      try {
          const response = await getAnimeById(id.state.id)
          const data = response
          setAnime(data)
          
          setLoading(false)
      } catch (error) {
        console.log(error.response)
      }
    }


    
    useEffect(() => {
      getData();
  }, []);


  return (
    
    <div>

      {loading ? <LoadingSpinner/> :
      <div>
        <Carousel className="d-flex " controls={false} indicators={false} style={{backgroundColor: `${anime.color}`}}>
          <Carousel.Item>
            <img className="w-100" src={anime.cover}/>
            <Carousel.Caption>
              <h3>{id.state.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <p dangerouslySetInnerHTML={{__html: anime.description}}></p>
        <Bookmark titles={anime.title} id={anime.id} image={anime.image}/>
        <EpisodeList/>
        </div>
  }
    </div> 
    
  )
}

export default DescriptionPage
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getAnimeById } from '../api/axios'
import { Row } from 'react-bootstrap'
import EpisodeCard from '../components/EpisodeCard'
const AnimePage = () => {
    const id = useLocation()
    const [anime, setAnime] = useState([])
    
  


    const getData = async () => {
      try {
          const response = await getAnimeById(id.state.id)
          const data = response.episodes
          setAnime(data)
          
      } catch (error) {
        console.log(error.response)
      }
    }


  console.log(anime, "page")
    
    useEffect(() => {
      getData();
  }, []);


  const content = anime.map((a, i) => {
    return (
        
        <EpisodeCard key={a.number} src={a.image} id={a.id} episode={a}> 
        </EpisodeCard>)
  })
  return (
    <div>
        <Row xs={1} md={6} className="g-0 d-flex justify-content-center">
            {content}
        </Row>
    </div>
    
  )
}

export default AnimePage
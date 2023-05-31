import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { getServers } from '../api/axios'


const EpisodeCard = React.forwardRef(({id, src, episode}, ref) => {

  const [anime, setAnime] = useState([])

  const handleClick = () => {
    console.log(anime[0])
    var win = window.open(anime[0].url, '_blank');
    win.focus();
  }

  const getData = async () => {
    try {
        const response = await getServers(id)
        const data = response
        setAnime(data)
        
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
        getData();
    }, []);

    
  const card = (
    <>
      <Card.Img variant="top" src={src} />
      <div className='card-content d-flex flex-column justify-content-between align-items-center'>
        <div>{episode.description}</div>
        <br/>
        <Card.Title>Episode {episode.number}</Card.Title>
      </div>
    </>
  )
  const content = ref
    ? 
    <Card ref={ref} className="align-items-center mx-3 my-4 h-20" onClick={()=>{handleClick()}}>{card}
    
    </Card>
      : <Card className="align-items-center mx-3 my-4 h-20"  onClick={()=>{handleClick()}}>{card}</Card>
      
  return (
    content
  );
})

export default EpisodeCard
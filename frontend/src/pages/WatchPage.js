
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getEpisode, getServers } from '../api/axios'
import { Button, Dropdown } from 'react-bootstrap'
import ReactPlayer from 'react-player/lazy'
const WatchPage = () => {
    const id = useLocation()
    var content = ''
    const [anime, setAnime] = useState([])
    const [episode, setEpisode] = useState([])
    const [vid, setVid] = useState()

    const getData = async () => {
      try {
          const response = await getEpisode(id.state.id)
          const data = response
          setAnime(data)
          
      } catch (error) {
        console.log(error.response)
      }
      
    }
    useEffect(() => {
      getData()
      
      }, []);

    const handleChange =(e) => {
      setVid(e)
      console.log(e)
    }
    
    content = anime.map((e, i) => {
      return (
        <Dropdown.Item eventKey={e.url} id={i}>{e.quality}</Dropdown.Item>
      
      )
    })

  
  
  return (
    <>

    <Dropdown onSelect={handleChange}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Quality
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {content}
      </Dropdown.Menu>
    </Dropdown>
    <ReactPlayer playing={true} controls={true} url={vid} />
    </>
    
  )
}

export default WatchPage
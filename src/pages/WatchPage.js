
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getServers } from '../api/axios'
import { Button, Dropdown } from 'react-bootstrap'
import ReactPlayer from 'react-player'
const WatchPage = () => {
    const id = useLocation()
    const [anime, setAnime] = useState([])
    const [episode, setEpisode] = useState([])


    const getData = async () => {
      try {
          const response = await getServers(id.state.id)
          const data = response
          setAnime(data)
          
      } catch (error) {
        console.log(error.response)
      }
    }
    useEffect(() => {
          getData();
      }, []);

    const handleClick = (url) => {
        
        var win = window.open(url, '_self');
        win.focus();
      }
    
   

  const servers = anime.map((a) => {
    return (
        <Dropdown.Item onClick={()=> {handleClick(a.url)}}>{a.name}</Dropdown.Item>

    )
  })
  
  console.log(anime, "watch")
  return (
    <div className='d-flex'>
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Servers
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          {servers}
        </Dropdown.Menu>
      </Dropdown>


    </div>
    
  )
}

export default WatchPage
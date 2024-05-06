import React from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import {useState, useEffect} from 'react'
const Bookmark = ({titles, id, image}) => {

  const [bookmark, setBookmark] = useState("Bookmark")

  

  const handleclick = async () => {
    const title = titles.romaji
    const lastEpisode = "last episode watch"
    const finished = false
    const anime = {title, id, image, lastEpisode, finished}
    const res = await axios.post('http://localhost:3000/api/anime' , anime)
    
    

   
  }

  return (
    <Button onClick={handleclick}>{bookmark}</Button>
  )
}

export default Bookmark
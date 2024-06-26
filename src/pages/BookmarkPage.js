import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import AnimeCard from '../components/AnimeCard'
import axios from 'axios'
import BookmarkCard from '../components/BookmarkCard'
const BookmarkPage = () => {

  const [results, setResults] = useState([])
  const [deleted, setDeleted] = useState(true)
  

  const getData = async () => {
    
    try {
        const response = await axios.get('https://anime-api-w6k0.onrender.com/api/anime/')
        const data = response.data
        console.log("response ", response)
        setResults(data)
        
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
      getData();
  }, [deleted]);

  const handleclick = async (e) => {
    const res = await axios.delete(`http://localhost:3000/api/anime/${results[e.target.value]._id}`)
    setDeleted(!deleted)
    
   
  }


  console.log(results)
  const content = results.map((anime, i) => {
    return (
      <div>
      <BookmarkCard key={anime.id} title={anime.title.romaji} src={anime.image} id={anime.id} _id={anime._id}>

      </BookmarkCard>
      <Button onClick={e => handleclick(e)} value={i}>Delete</Button>
      </div>
    )
  })

  return (

    <Row xs={1} md={6} className="g-0 d-flex justify-content-center">
      {content}
      
    </Row>
  )
}

export default BookmarkPage

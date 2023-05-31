import React from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const BookmarkCard = React.forwardRef(({id,_id, src, title}, ref) => {

  const navigate = useNavigate()

  const handleClick = () => {
    console.log(id, " click")
    navigate('/result', {state: {id: id, title: title}})
  }

  
  const card = (
    <>
      <Card.Img variant="top" src={src} />
    </>
  )
  const content = 
    <Card ref={ref} className="align-items-center mx-3 my-4 mw-100" onClick={()=>{handleClick()}}>{card}
    </Card>
      
  return (
    <div className='d-flex'>
    {content}
    
    </div>
  );
})

export default BookmarkCard
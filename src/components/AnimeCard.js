import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const AnimeCard = React.forwardRef(({id, src, title}, ref) => {

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
  const content = ref
    ? 
    <Card ref={ref} className="align-items-center mx-3 my-4 mw-100" onClick={()=>{handleClick()}}>{card}
    </Card>
      : <Card className="align-items-center mx-3 my-4"  onClick={()=>{handleClick()}}>{card}</Card>
      
  return (
    content
  );
})

export default AnimeCard
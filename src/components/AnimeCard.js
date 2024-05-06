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
      <Card.Img className="" style={{height: 19 + "vw"}} variant="top" src={src} />
    </>
  )
  const content = ref
    ? 
    <Card ref={ref} className="card align-items-center mx-3 my-4" style={{height: 367 + "px"}} onClick={()=>{handleClick()}}>{card}
      
    </Card>
      : <Card className="card align-items-center mx-3 my-4 " style={{height: 367 + "px"}} onClick={()=>{handleClick()}}>{card}</Card>
      
  return (
    <>
    <div >
    {content}
    <p className='d-flex justify-content-center'>{title}</p>
    </div>
    </>
  );
})

export default AnimeCard
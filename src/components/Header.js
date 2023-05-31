import React, { useEffect, useState } from 'react'
import {Container, Navbar, Nav, NavDropdown, Form, Button, Offcanvas, ListGroup} from 'react-bootstrap'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit =(event) => {
    event.preventDefault()

    navigate('/content', {state: {title: title}})
  }
    
  const handleClick = (e) => {
    setShow(false)
    if(e.target.innerHTML === "Popular") {
      navigate('/content', {state: {genre: null}})
    }
    else {
      navigate('/content', {state: {genre: e.target.innerHTML}})
    }
    
  }
  
  

    return (
      <>
      <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
      <Container fluid>
        <Navbar.Brand ></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home </Nav.Link>
            <Nav.Link href="/bookmarks">Bookmarks </Nav.Link>
            <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

     
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='anime'
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Offcanvas className="offcanvas" show={show} onHide={handleClose} placement='top'>
        <Offcanvas.Body className='d-flex justify-content-center'>
            <div className='popular'>
              <Button onClick={e => handleClick(e)}>Popular</Button>
              <Button onClick={e => handleClick(e)}>New</Button>
            </div>
            
            <div className='genres'>
              <Button onClick={e => handleClick(e)}>Action</Button>
              <Button onClick={e => handleClick(e)}>Adventure</Button>
              <Button onClick={e => handleClick(e)}>Comedy</Button>
              <Button onClick={e => handleClick(e)}>Drama</Button>
              <Button onClick={e => handleClick(e)}>Fantasy</Button>
              
              <Button onClick={e => handleClick(e)}>Horror</Button>
              <Button onClick={e => handleClick(e)}>Mahou Shoujo</Button>
              <Button onClick={e => handleClick(e)}>Mecha</Button>
              <Button onClick={e => handleClick(e)}>Music</Button>
              <Button onClick={e => handleClick(e)}>Mystery</Button>
              <Button onClick={e => handleClick(e)}>Psychological</Button>
            
              <Button onClick={e => handleClick(e)}>Romance</Button>
              <Button onClick={e => handleClick(e)}>Sports</Button>
              <Button onClick={e => handleClick(e)}>Sci-Fi</Button>
              <Button onClick={e => handleClick(e)}>Slice of Life</Button>
              <Button onClick={e => handleClick(e)}>Supernatural</Button>
              <Button onClick={e => handleClick(e)}>Thriller</Button>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    <div>
      <Outlet/>
    </div>
    </>
      );
}

export default Header
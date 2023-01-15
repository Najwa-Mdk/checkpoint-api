import React from 'react'
import {Navbar , Nav , Container} from 'react-bootstrap';


const NavBars = () => {
  return (
    <div>
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ws API</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBars

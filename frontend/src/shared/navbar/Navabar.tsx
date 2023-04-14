import React, { useContext, useEffect } from 'react'
import { Nav, Row, Navbar, Container, Col } from 'react-bootstrap'
import { Store } from '../../Store'

const NavbarPage = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ts Amazona</Navbar.Brand>
        </Container>
        <Nav>
          <a href="/cart" className=" nav-link">
            Cart
          </a>
          <a href="/singin" className=" nav-link">
            Sin In
          </a>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavbarPage

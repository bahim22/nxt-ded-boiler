//import Image from 'next/image'
//import Link from 'next/link'
//import utilStyles from '../styles/home.module.css'
//import styles from './layout.module.css'
import React from 'react'

function newButt() {
 return (
  <a href={href} onClick={onClick} ref={ref}>
   Click Me
  </a>
 )
}

import {ListGroup, Nav, Navbar, NavDropdown, NavItem, Form} from 'react-bootstrap'
import {Container, Offcanvas} from './frame' //error imp these 2 from react-bs

//import {BsPrefixRefForwardingComponent} from 'react-bootstrap/esm/helpers'

export function NavTsx() {
 return (
  <>
   <Navbar bg="light" expand={true}>
    <Container fluid>
     <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
     <Navbar.Toggle aria-controls="offcanvasNavbar" />
     <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
      <Offcanvas.Header closeButton>
       <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
         <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
       </Nav>
      </Offcanvas.Body>
     </Navbar.Offcanvas>
    </Container>
   </Navbar>
  </>
 )
}

/* eslint-disable  */
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
//import utilStyles from '../styles/home.module.css'
//import styles from './layout.module.css'



const MyButton = React.forwardRef(({ onClick, href }: any, ref) => {
return (
<a href={href} onClick={onClick} ref={ref}>
    Click Me
</a>
)
});

//import { ListGroup, Offcanvas, Nav, Navbar, NavDropdown, NavItem, Container, Form} from 'react-bootstrap'


//import {BsPrefixRefForwardingComponent} from 'react-bootstrap/esm/helpers'

export  function NavTopOff() {
return (
<>
<Navbar bg="light" expand={true}>
<Container fluid>
<Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
<Navbar.Toggle aria-controls="offcanvasNavbar" />
<Navbar.Offcanvas
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
    placement="end"
>
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
        <NavDropdown.Item href="#action5">
            Something else here
        </NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Offcanvas.Body>
</Navbar.Offcanvas>
</Container>
</Navbar>
</>
)
}
const SecButton = React.forwardRef(({ onClick, href }, ref) => {
return (
<a href={href} onClick={onClick} ref={ref}>
    Click Me now
</a>
)
})

import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg='dark' expand="lg" variant='dark'>
        <Navbar.Brand href="#home"><h1>TS.folio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="ml-auto"><h3>About</h3></Nav.Link>
            <Nav.Link href="#link" className="ml-auto"><h3>Projects</h3></Nav.Link>
            <Nav.Link href="#link" className="ml-auto"><h3>Contact Me</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;
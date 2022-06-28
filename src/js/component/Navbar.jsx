import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'

export const Navbar1 = () => {
  return (
    <div id="navbarDiv">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Landing Page</Navbar.Brand>
          <Nav className="float-right">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

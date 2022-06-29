import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'

export const Footer = () => {
  return (
    <div  id="footerDiv">
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand id="footer" href="#home">Copyright Israel Dail</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

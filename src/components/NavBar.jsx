import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo-nav.png";
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
import CartWidget from "../components/CartWidget";
import React from 'react';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="80"
                className="d-inline-block align-center"
              />{" "}
            </Navbar.Brand>
            <div className="logo-texto">
              TIENDAPIANO
            </div>
          <Nav className="me-auto">
           <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
              <NavDropdown.Item>Pianos de Cola</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pianos Verticales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pianos Económicos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Minipianos</NavDropdown.Item>
            </NavDropdown>
             
            <Nav.Link href="#">CONTACTO</Nav.Link>
          </Nav>
            <CartWidget  items={3}/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

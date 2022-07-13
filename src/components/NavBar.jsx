import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.svg";
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../components/CartWidget";


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Tienda Piano
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Categorias</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
            <CartWidget  items={3}/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

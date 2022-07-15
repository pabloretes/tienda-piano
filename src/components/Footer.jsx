import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import Logo from '../images/logo.png';
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
       
          <Row className="row-footer">
            <Col sm={4}>
                <div >
                    <img src={Logo} className="logo-imagen" alt="logo" />
                </div>
                <p>Siguenos en:</p>
            </Col>
            <Col sm>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Pianos</Nav.Link>
                    <Nav.Link eventKey="link-1">Pianos de Cola</Nav.Link>
                    <Nav.Link eventKey="link-2">Pianos Vertivales</Nav.Link>
                </Nav>
            </Col>
            <Col sm>Footer en Construccion Linea 1</Col>
            <Col sm>Footer en Construccion Linea 1</Col>
          </Row>
          <Row>
            <Col>© 2022 Tienda Piano - All Rights Reserved</Col>
          </Row>
       
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../images/logo.png';
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
       
          <Row className="row-footer">
            <Col sm={4}>
                <div>
                    <img src={Logo} className="logo-imagen" alt="logo" />
                </div>
                <p>Siguenos en:</p>
            </Col>
            <Col sm>
                
                   <p><a className="texto-blanco">Pianos</a></p>
                   <p><a className="texto-blanco">Pianos de Cola</a></p>
                   <p><a className="texto-blanco">Pianos Verticales</a></p>
               
            </Col>
            <Col sm>
                <p><a className="texto-blanco">Pianos</a></p>
                <p><a className="texto-blanco">Pianos de Cola</a></p>
            </Col>
            <Col sm>
            <p><a className="texto-blanco">Pianos</a></p>
                   <p><a className="texto-blanco">Pianos de Cola</a></p>
            </Col>
          </Row>
          <Row>
            <Col>© 2022 Tienda Piano - All Rights Reserved</Col>
          </Row>
       
      </div>
    </>
  );
}

export default Footer;

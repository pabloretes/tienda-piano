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
                
                 
                   
                   <p><a href="!#" className="texto-blanco">Minipianos</a></p>
                   <p><a href="!#" className="texto-blanco">Pianos Verticales</a></p>
                   <p><a href="!#" className="texto-blanco">Pianos de Cola</a></p>
                   <p><a href="!#" className="texto-blanco">Pianos Económicos</a></p>
                   
               
            </Col>
            <Col sm>
                <p><a href="!#" className="texto-blanco"><strong>Escribenos a:</strong></a></p>
                <p><a href="!#" className="texto-blanco">hola@tiendapiano.com</a></p>
            </Col>
            <Col sm>
            <p><a href="!#" className="texto-blanco"><strong>Suscribete a nuestro Newsletter</strong></a></p>
                   <p><input type="text" placeholder="Ingresa tu email"/></p>
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

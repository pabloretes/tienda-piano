import React from "react";
import ItemCount from "./ItemCount";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModeloB from "../images/ModeloB.png";
import Image from 'react-bootstrap/Image'

function ItemDetail(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
        <Row>
            <Col>
                <Image variant="top" src={ModeloB} />
            </Col>
            <Col>
            <div>
                <Modal.Title>MODELO B</Modal.Title>
                <p> Es un instrumento maravillosamente equilibrado y versátil que funciona muy bien en hogares refinados, estudios de enseñanza y lugares de tamaño medio. también está disponible como STEINWAY SPIRIO, el mejor reproductor de piano de alta resolución del mundo.</p>
            </div>
            
            <div>
                <ItemCount stock='3'/>
            </div>
            </Col>
          </Row>
           
           
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemDetail;

import React, { useState } from "react";
import "../styles/item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';
import ItemDetail from "./ItemDetail";
import Modal from 'react-bootstrap/Modal';



function Item({product}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card-style">
      <Card style={{ width: "22rem" }}>
        <Card.Img className="img-producto" variant="top" src={product.img} alt={product.img} />
        <Card.Body>
          <div className="card-subt">
            <h6>{product.categoria}</h6>
            <Card.Title>{product.marca} - {product.modelo}</Card.Title>
            
          </div>
          <div className="card-text-size">
            <Card.Text> {product.miniDescripcion}</Card.Text>
          </div>
          <div className="card-subt">
            <Card.Subtitle>USD ${product.precio}.-</Card.Subtitle>
          </div>
          <div className="button-item-detail">
            <Button className="btn-ver-detalle" variant="primary" onClick={handleShow}>Ver Detalle</Button>
          </div>
          <div>
            <Card.Footer className="text-muted"> <Badge bg="secondary">Stock: {product.stock}</Badge>{' '}</Card.Footer>
           </div>

{/* Aca va la ventana modal */}
          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{product.marca} - {product.modelo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ItemDetail key={product.id} product={product}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
          </Modal>


        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;

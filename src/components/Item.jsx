import React from "react";
import "../styles/item.css";
import Card from "react-bootstrap/Card";
import Teclas1 from "../images/teclas1.jpg";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

function Item() {
  return (
    <div className="card-style">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" src={Teclas1} />
        <Card.Body>
          <Card.Title>STEINWAY SPIRIO</Card.Title>
          <Card.Text>
            El piano de cola de concierto D-274 está presente en más del 95% de
            los grandes escenarios del mundo, donde fascina al público con su
            excelente sonido.
          </Card.Text>
          <div>
            <Button variant="primary">Ver detalle</Button>
          </div>
          <div>
            <Badge bg="secondary">Stock: 3</Badge>{' '}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;

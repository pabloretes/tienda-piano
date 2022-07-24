import React from "react";
import "../styles/item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';
import ItemDetail from "./ItemDetail";
import ModeloB from "../images/ModeloB.png";


function Item() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="card-style">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" src={ModeloB} />
        <Card.Body>
          <div className="card-subt"><Card.Subtitle>Piano de Cola Steiwey & Sons - Modelo B</Card.Subtitle></div>
          <div className="card-text-size">
            <Card.Text>
                Este magnífico piano de cola de 6 '11 "(211 cm) es a menudo llamado por los pianistas" el piano perfecto ".
            </Card.Text>
          </div>
          <div className="card-subt"><Card.Subtitle>USD 4.000.00.-</Card.Subtitle></div>
         
          <div className="button-item-detail">
            <Button className="btn-ver-detalle" variant="primary" onClick={() => setModalShow(true)}>Ver detalle</Button>
            <ItemDetail show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <div>
          <Card.Footer className="text-muted"> <Badge bg="secondary">Stock: 3</Badge>{' '}</Card.Footer>
           
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;

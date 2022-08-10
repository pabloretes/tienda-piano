import React from "react";
import "../styles/item.css";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <div className="card-style">
      <Card style={{ width: "22rem" }}>
        <Card.Img className="img-producto" variant="top" src={product.img} alt={product.img} />
        <Card.Body>
          <div className="card-subt">
            <h6>{product.categoria}</h6>
            <Card.Title>{product.marca} - {product.modelo}</Card.Title>
            <Card.Subtitle>{product.category}</Card.Subtitle>
          </div>
          <div className="card-text-size">
            <Card.Text> {product.miniDescripcion}</Card.Text>
          </div>
          <div className="card-subt">
            <Card.Subtitle>USD ${product.precio}.-</Card.Subtitle>
          </div>
          <div className="button-item-detail">
            <Link className="btn-ver-detalle" variant="primary" to={`/detail/${product.id}`}> Ver Detalle</Link>
          </div>
          <div>
            <Card.Footer className="text-muted"> <Badge bg="secondary">Stock: {product.stock}</Badge>{' '}</Card.Footer>
           </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;

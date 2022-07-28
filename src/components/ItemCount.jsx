import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/item.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ItemCount({ stock, onAdd }) {
  const [contador, setContador] = useState(1);
  
  const increment = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }  
  }

  const decrement = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }  
  }
  return (
   
  <>
  <Container>
  <Row className="justify-content-md-center">
      <p className="cantidad-card" >Cantidad <span className="texto-stock">(Hay {stock} disponibles)</span></p>
      <div className="card-style-count">
        <div className="botones-sumres">
          <button className="btn-sumres" onClick={decrement}>-</button>
          <div className="texto-contador">{contador}</div>
          <button className="btn-sumres" onClick={increment}>+</button>
        </div>
      </div>
  
      <Button className="btn-ver-detalle" variant="primary" onClick={() => onAdd(contador)}>Agregar al carrito</Button>
  </Row>
  </Container>
   </>
  );
}

export default ItemCount;

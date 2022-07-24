import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/item.css";

function ItemCount() {
  const [contador, setContador] = useState(0);
  return (
    <div className="card-style">
  
      <div className="botones-sumres">
        <p className="cantidad-card" >Cantidad: {contador}</p>
        <button onClick={() => {setContador(contador + 1);}}>SUMAR</button>
        <button onClick={() => {setContador(contador - 1);}}>RESTAR</button>
      </div>
      <Button variant="primary">Comprar</Button>
     
    </div>
  );
}

export default ItemCount;

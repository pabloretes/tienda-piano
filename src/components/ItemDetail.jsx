import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCount from './ItemCount';
import Image from 'react-bootstrap/Image';


function ItemDetail({product}) {
    const handleOnAdd = (quantity) => {
        alert(`La cantidad agregada es: ${quantity}`);
    }
  return (
    <Container>
    <Row>
        <Col>
            <Image className="img-producto" variant="top" src={product.img} alt={product.img}/>
        </Col>
        <Col>
        <div>
            <h1>{product.modelo}</h1>
            <p>{product.descripcion}</p>
        </div>
        
        <div>
            <ItemCount stock={product.stock} onAdd={handleOnAdd}/>
        </div>
        </Col>
      </Row>
       
       
    </Container>
  )
}

export default ItemDetail
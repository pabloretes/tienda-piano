import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const ItemDetail2 = ({ marca, modelo, categoria, img, descripcion }) => {
    return (
        <Container>
        <Row>
            <Col>
                <Image className="img-producto" variant="top" src={img} alt={img}/>
            </Col>
            <Col>
            <div>
                <h1>{modelo}</h1>
                <p>{descripcion}</p>
            </div>
            
            <div>
                {/* <ItemCount stock={product.stock} onAdd={handleOnAdd}/> */}
            </div>
            </Col>
          </Row>
           
           
        </Container>
    )
}

export default ItemDetail2
    
import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ItemCount from "./ItemCount";

const ItemDetail = ({ marca, modelo, category, img, descripcion, stock }) => {
    const handleOnAdd = (quantity) => {
        alert(`La cantidad agregada es: ${quantity}`);
    }
    return (
        <Container>
            <div className="item-detail">
                <Row className="row-item">
                    <Col md={6}><h4>{marca}</h4></Col>
                </Row>
                <Row className="row-item">
                    <Col sm={6}>
                        <Image className="img-producto" variant="top" src={img} alt={img}/>
                    </Col>
                    <Col  sm={5}>
                        <div>
                            <h1>{modelo}</h1>
                            <h4>{category}</h4>
                            <p>{descripcion}</p>
                        </div>
                    
                        <div>
                            <ItemCount stock={stock} onAdd={handleOnAdd}/>
                        </div>
                    </Col>
                </Row>
            </div>
           
        </Container>
    )
}

export default ItemDetail
    
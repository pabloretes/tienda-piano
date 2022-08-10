import React, { useState, useEffect } from 'react';
import ItemDetail2 from './ItemDetail2';
import { getProductById } from '../asyncMock';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { productId } = useParams();

  useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch( error => {
                console.log(error)
            })
  }, [])

    return (
    <div>
        <h1>Detalle</h1>
        <ItemDetail2 {...product} />
    </div>
  )
}

export default ItemDetailContainer
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
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
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
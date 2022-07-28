import React, { useState, useEffect } from 'react';
import { getProducts } from '../asyncMock';
import '../styles/item.css';
import ItemList from './ItemList';

function ItemListContainer() {
  const [products, setProducts] = useState ([])
  
  useEffect (() => {
      getProducts().then(products => {
        setProducts(products)
      })
  }, [])
  
  
  return (
    <>
      <div className='itemList-container'>
        <ItemList products={products}/>
      </div>
    </>
  )
}

export default ItemListContainer
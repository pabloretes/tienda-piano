import React from 'react';
import '../styles/itemListContainer.css';

function ItemListContainer(props) {
  return (
    <div className='itemList-container'> {props.greeting} </div>
  )
}

export default ItemListContainer
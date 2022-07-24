import React from 'react';
import '../styles/item.css';
import Item from './Item';

function ItemListContainer(props) {
  return (
    <div className='itemList-container'> {props.greeting} 
      <Item />
    </div>
  )
}

export default ItemListContainer
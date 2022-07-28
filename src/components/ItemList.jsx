import React from 'react'
import Item from './Item'

function ItemList({products}) {
  return (
    <ul className='horizontal'>
      {products.map((prod) => <li className='li-centrado' key={prod.id}><Item product={prod}/></li>)}
    </ul>
   
  )
}

export default ItemList
import React from 'react'
import Item from './Item'

function ItemList({products}) {
  return (
    <ul className='horizontal'>
      {products.map(prod => <li className='li-centrado'><Item key={prod.id} product={prod}/> </li>)}
    </ul>
  )
}

export default ItemList
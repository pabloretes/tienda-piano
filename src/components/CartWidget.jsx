import React from 'react';
import carrito from '../images/carrito.png';
import '../styles/NavBar.css';

function CartWidget({items}) {
  return (
    <div className='carrito-container' >
        <img src={carrito} alt="carrito" className='carrito-imagen' />
        <p className='text-items'>{items}</p>
    </div>

  )
}

export default CartWidget
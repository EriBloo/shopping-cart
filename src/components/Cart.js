import React from 'react';
import CartProduct from '../components/CartProduct';
import '../styles/Cart.scss';

const Cart = (props) => {
  return (
    <div className='cart-wrapper'>
      {Object.entries(props.cart).map((product) => {
        if (product[1] > 0) {
          return (
            <CartProduct key={product[0]} id={parseInt(product[0])} ammount={product[1]} changeProduct={props.changeProduct} />
          )
        }
        return null;
      })}
      <button type='button' className='order'>Order</button>
    </div>
  )
}

export default Cart;
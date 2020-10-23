import React from 'react';
import products from '../products';
import '../styles/CartProduct.scss'; 

const CartProduct = (props) => {
  const changeProduct = ({target}) => {
    if (target.value) {
      props.changeProduct(props.id, target.value);
    }
  }

  const incrementProduct = () => {
    const input = document.querySelector(`.cart-product-wrapper[id='${props.id}'] input`);
    input.stepUp();
    props.changeProduct(props.id, input.value);
  }

  const decrementProduct = () => {
    const input = document.querySelector(`.cart-product-wrapper[id='${props.id}'] input`);
    input.stepDown();
    props.changeProduct(props.id, input.value);
  }

  return (
    <div className='cart-product-wrapper' id={props.id}>
      <h3>{products[props.id].color} Rock</h3>
      <div className="input-wrapper">
        <button type='button' onClick={decrementProduct}>-</button>
        <input type="number" defaultValue={props.ammount} onChange={changeProduct} />
        <button type='button' onClick={incrementProduct}>+</button>
      </div>
    </div>
  )
}

export default CartProduct;

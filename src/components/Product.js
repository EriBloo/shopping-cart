import React, { useState } from 'react';
import '../styles/Product.scss';

const Product = (props) => {
  const [cart, setCart] = useState(1);

  const decrementCart = () => {
    if (cart > 1) {
      const input = document.querySelector(`.product[id='${props.product.id}'] input`);
      input.stepDown();
      setCart(cart - 1);
    }
  }

  const incrementCart = () => {
    const input = document.querySelector(`.product[id='${props.product.id}'] input`);
    input.stepUp();
    setCart(cart + 1);
  }

  const addToCart = (e) => {
    e.preventDefault();
    const value = e.target.parentNode.querySelector('.input-wrapper input').value;
    props.addProduct(props.product.id, value);
  }

  return (
    <div className="product" id={props.product.id}>
      <div className="img-wrapper">
        <img src={props.product.img} alt=""/>
      </div>
      <h3>{props.product.color}</h3>
      <form>
        <div className="input-wrapper">
          <button type='button' onClick={decrementCart}>-</button>
          <input type='number' defaultValue={cart}/>
          <button type='button' onClick={incrementCart}>+</button>
        </div>
        <button type='submit' onClick={addToCart}>Add to Cart</button>
      </form>
    </div>
  )
}

export default Product;

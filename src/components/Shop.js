import React from 'react';
import Product from '../components/Product';
import products from '../products';
import '../styles/Shop.scss';

const Shop = (props) => {
  return (
    <div className='products-wrapper'>
      {products.map(product => (
        <Product key={product.id} product={product} addProduct={props.addProduct} />
      ))}
    </div>
  )
}

export default Shop;

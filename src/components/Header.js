import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = (props) => {
  return (
    <header>
      <h1>Pet Rock Shop</h1>
      <NavLink to='/cart' activeClassName='active' className='cart'><i className="fas fa-shopping-cart"></i> {props.count}</NavLink>
    </header>
  )
}

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to='/' exact activeClassName='active' className='navlink' >Home</NavLink>
        <NavLink to='/about' activeClassName='active' className='navlink' >About</NavLink>
        <NavLink to='/shop' activeClassName='active' className='navlink' >Shop</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;

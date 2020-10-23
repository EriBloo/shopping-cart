import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import '../styles/App.scss';

const App = () => {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  const addProduct = (id, value) => {
    const productValue = cart[id] || 0;
    setCart({
      ...cart,
      [id]: productValue + parseInt(value),
    });
  }

  const changeProduct = (id, value) => {
    setCart({
      ...cart,
      [id]: parseInt(value),
    })
  }

  const countCart = () => {
    let cartSum = 0;
    for (const [, value] of Object.entries(cart)) {
      cartSum += value;
    }
    return cartSum;
  }

  useEffect(() => {
    setCount(countCart);
  }, [cart])

  return (
    <div className="App">
      <Router>
      <Header count={count}/>
      <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' render={
            routeProps => (
              <Shop {...routeProps} addProduct={addProduct} />
            )} />
          <Route path='/cart' render={
            routeProps => (
              <Cart {...routeProps} cart={cart} changeProduct={changeProduct} />
            )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import Cart from './../../containers/cart/index';
import ProductList from './../../containers/product-list/index';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './sidebar.css';

export const SideBar = (props) => {
  return (
    <Router>
    <div className="App-sidebar">
      <nav className="App-sidebar-nav">
        <Link to="/products" id="products" className="active" onClick={() => props.changeNavigation('product-list')}>Product list</Link>
        <Link to="/cart" id="cart" onClick={() => props.changeNavigation('cart')}>Cart</Link>
      </nav>
      <Route path="products" component={ProductList} />
      <Route path="cart" component={Cart} />
    </div>
    </Router>
  );
};

export default SideBar;
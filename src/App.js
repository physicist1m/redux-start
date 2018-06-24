import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';

// CSS
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {activeComponent: 'product-list'};
    this.changeNavigation = this.changeNavigation.bind(this);
  }

  changeNavigation(prop) {
    this.setState({activeComponent: prop});
    console.log(this.state.activeComponent);
    let products = document.querySelector('#products');
    let cart = document.querySelector('#cart');
    if(this.state.activeComponent === 'cart'){
      products.classList.add('active');
      cart.classList.remove('active');
    } else if (this.state.activeComponent === 'product-list'){
      products.classList.remove('active');
      cart.classList.add('active');
    }
  }

  render() {
    return (
      <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/products" onClick={() => this.changeNavigation('product-list')}><h1 className="App-title">My simple shop</h1></Link>
          <Link to="/cart" onClick={() => this.changeNavigation('cart')}><p className='counter'>Items in cart: {this.props.inCart.length}</p></Link>
          <Route path="products" component={ProductList} />
          <Route path="cart" component={Cart} />
        </header>
      </Router>
        <div className="App-wrapper">
          <SideBar changeNavigation={this.changeNavigation} activeComponent={this.state.activeComponent}/>
          {this.state.activeComponent === 'product-list' ? <ProductList/> : <Cart/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});
export default connect(mapStateToProps)(App);
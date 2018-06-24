import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addToCart} from './../../actions/cart.actions';

import './product-list.css';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  renderProducts() {
    return this.props.products.map((i, index) => (
      <div className="product_list_item" 
           key={index}
        >
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>{i.available > 0 ? 'In stock' : 'Sold out'}</p>
        {i.available > 0 
          ? <button className="add-to-cart-btn" onClick={() => this.addToCart(index)} >Add to card</button>
          : <p>Out of Stock!</p>
        }
      </div>
    ));
  }

  addToCart (id) {
    this.props.addToCart(id);
  }

  render() {
    return (<div className="App-product_list">
      {this.renderProducts()}
    </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id))
});
const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
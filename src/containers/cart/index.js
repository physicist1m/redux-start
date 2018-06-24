import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from './../../actions/cart.actions';

import './cart.css';

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  removeFromCart = id => {
    this.props.removeFromCart(id);
    this.forceUpdate();
  }

  showSummary = () => {
    return this.props.inCart.reduce( (acc, val) => {

      return acc + val.price;
    }, 0);
  }

  render() {
    return (
    <div className="App-cart">
      <ul>
        {this.props.inCart.length
          ? this.props.inCart.map( (i, index) => (
            <li key={index}>
              <p>{i.name}</p>
              <p>price: {i.price}</p>
              <input type="number" max={`${this.props.inCart[index].available}`} min="1" />
              <button className="remove-btn" onClick={ () => this.removeFromCart(index) }>X</button>
            </li>
          ))
          : 'Your cart is empty :('
        }
      </ul>
      <button onClick={() => alert(`total price is ${this.showSummary()}`)}>next</button>
    </div>
    );
  }
}
 
const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// TODO: implement combine reducer functionality
import {ADD_TO_CART} from './../actions/cart.actions';
import {GET_PRODUCT_LIST} from './../actions/products.action';
import {GET_CART_ITEMS} from './../actions/cart.actions';
import {REMOVE_FROM_CART} from './../actions/cart.actions';

const initState = {
    counter: 0,
    inCart: [],
    products: [
      {
        name: 'iPhone 4s',
        price: 200,
        available: 2
      },
      {
        name: 'Nokia 2110',
        price: 600,
        available: 0
      },
      {
        name: 'Samsung s3',
        price: 345,
        available: 2
      },
      {
        name: 'LG G2',
        price: 90,
        available: 1
      },
      {
        name: 'Nokia 9930',
        price: 250,
        available: 3
      },
      {
        name: 'iPhone X',
        price: 123,
        available: 4
      },
      {
        name: 'Meizu m9',
        price: 656,
        available: 23
      },
      {
        name: 'Sonny 9',
        price: 564,
        available: 234
      },
      {
        name: 'iPhone 6 plus',
        price: 434,
        available: 7
      },
      {
        name: 'Alcatel noname',
        price: 123,
        available: 7
      }
    ]
  };

export default (state = initState, action) => {
  switch(action.type) {
    case GET_CART_ITEMS:
      return state.inCart;
    case ADD_TO_CART: {
      let added = state.inCart.push(state.products[action.productId]);
      state.counter++;
      state.products[action.productId].available--;
      return {...state, added};
    }
    case REMOVE_FROM_CART: {
      state.inCart.splice(action.productId, 1);
      state.counter--;
      console.log(state.inCart);
      return {...state};
      }
    default:
      return state;
  }
  const productReducer = (state = initState, action) => {
    switch(action.type) {
      case GET_PRODUCT_LIST:
        return state.products;
    }
  }
  //const rootReducer = combineReducers({product: productReducer, cart: cartReducer});
};
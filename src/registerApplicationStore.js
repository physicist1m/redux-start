import {createStore} from 'redux';
import cartReducer from './reducers/index';

export default function setupStore() {
  return createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const getCartItems = () => ({type: GET_CART_ITEMS});
export const removeFromCart = id => ({type: REMOVE_FROM_CART, productId: id});
export const addToCart = id => ({type: ADD_TO_CART, productId: id});
import axios from 'axios';
import { FETCH_NEW_ARRIVALS } from './types';
import { FETCH_NEW_FEEDS } from './types';
import { FETCH_WOMEN } from './types';
import { FETCH_ONE_PRODUCT } from './types';
import { SET_SPINNER } from './types';
import { FETCH_BAG } from './types';
import { FETCH_JEWELRY } from './types';
import { FETCH_MEN } from './types';
import { FETCH_SALE } from './types';
import { FETCH_SOCK } from './types';
import { FETCH_PUFF_STUFF } from './types';
import { FETCH_SHOPPING_CART } from './types';

// CHANGE CART QTY
export const chgangeCartItemqty = (QuantyChange) => async dispatch => {
  const res = await axios.post('/api/shopify/shopping_cart/changeCartQty', QuantyChange)

  dispatch({ type: FETCH_SHOPPING_CART, payload: res.data})
}

// DELETE ONE CART ITEM
export const deleteOneCartItem = (cartId) => async dispatch => {
  const res = await axios.post('/api/shopify/shopping_cart/deleteOne', cartId)

  dispatch({ type: FETCH_SHOPPING_CART, payload: res.data})
}

// ADD TO SHOPPING CART
export const addShoppingCart = (shoppingCartData) => async dispatch => {
  const res = await axios.post('/api/shopify/shopping_cart/new', shoppingCartData)

  dispatch({ type: FETCH_SHOPPING_CART, payload: res.data})
}

// GET ALL IN SHOPPING CART
export const fetchShoppingCart = (clientId) => async dispatch => {
  const res = await axios.post('/api/shopify/shopping_cart/getall', clientId)

  dispatch({ type: FETCH_SHOPPING_CART, payload: res.data})
}


// PUFF STUFF
export const fetchPuffStuff = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/puff_stuff');

  dispatch({ type: FETCH_PUFF_STUFF, payload: res.data });
};

// SOCK
export const fetchSock = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/socks');

  dispatch({ type: FETCH_SOCK, payload: res.data });
};

// SALE
export const fetchSale = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/sales');

  dispatch({ type: FETCH_SALE, payload: res.data });
};

// MEN
export const fetchMen = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/men');

  dispatch({ type: FETCH_MEN, payload: res.data });
};

// JEWELRY
export const fetchJewelry = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/jewelry');

  dispatch({ type: FETCH_JEWELRY, payload: res.data });
};

// BAG
export const fetchBag = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/bag_accessories');

  dispatch({ type: FETCH_BAG, payload: res.data });
};

// NEW ARRIVALS
export const fetchNewArrivals = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/new_arrivals');

  dispatch({ type: FETCH_NEW_ARRIVALS, payload: res.data });
};

// WOMEN
export const fetchWomen = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/women');

  dispatch({ type: FETCH_WOMEN, payload: res.data });
};

// ONE PRODUCT
export const fetchOneProduct = (productName) => async dispatch => {
  const res = await axios.post('/api/shopify/product/id', productName);

  dispatch({ type: FETCH_ONE_PRODUCT, payload: res.data });
};

// INSTAGRAM
export const fetchNewInstagramFeeds = () => async dispatch => {
  const res = await axios.get('/api/instagram/feeds');

  dispatch({ type: FETCH_NEW_FEEDS, payload: res.data });
}

// SPINNER
export const setSpinner = (spinner) => async dispatch => {
  const spinnerState = spinner

  dispatch({ type: SET_SPINNER, payload: spinnerState });
}

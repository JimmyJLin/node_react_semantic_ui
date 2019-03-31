import axios from 'axios';
import { FETCH_NEW_ARRIVALS } from './types';
import { FETCH_NEW_FEEDS } from './types';
import { FETCH_WOMEN } from './types';
import { FETCH_ONE_PRODUCT } from './types';
import { SET_SPINNER } from './types';


export const setSpinner = (spinner) => async dispatch => {
  const spinnerState = spinner

  dispatch({ type: SET_SPINNER, payload: spinnerState });
}

export const fetchOneProduct = (productName) => async dispatch => {
  const res = await axios.post('/api/shopify/product/id', productName);

  dispatch({ type: FETCH_ONE_PRODUCT, payload: res.data });
};

export const fetchNewArrivals = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/new_arrivals');

  dispatch({ type: FETCH_NEW_ARRIVALS, payload: res.data });
};

export const fetchWomen = () => async dispatch => {
  const res = await axios.get('/api/shopify/collection/women');

  dispatch({ type: FETCH_WOMEN, payload: res.data });
};


export const fetchNewInstagramFeeds = () => async dispatch => {
  const res = await axios.get('/api/instagram/feeds');

  dispatch({ type: FETCH_NEW_FEEDS, payload: res.data });
}

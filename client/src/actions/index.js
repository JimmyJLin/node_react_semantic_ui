import axios from 'axios';
import { FETCH_NEW_ARRIVALS } from './types';
import { FETCH_NEW_FEEDS } from './types';
import { FETCH_WOMEN } from './types';


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

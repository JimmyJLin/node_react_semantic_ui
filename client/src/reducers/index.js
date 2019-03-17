import { combineReducers } from 'redux';
import newArrivalsReducer from './newArrivalReducer';
import womenReducer from './womenReducer';
import instagramReducer from './instagramReducer';
import productReducer from './productReducer';

export default combineReducers({
  newArrivals: newArrivalsReducer,
  women: womenReducer,
  instagram: instagramReducer,
  product: productReducer
});

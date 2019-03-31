import { combineReducers } from 'redux';
import newArrivalsReducer from './newArrivalReducer';
import womenReducer from './womenReducer';
import instagramReducer from './instagramReducer';
import productReducer from './productReducer';
import spinnerReducer from './spinnerReducer';

export default combineReducers({
  newArrivals: newArrivalsReducer,
  spinner: spinnerReducer,
  women: womenReducer,
  instagram: instagramReducer,
  product: productReducer
});

import { combineReducers } from 'redux';
import newArrivalsReducer from './newArrivalReducer';
import womenReducer from './womenReducer';
import instagramReducer from './instagramReducer';

export default combineReducers({
  newArrivals: newArrivalsReducer,
  women: womenReducer,
  instagram: instagramReducer
});

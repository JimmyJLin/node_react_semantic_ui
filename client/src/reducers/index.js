import { combineReducers } from 'redux';
import newArrivalsReducer from './newArrivalReducer';
import womenReducer from './womenReducer';
import instagramReducer from './instagramReducer';
import productReducer from './productReducer';
import spinnerReducer from './spinnerReducer';
import bagReducer from './bagReducer';
import jewelryReducer from './jewelryReducer';
import menReducer from './menReducer';
import saleReducer from './saleReducer';
import sockReducer from './sockReducer';
import puffStuffReducer from './puffStuffReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  newArrivals: newArrivalsReducer,
  spinner: spinnerReducer,
  women: womenReducer,
  instagram: instagramReducer,
  product: productReducer,
  bag: bagReducer,
  jewelry: jewelryReducer,
  men: menReducer,
  sale: saleReducer,
  sock: sockReducer,
  puffStuff: puffStuffReducer,
  cart: cartReducer
});

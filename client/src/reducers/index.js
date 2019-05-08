import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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
import blogReducer from './blogReducer';

const shoppingCartPersistConfig = {
  key: 'shoppingCart',
  storage: storage
}

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
  cart: persistReducer(shoppingCartPersistConfig, cartReducer),
  blogs: blogReducer
});

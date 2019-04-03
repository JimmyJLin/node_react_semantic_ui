import { FETCH_SHOPPING_CART } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_SHOPPING_CART:
      return action.payload;
    default:
      return state;
  }
}

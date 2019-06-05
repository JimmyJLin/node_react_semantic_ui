import { FETCH_SHIPPING_RATE } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_SHIPPING_RATE:
      return action.payload;
    default:
      return state;
  }
}

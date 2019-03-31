import { FETCH_SALE } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_SALE:
      return action.payload;
    default:
      return state;
  }
}

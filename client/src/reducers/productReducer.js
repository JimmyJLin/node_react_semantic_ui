import { FETCH_ONE_PRODUCT } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_ONE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}

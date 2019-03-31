import { FETCH_BAG } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_BAG:
      return action.payload;
    default:
      return state;
  }
}

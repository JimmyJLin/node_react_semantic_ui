import { FETCH_NEW_FEEDS } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_NEW_FEEDS:
      return action.payload;
    default:
      return state;
  }
}

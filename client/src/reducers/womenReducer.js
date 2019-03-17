import { FETCH_WOMEN } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_WOMEN:
      return action.payload;
    default:
      return state;
  }
}

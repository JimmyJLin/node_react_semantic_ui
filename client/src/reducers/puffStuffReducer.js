import { FETCH_PUFF_STUFF } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_PUFF_STUFF:
      return action.payload;
    default:
      return state;
  }
}

import { FETCH_SOCK } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_SOCK:
      return action.payload;
    default:
      return state;
  }
}

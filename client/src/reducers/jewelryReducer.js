import { FETCH_JEWELRY } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_JEWELRY:
      return action.payload;
    default:
      return state;
  }
}

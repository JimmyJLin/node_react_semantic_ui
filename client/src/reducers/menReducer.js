import { FETCH_MEN } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_MEN:
      return action.payload;
    default:
      return state;
  }
}

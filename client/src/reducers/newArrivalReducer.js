import { FETCH_NEW_ARRIVALS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NEW_ARRIVALS:
      return action.payload;
    default:
      return state;
  }
}

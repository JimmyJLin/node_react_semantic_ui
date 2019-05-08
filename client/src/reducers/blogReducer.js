import { FETCH_BLOG } from '../actions/types';

export default function(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_BLOG:
      return action.payload;
    default:
      return state;
  }
}

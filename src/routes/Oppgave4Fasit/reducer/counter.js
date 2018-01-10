const initialState = 0;
import {
  COUNTER
} from '../constants';
export default function counterReducer (state = initialState, action) {
  switch (action.type) {
    case COUNTER: {
      return action.payload + 1;
    }
    default:
      return state;
  }
}

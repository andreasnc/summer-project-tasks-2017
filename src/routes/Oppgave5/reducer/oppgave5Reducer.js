import { handle } from "redux-pack";
import {
  FETCH_CHARACTERS,
} from '../constants';

const initialState = {
  characters: [],
  isLoading: false
};

export default function oppgave5Reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS: {
      return handle(state, action, {
        start: state => ({...state, isLoading: true}),
        finish: state => ({...state, isLoading: false}),
        success: state => {
          // add missing code here
        },
      });
    }
    default:
      return state;
  }
}

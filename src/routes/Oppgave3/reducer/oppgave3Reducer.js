import {
  FETCH_CHARACTERS_SUCCEEDED,
} from '../constants';

// Hjelpefunksjon
function insertItem(array, item) {
  return [
    ...array,
    item
  ]
}

const initialState = [];

export default function oppgave3Reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCEEDED: {
      return [];
    }
    default:
      return state;
  }
}

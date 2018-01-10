const characters = require('../data.json');
import {
  FETCH_CHARACTERS_SUCCEEDED
} from '../constants';

export default function fetchCharacters() {
  return {
    type: FETCH_CHARACTERS_SUCCEEDED,
    payload: characters
  }
}

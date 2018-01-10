const character = require('../additional_data.json');
import {
  FETCH_ADDITIONAL_CHARACTERS_SUCCEEDED
} from '../constants';

export default function fetchAdditionalCharacter() {
  return {
    type: FETCH_ADDITIONAL_CHARACTERS_SUCCEEDED,
    payload: character
  }
}

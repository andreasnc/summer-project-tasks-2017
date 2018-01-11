import {
  FETCH_CHARACTERS
} from '../constants';
import mockApi from '../util/mockApi';

export default function fetchCharacters() {
  return {
    type: FETCH_CHARACTERS,
    promise: mockApi()
  }
}

import {
  COUNTER
} from '../constants';

export default function counter(number) {
  return {
    type: COUNTER,
    payload: number
  }
}

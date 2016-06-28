import * as types from '../constants/ActionTypes';

export function addExample(text) {
  return {
    type: types.ADD_EXAMPLE,
    text
  }
}
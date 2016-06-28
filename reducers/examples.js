import { ADD_EXAMPLE } from '../constants/ActionTypes';

const initialState = [{
  text: 'test',
  id: 0
}];

export default function examples(state = initialState, action) {
  switch (action.type) {
    case ADD_EXAMPLE:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        text: action.text
      }, ...state];

    default:
      return state;
  }
}
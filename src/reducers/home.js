import { ADD_EXAMPLE } from 'src/constants/ActionTypes';

const initialState = [
  { id: 3, text: 'test-3' },
  { id: 2, text: 'test-2' },
  { id: 1, text: 'test-1' },
  { id: 0, text: 'test-0' }
];

export default {
  examples: (state = initialState, action) => {
    switch (action.type) {
      case ADD_EXAMPLE:
        const id = (state.length === 0) ? 0 : state[0].id + 1;
        return [{
          id,
          text: action.text + '-' + id
        }, ...state];

      default:
        return state;
    }
  }
}

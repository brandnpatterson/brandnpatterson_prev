import { GET_GITHUB_INFO } from '../actions/types';

const initialState = {
  error: null,
  data: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GITHUB_INFO:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

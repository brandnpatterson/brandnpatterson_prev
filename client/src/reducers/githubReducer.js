import { FETCH_GITHUB_ERROR, FETCH_GITHUB_INFO } from '../actions/types';

const initialState = {
  error: null,
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_INFO:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_GITHUB_ERROR:
      return {
        ...state,
        error: 'Something went wrong. Please try again.'
      };
    default:
      return state;
  }
};

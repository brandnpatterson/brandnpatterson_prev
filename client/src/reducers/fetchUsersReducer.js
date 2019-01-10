import { FETCH_USERS } from '../actions/types';

const initialState = {
  data: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

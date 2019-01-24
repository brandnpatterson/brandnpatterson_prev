import {
  FETCH_CHAMPION_MASTERY,
  FETCH_ERROR,
  FETCH_SUMMONER_INFO
} from '../actions/types';

const initialState = {
  data: null,
  champions: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAMPION_MASTERY:
      return {
        ...state,
        champions: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: 'No summoner found with that name. Please try again.'
      };
    case FETCH_SUMMONER_INFO:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

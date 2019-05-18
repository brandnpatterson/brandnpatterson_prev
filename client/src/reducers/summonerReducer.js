import { GET_CHAMPION_MASTERY, GET_SUMMONER_INFO } from '../actions/types';

const initialState = {
  data: null,
  champions: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHAMPION_MASTERY:
      return {
        ...state,
        champions: action.payload
      };
    case GET_SUMMONER_INFO:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

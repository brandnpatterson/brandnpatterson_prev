import {
  GET_CHAMPION_MASTERY,
  GET_INFO_FROM_LOCAL_STORAGE,
  GET_SUMMONER_INFO
} from '../actions/types';

const initialState = {
  data: null,
  error: null,
  champions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INFO_FROM_LOCAL_STORAGE:
      return {
        ...state,
        champions: action.payload.champions,
        data: action.payload.data
      };
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

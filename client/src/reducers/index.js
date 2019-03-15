import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import summonerReducer from './summonerReducer';

export default combineReducers({
  error: errorReducer,
  summoner: summonerReducer
});

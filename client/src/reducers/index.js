import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import githubReducer from './githubReducer';
import summonerReducer from './summonerReducer';

export default combineReducers({
  error: errorReducer,
  github: githubReducer,
  summoner: summonerReducer
});

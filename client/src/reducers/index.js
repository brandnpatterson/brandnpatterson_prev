import { combineReducers } from 'redux';
import githubReducer from './githubReducer';
import summonerReducer from './summonerReducer';

export default combineReducers({
  github: githubReducer,
  summoner: summonerReducer
});

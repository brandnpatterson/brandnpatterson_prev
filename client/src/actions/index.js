import axios from 'axios';
import { FETCH_CHAMPION_MASTERY, FETCH_SUMMONER_INFO } from './types';

export const fetchChampMastery = () => dispatch => {
  axios.get('/api/v1/riot/summoner/brandybot/mastery').then(res => {
    dispatch({
      type: FETCH_CHAMPION_MASTERY,
      payload: res.data
    });
  });
};

export const fetchSummonerInfo = () => dispatch => {
  axios.get('/api/v1/riot/summoner/brandybot').then(res => {
    dispatch({
      type: FETCH_SUMMONER_INFO,
      payload: res.data
    });
  });
};

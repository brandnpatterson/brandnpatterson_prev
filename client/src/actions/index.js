import axios from 'axios';
import DOMPurify from 'dompurify';

import {
  FETCH_CHAMPION_MASTERY,
  FETCH_ERROR,
  FETCH_SUMMONER_INFO
} from './types';

const sanitized = str => DOMPurify.sanitize(str);

export const fetchChampMastery = summonerName => dispatch => {
  axios
    .get(`/api/v1/riot/summoner/${sanitized(summonerName)}/mastery`)
    .then(res => {
      dispatch({
        type: FETCH_CHAMPION_MASTERY,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.data
      });
    });
};

export const fetchSummonerInfo = summonerName => dispatch => {
  axios
    .get(`/api/v1/riot/summoner/${sanitized(summonerName)}`)
    .then(res => {
      dispatch({
        type: FETCH_SUMMONER_INFO,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.data
      });
    });
};

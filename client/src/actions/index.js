import axios from 'axios';
import DOMPurify from 'dompurify';

import {
  FETCH_CHAMPION_MASTERY,
  FETCH_ERROR,
  FETCH_SUMMONER_INFO
} from './types';

export const fetchChampMastery = summonerName => dispatch => {
  axios
    .get(`/api/v1/riot/summoner/${DOMPurify.sanitize(summonerName)}/mastery`)
    .then(response => {
      dispatch({
        type: FETCH_CHAMPION_MASTERY,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      });
    });
};

export const fetchSummonerInfo = summonerName => dispatch => {
  axios
    .get(`/api/v1/riot/summoner/${DOMPurify.sanitize(summonerName)}`)
    .then(response => {
      dispatch({
        type: FETCH_SUMMONER_INFO,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      });
    });
};

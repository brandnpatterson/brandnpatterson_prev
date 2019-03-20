import axios from 'axios';
import DOMPurify from 'dompurify';

import { GET_CHAMPION_MASTERY, GET_ERRORS, GET_SUMMONER_INFO } from './types';

// Riot
export const getChampMastery = summonerName => dispatch => {
  axios({
    method: 'get',
    url: `/api/v1/riot/summoner/${DOMPurify.sanitize(summonerName)}/mastery`
  })
    .then(response => {
      dispatch({
        type: GET_CHAMPION_MASTERY,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getSummonerInfo = summonerName => dispatch => {
  axios({
    method: 'get',
    url: `/api/v1/riot/summoner/${DOMPurify.sanitize(summonerName)}`
  })
    .then(response => {
      dispatch({
        type: GET_SUMMONER_INFO,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getInfoFromLocalStorage = () => dispatch => {
  dispatch(getChampMastery('Brandy Bot'));
  dispatch(getSummonerInfo('Brandy Bot'));
};

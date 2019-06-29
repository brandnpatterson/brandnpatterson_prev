import axios from 'axios';
import DOMPurify from 'dompurify';

export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const GET_CHAMPION_MASTERY = 'GET_CHAMPION_MASTERY';
export const GET_SUMMONER_INFO = 'GET_SUMMONER_INFO';
export const IS_FOCUSING = 'IS_FOCUSING';

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

import axios from 'axios';
import { FETCH_USERS } from './types';

export const fetchUsers = () => dispatch => {
  axios
    .get('/api/v1/users')
    .then(res => {
      dispatch({
        type: FETCH_USERS,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

import { combineReducers } from 'redux';
import fetchUsersReducer from './fetchUsersReducer';

export default combineReducers({
  users: fetchUsersReducer
});

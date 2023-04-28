import { createStore } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
  logged: false,
  userId: null,
  password: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        logged: true,
        userId: action.payload,
        password: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        logged: false,
        userId: null,
        password: null,
      };
    default:
      return state;
  }
};

export default authReducers;

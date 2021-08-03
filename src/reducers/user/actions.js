import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  CLEAR_LOGIN_MESSAGE,
} from './constants';
import axios from 'axios';

export const loginStart = () => ({
  type: LOGIN_START,
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const login = (data) => {
  return async (dispatch) => {
    dispatch(loginStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { email, password } = data;

    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth`,
        body,
        config
      );

      console.log(res.data, 'RES DATA');

      dispatch(loginSuccess(res.data));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatch(loginError(errors[0].msg));
      }
    }
  };
};

export const logOutStart = () => ({
  type: LOGOUT_START,
});
export const logOutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export const clearLoginMsg = () => ({
  type: CLEAR_LOGIN_MESSAGE,
});

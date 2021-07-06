import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CLEAR_REGISTER_MSG,
} from './constants';

import axios from 'axios';

export const registerStart = () => {
  return {
    type: REGISTER_START,
  };
};
export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};
export const registerError = (error) => {
  return {
    type: REGISTER_ERROR,
    error,
  };
};
export const register = (data) => {
  return async (dispatch) => {
    dispatch(registerStart());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { name, email, password, recaptchaToken } = data;

    const body = JSON.stringify({ name, email, password, recaptchaToken });
    console.log('BODY', body);
    console.log(`${process.env.REACT_APP_API}`);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/users`,
        body,
        config
      );

      dispatch(registerSuccess(res.data));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatch(registerError(errors[0].msg));
      }
    }
  };
};

export const clearRegisterMsg = () => {
  return {
    type: CLEAR_REGISTER_MSG,
  };
};

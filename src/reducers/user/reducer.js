import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  CLEAR_LOGIN_MESSAGE,
} from './constants';

const INITIAL_STATE = {
  isLoading: false,
  loginSuccess: '',
  loginError: '',
  isAuthenticated: false,
  token: null,
  profile: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        loginSuccess: '',
        loginError: '',
        isAuthenticated: false,
        token: null,
        profile: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginSuccess: '',
        isAuthenticated: true,
        token: action.payload.token,
        profile: action.payload.profile,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        loginError: '',
        isAuthenticated: false,
        token: null,
        profile: null,
      };
    case LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        profile: null,
      };
    case CLEAR_LOGIN_MESSAGE:
      return {
        ...state,
        isLoading: false,
        loginError: '',
      };
    default:
      return state;
  }
};

export default userReducer;

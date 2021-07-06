import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CLEAR_REGISTER_MSG,
} from './constants';

const INITIAL_STATE = {
  registerLoading: false,
  registerSuccess: '',
  registerError: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        registerLoading: true,
        registerSuccess: '',
        registerError: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        registerSuccess: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerLoading: false,
        registerError: action.error,
      };
    case CLEAR_REGISTER_MSG:
      return {
        ...state,
        registerLoading: false,
        registerSuccess: '',
        registerError: '',
      };
    default:
      return state;
  }
};

export default authReducer;

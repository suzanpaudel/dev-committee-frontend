import { combineReducers } from 'redux';

import registerReducer from './register/reducer';
import userReducer from './user/reducer';

export default combineReducers({ registerReducer, userReducer });

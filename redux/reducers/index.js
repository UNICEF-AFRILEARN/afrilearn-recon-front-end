import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import { } from 'redux-persist/lib/storage/session';

import authReducer from "./authReducer";



export default combineReducers({
  auth: authReducer,
});

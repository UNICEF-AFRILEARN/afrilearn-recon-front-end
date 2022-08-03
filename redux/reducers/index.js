import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import { } from 'redux-persist/lib/storage/session';

import authReducer from "./authReducer";
import coursesReducer from "./coursesReducer";
import { parentReducer } from "./parentReducer";
import { paymentReducer } from "./payment";
import { subjectReducer } from "./subjects";



export default combineReducers({
  auth: authReducer,
  Mycourses: coursesReducer,
  parentR: parentReducer,
  mySubject: subjectReducer,
  myPayment: paymentReducer
});

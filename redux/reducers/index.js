import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import { } from 'redux-persist/lib/storage/session';

import authReducer from "./authReducer";
import coursesReducer from "./coursesReducer";
import { parentReducer } from "./parentReducer";
import { paymentReducer } from "./paymentReducer";
import { subjectReducer } from "./subjectsReducer";
import { dashboardReducer } from './dashboardReducer';



export default combineReducers({
  auth: authReducer,
  Mycourses: coursesReducer,
  parentR: parentReducer,
  mySubject: subjectReducer,
  myPayment: paymentReducer,
  dashboard: dashboardReducer,
});

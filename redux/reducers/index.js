import { combineReducers } from "redux";
import {} from "redux-persist/lib/storage/session";

import authReducer from "./authReducer";
import coursesReducer from "./coursesReducer";
import { parentReducer } from "./parentReducer";
import { paymentReducer } from "./paymentReducer";
import { subjectReducer } from "./subjectsReducer";
import { dashboardReducer } from './dashboardReducer';
import { schoolReducer } from "./schoolReducer";

export default combineReducers({
  auth: authReducer,
  Mycourses: coursesReducer,
  parentR: parentReducer,
  mySubject: subjectReducer,
  myPayment: paymentReducer,
  dashboard: dashboardReducer,
  school: schoolReducer,
})


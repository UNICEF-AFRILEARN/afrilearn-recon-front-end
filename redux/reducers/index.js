import { combineReducers } from "redux";
import {} from "redux-persist/lib/storage/session";

import authReducer from "./authReducer";
import coursesReducer from "./coursesReducer";
import { parentReducer } from "./parentReducer";
import { paymentReducer } from "./paymentReducer";
import  subjectCourseReducer  from "./subjectReducer";
import { subjectReducer } from "./subjectsReducer";
import { dashboardReducer } from "./dashboardReducer";

export default combineReducers({
  auth: authReducer,
  Mycourses: coursesReducer,
  parentR: parentReducer,
  mySubjectCourse: subjectCourseReducer,
  mySubject: subjectReducer,
  myPayment: paymentReducer,
  dashboard: dashboardReducer,
});

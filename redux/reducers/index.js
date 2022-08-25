import { combineReducers } from "redux";
import {} from "redux-persist/lib/storage/session";

import authReducer from "./authReducer";
import coursesReducer from "./coursesReducer";
import { parentReducer } from "./parentReducer";
import { paymentReducer } from "./paymentReducer";
import { subjectsReducer } from "./subjectsReducer";
import { dashboardReducer } from './dashboardReducer';
import { schoolReducer } from "./schoolReducer";
import { examsReducer } from "./examsReducer";
import { studentClassReducer } from "./studentClass";
import { courseReducer } from "./courseReducer";
import { classesReducer } from "./classesReducer";

export default combineReducers({
  auth: authReducer,
  Mycourses: coursesReducer,
  parentR: parentReducer,
  mySubject: subjectsReducer,
  myPayment: paymentReducer,
  dashboard: dashboardReducer,
  school: schoolReducer,
  myExams: examsReducer,
  studentClass: studentClassReducer,
  singleCourse: courseReducer,
  schoolClasses: classesReducer,
})


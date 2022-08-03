import { combineReducers } from "redux";
import {} from "redux-persist/lib/storage/session";

import authReducer from "./authReducer";
import coursesReducer from "./coursesReducer";
import subjectReducer from "./subjectReducer";

export default combineReducers({
  auth: authReducer,
  Mycourses: coursesReducer,
  MySubject: subjectReducer,
});

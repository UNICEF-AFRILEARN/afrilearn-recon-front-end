import * as types from "../types";
import axios from "axios";

export const fetchSubjectsStart = () => ({
  type: types.FETCH_SUBJECT_START,
});

export const fetchSubjectsSuccess = (subject) => ({
  type: types.FETCH_SUBJECT_SUCCESS,
  payload: subject,
});

export const fetchSubjectsFail = (error) => ({
  type: types.FETCH_SUBJECT_FAIL,
  payload: error,
});

export const fetchCourseInitiate = (courseId) => {
    return function (dispatch) {
  dispatch(fetchSubjectsStart());
  axios
    .get(
      `https://afrilearn-backend-01.herokuapp.com/api/v1/courses/${courseId}/subjects`,
    )
    .then((res) => {
      dispatch(fetchSubjectsSuccess(res.data.data));
    })
    .then((err) => {
      console.log(err);
    });
}}

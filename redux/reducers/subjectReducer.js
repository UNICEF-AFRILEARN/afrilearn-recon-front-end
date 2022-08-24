import * as types from "../types";

const initialState = {
  stuTeacherSub: "",
  announcement: "",
  subject: [],
  subjectDetails: [],
  pastQuestion: [],
  pastQuestionSub: [],
  pastQuestionQue: [],
  classRequestInfo: "",
};

const subjectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SUBJECT_START:
      return {
        ...state,
      };
    case types.FETCH_SUBJECT_SUCCESS:
      return {
        ...state,
        subject: payload,
      };
    case types.FETCH_SUBJECTDETAILS_SUCCESS:
      return {
        ...state,
        subjectDetails: payload,
      };

    case types.FETCH_PASTQUESTION_SUCCESS:
      return {
        ...state,
        pastQuestion: payload,
      };
    case types.FETCH_PASTQUESTIONQUE_SUCCESS:
      return {
        ...state,
        pastQuestionQue: payload,
      };
    case types.FETCH_PASTQUESTIONSUB_SUCCESS:
      return {
        ...state,
        pastQuestionSub: payload,
      };

    case types.FETCH_STUDENTANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        announcement: payload,
      };
    case types.FETCH_STUDENTTEACHERSUB_SUCCESS:
      return {
        ...state,
        stuTeacherSub: payload,
      };
    case types.FETCH_SENDCLASSREQUEST_SUCCESS:
      return {
        ...state,
        classRequestInfo: payload,
      };
    case types.FETCH_SUBJECT_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default subjectReducer;

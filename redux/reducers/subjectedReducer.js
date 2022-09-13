import * as types from "../types";

const initialState = {
  teachSub: "",
  schcourse: [],
  comments: [],
  stuTeacherSub: "",
  announcement: "",
  topInclass: [],
  subjectDetails: [],
  pastQuestion: [],
  pastQuestionSub: [],
  pastQuestionQue: [],
  classRequestInfo: "",
  unfinishedStore: "",
  dashboardWeb: "",
  classMember: [],
  classroom: [],
  motivations: [],
  motivationItemNo: 0,
  motivationInterval: 0,
  motivateGoodPerformance: false,
};

const subjectedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SUBJECT_START:
      return {
        ...state,
      };

    case types.PAST_QUESTIONS_INPUT_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case types.FETCH_SUBJECT_SUCCESS:
      return {
        ...state,
        topInclass: payload,
      };
    case types.FETCH_Teacher_SINGLESUBJECT_SUCCESS:
      return {
        ...state,
        schcourse: payload,
      };
    case types.FETCH_Teacher_SUBJECT_SUCCESS:
      return {
        ...state,
        teachSub: payload,
      };

    case types.FETCH_MEMBERSHIP_SUCCESS:
      return {
        ...state,
        classMember: payload,
      };

    case types.FETCH_FAVOURITE_SUCCESS:
      return {
        ...state,
        favourite: payload,
      };
    case types.FETCH_CLASSROOM_SUCCESS:
      return {
        ...state,
        classroom: payload,
      };

    case types.FETCH_UNFINISHED_SUCCESS:
      return {
        ...state,
        unfinishedStore: payload,
      };

    case types.FETCH_WEB_SUCCESS:
      return {
        ...state,
        dashboardWeb: payload,
      };
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload,
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

export default subjectedReducer;

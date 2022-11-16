import * as types from '../types'

const initialState = {
  teachSub: '',
  schcourse: [],
  comments: [],
  stuTeacherSub: '',
  announcement: '',
  topInclass: [],
  subjectDetails: [],
  pastQuestion: [],
  pastQuestionSub: [],
  pastQuestionQue: [],
  classRequestInfo: '',
  unfinishedStore: '',
  dashboardWeb: '',
  classMember: [],
  classroom: [],
  answers: [],
  quizAnswers: [],
  feedUsers: [],
  follower: [],
  followings: [],
  feedSubjectAndCourse: [],
  feedPost: [],
  changeProfilePix: [],
}

const subjectedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SUBJECT_START:
      return {
        ...state,
      }

    case types.PAST_QUESTIONS_INPUT_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value,
      }
    case types.FETCH_POST_TO_FEED:
      return {
        ...state,
        feedPost: payload,
      }
    case types.FETCH_CHANGE_PROFILEPIX:
      return {
        ...state,
        changeProfilePix: payload,
      }
    case types.FETCH_SUBJECT_SUCCESS:
      return {
        ...state,
        topInclass: payload,
      }
    case types.FETCH_FEED_COURSE_SUBJECT:
      return {
        ...state,
        feedSubjectAndCourse: payload,
      }
    case types.FETCH_FEED_USERS:
      return {
        ...state,
        feedUsers: payload,
      }
    case types.POPULATE_FOLLOWING_FEEDS:
      return {
        ...state,
        followings: payload,
      }
    case types.POPULATE_FOLLOWER_FEEDS:
      return {
        ...state,
        follower: payload,
      }
    case types.POPULATE_SUBMITTED_QUIZ:
      return {
        ...state,
        quizAnswers: payload,
      }
    case types.POPULATE_SUBMITTED_ANSWER:
      return {
        ...state,
        answers: payload,
      }
    case types.FETCH_Teacher_SINGLESUBJECT_SUCCESS:
      return {
        ...state,
        schcourse: payload,
      }
    case types.FETCH_Teacher_SUBJECT_SUCCESS:
      return {
        ...state,
        teachSub: payload,
      }

    case types.FETCH_MEMBERSHIP_SUCCESS:
      return {
        ...state,
        classMember: payload,
      }

    case types.FETCH_FAVOURITE_SUCCESS:
      return {
        ...state,
        favourite: payload,
      }
    case types.FETCH_CLASSROOM_SUCCESS:
      return {
        ...state,
        classroom: payload,
      }

    case types.FETCH_UNFINISHED_SUCCESS:
      return {
        ...state,
        unfinishedStore: payload,
      }

    case types.FETCH_WEB_SUCCESS:
      return {
        ...state,
        dashboardWeb: payload,
      }
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload,
      }
    case types.FETCH_SUBJECTDETAILS_SUCCESS:
      return {
        ...state,
        subjectDetails: payload,
      }

    case types.FETCH_PASTQUESTION_SUCCESS:
      return {
        ...state,
        pastQuestion: payload,
      }
    case types.FETCH_PASTQUESTIONQUE_SUCCESS:
      return {
        ...state,
        pastQuestionQue: payload,
      }
    case types.FETCH_PASTQUESTIONSUB_SUCCESS:
      return {
        ...state,
        pastQuestionSub: payload,
      }

    case types.FETCH_STUDENTANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        announcement: payload,
      }
    case types.FETCH_STUDENTTEACHERSUB_SUCCESS:
      return {
        ...state,
        stuTeacherSub: payload,
      }
    case types.FETCH_SENDCLASSREQUEST_SUCCESS:
      return {
        ...state,
        classRequestInfo: payload,
      }
    case types.FETCH_SUBJECT_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

export default subjectedReducer

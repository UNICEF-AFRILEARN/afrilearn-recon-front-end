import * as types from "../types";

const initialState = {
  subject: [],
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

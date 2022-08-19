import * as types from '../types/exams';

const initialState = {
    exams: [],
    newExams: [],
    singleExam: [],
    error: [],
}

export const examsReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.FETCH_EXAMS_START:
            return {
                ...state
            };
        case types.FETCH_EXAMS_SUCCESS:
            return {
                ...state,
                exams: payload
            };
        case types.FETCH_EXAMS_FAIL:
            return {
                ...state,
                error: payload
            };
        case types.ADD_EXAMS_START:
            return {
                ...state
            };
        case types.ADD_EXAMS_SUCCESS:
            return {
                ...state,
                newExams: payload
            };
        case types.ADD_EXAMS_FAIL:
            return {
                ...state,
                error: payload
            };
        case types.FETCH_SINGLE_EXAM_DETAILS_START:
            return {
                ...state
            };
        case types.FETCH_SINGLE_EXAM_DETAILS_SUCCESS:
            return {
                ...state,
                singleExam: payload
            };
        case types.FETCH_SINGLE_EXAM_DETAILS_FAIL:
            return {
                ...state,
                error: payload
            };
    
        default:
            return state;
    }
}
import * as types from '../types/exams';

const initialState = {
    exams: [],
    newExams: [],
    newExamQuestion: [],
    updatedQuestion: [],
    singleExam: [],
    singleExamQuestions: [],
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
        case types.ADD_EXAMS_QUESTION_START:
            return {
                ...state
            };
        case types.ADD_EXAMS_QUESTION_SUCCESS:
            return {
                ...state,
                newExamQuestion: payload
            };
        case types.ADD_EXAMS_QUESTION_FAIL:
            return {
                error: payload
            };
        case types.UPDATE_EXAMS_QUESTION_START:
            return {
                ...state
            };
        case types.UPDATE_EXAMS_QUESTION_SUCCESS:
            return {
                ...state,
                updatedQuestion: payload
            };
        case types.UPDATE_EXAMS_QUESTION_FAIL:
            return {
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
        case types.FETCH_SINGLE_EXAM_QUESTIONS_START:
            return {
                ...state
            };
        case types.FETCH_SINGLE_EXAM_QUESTIONS_SUCCESS:
            return {
                ...state,
                singleExamQuestions: payload
            };
        case types.FETCH_SINGLE_EXAM_QUESTIONS_FAIL:
            return {
                ...state,
                error: payload
            };
    
        default:
            return state;
    }
}
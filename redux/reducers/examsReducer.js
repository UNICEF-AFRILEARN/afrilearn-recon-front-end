import * as types from '../types/exams';

const initialState = {
    exams: [],
    newExams: [],
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
    
        default:
            return state;
    }
}
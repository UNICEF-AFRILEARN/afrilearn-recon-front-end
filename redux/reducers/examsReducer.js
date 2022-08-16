import * as types from '../types/exams';

const initialState = {
    exams: [],
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
    
        default:
            return state;
    }
}
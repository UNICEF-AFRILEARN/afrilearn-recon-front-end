import * as types from '../types/studentClass';

const initialState = {
    loading: false,
    classSubjects: [],
    error: []

}

export const studentClassReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.FETCH_CLASS_SUBJECTS_START:
            return {
                loading: true,
            };
        case types.FETCH_CLASS_SUBJECTS_SUCCESS:
            return {
                loading: false,
                ...state,
                classSubjects: payload
            };
        case types.FETCH_CLASS_SUBJECTS_FAIL:
            return {
                loading: false,
                ...state,
                error: payload
            };
    
        default:
            return state;
    }
}
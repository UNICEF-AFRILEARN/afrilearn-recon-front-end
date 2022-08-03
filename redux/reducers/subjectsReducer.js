import * as types from '../types/subjects'

const initialState = {
    loading: false,

}

export const subjectReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.FECTH_SUBJECTS_START:
            return {
                ...state,
                loading: true
            };
        case types.FECTH_SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: payload,
                loading: false
            };
        case types.FECTH_SUBJECTS_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };
    
        default:
            return state;
    }

}
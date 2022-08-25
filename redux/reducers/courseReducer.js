import * as types from "../types/course";

const initialState = {
    loading: false,
    course: [],
    schoolTerms: [],
    error: [],


}

export const courseReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.FETCH_COURSE_START:
            return {
                loading: true
            };
        case types.FETCH_COURSE_SUCCESS:
            return {
                loading: false,
                course: payload
            };
        case types.FETCH_COURSE_FAIL:
            return {
                loading: false,
                error: payload
            };
        case types.FETCH_SCHOOL_TERM_START:
            return {
                loading: true
            };
        case types.FETCH_SCHOOL_TERM_SUCCESS:
            return {
                loading: false,
                schoolTerms: payload
            };
        case types.FETCH_SCHOOL_TERM_FAIL:
            return {
                loading: false,
                error: payload
            };

        default:
            return state;
    }
}


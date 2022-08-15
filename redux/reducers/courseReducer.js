import * as types from "../types/course";

const initialState = {
    loading: false,
    course: [],
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

    
        default:
            return state;
    }
}


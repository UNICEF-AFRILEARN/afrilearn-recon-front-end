
import * as types from '../types';


const initialState = {
    courses: [],
}

const coursesReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.FETCH_COURSES_START:
            return {
                ...state
            };
        case types.FETCH_COURSES_SUCCESS:
            return {
                ...state,
                course: payload
            }
        case types.FETCH_COURSES_FAIL:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default coursesReducer;

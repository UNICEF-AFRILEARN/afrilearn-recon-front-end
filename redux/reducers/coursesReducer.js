import * as types from "../types";

const initialState = {
    courses: [],
    reconLesson: [],
    unicefRecon: [],
    activities: [],
    singleLesson: [],
    lessons: {},
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
                courses: payload
            }
        case types.FETCH_COURSES_FAIL:
                return {
                    ...state,
                    error: payload
                }
        case types.FETCH_RECOMEND_COURSE_START:
                return {
                    ...state
                };
        case types.FETCH_RECOMEND_COURSE_SUCCESS:
                return {
                    ...state,
                    reconLesson: payload
                }
        case types.FETCH_RECOMEND_COURSE_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.FETCH_UNICEF_RECOMEND_START:
                return {
                    ...state
                };
        case types.FETCH_UNICEF_RECOMEND_SUCCESS:
                return {
                    ...state,
                    unicefRecon: payload
                }
        case types.FETCH_UNICEF_RECOMEND_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.FETCH_ACTIVITIES_START:
                return {
                    ...state
                };
        case types.FETCH_ACTIVITIES_SUCCESS:
                return {
                    ...state,
                    activities: payload
                }
        case types.FETCH_ACTIVITIES_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.FETCH_SINGLE_LESSON_START:
                return {
                    ...state
                };
        case types.FETCH_SINGLE_LESSON_SUCCESS:
                return {
                    ...state,
                    singleLesson: payload
                }
        case types.FETCH_SINGLE_LESSON_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.FETCH_ACTIVITIES_START:
            return {
                ...state
            };
        case types.FETCH_LESSONS_SUCCESS:
                return {
                    ...state,
                    lessons: payload
                }
        case types.FETCH_LESSONS_FAIL:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}


export default coursesReducer;

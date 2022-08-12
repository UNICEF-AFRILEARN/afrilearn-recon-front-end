import * as types from '../types/school';

const initialState = {
    newAdmin: [],
    loading: false,
    error: [],
    newTeacher: [],
    newStudent: [],
    schoolProfile: [],
}

export const schoolReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.ADD_NEW_ADMIN_START:
            return {
                loading: true,
            };
        case types.ADD_NEW_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                newAdmin: payload
            }
        case types.ADD_NEW_ADMIN_FAIL:
            return {
                ...state,
                error: payload

            }
        case types.ADD_NEW_TEACHER_START:
            return {
                loading: true,
            };
        case types.ADD_NEW_TEACHER_SUCCESS:
            return {
                ...state,
                loading: false,
                newTeacher: payload
            }
        case types.ADD_NEW_TEACHER_FAIL:
            return {
                ...state,
                error: payload

            }
        case types.ADD_NEW_STUDENT_START:
            return {
                loading: true,
            };
        case types.ADD_NEW_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                newStudent: payload
            }
        case types.ADD_NEW_STUDENT_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.FETCH_SCHOOL_PROFILE_START:
            return {
                loading: true,
            };
        case types.FETCH_SCHOOL_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                schoolProfile: payload
            }
        case types.FETCH_SCHOOL_PROFILE_FAIL:
            return {
                ...state,
                error: payload
            }
    
        default:
            return state;
    }
}
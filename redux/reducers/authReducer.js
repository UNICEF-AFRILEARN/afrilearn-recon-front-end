import * as types from "../types";

const initialState = {
    roles: [],
    classes: [],
    user: {},
    teachers: 0,
    allUsers: 0,
    registerUser: [],
}

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.LOGIN_USER_START:
            return {
                ...state
            }
        case types.LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case types.LOGIN_USER_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.REGISTER_USER_START:
                return {
                    ...state
                }
        case types.REGISTER_USER_SUCCESS:
                return {
                    ...state,
                    registerUser: payload
                }
        case types.REGISTER_USER_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.GET_ROLES_SUCCESS:
            return {
                ...state,
                roles: payload,
                classes: payload,
                students: payload,
                teachers: payload,
                numberOfClassNote: payload,
                numberOfQuizQuestions: payload,
                allUsers: payload,
              };
    
        default:
            return state;
    }
}

export default authReducer;
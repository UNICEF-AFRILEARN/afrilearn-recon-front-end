import * as types from "../types";

const initialState = {
    roles: [],
    classes: [],
    user: [],
    editTeacherProfile: [],
    teachers: 0,
    allUsers: 0,
    registerUser: [],
    students: [],
    numberOfClassNote: [],
    numberOfQuizQuestions: [],
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
              };
        case types.GOOGLE_SOCIAL_LOGIN_START:
                return {
                    ...state
                }
        case types.GOOGLE_SOCIAL_LOGIN_SUCCESS:
                return {
                    ...state,
                    googleLoggedIn: payload
                }
        case types.GOOGLE_SOCIAL_LOGIN_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.EDIT_TEACHER_PROFILE_START:
                return {
                    ...state
                }
        case types.EDIT_TEACHER_PROFILE_SUCCESS:
                return {
                    ...state,
                    editTeacherProfile: payload
                }
        case types.EDIT_TEACHER_PROFILE_FAIL:
            return {
                ...state,
                error: payload
            }

            case types.FORGOTPASSWORD_USER_START:
                return {
                    ...state,
                }
        
            case types.FORGOTPASSWORD_USER_FAIL:
                return {
                    ...state,
                    error: payload
                }
            case types.FORGOTPASSWORD_USER_SUCCESS:
                return {
                    ...state,
                    formPassword: payload
                }
                case types.CHANGEPASSWORD_USER_START:
                return {
                    ...state,
                }
        
            case types.CHANGEPASSWORD_USER_FAIL:
                return {
                    ...state,
                    error: payload
                }
            case types.CHANGEPASSWORD_USER_SUCCESS:
                return {
                    ...state,
                    changePassword: payload
                }
                default :
                return {
                    ...state
                }

    }
    
}

export default authReducer;
import * as types from "../types";

/**
 * Complete the reducer
 * Make API calls
 * Check if the redux is working from the redux dev tools....
 * 
 */

const initialState = {
    drop: false,
    searchRedirect: false,
    redirect: false,
    // location: localStorage.getItem("location"),
    chartSection: "subject",
    searchLocation: "/search",
    isAuthenticated: false,
    inClass: false,
    targetUser: null,
    role: "",
    activeEnrolledCourseId: "",
    activeCourseId: "",
    activeCourseName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    formFullName: "",
    phoneNumber: "",
    formEmail: "",
    formPassword: "",
    formConfirmPassword: "",
    referralCode: "",
    passwordMode: true,
    confirmPasswordMode: true,
    roles: [],
    classes: [],
    classLabel: "Select a Class",
    userId: "",
    user: {},
    subjectIds: [],
    subjectId: "",
    courseId: "",
    formClassId: "",
    formCourseId: "",
    address: "unknown",
    activeCoursePaidStatus: false,
    dashboardRoute: false,
    className: "",
    schoolName: "",
    students: 0,
    teachers: 0,
    numberOfClassNote: 0,
    numberOfQuizQuestions: 0,
    state: "",
    allUsers: 0,
    courseCategoryId: "",
    redirectTo: "",
    rolesLoader: false,
    authLoader: false,
    status: "online",
    users_online: [],
    actives: [],
    blogs: [],
    faculties: [],
    socialCampaign: false,
}

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.LOGIN_USER_START:
            return {
                ...state,
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
                default :
                return {
                    ...state
                }

    }
    
}

export default authReducer;
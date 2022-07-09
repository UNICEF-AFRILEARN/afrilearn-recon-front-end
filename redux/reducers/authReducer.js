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
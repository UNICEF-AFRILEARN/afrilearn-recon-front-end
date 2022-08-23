import * as types from "../types";

/**
 * Complete the reducer
 * Make API calls
 * Check if the redux is working from the redux dev tools....
 *
 */

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
    updateForm: [],
    updateClass: [],
    changePassword:"",
    socialCampaign: false,
    roles: [],
    classes: [],
    user: [],
    teachers: 0,
    allUsers: 0,
    registerUser: [],
};


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

    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        error: payload,
      };

    case types.FORGOTPASSWORD_USER_START:
      return {
        ...state,
      };

    case types.FORGOTPASSWORD_USER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case types.FORGOTPASSWORD_USER_SUCCESS:
      return {
        ...state,
        formPassword: payload,
      };
    case types.CHANGEPASSWORD_USER_START:
      return {
        ...state,
      };

    case types.CHANGEPASSWORD_USER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case types.CHANGEPASSWORD_USER_SUCCESS:
      return {
        ...state,
        changePassword: payload,
      };
    // UPDATE-PROFILE
    case types.STUDENT_EDITPROFILE_START:
      return {
        ...state,
      };
    case types.STUDENT_EDITPROFILE_SUCCESS:
      return {
        ...state,
        updateForm: payload,
      };
    case types.STUDENT_EDITPROFILE_FAIL:
      return {
        ...state,
        error: payload,
      };

    // UPDATECLASS
    case types.STUDENT_ADDCLASS_START:
      return {
        ...state,
      };
    case types.STUDENT_ADDCLASS_SUCCESS:
      return {
        ...state,
        updateClass: payload,
      };
    case types.STUDENT_ADDCLASS_FAIL:
      return {
        ...state,
        error: payload,
      };
  // CHANGE PASSWORD
  case types.STUDENT_PASSWORDCHANGE_START:
      return {
        ...state,
      };
    case types.STUDENT_PASSWORDCHANGE_SUCCESS:
      return {
        ...state,
        changePassword: payload,
      };
    case types.STUDENT_PASSWORDCHANGE_FAIL:
      return {
        ...state,
        error: payload,
      };
 
    default:
      return state;
  }
};

export default authReducer;

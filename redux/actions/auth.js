import * as types from "../types";
import axios from "axios";


export const loginUserStart = () => ({
    type: types.LOGIN_USER_START,
});

export const loginUserSuccess = (token) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: token
});

export const loginUserFail = (error) => ({
  type: types.LOGIN_USER_FAIL,
  payload: error
});

export const getRolesSuccess = (payload) => ({
  type: types.GET_ROLES_SUCCESS,
  payload,
});
// FORGOT_PASSWORD
export const forgotPasswordstart = (params) => ({
  type: types.FORGOTPASSWORD_USER_START,
  payload : params
});
export const forgotPasswordsuccess = (payload) => ({
  type: types.FORGOTPASSWORD_USER_SUCCESS,
  payload,
});
export const forgotPasswordfail = (error) => ({
  type: types.FORGOTPASSWORD_USER_SUCCESS,
  payload : error,
});

// CHANGE PASSWORD
export const changePasswordstart = (params) => ({
  type: types.FORGOTPASSWORD_USER_START,
  payload : params
});
export const changePasswordsuccess = (payload) => ({
  type: types.FORGOTPASSWORD_USER_SUCCESS,
  payload,
});
export const changePasswordfail = (error) => ({
  type: types.FORGOTPASSWORD_USER_SUCCESS,
  payload : error,
});
// CHANGE PASSWORD
export const sendChangepasswordemail = (email, password) => {

  return function (dispatch) {
      dispatch(changePasswordstart());
      axios
        .post(`https://afrilearn-backend-01.herokuapp.com/api/v1/auth/change-password`, {
          email,
          password
        })
        .then((res) => {
          console.log(" response", res.data.message);
          dispatch(changePasswordsuccess (res.data.message))
        })
        .catch((err) => dispatch(changePasswordfail(err)))
  }
}

// FORGOT PASSWORD
export const sendForgotpasswordemail = (email) => {

  return function (dispatch) {
      dispatch(forgotPasswordstart());
      axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/auth/${email}/reset_password`, {

        })

        .then((res) => {
          console.log(" response", res.data.message);
          dispatch(forgotPasswordsuccess (res.data.message))
        })
        .catch((err) => dispatch(forgotPasswordfail(err)))

  }
} 

export const registerUserStart = () => ({
  type: types.REGISTER_USER_START,

});
export const registerUserSuccess = (payload) => ({
  type: types.REGISTER_USER_SUCCESS,
  payload
});

export const registerUserFail = (error) => ({
  type: types.REGISTER_USER_FAIL,
  payload: error
});

export const googleSocialLoginStart = () => ({
  type: types.GOOGLE_SOCIAL_LOGIN_START,
});

export const googleSocialLoginSuccess = (payload) => ({
type: types.GOOGLE_SOCIAL_LOGIN_SUCCESS,
payload
});

export const googleSocialLoginFail = (error) => ({
type: types.GOOGLE_SOCIAL_LOGIN_FAIL,
payload: error
});
export const editTeacherProfileStart = () => ({
  type: types.EDIT_TEACHER_PROFILE_START,
});

export const editTeacherProfileSuccess = (payload) => ({
type: types.EDIT_TEACHER_PROFILE_SUCCESS,
payload
});

export const editTeacherProfileFail = (error) => ({
type: types.EDIT_TEACHER_PROFILE_FAIL,
payload: error
});



export const googleLoginInitiate = (token) => {
  return function (dispatch) {
      dispatch(googleSocialLoginStart())
      axios
      .post("http://localhost:5000/api/v1/api/v1/auth/social_login/google",
          {   data  },
      {
          headers: {
              "token": token
          }
      })
      .then((res) => {
              console.log("API Google login params", res.data)
              dispatch(googleSocialLoginSuccess(res.data))
          })
          .catch((error) => dispatch(googleSocialLoginFail(error)))
  }   
}
export const editTeacherProfileInitiate = (token, ) => {
  return function (dispatch) {
      dispatch(editTeacherProfileStart())
      axios
      .post("http://localhost:5000/api/v1/api/v1/auth/profile-update",
          {   data  },
      {
          headers: {
              "token": token
          }
      })
      .then((res) => {
              console.log("API Google login params", res.data)
              dispatch(editTeacherProfileSuccess(res.data))
          })
          .catch((error) => dispatch(editTeacherProfileFail(error)))
  }   
}

export const loginInitiate = (email, password) => {
  return function (dispatch) {
      dispatch(loginUserStart());
      axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/login', 
        {
          email,
          password,
        }
        )
        .then((res) => {
          console.log("login response", res.data.data);
          dispatch(loginUserSuccess(res.data.data))
        })
        .catch((err) => dispatch(loginUserFail(err)))
        // .catch((err) => dispatch(loginUserFail(err.res.data.message)))
  }
} 

export const fetchRoles = () => (dispatch) => {
  axios
    .get("https://afrilearn-backend-01.herokuapp.com/api/v1/auth/roles")
    .then((res) => {
      console.log("Data from API call ==>", res.data.data);
      dispatch(getRolesSuccess(res.data.data));
    })
    .catch((err) => {
      const erroMesage = err.message;
      console.log(err);
      //   dispatch(fetchBookFailure(erroMesage));
    });
};

export const registerUserInitiate = (
  fullName, 
  email, 
  password, 
  confirmPassword, 
  role, 
  course,
  courseId,
  phoneNumber,
  schoolName,
  courseCategoryId,
  referral
  ) =>  {
  return function (dispatch) {
      dispatch(registerUserStart())
      axios
      .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/signup',
      {   
        fullName, 
        email, 
        password, 
        confirmPassword, 
        role, 
        course,
        courseId,
        phoneNumber,
        schoolName,
        courseCategoryId,
        referral
      })
      .then((res) => {
        dispatch(registerUserSuccess(res.data.data))
        console.log("User registration API ==>", res.data.data);
      })
      .catch((err) => {
          dispatch(registerUserFail(err))
      })
  }

}

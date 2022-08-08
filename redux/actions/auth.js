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

// UPDATE-PROFILE
export const editprofileStart = (params) => ({
  type: types.STUDENT_EDITPROFILE_START,
  payload: params
});

export const editprofileSuccess = (payload) => ({
  type: types.STUDENT_EDITPROFILE_SUCCESS,
  payload,
});

export const editprofileFail = (error) => ({
  type: types.STUDENT_EDITPROFILE_FAIL,
  payload: error,
});

export const sendeditedprofileInitiate = (data, token) => {
    return function (dispatch) {
     
  dispatch(editprofileStart());
  axios
    .patch(
      `https://afrilearn-backend-01.herokuapp.com/api/v1/auth/profile-update`,
      {data},
      {
        headers:{
          'token':token
        }
      }
    )
    
    .then((res) => {
      console.log("data is collected", res.data)
      dispatch(editprofileSuccess(res.data.data));
    })
    // .then((err) => {
    //   console.log(err);
    // });
    .catch((err) => dispatch(editprofileFail(err)))
}}


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

export const loginInitiate = (email, password) => {
  return function (dispatch) {
      dispatch(loginUserStart());
      axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/login', {
          email,
          password,
        })
        .then((res) => {
          console.log("login response", res.data.data);
          dispatch(loginUserSuccess(res.data.data))
        })
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

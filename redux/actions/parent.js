import * as types from '../types/parent'
import axios from 'axios';


export const signUpChildStart = () => ({
    type: types.SIGN_UP_FOR_A_CHILD_START,
});

export const signUpChildSuccess = (payload) => ({
  type: types.SIGN_UP_FOR_A_CHILD_SUCCESS,
  payload
});

export const signUpChildFail = (error) => ({
  type: types.SIGN_UP_FOR_A_CHILD_FAIL,
  payload: error
});
export const unlinkChildStart = () => ({
    type: types.UNLINK_CHILD_ACCOUNT_START,
});

export const unlinkChildSuccess = (payload) => ({
  type: types.UNLINK_CHILD_ACCOUNT_SUCCESS,
  payload
});

export const unlinkChildFail = (error) => ({
  type: types.UNLINK_CHILD_ACCOUNT_FAIL,
  payload: error
});
export const linkChildStart = () => ({
    type: types.LINK_CHILD_ACCOUNT_START,
});

export const linkChildSuccess = (payload) => ({
  type: types.LINK_CHILD_ACCOUNT_SUCCESS,
  payload
});

export const linkChildFail = (error) => ({
  type: types.LINK_CHILD_ACCOUNT_FAIL,
  payload: error
});
export const deleteChildStart = () => ({
    type: types.DELETE_CHILD_ACCOUNT_START,
});

export const deleteChildSuccess = (payload) => ({
  type: types.DELETE_CHILD_ACCOUNT_SUCCESS,
  payload
});

export const deleteChildFail = (error) => ({
  type: types.DELETE_CHILD_ACCOUNT_FAIL,
  payload: error
});
export const fetchChildrenStart = () => ({
    type: types.FETCH_CHILDREN_START,
});

export const fetchChildrenSuccess = (payload) => ({
  type: types.FETCH_CHILDREN_SUCCESS,
  payload
});

export const fetchChildrenFail = (error) => ({
  type: types.FETCH_CHILDREN_FAIL,
  payload: error
});
export const fetchChildpastQuestionStart = () => ({
    type: types.FETCH_CHILD_PASTQUESTION_PERFORMANCE_START,
});

export const fetchChildpastQuestionSuccess = (payload) => ({
  type: types.FETCH_CHILD_PASTQUESTION_PERFORMANCE_SUCCESS,
  payload
});

export const fetchChildpastQuestionFail = (error) => ({
  type: types.FETCH_CHILD_PASTQUESTION_PERFORMANCE_FAIL,
  payload: error
});


export const signUpChildInitiate = (fullName,password,confirmPassword,email,courseId,parentId,myChildClass, token) =>  {
    return function (dispatch) {
        dispatch(signUpChildStart())
        // console.log("Hello from parent add a child API", data)
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/parents/sign-up-for-a-child',
        
            {   fullName,
                password,
                confirmPassword,
                email,
                courseId,
                parentId,
                myChildClass  
            },
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(signUpChildSuccess(res.data.data))
            console.log("Hello from parent add a child API =>", res.data.data)
        })
        .catch((err) => {
           dispatch(signUpChildFail(err))
        })
    }

}

export const fetchChildrenInitiate = (token) =>  {
    return function (dispatch) {
        dispatch(fetchChildrenStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/parents/children',
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchChildrenSuccess(res.data.data))
            console.log("Hello from parent API after call ===>")
            console.log("From parent API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(fetchChildrenFail(err))
        })
    }

}
export const unlinkChildInitiate = (userId, parentId) =>  {
    return function (dispatch) {
        dispatch(unlinkChildStart)
        axios
        .patch('https://afrilearn-backend-01.herokuapp.com/api/v1/parents/unlink-child-account',
        {
            userId,
            parentId
        })
        .then((res) => {
            dispatch(unlinkChildSuccess(res.data.data))
            console.log("Unlink child From parent API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(unlinkChildFail(err))
        })
    }

}
export const linkChildInitiate = (email, parentId) =>  {
    return function (dispatch) {
        dispatch(linkChildStart)
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/parents/add-user-as-child',
        {
            email,
            parentId
        })
        .then((res) => {
            dispatch(linkChildSuccess(res.data.data))
            console.log("Link child From parent API +++=>", res.data.data)
        })
        .catch((err) => {
            dispatch(linkChildFail(err))
        })
    }

}
export const deleteChildInitiate = (userId, parentId) =>  {
    return function (dispatch) {
        dispatch(deleteChildStart)
        axios
        .delete('https://afrilearn-backend-01.herokuapp.com/api/v1/parents/delete-child-account',
        {
            userId,
            parentId
        })
        .then((res) => {
            dispatch(deleteChildSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(deleteChildFail(err))
        })
    }

}

export const fetchChildpastQuestionInitiate = (courseId, token) =>  {
    return function (dispatch) {
        dispatch(fetchChildpastQuestionStart)
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/courses/5fff7329de0bdb47f826feb0/past-question-performance',
        {
           
        },
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchChildpastQuestionSuccess(res.data.data))
            console.log("past question From parent API &&=>", res.data.data)
        })
        .catch((err) => {
            dispatch(fetchChildpastQuestionFail(err))
        })
    }

}
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

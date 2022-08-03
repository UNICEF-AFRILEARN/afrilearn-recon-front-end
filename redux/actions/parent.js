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
           signUpChildFail(err)
        })
    }

}

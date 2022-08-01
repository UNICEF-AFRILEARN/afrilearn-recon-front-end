import * as types from '../types/parent'

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


export const signUpChildInitiate = (data) =>  {
    return function (dispatch) {
        dispatch(signUpChildStart())
        console.log("Hello from reconmendation API Top call", data)
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/recommendations',
            {   data  },
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(signUpChildSuccess(res.data.data))
            console.log("Hello from reconmendation API after call ===>")
            console.log("From reconmendation API =>", res.data.data)
        })
        .catch((err) => {
           signUpChildFail(err)
        })
    }

}

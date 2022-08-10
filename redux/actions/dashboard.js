import * as types from '../types/dashboard';
import axios from 'axios';


export const fetchUserProfileStart = () => ({
    type: types.FECTH_USER_PROFILE_START
})
export const fetchUserProfileSuccess = (profile) => ({
    type: types.FECTH_USER_PROFILE_SUCCESS,
    payload: profile
})
export const fetchUserProfileFail = (error) => ({
    type: types.FECTH_USER_PROFILE_FAIL,
    payload: error
});


export const fetchUserProfileInitiate = (userId, token) => {
    return function (dispatch) {
        dispatch(fetchUserProfileStart())
        axios
        .post("https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard",
            {   userId  },
        {
            headers: {
                "token": token
            }
        })
        .then((res) => {
                console.log("Dashboard API params", res.data)
                dispatch(fetchUserProfileSuccess(res.data))
            })
            .catch((error) => dispatch(fetchUserProfileFail(error)))
    }   
}
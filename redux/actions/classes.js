import * as types from '../types/classes';
import axios from 'axios';



export const makeAnnouncementStart = () => ({
    type: types.MAKE_ANNOUNCEMENT_START
});
export const makeAnnouncementSuccess = (payload) => ({
    type: types.MAKE_ANNOUNCEMENT_SUCCESS,
    payload
});
export const makeAnnouncementFail = (error) => ({
    type: types.MAKE_ANNOUNCEMENT_FAIL,
    payload: error
});


export const makeAnnouncementInitiate = (classId, text, token) =>  {
    return function (dispatch) {
        dispatch(makeAnnouncementStart())
        axios
        .post(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/announce`,
        {   
            text  
        },{
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(makeAnnouncementSuccess(res.data))
            console.log("From Make announcement API =>", res.data)
        })
        .catch((err) => {
            dispatch(makeAnnouncementFail(err))
        })
    }

}
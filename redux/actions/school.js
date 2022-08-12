import * as types from '../types/school';
import axios from 'axios';


export const addNewAdminStart = () => ({
    type: types.ADD_NEW_ADMIN_START
});

export const addNewAdminSuccess = (payload) = ({
    type: types.ADD_NEW_ADMIN_SUCCESS,
    payload
});

export const addNewAdminFail = (error) => ({
    type: types.ADD_NEW_ADMIN_FAIL,
    payload: error
});

export const addNewAdminInitiate = (schoollevel, subject, lesson) =>  {
    return function (dispatch) {
        dispatch(addNewAdminStart())
        axios
        .post('https://unicef-afrilearn-app.herokuapp.com/recommend',
        {   
            schoollevel,
            subject,
            lesson  
        })
        .then((res) => {
            dispatch(addNewAdminSuccess(res.data))
            console.log("Add Admin from School API ===>", res.data)
        })
        .catch((err) => {
            dispatch(addNewAdminFail(err))
        })
    }

}
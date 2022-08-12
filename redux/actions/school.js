import * as types from '../types/school';
import axios from 'axios';


export const addNewAdminStart = () => ({
    type: types.ADD_NEW_ADMIN_START
});

export const addNewAdminSuccess = (payload) => ({
    type: types.ADD_NEW_ADMIN_SUCCESS,
    payload
});

export const addNewAdminFail = (error) => ({
    type: types.ADD_NEW_ADMIN_FAIL,
    payload: error
});

export const addNewAdminInitiate = (fullName, email, password, schoolId, confirmPassword, roleDescription) =>  {
    return function (dispatch) {
        dispatch(addNewAdminStart())
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/schools/sign-up-for-admin',
        {   
            fullName,
            email,
            password,
            schoolId,
            confirmPassword,
            roleDescription
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
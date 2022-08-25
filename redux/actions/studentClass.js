import * as types from '../types/studentClass';
import axios from 'axios';


export const fetchStudentClassSubjectStart = () => ({
    type: types.FETCH_CLASS_SUBJECTS_START
});

export const fetchStudentClassSubjectSuccess = (payload) => ({
    type: types.FETCH_CLASS_SUBJECTS_SUCCESS,
    payload
});

export const fetchStudentClassSubjectFail = (error) => ({
    type: types.FETCH_CLASS_SUBJECTS_FAIL,
    payload: error
});


export const fetchStudentClassSubjectInitiate = (classId) =>  {
    return function (dispatch) {
        dispatch(fetchStudentClassSubjectStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/subjects`
        )
        .then((res) => {
            dispatch(fetchStudentClassSubjectSuccess(res.data))
            console.log("Hello from Class subjects API ===>", res.data)
        })
        .catch((err) => {
            dispatch(fetchStudentClassSubjectFail(err))
        })
    }

}

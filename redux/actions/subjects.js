import * as types from '../types/subjects';
import axios from 'axios';


export const fetchSubjectsStart = () => ({
    type: types.FECTH_SUBJECTS_START,
});

export const fetchSubjectsSuccess = (payload) => ({
  type: types.FECTH_SUBJECTS_SUCCESS,
  payload
});

export const fetchSubjectsFail = (error) => ({
  type: types.FECTH_SUBJECTS_FAIL,
  payload: error
});


export const fetchSubjectsInitiate = () =>  {
    return function (dispatch) {
        dispatch(fetchSubjectsStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/subjects')
        .then((res) => {
            dispatch(fetchSubjectsSuccess(res.data.data))
            console.log("Hello from subjects API after call ===>")
            console.log("From subjects API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(fetchSubjectsFail(err))
        })
    }

}
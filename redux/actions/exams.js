import * as types from '../types/exams';
import axios from 'axios';


export const fetchExamsStart = () => ({
    type: types.FETCH_EXAMS_START
})

export const fetchExamsSuccess = (payload) => ({
    type: types.FETCH_EXAMS_SUCCESS,
    payload
});

export const fetchExamsFail = (error) => ({
    type: types.FETCH_EXAMS_FAIL,
    payload: error
});
export const addExamsStart = () => ({
    type: types.ADD_EXAMS_START
})

export const addExamsSuccess = (payload) => ({
    type: types.ADD_EXAMS_SUCCESS,
    payload
});

export const addExamsFail = (error) => ({
    type: types.ADD_EXAMS_FAIL,
    payload: error
});


export const fetchExamsInitiate = (token) =>  {
    return function (dispatch) {
        dispatch(fetchExamsStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/exams/exam',
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchExamsSuccess(res.data.data))
            console.log("From fetch Exams API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(fetchExamsFail(err))
        })
    }

}
export const addExamsInitiate = (token) =>  {
    return function (dispatch) {
        dispatch(fetchExamsStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/exams/exam',
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchExamsSuccess(res.data.data))
            console.log("From fetch Exams API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(fetchExamsFail(err))
        })
    }

}
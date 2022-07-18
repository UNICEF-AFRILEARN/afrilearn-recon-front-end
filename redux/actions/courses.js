import * as types from '../types';
import axios from 'axios';

export const fetchCoursesStart = () => ({
    type: types.FETCH_COURSES_START
});

export const fetchCoursesSuccess = (course) => ({
    type: types.FETCH_COURSES_SUCCESS,
    payload: course
})

export const fetchCoursesFail = (error) => ({
    type: types.FETCH_COURSES_FAIL,
    payload: error
});

export const fetchCourseInitiate = () =>  {
    return function (dispatch) {
        dispatch(fetchCoursesStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/courses')
        .then((res) => {
            console.log("Hello from courses API")
            console.log("From Courses API =>", res)
            dispatch(fetchCoursesSuccess(res))
        })
        .then((err) => {
            // console.log(err.data?.message)
        } )
    }

    // dispatch(fetchCoursesStart)
    // axios
    // .get('https://afrilearn-backend-01.herokuapp.com/api/v1/courses')
    // .then((res) => {
    //     console.log("Hello from courses API")
    //     console.log("From Courses API =>", res)
    //     dispatch(fetchCoursesSuccess(res))
    // })
    // .then((err) => {
    //     console.log(err.data.message)
    // } )
}
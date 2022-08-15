import * as types from '../types/course';
import axios from 'axios';

export const fetchCourseStart = () => ({
    type: types.FETCH_COURSE_START
});

export const fetchCourseSuccess = (payload) => ({
    type: types.FETCH_COURSE_SUCCESS,
    payload
})

export const fetchCourseFail = (error) => ({
    type: types.FETCH_COURSE_FAIL,
    payload: error
});


export const fetchCourseInitiate = (courseId) =>  {
    return function (dispatch) {
        dispatch(fetchCourseStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/courses/${courseId}`)
        // .get('http://localhost:5000/api/v1/courses')
        .then((res) => {
            // console.log("Hello from courses API")
            console.log("From Course API =>", res.data)
            dispatch(fetchCourseSuccess(res))
        })
        .catch((err) => {
            dispatch(fetchCourseFail(err))
        } )
    }

}
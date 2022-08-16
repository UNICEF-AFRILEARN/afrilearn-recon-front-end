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


export const getCourseInitiate = (classId) =>  {
    console.log("courseId from courses API", classId)
    return function (dispatch) {
        dispatch(fetchCourseStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/courses/${classId}`)
        .then((res) => {
            console.log("From Course API =>", res.data.data)
            dispatch(fetchCourseSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(fetchCourseFail(err))
        } )
    }

}
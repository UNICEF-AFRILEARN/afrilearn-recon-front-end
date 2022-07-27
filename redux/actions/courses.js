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
export const fetchRecoLessonStart = () => ({
    type: types.FETCH_RECOMEND_COURSE_START
});
export const fetchRecoLessonSuccess = (payload) => ({
    type: types.FETCH_RECOMEND_COURSE_SUCCESS,
    payload
});
export const fetchRecoLessonFail = (error) => ({
    type: types.FETCH_RECOMEND_COURSE_FAIL,
    payload: error
});
export const fetchUnicefRecoStart = () => ({
    type: types.FETCH_UNICEF_RECOMEND_START
});
export const fetchUnicefRecoSuccess = (payload) => ({
    type: types.FETCH_UNICEF_RECOMEND_SUCCESS,
    payload
});
export const fetchUnicefRecoFail = (error) => ({
    type: types.FETCH_UNICEF_RECOMEND_FAIL,
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
        .catch((err) => {
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

export const fetchReconLessonInitiate = (userId, token) =>  {
    return function (dispatch) {
        dispatch(fetchRecoLessonStart())
        console.log("Hello from reconmendation API Top call", userId)
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/recommendations',
            {   userId  },
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchRecoLessonSuccess(res.data.data))
            console.log("Hello from reconmendation API after call ===>")
            console.log("From reconmendation API =>", res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

}

export const fetchUnicefReconInitiate = (schoollevel, subject, lesson) =>  {
    return function (dispatch) {
        dispatch(fetchUnicefRecoStart())
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/recommendations',
        {   
            schoollevel,
            subject,
            lesson  
        })
        .then((res) => {
            dispatch(fetchUnicefRecoSuccess(res))
            console.log("Hello from UNICEF reconmendation API after call ===>")
            console.log("From UNICEF reconmendation API =>", res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

}
import * as types from '../types/dashboard';
import axios from 'axios';


export const fetchUserProfileStart = () => ({
    type: types.FECTH_USER_PROFILE_START
})
export const fetchUserProfileSuccess = (profile) => ({
    type: types.FECTH_USER_PROFILE_SUCCESS,
    payload: profile
})
export const fetchUserProfileFail = (error) => ({
    type: types.FECTH_USER_PROFILE_FAIL,
    payload: error
});
export const fetchUnfinishedVideoStart = () => ({
    type: types.FECTH_UNFINISHED_VIDEO_START
})
export const fetchUnfinishedVideoSuccess = (payload) => ({
    type: types.FECTH_UNFINISHED_VIDEO_SUCCESS,
    payload
})
export const fetchUnfinishedVideoFail = (error) => ({
    type: types.FECTH_UNFINISHED_VIDEO_FAIL,
    payload: error
});
export const fetchStudentPerformanceStart = () => ({
    type: types.FETCH_STUDENT_PERFORMANCE_START
})
export const fetchStudentPerformanceSuccess = (payload) => ({
    type: types.FETCH_STUDENT_PERFORMANCE_SUCCESS,
    payload
})
export const fetchStudentPerformanceFail = (error) => ({
    type: types.FETCH_STUDENT_PERFORMANCE_FAIL,
    payload: error
});


export const fetchUserProfileInitiate = (userId, token) => {
    return function (dispatch) {
        dispatch(fetchUserProfileStart())
        axios
        .post("https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard",
            {   userId  },
        {
            headers: {
                "token": token
            }
        })
        .then((res) => {
                console.log("Dashboard API params", res.data)
                dispatch(fetchUserProfileSuccess(res.data))
            })
            .catch((error) => dispatch(fetchUserProfileFail(error)))
    }   
}


export const fetchUnfinishedVideoInitiate = (token) =>  {
    return function (dispatch) {
        dispatch(fetchUnfinishedVideoStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/unfinishedVideos',
        {
            headers: {
                "token": token
            }
        })
        .then((res) => {
            dispatch(fetchUnfinishedVideoSuccess(res.data))
            console.log("Hello from unfinished video API ====>", res.data)
        })
        .catch((err) => {
            dispatch(fetchUnfinishedVideoFail(err))
        })
    }

}



export const fetchStudentPerformanceInitiate = (userId, token) => {
    return function (dispatch) {
        dispatch(fetchStudentPerformanceStart())
        axios
        .post("https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/student-performance-summary",
            {   userId  },
        {
            headers: {
                "token": token
            }
        })
        .then((res) => {
                console.log("Dashboard API params", res.data)
                dispatch(fetchStudentPerformanceSuccess(res.data))
            })
            .catch((error) => dispatch(fetchStudentPerformanceFail(error)))
    }   
}
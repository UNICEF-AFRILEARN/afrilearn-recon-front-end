import * as types from '../types/dashboard';


const initialState = {
    userProfile: [],
    unfinishedVideos: [],
    studentPerformance: [],
    children: [],
}


export const dashboardReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.FECTH_USER_PROFILE_START:
            return {
                ...state,
                loading: true
            };
        case types.FECTH_USER_PROFILE_SUCCESS:
            return {
                ...state,
                userProfile: payload,
                loading: false
            };
        case types.FECTH_USER_PROFILE_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case types.FECTH_UNFINISHED_VIDEO_START:
            return {
                ...state,
                loading: true
            };
        case types.FECTH_UNFINISHED_VIDEO_SUCCESS:
            return {
                ...state,
                unfinishedVideos: payload,
                loading: false
            };
        case types.FECTH_UNFINISHED_VIDEO_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case types.FETCH_STUDENT_PERFORMANCE_START:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_STUDENT_PERFORMANCE_SUCCESS:
            return {
                ...state,
                studentPerformance: payload,
                loading: false
            };
        case types.FETCH_STUDENT_PERFORMANCE_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case types.FECTH_PARENT_CHILDREN_START:
            return {
                ...state,
                loading: true
            };
        case types.FECTH_PARENT_CHILDREN_SUCCESS:
            return {
                ...state,
                children: payload,
                loading: false
            };
        case types.FECTH_PARENT_CHILDREN_FAIL:
            return {
                error: payload,
                loading: false
            };
    
        default:
            return state;
    }

}
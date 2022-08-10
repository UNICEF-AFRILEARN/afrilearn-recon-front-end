import * as types from '../types/dashboard';


const initialState = {
    userProfile: [],
    unfinishedVideos: [],
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
    
        default:
            return state;
    }

}
import * as types from '../types/dashboard';


const initialState = {
    userProfile: []
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
    
        default:
            return state;
    }

}
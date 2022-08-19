import * as types from '../types/classes';



const initialState = {
    loading: false,
    classAnnouncement: [],
    postAnnouncement: [],
    classDetails: [],
    classMembers: [],
    classInvite: [],
    error: [],
}

export const classesReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.MAKE_ANNOUNCEMENT_START:
            return {
                loading: true,
                ...state
            };
    
        case types.MAKE_ANNOUNCEMENT_SUCCESS:
            return {
                loading: false,
                postAnnouncement: payload
            };
    
        case types.MAKE_ANNOUNCEMENT_FAIL:
            return {
                loading: false,
                ...state,
                error: payload
            };
        case types.FETCH_CLASS_ANNOUNCEMENT_START:
            return {
                loading: true,
                ...state
            };
    
        case types.FETCH_CLASS_ANNOUNCEMENT_SUCCESS:
            return {
                loading: false,
                classAnnouncement: payload
            };
    
        case types.FETCH_CLASS_ANNOUNCEMENT_FAIL:
            return {
                loading: false,
                ...state,
                error: payload
            };
        case types.FETCH_CLASS_DETAILS_START:
            return {
                loading: true,
                ...state
            };
    
        case types.FETCH_CLASS_DETAILS_SUCCESS:
            return {
                loading: false,
                classDetails: payload
            };
    
        case types.FETCH_CLASS_DETAILS_FAIL:
              return{
                  loading: false,
                ...state,
                error: payload
            };
        case types.FETCH_CLASS_MEMBERS_START:
            return {
                loading: true,
                ...state
            };
    
        case types.FETCH_CLASS_MEMBERS_SUCCESS:
            return {
                loading: false,
                classMembers: payload
            };
    
        case types.FETCH_CLASS_MEMBERS_FAIL:
              return{
                  loading: false,
                ...state,
                error: payload
            };
        case types.SEND_CLASS_EMAIL_INVITE_START:
            return {
                loading: true,
                ...state
            };
    
        case types.SEND_CLASS_EMAIL_INVITE_SUCCESS:
            return {
                loading: false,
                classInvite: payload
            };
    
        case types.SEND_CLASS_EMAIL_INVITE_FAIL:
              return{
                  loading: false,
                ...state,
                error: payload
            };
    
        default:
            return state;
    }

}
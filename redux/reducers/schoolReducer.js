import * as types from '../types/school';

const initialState = {
    newAdmin: [],
    loading: false,
    error: [],
}

export const schoolReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.ADD_NEW_ADMIN_START:
            return {
                loading: true,
            };
        case types.ADD_NEW_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                newAdmin: payload
            }
        case types.ADD_NEW_ADMIN_FAIL:
            return {
                ...state,
                error: payload

            }
    
        default:
            return state;
    }
}
import * as types from '../actionTypes/authActionTypes';

const initialState = {
    roles: [],
}

const authReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.FETCH_ROLES_SUCCESS:
            return {
                ...state,
                roles: payload
            } 
    
        default:
            return state;
    }
}

export default authReducer;
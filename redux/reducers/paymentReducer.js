import * as types from '../types/payment';


const initialState = {
    loading: false,
    paymentPlans: [],
    error: [],
}

export const paymentReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
    case types.FETCH_PAYMENT_PLANS_START:
        return {
            ...state,
            loading: true
        };
    case types.FETCH_PAYMENT_PLANS_SUCCESS:
        return {
            ...state,
            paymentPlans: payload,
            loading: false
        };
    case types.FETCH_PAYMENT_PLANS_FAIL:
        return {
            ...state,
            error: payload,
            loading: false
        };

    default:
        return state;
    }
}
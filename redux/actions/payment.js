import * as types from '../types/payment';
import axios from 'axios';



export const fetchPaymentPlansStart = () => ({
    type: types.FETCH_PAYMENT_PLANS_START,
});

export const fetchPaymentPlansSuccess = (payload) => ({
  type: types.FETCH_PAYMENT_PLANS_SUCCESS,
  payload
});

export const fetchPaymentPlansFail = (error) => ({
  type: types.FETCH_PAYMENT_PLANS_FAIL,
  payload: error
});


export const fetchPaymentPlansInitiate = (token) =>  {
    return function (dispatch) {
        dispatch(fetchPaymentPlansStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/parents/children',
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchPaymentPlansSuccess(res.data.data))
            console.log("Hello from payment API after call ===>")
            console.log("From payment API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(fetchPaymentPlansFail(err))
        })
    }

}

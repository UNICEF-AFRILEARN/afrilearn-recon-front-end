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


export const fetchPaymentPlansInitiate = () =>  {
    return function (dispatch) {
        dispatch(fetchPaymentPlansStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/payments/plans'
        )
        .then((res) => {
            dispatch(fetchPaymentPlansSuccess(res.data))
            console.log("Hello from payment API after call ===>")
            console.log("From payment API =>", res.data)
        })
        .catch((err) => {
            dispatch(fetchPaymentPlansFail(err))
        })
    }

}

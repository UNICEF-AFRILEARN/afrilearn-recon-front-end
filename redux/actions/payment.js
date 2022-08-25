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
export const fetchTeacherPaymentPlansStart = () => ({
    type: types.FETCH_TEACHER_PAYMENT_PLANS_START,
});

export const fetchTeacherPaymentPlansSuccess = (payload) => ({
  type: types.FETCH_TEACHER_PAYMENT_PLANS_SUCCESS,
  payload
});

export const fetchTeacherPaymentPlansFail = (error) => ({
  type: types.FETCH_TEACHER_PAYMENT_PLANS_FAIL,
  payload: error
});

export const verifyPaymentStart = (payload) => ({
    type: types.PAYMENT_VERIFICATION_SUCCESS,
    payload
});
export const verifyPaymentSuccess = (payload) => ({
    type: types.PAYMENT_VERIFICATION_SUCCESS,
    payload
});
export const verifyPaymentFail = (error) => ({
    type: types.PAYMENT_VERIFICATION_FAILURE,
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
export const fetchTeacherPaymentPlansInitiate = () =>  {
    return function (dispatch) {
        dispatch(fetchTeacherPaymentPlansStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/payments/teacher-plans'
        )
        .then((res) => {
            dispatch(fetchTeacherPaymentPlansSuccess(res.data))
            console.log("From Teacher payment API =>", res.data)
        })
        .catch((err) => {
            dispatch(fetchTeacherPaymentPlansFail(err))
        })
    }

}

export const verifyPaystackPaymentInitiate = (data, token) => {
    return function (dispatch) {
        dispatch(verifyPaymentStart())
        axios
        .post("http://localhost:5000/api/v1/api/v1/payments/verify-paystack-payment",
            {   data  },
        {
            headers: {
                "token": token
            }
        })
        .then((res) => {
                console.log("API params", res.data)
                dispatch(verifyPaymentSuccess(res.data))
            })
            .catch((error) => dispatch(verifyPaymentFail(error)))
    }   
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '../../redux/actions/auth';
import { 
  fetchPaymentPlansInitiate,
  verifyPaystackPaymentInitiate,
  fetchTeacherPaymentPlansInitiate
} from '../../redux/actions/payment';
import { usePaystackPayment } from 'react-paystack';

import styles from "../../styles/payment.module.css"

const payment = ({test_body}) => {
  const dispatch = useDispatch();
  const [ userRole, setUserRole ] = useState("");
  const [price, setPrice] = useState('');
  const {roles, user } = useSelector((state) => state.auth)
  const {paymentPlans, teacherPaymentPlans} = useSelector((state) => state.myPayment)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("price from payment", price)

}

  const config = {
    reference: new Date().getTime(),
    email: "text@gmail.com",
    amount: 200,
    publicKey: "pk_live_a9c31ffce1eca1674882580da27446be439723bf",
    channels: ["card"],
  };
  
  // you can call this function anything
  const onSuccess =  (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  const data = {
    reference: reference.reference,
    productId: paymentId,
    courseId,
    clientUserId: userId,
    amount: price,
  };
  dispatch(verifyPaystackPaymentInitiate(data, token));
   return console.log("payment ref", reference);
  };
  
  // you can call this function anything
  const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
  }


const initializePayment = usePaystackPayment(config);

  const courseContext = roles.courses;
  const allPaymentPlans = paymentPlans.paymentPlans
  
  // Get user role to fetch the payment plans to display
  console.log("user.roles from payment", user.user?.role)


  useEffect(() => {
    dispatch(fetchPaymentPlansInitiate())
  }, [])
  useEffect(() => {
    dispatch(fetchTeacherPaymentPlansInitiate())
  }, [])

  useEffect(() => {
    dispatch(fetchRoles())
  }, [])

  return (

    <div className={`row ${styles.paymentContainer}`}>
   <div className={`col-md-5 ${styles.paymentfirstContainer}`} >
   <h4>Unlock Unlimited Access!</h4>
   <div className="">
   <div className="row">
    <div className={`col-md-1 ${styles.divPoint}`}></div>
    <div className={`col-md-9 ${styles.divPoint2}`}><p>Video & Audio Lessons</p></div>
   </div>
   <div className="row">
    <div className={`col-md-1 ${styles.divPoint}`}></div>
    <div className={`col-md-9 ${styles.divPoint2}`}><p>Rich & Ready Class Notes</p></div>
   </div>
   <div className="row">
    <div className={`col-md-1 ${styles.divPoint}`}></div>
    <div className={`col-md-8 ${styles.divPoint2}`}><p>Practice Quizzes & Solutions</p></div>
   </div>
   <div className="row">
    <div className={`col-md-1 ${styles.divPoint}`}></div>
    <div className={`col-md-8 ${styles.divPoint2}`}><p>Gain Mastery with Storytelling</p></div>
   </div>
   <div className="row">
    <div className={`col-md-1 ${styles.divPoint}`}></div>
    <div className={`col-md-10 ${styles.divPoint2}`}><p>Learn on Any Device, Anytime, Anywhere</p></div>
   </div>
   <div className="row">
    <div className={`col-md-1 ${styles.divPoint}`}></div>
    <div className={`col-md-10 ${styles.divPoint2}`}><p>Achieve Academic Excellence + More</p></div>
   </div>
   </div>
 
   </div>

   <div className={`col-md-6 ${styles.paymentSecondContainer}`} >
   <form onSubmit={handleSubmit}>
    <div className='row'>
      <div className={styles.paymentLabel}><label for="className "><h5>Step 1: Select Class:</h5> </label></div>
      <div  >
           <select
                className={`${styles.pushDown} form-control form-control-sm`}
                // value={selectedCourse}
                defaultValue={"default"}
                // onChange={(e) => setCourseSelected(e.target.value)}
                >
                <option value={"default"}>
                    Select a class
                </option>
    
                {courseContext && courseContext.map((childClass) => 
                <option 
                placeholder='Select a Role'
                    >{childClass.name}
                </option>
                )}
            </select>

      </div>
    </div> 
  <h5>Step 3: Select Subscription Length</h5>
  <div className={`row ${styles.paymentdurationButtons}`}>
  <div className= {` col-md-3 ${styles.durationPayment}`}> 
    {allPaymentPlans && allPaymentPlans.map((allPlans) =>
        <button >
        <div className={styles.durationBold}>{allPlans.name}</div>
        <div>{allPlans.amount}</div >
      </button>
    )}

  </div>
 <div className='row'>
  <div className= {` col-md-6 ${styles.paymenttypeButton}`}>
    <button 
    onClick={() => {
                initializePayment(onSuccess, onClose)
              }}>PAY WITH CARD</button>
  </div>
    <div className={` col-md-6 ${styles.paymenttypeButton2}`}>
      <button >BANK TRANSFER</button>
   </div>

 </div>

</div>
</form> 


</div>

    </div>
  )
}

export default payment

export function getServerSideProps({req, res }){
  return { props: {test_body: req.body || ""}}
}
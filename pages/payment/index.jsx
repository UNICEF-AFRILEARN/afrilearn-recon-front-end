import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '../../redux/actions/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { 
  fetchPaymentPlansInitiate,
  verifyPaystackPaymentInitiate,
  fetchTeacherPaymentPlansInitiate
} from '../../redux/actions/payment';
import { fetchClassDetailsInitiate } from '../../redux/actions/classes'
import { fetchParentChildrenInitiate } from './../../redux/actions/dashboard';
import { usePaystackPayment } from 'react-paystack';

import styles from "../../styles/payment.module.css"
import PaymentDetails from './paymentModal';

const payment = ({test_body}) => {
  const priceElement = useRef();
  const [open, setOpen] = useState(false);
  const { classDetails } = useSelector((state) => state.schoolClasses)
  const dispatch = useDispatch();
  const [ userRole, setUserRole ] = useState("");
  const [ classId, setClassId ] = useState("");
  const [ priceSelected, setPriceSelected ] = useState("");
  const [price, setPrice] = useState('');
  const {roles, user } = useSelector((state) => state.auth)
  const { children } = useSelector((state) => state.dashboard)
  const {paymentPlans, teacherPaymentPlans} = useSelector((state) => state.myPayment)

  //5fd08fba50964811309722d5 student
//606ed82e70f40e18e029165e parent
//602f3ce39b146b3201c2dc1d teacher
//607ededa2712163504210684

let token = user?.token
let myChildren = children?.data?.children;

const handleClose = () => setOpen(false);
const handleOpen = () => {
  setPriceSelected(price)
  setOpen(true);
}

console.log("myChildren from payment ====>", myChildren)
  let showPrice;
  const handleSelect = (price) => {
    setPriceSelected(price)
   
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
  const allPaymentPlans = paymentPlans.paymentPlans;
  const teacher_plans = teacherPaymentPlans?.paymentPlans
  
  // Get user role to fetch the payment plans to display


  const closeModal = () => {
    setOpen(false)
  }

  useEffect(() => {
    priceElement.current = priceSelected;
  }, [priceSelected]);


  useEffect(() => {
    dispatch(fetchParentChildrenInitiate(token))
  }, [token]);

  useEffect(() => {
    setClassId(user?.user?.enrolledCourses[0]?.classId)
  }, [classId]);

  useEffect(() => {
    dispatch(fetchClassDetailsInitiate(classId))
  }, [classId])
  useEffect(() => {
    setUserRole(user?.user?.role)
  }, [])

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
  {  userRole === "5fd08fba50964811309722d5" &&
     <div className={`col-md-6 ${styles.paymentSecondContainer}`} >
        <div >
    <div className='row'>
      <div className={styles.paymentLabel}><label for="className "><h5>Step 1: Select Class:</h5> </label></div>
      <div  >
           <select
                className={`${styles.pushDown} form-control form-control-sm`}
                value={price}
                defaultValue={"default"}
                onChange={(e) => setPrice(e.target.value)}
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
        <input 
          className={styles.btnpayment}
          onClick={() => handleSelect(allPlans.amount)}
        >
        <div className={styles.durationBold}>{allPlans.name}</div>
        <div>{allPlans.amount}</div >
      </input>
    )}
  </div>
  <div className= {` col-md-3 ${styles.durationPayment}`}> 
  </div>
 <div className='row'>
  <div className= {` col-md-6 ${styles.paymenttypeButton}`}>
    <div 
    onClick={() => {
                initializePayment(onSuccess, onClose)
              }}>PAY WITH CARD</div>
  </div>
    <div className={` col-md-6 ${styles.paymenttypeButton2}`}>
      {/* <button >BANK TRANSFER</button>
       */}
         <PaymentDetails
    handleClose={handleClose}
    handleOpen={handleOpen}
    open={open}
    closeModal={closeModal}
    priceSelected={priceSelected}
  />
   </div>

 </div>

</div>
</div> 


</div>
}
  {  userRole === "606ed82e70f40e18e029165e" &&
     <div className={`col-md-6 ${styles.paymentSecondContainer}`} >
        <div >
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
                    Select a child
                </option>
                { myChildren && myChildren.map((myChild) => 
                    <option value={"default"}>
                      {myChild.fullName}
                    </option>
                )

                }
            </select>
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
        <button 
        onClick={() => handleSelect(allPlans.amount)}
        >
        <div className={styles.durationBold}>{allPlans.name}</div>
        <div>{allPlans.amount}</div >
      </button>
    )}
  </div>
  <div className= {` col-md-3 ${styles.durationPayment}`}> 
  </div>
 <div className='row'>
  <div className= {` col-md-6 ${styles.paymenttypeButton}`}>
    <button 
    onClick={() => {
                initializePayment(onSuccess, onClose)
              }}>PAY WITH CARD</button>
  </div>
    <div className={` col-md-6 ${styles.paymenttypeButton2}`}>
      {/* <button >BANK TRANSFER</button> */}
      <PaymentDetails
    handleClose={handleClose}
    handleOpen={handleOpen}
    open={open}
    closeModal={closeModal}
    priceSelected={priceSelected}
  />
   </div>

 </div>

</div>
</div> 


</div>
}

{userRole === "602f3ce39b146b3201c2dc1d" &&
  <div className={`col-md-6 ${styles.paymentSecondContainer}`} >
   <div >
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
  <div 
  className= {` col-md-3 ${styles.durationPayment}`}
  
  > 
    {teacher_plans && teacher_plans.map((teacherPlans) =>
        <button 
        ref={priceElement}
        onClick={() => handleSelect(teacherPlans.amount)}
        >
        <div 
        
        className={styles.durationBold}
        >{teacherPlans.name}
        </div>
        <div>{teacherPlans.amount}</div >
      </button>
    )}
  </div>
  <div className= {` col-md-3 ${styles.durationPayment}`}> 
  </div>
 <div className='row'>
  <div className= {` col-md-6 ${styles.paymenttypeButton}`}>
    <button 
    onClick={() => {
                initializePayment(onSuccess, onClose)
              }}>PAY WITH CARD</button>
  </div>
    <div className={` col-md-6 ${styles.paymenttypeButton2}`}>
      {/* <button >BANK TRANSFER</button> */}
      <PaymentDetails
    handleClose={handleClose}
    handleOpen={handleOpen}
    open={open}
    closeModal={closeModal}
    priceSelected={priceSelected}
  />
   </div>

 </div>

</div>
</div> 


</div>
}

{userRole === "607ededa2712163504210684" &&
  <div className={`col-md-6 ${styles.paymentSecondContainer}`} >
   <form>
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
    {teacher_plans && teacher_plans.map((teacherPlans) =>
        <button >
        <div className={styles.durationBold}>{teacherPlans.name}</div>
        <div>{teacherPlans.amount}</div >
      </button>
    )}
  </div>
  <div className= {` col-md-3 ${styles.durationPayment}`}> 
  </div>
 <div className='row'>
  <div className= {` col-md-6 ${styles.paymenttypeButton}`}>
    <button 
    onClick={() => {
                initializePayment(onSuccess, onClose)
              }}>PAY WITH CARD</button>
  </div>
    <div className={` col-md-6 ${styles.paymenttypeButton2}`}>
      {/* <button >BANK TRANSFER</button> */}
      <PaymentDetails
    handleClose={handleClose}
    handleOpen={handleOpen}
    open={open}
    priceSelected={priceSelected}
  />
   </div>

 </div>

</div>
</form> 


</div>
}
  {/* <PaymentDetails
    handleClose={handleClose}
    handleOpen={handleOpen}
    open={open}
    closeModal={closeModal}
  /> */}
</div>
  )
}

export default payment

export function getServerSideProps({req, res }){
  return { props: {test_body: req.body || ""}}
}
import React from 'react'
import styles from "../../styles/payment.module.css"

const payment = () => {


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
   <form >
    <div className='row'>
      <div className={styles.paymentLabel}><label for="className "><h5>Step 1: Select Class:</h5> </label></div>
      <div  >
      <select className={styles.paymentSelect} id="className" name="classlist" form="classform">
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
  </select>
      </div>
    </div> 
<div className="">
  <h5>Step 3: Select Subscription Length</h5>
  <div className={`row ${styles.paymentdurationButtons}`}>
  <div className= {` col-md-3 ${styles.durationPayment}`}> <button ><div className={styles.durationBold}>Monthly</div><div> 999</div ></button></div>
<div className={` col-md-3 ${styles.durationPayment}`}><button ><div className={styles.durationBold}>Quaterly</div>  2,999 </button></div>
<div className={` col-md-3 ${styles.durationPayment}`}><button > <div className={styles.durationBold}>Bi- Annual</div>  4,999 </button></div>
<div className={` col-md-3 ${styles.durationPayment}`}><button ><div className={styles.durationBold}>Yearly </div> 9,999 </button></div>
  </div>
 <div className='row'>
  <div className= {` col-md-6 ${styles.paymenttypeButton}`}><button >PAY WITH CARD</button></div>
 <div className={` col-md-6 ${styles.paymenttypeButton2}`}><button >BANK TRANSFER</button></div>

 </div>

</div>
</form> 


</div>

    </div>
  )
}

export default payment
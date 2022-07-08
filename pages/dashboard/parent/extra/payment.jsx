import React from 'react'

const payment = () => {

  return (

    <div className="parentPayment">
   <div className='paymentLest' >
   <p><strong>Unlock Unlimited Access!</strong></p>
   <ul type="none">
  <li className="list-payment"> Video & Audio Lessons</li>
  <li className="list-payment"> Rich & Ready Class Notes</li>
  <li className="list-payment">Practice Quizzes & Solutions</li>
  <li className="list-payment">Gain Mastery with Storytelling</li>
  <li className="list-payment">Learn on Any Device, Anytime, Anywhere</li>
  <li className="list-payment">Achieve Academic Excellence + More </li>
</ul>
   </div>

   <div className="paymentlist">
   <form >
   <label for="className "><strong>Step 1: Select Class:</strong></label>
   <br></br>
  <select id="className" name="classlist" form="classform">
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
  </select>

<br></br>
<label for="child "><strong>Step 1: Select child:</strong></label>
<br></br>
<select id="child" name="childlist" form="childform">
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
  <option value="JSS1">JSS1</option>
</select>

<p>Step 3: Select Subscription Length</p>
<button className="button button4">Montly <br></br>999 </button>
<button className="button button4">Quaterly <br></br> 2,999 </button>
<button className="button button4">Bi- Annual <br></br> 4,999 </button>
<button className="button button4">Yearly <br></br> 9,999 </button>
<br></br>
<br></br>
<button className="button buttonPayment1">PAY WITH CARD</button>
<button className="button buttonPayment2">BANK TRANSFER</button>
</form> 


</div>

    </div>
  )
}

export default payment
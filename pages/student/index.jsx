import React from 'react'

const student = () => {
  return (
    <div className="add-student">

  <h4>Add New Student</h4>
  <br></br>
  <p>Add your student to the league of world class learners on Afrilearn</p>
  <br></br>

  <form>
      <input type="text" id="student" name="student" placeholder="Student" />

      <br></br>
      <br></br>

      
     <select id="class" name="class" placeholder="Select Class">
      <option value="class1">class1</option>
      <option value="class2">class2</option>
      <option value="class3">class3</option>
      </select>
    <br></br>
    <br></br>



     <input type="text" id="name" name="name" placeholder="Full Name" />
      <br></br>
      <br></br>


     <input type="text" id="email" name="email" placeholder="Email" />

     <br></br>
     <br></br>


     <input type="submit" value="REGESTER" />


    </form>



    </div>
  )
}

export default student 
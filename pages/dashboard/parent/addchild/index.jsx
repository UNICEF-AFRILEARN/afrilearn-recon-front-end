import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import styles from '../../../../styles/parentdashboard.module.css';
import ParentHeader from '../extra/header';
import Middlebar from '../extra/middlebar';
import Proaddvert from '../extra/proaddvert';
import { useSelector } from 'react-redux';
import { fetchRoles } from '../../../../redux/actions/auth';
import { signUpChildInitiate } from '../../../../redux/actions/parent';

const Addmychild = () => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [courseId, setCourseId] = useState("Student")
  const [parentId, setParentId] = useState("")
  const [myChildClass, setMyChildClass] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fullName,password,confirmPassword,email,courseId,parentId,myChildClass)
    dispatch(signUpChildInitiate(fullName,password,confirmPassword,email,courseId,parentId,myChildClass))
  }

 
  const {classes } = useSelector((state) => state.auth)
  const childClasses = classes.courses

  useEffect(() => {
    dispatch(fetchRoles())
  }, []);

  return (
    <div className={styles.parentcomponentwrapper}>
    <div className={styles.innerparentwrapper}>
         <ParentHeader />
         <Middlebar />
         <Proaddvert />
    </div>
    <div className={styles.parentchildformwrapper}>
         <div className={styles.innerformwrapper}>
            <h3>Add My Child</h3>
         <Form onClick={handleSubmit}>
            <Form.Label>Add your child to the league of world class learners on Afrilearn</Form.Label>
            <Form.Group>
                    <Form.Control 
                    type="text" 
                    placeholder="student" 
                    className="my-3"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    />
                    <select
                    className={`${styles.pushDown} form-control form-control-sm`}
                    value={myChildClass}
                    defaultValue={"default"}
                    onChange={(e) => setMyChildClass(e.target.value)}
                    >
                      <option value={"default"}>
                         Select a class
                      </option>
           
                      {childClasses && childClasses.map((childClass) => 
                      <option 
                      placeholder='Select a Role'
                        >{childClass.name}
                      </option>
                      )}
                  </select>

                    <Form.Control 
                    type="text" 
                    placeholder="Full Name" 
                    className="my-3"
                    name='fullName'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    />

                    <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    className="my-3"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // value={childData.email}
                    />
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    className="my-3" 
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control 
                    type="password" 
                    placeholder="Confirm Password"  
                    className="my-3"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add my Child
            </Button>
            </Form>
         </div>   
    </div>
  </div>
  )
}

export default Addmychild
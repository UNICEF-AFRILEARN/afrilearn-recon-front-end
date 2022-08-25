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
  const [role, setRole] = useState("Student")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [courseId, setCourseId] = useState("")
  const [selectedCourse, setCourseSelected] = useState("")
  const [parentId, setParentId] = useState("")
  const [myChildClass, setMyChildClass] = useState("")

  const user_login = useSelector(state => state.auth);
  const {children} = useSelector(state => state.parentR);

  const token  = user_login.user.token;
  const childrenCount  = children.children.length;
  const childrenCourseCount = 0;
  const myChildren = children.children;
  const mappedCoursesCount = myChildren.map((children) =>  
    children.enrolledCourses.length)

    childrenCourseCount = mappedCoursesCount.reduce((a,b) => a+b, 0)
  console.log("Add child component", courseId, selectedCourse)


  const getCourseId = () => {
    if (selectedCourse === "JSS One") {
      setCourseId("5fff72b3de0bdb47f826feaf")
    }else if(selectedCourse === "JSS Two"){
      setCourseId("5fff7329de0bdb47f826feb0")
    }else if(selectedCourse === "JSS Three"){
      setCourseId("5fff734ade0bdb47f826feb1")
    }else if(selectedCourse === "JSS Three"){
      setCourseId("5fff734ade0bdb47f826feb1")
    }else if(selectedCourse === "SSS One"){
      setCourseId("5fff7371de0bdb47f826feb2")
    }else if(selectedCourse === "SSS Two"){
      setCourseId("5fff7380de0bdb47f826feb3")
    }else if(selectedCourse === "SSS Three"){
      setCourseId("5fff7399de0bdb47f826feb4")
    }else if(selectedCourse === "Afrilearn KidsCode"){
      setCourseId("629dbb4c5a5f270016033712")
    }else if(selectedCourse === "Primary One"){
      setCourseId("5fc8cfbb81a55b4c3c19737d")
    }else if(selectedCourse === "Primary Two"){
      setCourseId("5fd12c70e74b15663c5f4c6e")
    }else if(selectedCourse === "Primary Three"){
      setCourseId("5fff5a67de0bdb47f826fea8")
    }else if(selectedCourse === "Primary Four"){
      setCourseId("5fff5a7ede0bdb47f826fea9")
    }else if(selectedCourse === "Primary Five"){
      setCourseId("5fff5aaede0bdb47f826feaa")
    }else if(selectedCourse === "Primary Six"){
      setCourseId("5fff5abede0bdb47f826feab")
    }
}



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("my child", fullName,password,confirmPassword,email,courseId,parentId,myChildClass, role, token)
    setParentId(user_login.user.user?.id)
    dispatch(signUpChildInitiate(fullName,password,confirmPassword,email,courseId,parentId,myChildClass, role, token))
  }

 
  const {classes } = useSelector((state) => state.auth)
  const childClasses = classes.courses


  useEffect(() => {
    getCourseId()
  }, [getCourseId])
  

  useEffect(() => {
    dispatch(fetchRoles())
   
  }, []);

  return (
    <div className={styles.parentcomponentwrapper}>
    <div className={styles.innerparentwrapper}>
         <ParentHeader />
         <Middlebar 
         childrenCount={childrenCount}
         childrenCourseCount={childrenCourseCount}
         />
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
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    />
                    <select
                    className={`${styles.pushDown} form-control form-control-sm`}
                    value={selectedCourse}
                    defaultValue={"default"}
                    onChange={(e) => setCourseSelected(e.target.value)}
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
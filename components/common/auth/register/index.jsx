import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import styles from './register.module.css';
import Image from 'next/image';
import TextInput from '../../../widgets/appTextInput';
import AppButton from "../../../widgets/buttons/AppButton";
import Selectitem from '../../../widgets/appSelect/appSelect';
import ReactModal from 'react-modal'
import { Button, Modal } from 'react-bootstrap';
import { fetchRoles, registerUserInitiate } from "../../../../redux/actions/auth";
import Router, { useRouter } from 'next/router'
import { fetchSubjectsInitiate } from '../../../../redux/actions/subjects';

const Register = (props) => {
  const { user, registerUser } = useSelector(state => state.auth);
  const { subjects} = useSelector(state => state.mySubject);
  const [roleSelected, setRoleSelected] = useState('');
  const [role, setRole] = useState('');
  const [classCategory, setClassCategory] = useState('');
  const [courseCategoryId, setCourseCategoryId] = useState('');
  const [subject, setSubject] = useState('');
  // const [subject, setSubject] = useState('');
  const [subjectSelected, setSubjectSelected] = useState('');
  const [course, setCourse] = useState('');
  const [courseId, setCourseId] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [referral, setReferral] = useState('');



  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const rolesCollected = useSelector((state) => state.auth)
  const { allSubjects } = useSelector((state) => state.mySubject)
  const dispatch = useDispatch()
  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  
  // const profile = {}
  const rolesContext = rolesCollected.roles.roles;
  const courseContext = rolesCollected.roles.courses;

let filteredSub = []
  const sortSubjects = (subjectsObj, id) => {
    filteredSub = subjectsObj.filter((filtSubj) => filtSubj.courseId?.id === id)
      return filteredSub;
  }


console.log("Filtered ====>", allSubjects)
  const getRoleId = () => {
      if (roleSelected === "Student") {
         setRole("5fd08fba50964811309722d5")
      }else if(roleSelected === "Teacher"){
         setRole("602f3ce39b146b3201c2dc1d")
      }else if(roleSelected === "Parent"){
         setRole("606ed82e70f40e18e029165e")
      }else if(roleSelected === "School"){
         setRole("607ededa2712163504210684")
      }
  }

  const setCategoryId =  () => {
    if (course === "Primary") {
       setCourseCategoryId("605b21868636bc00158b4ad6")
    }else if(course === "Secondary"){
       setCourseCategoryId("605b218f8636bc00158b4ad7")
    }
}

  const setClassId =  () => {
    if(course === 'Primary One'){
       setCourseId('5fc8cfbb81a55b4c3c19737d')
    }else if(course === 'Primary Two'){
       setCourseId('5fd12c70e74b15663c5f4c6e')
    }else if(course === 'Primary Three'){
       setCourseId('5fff5a67de0bdb47f826fea8')
    }else if(course === 'Primary Four'){
       setCourseId('5fff5a7ede0bdb47f826fea9')
    }else if(course === 'Primary Five'){
       setCourseId('5fff5aaede0bdb47f826feaa')
    }else if(course === 'Primary Six'){
       setCourseId('5fff5abede0bdb47f826feab')
    }else if(course === 'JSS One'){
      setCourseId('5fff72b3de0bdb47f826feaf')
    }else if(course === 'JSS Two'){
       setCourseId('5fff7329de0bdb47f826feb0')
    }else if(course === 'Jss Three'){
       setCourseId('5fff734ade0bdb47f826feb1')
    }else if(course === 'SSS One'){
       setCourseId('5fff7371de0bdb47f826feb2')
    }else if(course === 'SSS Two'){
       setCourseId('5fff7380de0bdb47f826feb3')
    }else if(course === 'SSS Three'){
       setCourseId('5fff7399de0bdb47f826feb4')
    }else if(course === 'Afrilearn KidsCode'){
       setCourseId('629dbb4c5a5f270016033712')
    }else if(course === 'Secondary'){
       setCourseId('605b218f8636bc00158b4ad7')
    }else if(course === 'Primary'){
      setCourseId('605b21868636bc00158b4ad6')
    }     
}

  //function to filter subjects:
sortSubjects(allSubjects, courseId)
console.log("courseId =======>", courseId)

  const handleRegisterRequest = (e) => {
    e.preventDefault()
    console.log("courseCategoryId ===>", course, courseCategoryId)
     dispatch(registerUserInitiate(
      fullName, 
      email, 
      password, 
      confirmPassword, 
      role, 
      course,
      courseId,
      phoneNumber,
      schoolName,
      courseCategoryId,
      referral
      ))

      if(role === "5fd08fba50964811309722d5" && Object.keys(registerUser).length > 0){
         Router.push('/dashboard/student')
      }else if(role === '602f3ce39b146b3201c2dc1d' && Object.keys(registerUser).length > 0){
         Router.push('/dashboard/teacher' )
      }else if(role === '606ed82e70f40e18e029165e' && Object.keys(registerUser).length > 0){
         Router.push('/dashboard/parent')
      }else if(role === '607ededa2712163504210684' && Object.keys(registerUser).length > 0){
         Router.push('/school')
      }
    
  }


  useEffect(() => {
    setCategoryId()
  },[setCategoryId]);

  useEffect(() => {
    setClassId()
  },[setClassId])

useEffect(() => {
  dispatch(fetchSubjectsInitiate())
  
}, [])

useEffect(() => {
  dispatch(fetchSubjectsInitiate())
}, [])

  useEffect(() => {
   getRoleId();
  }, [getRoleId])

  useEffect(() => {
    dispatch(fetchRoles())
  }, [])

  return (

    <>
      <div className={styles.floatImg1}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleBlack.svg'} width={86} height={200}/></div>
      <div className={styles.floatImg2}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleWhite.png'} width={150} height={90} /></div>
      <div className={styles.floatImg3}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleWhite.png'} width={150} height={90} /></div>
      <div className="container-fluid">
      <Modal show={show}  onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title-style'>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body-style'>Your Afrilearn account has been created successfully</Modal.Body>
      </Modal>
        <div className="row ">
          {/* <div className={styles.logoregisterform}> <Image alt={"logo image"} src={'/assets/img/logo.PNG'} width={200} height={50}/> </div> */}
          <div className='card-container-form' >
            <span className={styles.card}>
              <h5 className="center">CREATE AN ACCOUNT</h5>
              <form onSubmit={handleRegisterRequest}>
                  <select
                    value={roleSelected}
                    onChange={(e) => setRoleSelected(e.target.value)}
                    className={`${styles.pushDown} form-control form-control-sm`}
                    defaultValue={"default"}
                    >
                      <option value={"default"}>
                         Select a Role
                      </option>
           
                      {rolesContext && rolesContext.map((role) => 
                      <option  
                        placeholder='Select a Role'
                        >{role.name}
                      </option>
                      )}
                  </select>
                  { role !== '606ed82e70f40e18e029165e' && role !== '607ededa2712163504210684' &&

                          <select 
                          onChange={(e) => setCourse(e.target.value)}
                          className={`${styles.pushDown} form-control form-control-sm`}
                          defaultValue={"default"}
                          >
                            <option value={"default"}>
                              Select a Class
                            </option>
                            {courseContext && courseContext.map((classes) => 
                            <option
                            value={classes.name}
                            >{classes.name}</option>
                            )}
                          </select>

                  }
                  { role === '602f3ce39b146b3201c2dc1d' &&

                      <select 
                      onChange={(e) => setSubjectSelected(e.target.value)}
                      className={`${styles.pushDown} form-control form-control-sm`}
                      defaultValue={"default"}
                      >
                        <option value={"default"}>
                          Select a Subject
                        </option>
                        {filteredSub && filteredSub.map((classes) => 
                            <option
                            value={classes.mainSubjectId.name}
                            >{classes.mainSubjectId.name}</option>
                            )}
                      </select>

                  }
                <input 
                  name={'fullName'} 
                  type='text'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} 
                  title='Full Name' 
                  placeholder='Full Name' 
                  className={styles.pushDown} 
                />
                  { role === '607ededa2712163504210684' &&
                    <input 
                    name={'schoolName'} 
                    type='text'
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)} 
                    title='schoolName' 
                    placeholder='School Name' 
                    className={styles.pushDown} 
                  />
                  }
                   { role === '607ededa2712163504210684' &&

                      <select 
                          onChange={(e) => setCourse(e.target.value)}
                          className={`${styles.pushDown} form-control form-control-sm`}
                          defaultValue={"default"}
                          >
                            <option value={"default"}>
                              Select Class Category
                            </option>
                            <option
                            value={"Primary"}
                            >Primary</option>
                            <option
                            value={"Secondary"}
                            >Secondary</option>
                            
                      </select>

                    }
                  
                <input 
                  name={'phone'} 
                  type='text'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)} 
                  title='Phone Number' 
                  placeholder='Phone Number' 
                  className={styles.pushDown} 
                  
                />
                <input 
                  name={'email'} 
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  title='Email' 
                  placeholder='Email' 
                  className={styles.pushDown} 
                  
                />
                <input 
                  name={'password'} 
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  title='Password' 
                  placeholder='Password' 
                />
                <input 
                  name={'confirmPassword'} 
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} title='Confirm Password' 
                  placeholder='Confirm Password' 
                />
                <input 
                  name={'referralCode'}
                  value={referral}
                  type='text' 
                  onChange={(e) => setReferral(e.target.value)} title='Referral Code' 
                  placeholder='Referral Code (optional)' 
                  className={`${styles.pushDown} ${styles.pushUp}`} 
                />
                <p>By signing up, you agree to our <Link passHref href='/'><b>Terms and Privacy Policy</b></Link></p>
                <div className={`row ${styles.pushDown1}`}>
                    <AppButton title="LOGIN" secondary type='submit' />
                </div>
                <div className={`row ${styles.pushDown1}`}>
                  <p className={`center ${styles.socialSection}`}><small>Or sign up with</small></p>
                  <div className='col-6'>
                    <span><Image alt={"design image"} src={'/assets/img/common/login/google.png'} width={23} height={23} /> <span className={styles.socialText}>Google</span></span>
                  </div>
                  <div className='col-6 right'>
                    <span><Image alt={"design image"} src={'/assets/img/common/login/facebook.png'} width={23} height={23} /> <span className={styles.socialText}>Facebook</span></span>
                  </div>
                </div>
                
              </form>
            </span>
            <p className={`center ${styles.afterSocialText}`}>Already have an account? <Link passHref href='/login'><b>Log In</b></Link></p>
          </div>
          <div className="col-md-4">   </div>
        </div>
      </div>
    </>
  )
}

function RegisterModal() {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}



export default Register
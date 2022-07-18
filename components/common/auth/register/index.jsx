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

import { fetchRoles } from "../../../../redux/actions/auth";

import {API} from '../../../../pages/api/client-side/fetcher';

const Register = (props) => {
  const [roleSelected, setRoleSelected] = useState('');
  const [courseSelected, setCourseSelected] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');



  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const rolesCollected = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  
  // const profile = {}
  const rolesContext = rolesCollected.roles.roles;
  const courseContext = rolesCollected.roles.courses;
  console.log("courses from the UI ==>", courseContext);

  // const handleChanges = (value) => {
      // console.log("vlaue received =>", value)
    // profile[key] = value
    // console.log('User Signup Profile\n', profile)
  // }

  const handleRegisterRequest = (e) => {
    e.preventDefault()
    console.log(roleSelected)
    console.log(courseSelected)
    console.log(fullName)
    console.log(phone)
    console.log(email)
    console.log(password)
    console.log(confirmPassword)
    console.log(referralCode)

  }


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
                  <select 
                    onChange={(e) => setCourseSelected(e.target.value)}
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
                <input 
                  name={'fullName'} 
                  type='text'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} 
                  title='Full Name' 
                  placeholder='Full Name' 
                  className={styles.pushDown} 
                />
                <input 
                  name={'phone'} 
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} 
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
                  value={referralCode}
                  type='text' 
                  onChange={(e) => setReferralCode(e.target.value)} title='Referral Code' 
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
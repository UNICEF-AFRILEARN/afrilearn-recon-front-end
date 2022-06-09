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

import { fetchRoles } from "../../../../store/actions/auth";

import {API} from '../../../../pages/api/client-side/fetcher';

const Register = (props) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const rolesCollected = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  
  // const profile = {}
  const rolesContext = rolesCollected.roles.data.roles;
  const courseContext = rolesCollected.roles.data.courses;
  console.log("courses from the UI ==>", courseContext);

  const handleChanges = (value) => {
      console.log(value)
    // profile[key] = value
    // console.log('User Signup Profile\n', profile)
  }

  const handleRegisterRequest = (e) => {
    e.preventDefault()
    console.log(e)

    // API.registerUser(profile).then((data) => {
    //   console.log('Registeration completed', !data?.isError)
    //   data?.isError ? console.log("Fields Errors:\n", data?.fieldsErrors) : console.log(data?.registerUser) 
    //   return data
    // })
    //Modal is displayed here after successful or failed registration....
    setShow(true);
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
                <Selectitem data={rolesContext} onChange={(value) => handleChanges('role', value)} placeholder='Select a Role' className={styles.pushDown} />
                <Selectitem data={courseContext} onChange={(value) => handleChanges('class', value)} placeholder='Select Class' className={styles.pushDown} />
                <TextInput name={'fullName'} type='text' onChange={(value) => handleChanges('fullName', value)} title='Full Name' placeholder='Full Name' className={styles.pushDown} />
                <TextInput name={'phone'} type='text' onChange={(value) => handleChanges('phone', value)} title='Phone Number' placeholder='Phone Number' className={styles.pushDown} />
                <TextInput name={'email'} type='text' onChange={(value) => handleChanges('email', value)} title='Email' placeholder='Email' className={styles.pushDown} />
                <TextInput name={'password'} type='password' onChange={(value) => handleChanges('password', value)} title='Password' placeholder='Password' />
                <TextInput name={'confirmPassword'} type='password' onChange={(value) => handleChanges('confirmPassword', value)} title='Confirm Password' placeholder='Confirm Password' />
                <TextInput name={'referralCode'} type='text' onChange={(value) => handleChanges('referralCode', value)} title='Referral Code' placeholder='Referral Code (optional)' className={`${styles.pushDown} ${styles.pushUp}`} />
                <p>By signing up, you agree to our <Link passHref href='/'><b>Terms and Privacy Policy</b></Link></p>
                <div className={`row ${styles.pushDown1}`}>
                  <Link passHref href="#">
                    <AppButton title="LOGIN" secondary type='submit' />
                  </Link>
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
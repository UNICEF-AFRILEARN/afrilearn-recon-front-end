import { Form } from 'react-bootstrap';
import Link from 'next/link';
import styles from './login.module.css';
import Image from 'next/image';
import TextInput from '../../../widgets/appTextInput';
import AppButton from "../../../widgets/buttons/AppButton";
import {API} from '../../../../pages/api/client-side/fetcher';


const Login = () => {
  const userInfo = {}
  const handleChange = (key, value) => userInfo[key] = value
  const startLogin = () => {


    API.loginDefault(userInfo).then(({
      error,
      status,
      fieldsErrors,
      user,
      token }) => {
        status === 'success' || 200 ? 
        console.log(
          `Login status\n ${status}\n`,
          `User Profile\n ${JSON.stringify(user, null, 2)}\n`,
          `Token\n ${token}`)
          :
        console.log(
        `Login status\n ${status}\n`,
        `Error Message\n ${error}\n`,
        `Fields Errors\n ${fieldsErrors}`)
      })
  }
  return (
    <>
      <div className={styles.floatImg1}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleBlack.png'} width={86} height={200} /></div>
      <div className={styles.floatImg2}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleWhite.png'} width={150} height={90} /></div>
      <div className={styles.floatImg3}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleWhite.png'} width={150} height={90} /></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-0 col-md-1 col-lg-3">  </div>
          <div className="col-xs-12 col-md-10 col-lg-6" >
            <span className={styles.card}>
              <h5 className="center">LOG IN</h5>
              <form>
                <TextInput type='text' onChange={(e) => { handleChange('email', e) }} title='Email' placeholder='Email' className={styles.pushDown} />
                <TextInput type='password' onChange={(e) => { handleChange('password', e) }} title='Password' placeholder='Password' />
                <div className={`row ${styles.pushDown1}`}>
                  <div className='col-6'>
                    <Form.Check
                      type='checkbox'
                      id='remembeme'
                      label='Remember me'
                    />
                  </div>
                  <div className='col-6 right'>
                    <Link passHref href='/reset-password'>Forgot Password?</Link>
                  </div>
                </div>
                <div className={`row ${styles.pushDown1}`}>
                  <Link passHref href="#">
                    <AppButton title="LOGIN" onClick={startLogin} secondary />
                  </Link>
                </div>
                <div className={`row ${styles.pushDown1}`}>
                  <p className={`center ${styles.socialSection}`}><small>Or log in with</small></p>
                  <div className='col-6'>
                    <span><Image alt={"design image"} src={'/assets/img/common/login/google.png'} width={23} height={23} /> <span className={styles.socialText}>Google</span></span>
                  </div>
                  <div className='col-6 right'>
                    <span><Image alt={"design image"} src={'/assets/img/common/login/facebook.png'} width={23} height={23} /> <span className={styles.socialText}>Facebook</span></span>
                  </div>
                </div>
              </form>
            </span>
            <p className={`center ${styles.afterSocialText}`}>New to Afrilearn? <Link passHref href='/register'><b>Sign Up</b></Link></p>
          </div>
          <div className="col-md-4">   </div>
        </div>
      </div>
    </>
  )
}

export default Login

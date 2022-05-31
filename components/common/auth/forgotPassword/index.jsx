import Link from 'next/link';
import styles from './forgotPassword.module.css';
import Image from 'next/image';
import TextInput from '../../../widgets/appTextInput';


const Login = () => {
  return (
<>
    <div className={styles.floatImg1}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleBlackk.png'} width={86} height={200}/></div>
    <div className={styles.floatImg2}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleWhite.png'}   width={150} height={90}/></div>
    <div className={styles.floatImg3}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleWhite.png'} width={150} height={90}/></div>
      <div className='row' >
        <div className={`col-md-4 ${styles.resetContainer}`}>   
            <h2 className="centerr">RESET PASSWORD</h2>
            <p className='centerrr'>Type your email address to send instructions to reset your password to your inbox</p>
            <form >
                <TextInput className={styles.Email} type='text' onChange={()=>{}}  placeholder='Email'/>
                <div className={`row ${styles.primaryy}`}>
                  <Link passHref href="/">
                  RESET PASSWORD
                  </Link>
                </div>               
            </form>              
        </div>
        <div >  
        <p className={`center ${styles.afterSocialText}`}>Back to <Link passHref href='/login'><b>Log In</b></Link></p> </div>
      </div>      
      </>
  )
}

export default Login

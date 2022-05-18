import Link from 'next/link';
import styles from './forgotPassword.module.css';
import Image from 'next/image';
import TextInput from '../../../widgets/appTextInput';
import AppButton from "../../../widgets/buttons/AppButton";

const Login = () => {
  return (
    <>
    <div className={styles.floatImg1}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleBlack.png'} width={86} height={200}/></div>
    <div className={styles.floatImg2}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleWhite.png'} width={150} height={90}/></div>
    <div className={styles.floatImg3}><Image alt={"design image"} src={'/assets/img/common/login/HalfCircleWhite.png'} width={150} height={90}/></div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">   </div>
        <div className="col-md-4">
          <span className={styles.card}>
            <h5 className="center">RESET PASSWORD</h5>
            <p className='center'>Type your email address to send instructions to reset your password to your inbox</p>
            <form>
                <TextInput type='text' onChange={()=>{}} title ='Email' placeholder='Email' className={styles.pushDown}/>
                <div className={`row ${styles.pushDown1}`}>
                  <Link passHref href="/">
                    <AppButton title="RESET PASSWORD" secondary />
                  </Link>
                </div>               
            </form>           
          </span>   
          <p className={`center ${styles.afterSocialText}`}>Back to <Link passHref href='/login'><b>Log In</b></Link></p>      
        </div>
        <div className="col-md-4">   </div>
      </div>      
    </div>      
    </>
  )
}

export default Login

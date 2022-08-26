import Head from 'next/head'
import ForgotPasswordComponent from '../components/common/auth/forgotPassword'

const ForgotPassword  = () => {
  return (
    <>
      <Head>
        <title>Reset Password | Myafrilearn.com</title>
        <meta name="description" content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere." />
      </Head>
      <ForgotPasswordComponent/>
    </>
  )
}

export default ForgotPassword

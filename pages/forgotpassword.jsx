import Head from 'next/head'
import ResetPassword  from '../components/common/auth/resetPassword'

const ForgotPassword  = () => {
  return (
    <>
      <Head>
        <title>Reset Password | Myafrilearn.com</title>
        <meta name="description" content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere." />
      </Head>
      <ResetPassword/>
    </>
  )
}

export default ForgotPassword

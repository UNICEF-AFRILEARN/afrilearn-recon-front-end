import Head from 'next/head'
import LoginComponent from '../components/common/auth/login'

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Myafrilearn.com</title>
        <meta name="description" content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere." />
      </Head>
      <LoginComponent/>
    </>
  )
}

export default Login

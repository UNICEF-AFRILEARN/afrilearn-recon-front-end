import Head from 'next/head'
import RegisterComponent from '../components/common/auth/register'
import { API } from './api/client-side/fetcher'

const Register = () => {

  // const { platformContext } = API.PlatformContext()

  return (
    <>
      <Head>
        <title>Create Account | Myafrilearn.com</title>
        <meta name="description" content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere." />
      </Head>
      {/* {platformContext ? <RegisterComponent platformContext={platformContext.data} /> : <big>Loading...</big>} */}
      <RegisterComponent />
    </>
  )
}

export default Register

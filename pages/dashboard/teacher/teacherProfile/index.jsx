import Head from 'next/head';
import StudentProfileComponent from "../../../../components/features/dashboard/student/studentProfile";


const TeacherProfile = () => {
  return (
    <>
      <Head>
        <title>Teacher Profile | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <StudentProfileComponent />
    </>
  );
}

export default TeacherProfile
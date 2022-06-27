import Head from "next/head";
import StudentProfileComponent from "../../../../components/features/dashboard/student/studentProfile";

const StudentProfile = () => {
  return (
    <>
      <Head>
        <title>Profile | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <StudentProfileComponent />
    </>
  );
};

export default StudentProfile;

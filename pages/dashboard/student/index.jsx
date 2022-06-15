import Head from "next/head";
import StudentDashboardComponent from "../../../components/features/dashboard/student";

const Student = () => {
  const classes = {
    class: "SSS-ONE",
  };
  return (
    <>
      <Head>
        <title>{classes.class} | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <StudentDashboardComponent />
    </>
  );
};

export default Student;

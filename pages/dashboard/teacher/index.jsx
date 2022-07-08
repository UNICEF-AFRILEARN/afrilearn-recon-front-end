import Head from "next/head";
import TeacherDashboardComponent from "../../../components/features/dashboard/teacher";

const Teacher = () => {
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
      <TeacherDashboardComponent />
    </>
  );
};

export default Teacher;

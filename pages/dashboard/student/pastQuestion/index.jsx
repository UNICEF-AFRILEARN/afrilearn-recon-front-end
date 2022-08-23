import Head from "next/head";
import PastQuestionComponent from "../../../../components/features/dashboard/student/pastQuestion";

const Pastquestion = () => {
  return (
    <>
      <Head>
        <title>PastQuestion | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <PastQuestionComponent />
    </>
  );
};

export default Pastquestion;

import Head from "next/head";
import PastQuestionPageComponent from "../../../../../components/features/dashboard/student/pastQuestion/pastquestionPage";

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
      <PastQuestionPageComponent />
    </>
  );
};

export default Pastquestion;

import Head from "next/head";
import PastExamQueComponent from "../../../../../../components/features/dashboard/student/pastQuestion/pastquestionPage/pastExamQue";

const PastExamQue = () => {
  return (
    <>
      <Head>
        <title>PastQuestion | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <PastExamQueComponent />
    </>
  );
};

export default PastExamQue;
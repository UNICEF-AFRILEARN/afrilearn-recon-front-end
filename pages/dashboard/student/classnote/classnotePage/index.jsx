import Head from "next/head";
import ClassnotePageComponent from "../../../../../components/features/dashboard/student/classnote/classnotePage";

const ClassnotePage = () => {
  return (
    <>
      <Head>
        <title>Classnote | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <ClassnotePageComponent />
    </>
  );
};

export default ClassnotePage;

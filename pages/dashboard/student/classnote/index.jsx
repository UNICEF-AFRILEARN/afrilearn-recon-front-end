import Head from "next/head";
import ClassnoteComponent from "../../../../components/features/dashboard/student/classnote";

const Classnote = () => {
  return (
    <>
      <Head>
        <title>Classnote | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <ClassnoteComponent />
    </>
  );
};

export default Classnote;

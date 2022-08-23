import Head from "next/head";
import VideoComponent from "../../../../components/features/dashboard/student/video";

const Video = () => {
  return (
    <>
      <Head>
        <title>Video | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <VideoComponent />
    </>
  );
};

export default Video;

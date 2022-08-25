import Head from "next/head";
import VideoPage from "../../../../../components/features/dashboard/student/video/videoPage";

const VideoPages = () => {
  return (
    <>
      <Head>
        <title>Video | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <VideoPage />
    </>
  );
};

export default VideoPages;

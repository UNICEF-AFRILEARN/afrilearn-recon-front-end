import Head from "next/head";
import HomeComponent from "../components/common/homepage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Afrilearn | Future of Learning</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <HomeComponent />    
    </>
  );
};

export default Home;

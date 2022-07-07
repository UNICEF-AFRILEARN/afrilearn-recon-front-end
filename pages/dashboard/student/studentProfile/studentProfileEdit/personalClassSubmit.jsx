import Head from "next/head";
import Link from "next/link";
import { Row } from "react-bootstrap";
import styles from "./studentProfileEdit.module.css";

const PersonalClassSubmit = ({data}) => {
  return (
    <>
      <Head>
        <title>Profile-Submit | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <Row className="mb-5">
        <div className={styles.profileSubmit}></div>
      </Row>
      <Row className="pt-4 mx-auto w-50">
        <p className="mx-auto text-center">
          {data} class has been successfully added to your profile
        </p>
      </Row>
      <Row className="pt-4 mx-auto w-50 pb-5">
        <Link passHref href="personalSelectionClass">
          <h5
            className="mx-auto text-center"
            style={{ color: "#00D9B6", cursor: "pointer" }}
          >
            <u>Add Another New Class</u>
          </h5>
        </Link>
      </Row>
    </>
  );
};

export default PersonalClassSubmit;

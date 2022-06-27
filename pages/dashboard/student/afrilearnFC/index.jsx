import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./afrilearn.module.css"

const Student = () => {
  return (
    <>
      <Head>
        <title>Sprint Chanlenge | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <ChanlengeDashboardComponent />
    </>
  );
};

export default Student;

const ChanlengeDashboardComponent = () => {
  return (
    <>
      <Container>
        <Row
          style={{
            width: "875px",
            height: "1194px",
            background: "#FFFFFF",
            boxShadow: "-1px 2px 50px rgba(228, 228, 228, 0.61)",
            borderRadius: "20px",
            margin: "120px auto 60px",
          }}
        >
          <Col>
            <Row className="p-5">
              <h2 className="text-center">S1 Sprint</h2>
            </Row>
            <Row className="pb-4 w-50 m-auto">
              <h2
                className="text-center"
                style={{ fontWeight: "700", fontSize: "20px" }}
              >
                Are You Ready?!
              </h2>
              <p className="text-center p-2">
                This Combat will test your resolve, speed, and accuracy but the
                reward is Bounty!
              </p>
              <p className="text-center">
                Answer as many questions as you can across English, Mathematics,
                and Biology in
              </p>
              <p
                className="text-center"
                style={{ fontWeight: "700", fontSize: "15px" }}
              >
                5 minutes
              </p>
            </Row>
            <Row className={`mx-auto ${styles.swordForFC}`}></Row>
            <Row className="w-50 m-auto mt-3">
              <p className="mt-3 text-center">TICKET: 100 Africoins </p>
              <p className="mt-3 text-center">DEADLINE: 17th August, 2021</p>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

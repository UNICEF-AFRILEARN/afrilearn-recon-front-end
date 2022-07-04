import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles1 from "./afrilearn.module.css";
import styles from "../../../../components/features/dashboard/student/pastQuestion/pastquestionPage/pastExamQue/passtExamQue.module.css";

const ExamQuestion = () => {
  return (
    <Container className="pt-3">
      <Row>
        <Col className="p-5" sm={2}>
          <Row className="text-secondary pt-4">Dashboard</Row>
        </Col>
        {/* <MyScore/> */}
        <LeaderBoard />
      </Row>
    </Container>
  );
};

export default ExamQuestion;

const LeaderBoard = () => {
  return (
    <Col className={styles.lineSeperator}>
      <Row className="p-5 mx-auto ms-5">
        <h3
          style={{
            fontWeight: "700",
            fontSize: "30px",
            color: "#29465B",
            textAlign: "center",
            display: "flex",
          }}
        >
          <div className={styles1.trophyBadge}></div>Leaderboard for S1 Sprint
        </h3>
      </Row>
      <Row className="p-5 m-5">
        <Col
          className="mx-3"
          style={{
            background: "#FFFFFF",
            // boxShadow: "-1px 2px 20px rgba(196, 196, 196, 0.41)",
            borderRadius: "35.0575px",
            width: "213.85px",
            height: "305px",
          }}
        >
          <Row className={`ms-auto  ${styles1.scoreAvatarGray}`}><p clasName="text-center m-0" style={{}}>2</p></Row>
          <Row className={`mx-auto mt-3 ${styles1.scoreAvatar}`}></Row>
          <Row className={`mx-auto mt-3`} style={{ color: "#00D9B6" }}>
            <p className="text-center">Chibuzo Amaka</p>
          </Row>
          <Row className={`mx-auto mt-3`} style={{ color: "#A8A8A8" }}>
            <p className="text-center">2,678 pts</p>
          </Row>
        </Col>
        <Col
          className="mx-3"
          style={{
            background: "#FFFFFF",
            boxShadow: "-1px 2px 20px rgba(196, 196, 196, 0.41)",
            borderRadius: "35.0575px",
            width: "213.85px",
            height: "305px",
          }}
        >
          <Row className={`ms-auto  ${styles1.scoreAvatarY}`}></Row>
          <Row className={`mx-auto mt-3 ${styles1.scoreAvatar}`}></Row>
          <Row className={`mx-auto mt-3`} style={{ color: "#00D9B6" }}>
            <p className="text-center">Chibuzo Amaka</p>
          </Row>
          <Row className={`mx-auto mt-3`} style={{ color: "#A8A8A8" }}>
            <p className="text-center">2,678 pts</p>
          </Row>
        </Col>
        <Col
          className="mx-3"
          style={{
            background: "#FFFFFF",
            // boxShadow: "-1px 2px 20px rgba(196, 196, 196, 0.41)",
            borderRadius: "35.0575px",
            width: "213.85px",
            height: "305px",
          }}
        >
          <Row className={`ms-auto  ${styles1.scoreAvatarY}`}></Row>
          <Row className={`mx-auto mt-3 ${styles1.scoreAvatar}`}></Row>
          <Row className={`mx-auto mt-3`} style={{ color: "#00D9B6" }}>
            <p className="text-center">Chibuzo Amaka</p>
          </Row>
          <Row className={`mx-auto mt-3`} style={{ color: "#A8A8A8" }}>
            <p className="text-center">2,678 pts</p>
          </Row>
        </Col>
        
      </Row>

      <Row
        className="p-3"
        style={{
          background: "#E6FBF8",
          borderRadius: "16px",
          width: "194px",
          margin: "auto",
        }}
      >
        <h3
          style={{
            fontWeight: "500",
            fontSize: "25px",
            color: "#00D9B6",
            textAlign: "center",
          }}
        >
          3463
        </h3>
      </Row>
      <Row className="m-auto w-75 pt-5">
        <Col style={{ border: "1px solid #E2E3E7" }}></Col>
      </Row>

      <Row className="m-auto w-75 pt-2">
        <Col>
          <Row className="mx-auto">
            <Col className="m-auto w-75 pt-5">
              <Row className={`mx-auto ${styles1.afrilearnRocket}`}></Row>
              <Row className={`mx-auto `}>
                <p className="text-center" style={{ color: "#C4C4C4" }}>
                  Average Speed
                </p>
              </Row>
              <Row className={`mx-auto `}>
                <p className="text-center">15 secs/question</p>
              </Row>
            </Col>
            <Col className="m-auto w-75 pt-5">
              <Row className={`mx-auto ${styles1.afrilearnRocket1}`}></Row>
              <Row className={`mx-auto `}>
                <p className="text-center" style={{ color: "#C4C4C4" }}>
                  Attempted Questions
                </p>
              </Row>
              <Row className={`mx-auto `}>
                <p className="text-center">20 Questions</p>
              </Row>
            </Col>
            <Col className="m-auto w-75 pt-5">
              <Row className={`mx-auto ${styles1.afrilearnRocket2}`}></Row>
              <Row className={`mx-auto `}>
                <p className="text-center" style={{ color: "#C4C4C4" }}>
                  Accuracy
                </p>
              </Row>
              <Row className={`mx-auto `}>
                <p className="text-center">18 Questions</p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pt-5 mt-5 mx-auto w-75">
        <Col className={`${styles1.afrilearnRocket3}`}></Col>
      </Row>
      <Row className="pt-5 mt-3 mx-auto w-75 pb-5 mb-3">
        <u className="text-center" style={{ color: "#C4C4C4" }}>
          Brag about my score!😎
        </u>
      </Row>
    </Col>
  );
};

const MyScore = () => {
  return (
    <Col className={styles.lineSeperator}>
      <Row className="p-5">
        <h3
          style={{
            fontWeight: "700",
            fontSize: "30px",
            color: "#29465B",
            textAlign: "center",
          }}
        >
          Combat Completed
        </h3>
      </Row>
      <Row className="p-5">
        <h3
          style={{
            fontWeight: "500",
            fontSize: "25px",
            color: "#29465B",
            textAlign: "center",
          }}
        >
          My Score:
        </h3>
      </Row>

      <Row
        className="p-3"
        style={{
          background: "#E6FBF8",
          borderRadius: "16px",
          width: "194px",
          margin: "auto",
        }}
      >
        <h3
          style={{
            fontWeight: "500",
            fontSize: "25px",
            color: "#00D9B6",
            textAlign: "center",
          }}
        >
          3463
        </h3>
      </Row>
      <Row className="m-auto w-75 pt-5">
        <Col style={{ border: "1px solid #E2E3E7" }}></Col>
      </Row>

      <Row className="m-auto w-75 pt-2">
        <Col>
          <Row className="mx-auto">
            <Col className="m-auto w-75 pt-5">
              <Row className={`mx-auto ${styles1.afrilearnRocket}`}></Row>
              <Row className={`mx-auto `}>
                <p className="text-center" style={{ color: "#C4C4C4" }}>
                  Average Speed
                </p>
              </Row>
              <Row className={`mx-auto `}>
                <p className="text-center">15 secs/question</p>
              </Row>
            </Col>
            <Col className="m-auto w-75 pt-5">
              <Row className={`mx-auto ${styles1.afrilearnRocket1}`}></Row>
              <Row className={`mx-auto `}>
                <p className="text-center" style={{ color: "#C4C4C4" }}>
                  Attempted Questions
                </p>
              </Row>
              <Row className={`mx-auto `}>
                <p className="text-center">20 Questions</p>
              </Row>
            </Col>
            <Col className="m-auto w-75 pt-5">
              <Row className={`mx-auto ${styles1.afrilearnRocket2}`}></Row>
              <Row className={`mx-auto `}>
                <p className="text-center" style={{ color: "#C4C4C4" }}>
                  Accuracy
                </p>
              </Row>
              <Row className={`mx-auto `}>
                <p className="text-center">18 Questions</p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pt-5 mt-5 mx-auto w-75">
        <Col className={`${styles1.afrilearnRocket3}`}></Col>
      </Row>
      <Row className="pt-5 mt-3 mx-auto w-75 pb-5 mb-3">
        <u className="text-center" style={{ color: "#C4C4C4" }}>
          Brag about my score!😎
        </u>
      </Row>
    </Col>
  );
};

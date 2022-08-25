import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles1 from "./afrilearn.module.css";
import styles from "../../../../components/features/dashboard/student/pastQuestion/pastquestionPage/pastExamQue/passtExamQue.module.css";
import { useState } from "react";

const ExamQuestion = () => {
  const [swap, setSwap] = useState(1);

  return (
    <Container className="pt-3 pb-3">
      <Row>
        <Col className="p-4" sm={2} style={{ position: "fixed" }}>
          <Row className={`text-secondary mt-5 ${styles1.scoreeffect1}`}>
            <p>Dashboard</p>
          </Row>
          <Row
            onClick={() => {
              setSwap(1);
            }}
            className={`text-secondary mt-5 ${styles1.scoreeffect2}`}
          >
            <p style={swap === 1 ? { color: "#00d9b6" } : {}}>My Score</p>
          </Row>
          <Row
            onClick={() => {
              setSwap(2);
            }}
            className={`text-secondary mt-5 ${styles1.scoreeffect3}`}
          >
            <p style={swap === 2 ? { color: "#00d9b6" } : {}}>Leaderboard</p>
          </Row>
        </Col>
        <Row className={`mb-5 ms-5 ps-5 ${styles1.lineSeperator}`}></Row>
        {swap === 1 ? <MyScore /> : <LeaderBoard />}
      </Row>
    </Container>
  );
};

export default ExamQuestion;

const LeaderBoard = () => {
  return (
    <Col className={`mb-5 ${styles.lineSeperator}`}>
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
            borderRadius: "35.0575px",
            width: "213.85px",
            height: "305px",
          }}
        >
          <Row className={`ms-auto  ${styles1.scoreAvatarGray}`}>
            <p
              clasName="text-center "
              style={{ fontSize: "24px", color: "#A8A8A8" }}
            >
              2
            </p>
          </Row>
          <Row className={`mx-auto mt-3  ms-5 ps-3`}>
            <Image
              alt={"design image"}
              src={"/assets/img/features/dashboard/student/Ellipse 100.png"}
              width={100}
              height={100}
            />
          </Row>
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
          <Row className={`mx-auto mt-3  ms-5`}>
            <Image
              alt={"design image"}
              src={"/assets/img/features/dashboard/student/Ellipse 100.png"}
              width={100}
              height={100}
            />
          </Row>
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
          <Row className={`ms-auto  ${styles1.scoreAvatarBrown}`}>
            <p
              clasName="text-center "
              style={{ fontSize: "24px", color: "#A8A8A8" }}
            >
              3
            </p>
          </Row>
          <Row className={`mx-auto mt-3 ms-5 ps-3`}>
            <Image
              alt={"design image"}
              src={"/assets/img/features/dashboard/student/Ellipse 100.png"}
              width={100}
              height={100}
              className="mx-auto"
            />
          </Row>
          <Row className={`mx-auto mt-3 ps-3`} style={{ color: "#00D9B6" }}>
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
          background: "#00D9B6",
          borderRadius: "16px",
          width: "70%",
          margin: "auto",
        }}
      >
        <Col md={3}>
          <h3
            className="ms-4"
            style={{
              fontWeight: "500",
              fontSize: "24px",
              color: "#FFFFFF",
              // textAlign: "center",
            }}
          >
            Rank
          </h3>
        </Col>
        <Col>
          <h3
            className="ms-4"
            style={{
              fontWeight: "500",
              fontSize: "24px",
              color: "#FFFFFF",
              // textAlign: "center",
            }}
          >
            User
          </h3>
        </Col>
        <Col md={3}>
          <h3
            className="ms-4"
            style={{
              fontWeight: "500",
              fontSize: "24px",
              color: "#FFFFFF",
              // textAlign: "center",
            }}
          >
            Points
          </h3>
        </Col>
      </Row>
      <Col className="mt-3">
        <Row
          className="p-3"
          style={{
            borderRadius: "16px",
            width: "70%",
            margin: "auto",
          }}
        >
          <Col md={3}>
            <h3
              className="ms-4"
              style={{
                fontWeight: "500",
                fontSize: "24px",
              }}
            >
              4
            </h3>
          </Col>
          <Col>
            <h3
              className="ms-4"
              style={{
                fontWeight: "500",
                fontSize: "24px",
              }}
            >
              Alex Oluwatofunmi
            </h3>
          </Col>
          <Col md={3}>
            <h3
              className="ms-4"
              style={{
                fontWeight: "500",
                fontSize: "24px",
              }}
            >
              2345
            </h3>
          </Col>
        </Row>
      </Col>
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

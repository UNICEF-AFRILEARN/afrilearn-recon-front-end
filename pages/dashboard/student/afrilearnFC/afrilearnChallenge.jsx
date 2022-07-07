import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../../components/features/dashboard/student/pastQuestion/pastquestionPage/pastExamQue/passtExamQue.module.css";

const ExamQuestion = () => {
  return (
    <Container className="pt-3">
      <Row>
        <Col className="p-5" sm={2}>
          <Row className="text-secondary pt-4">Dashboard</Row>
        </Col>
        <Col className={styles.lineSeperator}>
          <Row className="p-3">
            <h3
              style={{ fontWeight: "700", fontSize: "30px", color: "#29465B" }}
            >
              S1 Sprint
            </h3>
          </Row>
          <Row>
            <Col>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col
                  md={2}
                  className={`p-3 mt-5 mb-5 ${styles.challengeAvatar}`}
                ></Col>
                <Col>
                  <Row>
                    <Col
                      style={{
                        // width: "25.26px",
                        // height: "25.26px",
                        background: "#00D9B6",
                      }}
                    >
                      <p className="m-auto p-auto">1</p>
                    </Col>
                    <Col>
                      <p>2</p>
                    </Col>
                    <Col>
                      <p>3</p>
                    </Col>
                    <Col>
                      <p>4</p>
                    </Col>
                    <Col>
                      <p>5</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>

          <Row
            style={{
              fontWeight: "700",
              fontSize: "20px",
              marginLeft: "30px",
              color: "#333333",
            }}
          >
            Question 2
          </Row>
          <Row
            style={{
              fontWeight: "400",
              fontSize: "24px",
              marginLeft: "30px",
              marginTop: "30px",
              color: "#333333",
            }}
          >
            Which angle is represented in the diagram shown above?
          </Row>
          <Row>
            <Col className="pt-5 d-flex justify-content-center">
              <Image
                alt={"design image"}
                src={"/assets/img/features/dashboard/student/GroupDraw.png"}
                width={285}
                height={280}
              />
            </Col>
          </Row>
          <Row>
            <Col className="p-5 mx-5">
              <Row
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15.4996px",
                  //   transform: "matrix(1, 0, 0, -1, 0, 0)",
                  padding: "15px",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "#333333",
                    margin: "0",
                  }}
                >
                  A. 1000
                </p>
              </Row>
              <Row
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15.4996px",
                  //   transform: "matrix(1, 0, 0, -1, 0, 0)",
                  padding: "15px",

                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "#333333",
                    margin: "0",
                  }}
                >
                  B. 1000
                </p>
              </Row>
              <Row
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15.4996px",
                  //   transform: "matrix(1, 0, 0, -1, 0, 0)",
                  padding: "15px",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "#333333",
                    margin: "0",
                  }}
                >
                  C. 1000
                </p>
              </Row>
              <Row
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15.4996px",
                  //   transform: "matrix(1, 0, 0, -1, 0, 0)",
                  padding: "15px",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "#333333",
                    margin: "0",
                  }}
                >
                  D. 1000
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="pt-3 pb-3 px-5">
            <Col className={styles.pastExamButton}></Col>
            <Col className={`mx-5 ${styles.pastExamRec}`}></Col>
            <Col className={styles.pastExamFlag}></Col>
            <Col></Col>
            <Col className={styles.pastSkip}></Col>
          </Row>
        </Col>
        <Col sm={2} className="m-3 mt-5">
          <Row>
            <Col sm={5} className="pt-2 p-0">
              <p >Time Left:</p>
            </Col>
            <Col
              style={{
                background: "black",
                boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                height:"fit-content",
                padding:"5px",
              }}
            >
              <p style={{ color: "white",margin:"auto", textAlign:"center" }}>10:00 mins</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ExamQuestion;

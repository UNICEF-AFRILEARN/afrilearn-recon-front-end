<<<<<<< HEAD
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./passtExamQue.module.css";

const ExamQuestion = () => {
  return (
    <Container className="pt-3">
      <Row>
        <Col className="p-5" sm={2}>
          <Row className="text-secondary">Instruction</Row>
          <Row className="text-secondary pt-4">Dashboard</Row>
        </Col>
        <Col className={styles.lineSeperator}>
          <Row className="p-3">
            <h3
              style={{ fontWeight: "700", fontSize: "30px", color: "#29465B" }}
            >
              Agricultural Science 2000
            </h3>
          </Row>
          <Row className="p-3"></Row>
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
        <Col sm={3}>
          <div className="row">
            {/* <div className={`row ${styles.countDown}`}>
              Time left : <p className={styles.minuteQuiz}> {counter} mins</p>{" "}
            </div> */}
            <div className="row">
              <div className={`col-md-3 ${styles.Quiznumber}`}>{}</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExamQuestion;
=======
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./passtExamQue.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "bootstrap";
const ExamQuestion = () => {
  const subject = useSelector((state) => state.mySubjectCourse);

  const sub_data = {
    questions: subject.pastQuestionQue[0]?.questions,
    subject: subject.pastQuestionQue[0]?.subject_details.subject,
    year:subject.pastQuestionQue[0]?.subject_details.exam_year
  };
  return <ExamQuestionPassage sub_dat={sub_data} />;
};
export default ExamQuestion;
export const ExamQuestionPassage = ({sub_dat}) => {
  const tot_numb = sub_dat.questions.length;
  const NoArray = Array.from(
    Array(sub_dat.questions.length).keys(),
    (n) => n + 1,
  );

  const [nextQues, setNextQues] = useState(1);
  const [nextAns, setNextAns] = useState({});
  const [show, setShow] = useState(false);
  const sub_que = sub_dat.questions[+nextQues - 1];
  const handleClose = () => setShow(false);
  const handleOpen = () => {
    setNextQues(nextQues);
    setShow(true);
  };
  return (
    <Container className="pt-3">
      <Row>
        <Col className="p-5" sm={2}>
          <Row className="text-secondary">Instruction</Row>
          <Row className="text-secondary pt-4">Dashboard</Row>
        </Col>
        <Col className={styles.lineSeperator}>
          <Row className="p-3">
            <h3
              style={{ fontWeight: "700", fontSize: "30px", color: "#29465B" }}
            >
              {`${sub_dat.subject} ${sub_dat.year}`}
            </h3>
          </Row>
          <Row className="p-3"></Row>
          <Row
            style={{
              fontWeight: "700",
              fontSize: "20px",
              marginLeft: "30px",
              color: "#333333",
            }}
          >
            Question {nextQues}
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
            <div dangerouslySetInnerHTML={{ __html: sub_que.question }}></div>
          </Row>
          {sub_que.question_image ? (
            <Row>
              <Col className="pt-5 d-flex justify-content-center">
                <picture>
                  <source
                    srcSet={`https:${sub_que.question_image}`}
                    type="image/webp"
                  />
                  <img
                    src={`https:${sub_que.question_image}`}
                    alt="Landscape picture"
                    style={{ width: "100%", heigt: "100%" }}
                  />
                </picture>
              </Col>
            </Row>
          ) : (
            ""
          )}
          <Row>
            <Col className="p-5 mx-5">
              {sub_que.options[0] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",
                  }}
                  onClick={() =>
                    setNextQues(
                      nextQues < tot_numb && nextQues > 0
                        ? nextQues + 1
                        : nextQues,
                    )
                  }
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#333333",
                      margin: "0",
                    }}
                  >
                    A. {sub_que.options[0]}
                  </p>
                </Row>
              ) : (
                ""
              )}
              {sub_que.options[1] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",

                    marginTop: "20px",
                  }}
                  onClick={() =>
                    setNextQues(
                      nextQues < tot_numb && nextQues > 0
                        ? nextQues + 1
                        : nextQues,
                    )
                  }
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#333333",
                      margin: "0",
                    }}
                  >
                    B. {sub_que.options[1]}
                  </p>
                </Row>
              ) : (
                ""
              )}
              {sub_que.options[2] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",
                    marginTop: "20px",
                  }}
                  onClick={() =>
                    setNextQues(
                      nextQues < tot_numb && nextQues > 0
                        ? nextQues + 1
                        : nextQues,
                    )
                  }
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#333333",
                      margin: "0",
                    }}
                  >
                    C. {sub_que.options[2]}
                  </p>
                </Row>
              ) : (
                ""
              )}
              {sub_que.options[3] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",
                    marginTop: "20px",
                  }}
                  onClick={() =>
                    setNextQues(
                      nextQues < tot_numb && nextQues > 0
                        ? nextQues + 1
                        : nextQues,
                    )
                  }
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#333333",
                      margin: "0",
                    }}
                  >
                    D. {sub_que.options[3]}
                  </p>
                </Row>
              ) : (
                ""
              )}
              {sub_que.options[4] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",
                    marginTop: "20px",
                  }}
                  onClick={() => {
                    nextQues <= tot_numb
                      ? setNextQues(nextQues + 1)
                      : handleOpen;
                  }}
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#333333",
                      margin: "0",
                    }}
                  >
                    E. {sub_que.options[4]}
                  </p>
                </Row>
              ) : (
                ""
              )}
            </Col>
          </Row>
          <Row className="mt-3 mb-3 px-5" style={{ height: "43px" }}>
            <Col className={styles.pastExamButton}></Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  height: "30px",
                  marginTop: "5px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <div className={styles.pastExamRec}></div>
                <div className={styles.pastExamFlag}></div>
              </div>
            </Col>
            <Col className={styles.pastSkip}></Col>
          </Row>
        </Col>
        <Col sm={3}>
          <div className="row">
            <div className="row">
              {NoArray.map((no, i) => {
                return (
                  <div
                    key={i}
                    className={`col-md-3 ${styles.Quiznumber}`}
                    onClick={() => {
                      setNextQues(no);
                    }}
                  >
                    {no}
                  </div>
                );
              })}
            </div>
          </div>
          <Row className="mb-3">
            <div className={styles.attempts}>
              <div className={styles.attempts3}>
                <button></button>
                <p> Pending</p>
              </div>
              <div className={styles.attempts1}>
                <button></button> Attempted
              </div>
              <div className={styles.attempts2}>
                <button></button>Skipped
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      {/* <Modal show={show} onHide={handleClose}> */}
      {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Col>
              <h3>
                You've Reached the end of the questions, would you like to
                submit? Cancel and Click Submit if Yes
              </h3>
            </Col>
          </Modal.Title>
        </Modal.Header> */}
      {/* </Modal> */}
    </Container>
    //     micheaol@gmail.com
    // test123456
  );
};
>>>>>>> dev

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./passtExamQue.module.css";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
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
  const subject = useSelector((state) => state.mySubjectCourse);
  const tot_numb = sub_dat.questions.length;
  const NoArray = Array.from(
    Array(sub_dat.questions.length).keys(),
    (n) => n + 1,
  );

  // console.log("questions.pastQuestionQue from pastQue", questions)
  
  const [nextQues, setNextQues] = useState(1);
  const [countDisabled, setCountDisabled] = useState(false);
  const [correctAnswers, setCorrectAnswer] = useState(0);
  const [remark, setRemark] = useState("");
  const [questionLength, setQuestionLength] = useState(0)
  const [questionId, setQuestionId] = useState('')
  const [score, setScore] = useState(0)
  const [timeSpent, setTimeSpent] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [skippedQuestion, setSkippedQuestion] = useState(0);
  const [answeredIndex, setAnsweredIndex] = useState('')
  // const [submittedAnswer, setSubmittedQuestion] = useState(0);
  const [show, setShow] = useState(false);
  const sub_que = sub_dat.questions[+nextQues - 1];
  
  
  console.log("I catch questionLength you from Que ===>", sub_que); // questions and the options
  // let submittedAnswer = [];
  // let correctAnswers = [];
  // let wrongAnswers = [];
  const handleQuestionSubmit = (id) => {
    console.log("I am the option clicked", sub_que.question_id)
    console.log("I am clicked", sub_que.options.indexOf(id) === 0)
    if(sub_que.options.indexOf(id) >= 0 && sub_que.options.indexOf(id).toString() === sub_que.correct_option){
      setCorrectAnswer(correctAnswers + 1)
    }
    if(sub_que.options.indexOf(id) >= 0  && sub_que.options.indexOf(id).toString() !== sub_que.correct_option){
      setWrongAnswers(wrongAnswers + 1)
    }
    if(sub_que.options.indexOf(id) < 0){
      setSkippedQuestion(skippedQuestion + 1)
    }
    
  }

  const handleSubmit = () => {
    calculateScore()
    console.log("score ===>", score)
  }

  const calculateScore = () => {
    setScore(Math.round((correctAnswers / questionLength) * 100));
  }

  
  const disableClick = (event) => {
    event.preventDefault();
    setCountDisabled(!countDisabled);
  };

  console.log("correct", correctAnswers )
  console.log("Wrong", wrongAnswers )
  console.log("Skipped", skippedQuestion )
  console.log("timeSpent", timeSpent )


  const handleClose = () => setShow(false);
  const handleOpen = () => {
    setNextQues(nextQues);
    setShow(true);
  };


  useEffect(() => {
    setQuestionLength(subject.pastQuestionQue[0].questions.length)
  },[])
  

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
                    {setNextQues(
                      nextQues < tot_numb && nextQues > 0
                        ? nextQues + 1
                        : nextQues,
                    ),
                    handleQuestionSubmit(sub_que.options[0])
                  }
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
                    {setNextQues(
                      nextQues < tot_numb && nextQues > 0
                        ? nextQues + 1
                        : nextQues,
                    ),
                    handleQuestionSubmit(sub_que.options[1])
                  }
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
                    {setNextQues(
                      nextQues < tot_numb && nextQues > 0
                        ? nextQues + 1
                        : nextQues,
                    ),
                    handleQuestionSubmit(sub_que.options[2])
                  }
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
                    {setNextQues(
                      nextQues < tot_numb && nextQues > 0
                        ? nextQues + 1
                        : nextQues,
                    ),
                    handleQuestionSubmit(sub_que.options[3])
                  }
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
                      handleQuestionSubmit(sub_que.options[4])
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
            <Col 
             className={styles.pastExamButton}
             onClick={handleSubmit}
            ></Col>
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
            <Col 
            className={styles.pastSkip}
            onClick={handleQuestionSubmit}
            ></Col>
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
              <div 
              className={styles.attempts2}>
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

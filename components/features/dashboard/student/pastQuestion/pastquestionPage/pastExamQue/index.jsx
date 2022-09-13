import Image from "next/image";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import styles from "./passtExamQue.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import Timer from "react-compound-timer";
import { Progress } from "reactstrap";
import Swal from "sweetalert2";
import Speech from "react-speech";
import { inputChange } from "../../../../../../../redux/actions/subject";

const ExamQuestion = () => {
  const subject = useSelector((state) => state.mySubjectCourse);
  console.log(subject.pastQuestionQue[0]);
  const sub_data = {
    questions: subject.pastQuestionQue[0]?.questions,
    subject: subject.pastQuestionQue[0]?.subject_details.subject,
    year: subject.pastQuestionQue[0]?.subject_details.exam_year,
    duration: subject.pastQuestionQue[0]?.subject_details.duration,
    questionId: subject.pastQuestionQue[0]?.question_id,
    motivation: subject.pastQuestionQue[0]?.motivation,
  };
  return <ExamQuestionPassage sub_dat={sub_data} />;
};
export default ExamQuestion;
export const ExamQuestionPassage = ({ sub_dat }) => {
  const dispatch = useDispatch();
  const subject = useSelector((state) => state.mySubjectCourse);
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
  const timed = sub_dat.duration * 1000 * 60;
  const speedRange1 = timed / 4;
  const speedRange2 = (timed / 4) * 2;
  const speedRange3 = (timed / 4) * 3;
  const speed = ((timed / 4) * 1) / 60000;

  const [Amodals, setAModal] = useState(false);
  const [AveSpeed, setAveSpeed] = useState("");
  const [cray, setCray] = useState(false);
  const [modal1, setModal1] = useState(false);

  const handleNextQuestion = async (answer) => {
    if (sub_dat.motivation) {
      const CheckPoint25Percent = Math.round(0.25 * questionLength);
      const CheckPoint50Percent = Math.round(0.5 * questionLength);
      const CheckPoint75Percent = Math.round(0.75 * questionLength);
      const performanceCheckPoint = CheckPoint50Percent / 2;

      if (sub_que === CheckPoint25Percent) {
        dispatch(inputChange("motivationInterval", 0));
        dispatch(inputChange("motivateGoodPerformance", false));
        let itemNo = Math.floor(Math.random() * 5 + 1) - 1;
        dispatch(inputChange("motivationItemNo", itemNo));
        setModal1(true);
        setTimeout(function () {
          setModal1(false);
        }, 4000);
      }

      if (
        sub_que === CheckPoint50Percent &&
        subject.correctAnswers >= performanceCheckPoint
      ) {
        dispatch(inputChange("motivationInterval", 1));
        dispatch(inputChange("motivateGoodPerformance", true));
        let itemNo = Math.floor(Math.random() * 5 + 1) - 1;
        dispatch(inputChange("motivationItemNo", itemNo));
        setModal1(true);
        setTimeout(function () {
          setModal1(false);
        }, 4000);
      } else if (sub_que === CheckPoint50Percent) {
        dispatch(inputChange("motivationInterval", 1));
        dispatch(inputChange("motivateGoodPerformance", false));
        let itemNo = Math.floor(Math.random() * 5 + 1) - 1;
        dispatch(inputChange("motivationItemNo", itemNo));
        setModal1(true);
        setTimeout(function () {
          setModal1(false);
        }, 4000);
      }

      if (currentQuestion === CheckPoint75Percent) {
        dispatch(inputChange("motivationInterval", 2));
        dispatch(inputChange("motivateGoodPerformance", false));
        let itemNo = Math.floor(Math.random() * 5 + 1) - 1;
        dispatch(inputChange("motivationItemNo", itemNo));
        setModal1(true);
        setTimeout(function () {
          setModal1(false);
        }, 4000);
      }
    }

    await handleCorrectAnswerCheck(answer);
    await handleSaveAnswer(answer);
    await prepareSubmittedAnswer(answer);
    if (handleLastQuestionCheck()) {
      handleClosure();
    }
    return true;
  };
  const decodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    const element = document.createElement("div");

    function decodeHTMLEntities(str) {
      if (str && typeof str === "string") {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = "";
      }

      return str;
    }
    return decodeHTMLEntities;
  })();

  const handleTextToSpeech = () => {
    let options = "";
    for (let index = 0; index < sub_que.options.length; ++index) {
      let symbol = "A. ";
      if (index === 0) {
        symbol = "A.  ";
      } else if (index === 1) {
        symbol = "B.  ";
      } else if (index === 2) {
        symbol = "C.  ";
      } else if (index === 3) {
        symbol = "D.  ";
      } else if (index === 4) {
        symbol = "E.  ";
      }
      if (sub_que.options[index] !== "") {
        options += symbol + sub_que.options[index];
      }
    }
    return decodeEntities(sub_que.question) + options;
  };
  const handleCorrectAnswerCheck = async (answer) => {
    if (answer == sub_que.correct_option) {
      dispatch(inputChange("correctAnswers", correctAnswers + 1));
    }
  };
  const handleSaveAnswer = async (answer) => {
    props.saveUserAnswer(answer);
  };
  const prepareSubmittedAnswer = async (answer) => {
    let status = null;
    if (answer === -1) {
      status = "skipped";
    } else if (answer === sub_que.correct_option) {
      status = "correct";
    } else {
      status = "incorrect";
    }
    let response = {
      question_id: sub_que.question_id,
      option_selected: answer,
      correct_option: sub_que.correct_option,
      status,
    };
    props.populateSubmittedAnswer(response);
  };

  console.log(Amodals);
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
          <Row className="p-3">
            <Progress
              className="p-0"
              animated
              color="success"
              value={nextQues * (100 / tot_numb)}
            />
          </Row>
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
          ) : null}
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
                  onClick={() => handleNextQuestion(0)}
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
              ) : null}
              {sub_que.options[1] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",

                    marginTop: "20px",
                  }}
                  onClick={() => handleNextQuestion(1)}
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
              ) : null}
              {sub_que.options[2] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",
                    marginTop: "20px",
                  }}
                  onClick={() => handleNextQuestion(2)}
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
              ) : null}
              {sub_que.options[3] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",
                    marginTop: "20px",
                  }}
                  onClick={() => handleNextQuestion(3)}
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
              ) : null}
              {sub_que.options[4] ? (
                <Row
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.15)",
                    borderRadius: "15.4996px",
                    padding: "15px",
                    marginTop: "20px",
                  }}
                  onClick={() => handleNextQuestion(4)}
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
              ) : null}
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
                <Speech
                  id="audio"
                  text={handleTextToSpeech()}
                  textAsButton={true}
                  displayText={
                    <div className={`pointer ${styles.pastExamRec}`}></div>
                  }
                />

                <div
                  className={`pointer ${styles.pastExamFlag}`}
                  onClick={() => setAModal(true)}
                ></div>
                <Amodal
                  show={Amodals}
                  onHide={() => setAModal(false)}
                  questionId={sub_que.question_id}
                />
              </div>
            </Col>
            <Col
              className={`pointer ${styles.pastSkip}`}
              onClick={() => handleNextQuestion(-1)}
            ></Col>
          </Row>
        </Col>
        <Col sm={3}>
          <div className="row">
            {/* <span className="headingOne timerTitle">Time Left:</span>{" "} */}
            <span className="timer">
              <Timer
                initialTime={timed}
                lastUnit="m"
                direction="backward"
                checkpoints={[
                  {
                    time: 300000,
                    callback: () => setCray(true),
                  },
                  {
                    time: 600000,
                    callback: () =>
                      Swal.fire("Time Left!", "You have 10 mins left"),
                  },
                  {
                    time: speedRange3,
                    callback: () => setAveSpeed("speed", speedRange3 / 60000),
                  },
                  {
                    time: speedRange2,
                    callback: () => setAveSpeed("speed", speedRange2 / 60000),
                  },
                  {
                    time: speedRange1,
                    callback: () => setAveSpeed("speed", speedRange1 / 60000),
                  },
                  {
                    time: 0,
                    callback: () => {
                      Swal.fire(
                        "Time Up!",
                        "Thanks for attempting the test",
                      ).then(() => {
                        // if (isAuthenticated) {
                        Swal.fire(
                          "Submitted!",
                          "Your test details are recorded successfully!",
                          "success",
                        );
                        // }
                        // props.inputChange("currentQuestion", 0);
                        // props.inputChange("speed", questionTime / 60000);
                      });
                    },
                  },
                ]}
              >
                {() => (
                  <React.Fragment>
                    Time Left{" "}
                    <span
                      style={{
                        width: "120px",
                        padding: "0 8px",
                        background: cray ? "#EDB68B" : "#29465B",
                        boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      <Timer.Minutes />:<Timer.Seconds />
                      mins
                    </span>
                  </React.Fragment>
                )}
              </Timer>
            </span>
          </div>
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
      {sub_dat.motivation ? (
        <Modal show={modal1} onClick={toggle1}>
          <Modal.Body>
            <div className="container-fluid forgotPassword">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 push333">
                      <img
                        src={
                          sub_dat.motivation && sub_dat.motivationInterval === 0
                            ? "https:" +
                              sub_dat.motivations[motivationItemNo]
                                .section25Image
                            : sub_dat.motivations &&
                              sub_dat.motivationInterval === 1 &&
                              sub_dat.motivateGoodPerformance
                            ? "https:" +
                              sub_dat.motivations[motivationItemNo]
                                .section50AccuracyImage
                            : sub_dat.motivations && motivationInterval === 1
                            ? "https:" +
                              sub_dat.motivations[motivationItemNo]
                                .section50Image
                            : "https:" +
                              sub_dat.motivations[motivationItemNo]
                                .section75Image
                        }
                        alt=""
                        className="motivation"
                      />
                    </div>
                    <div className="col-12 push333 center">
                      {sub_dat.motivations && sub_dat.motivationInterval === 0
                        ? sub_dat.motivations[motivationItemNo].section25Message
                        : sub_dat.motivations &&
                          motivationInterval === 1 &&
                          motivateGoodPerformance
                        ? sub_dat.motivations[motivationItemNo]
                            .section50AccuracyMessage
                        : sub_dat.motivations &&
                          sub_dat.motivationInterval === 1
                        ? sub_dat.motivations[motivationItemNo].section50Message
                        : sub_dat.motivations[motivationItemNo]
                            .section75Message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
    </Container>
    //     micheaol@gmail.com
    // test123456
  );
};

export function Amodal(props) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const token = user?.token;
  // const [modal, setModal] = useState(false);

  // const toggle = (e) => {
  //   e.preventDefault();
  //   setModal(!modal);
  // };
  const [valued, setValued] = useState("");
  const [messages, setMessages] = useState([]);
  const handleReport = () => {
    // let questionId = questions[currentQuestion].question_id;
    let message = `The question with id ${props.questionId} has the following complaints:`;

    const data = {
      message: `${message} ${
        messages > 1
          ? messages?.map((dat) => {
              return dat;
            }) +
            "," +
            valued
          : messages + "," + valued
      }`,
    };
    // dispatch(flagQuestion(data, token));
    console.log(data);
    setValued("");
    props.onHide();
    setMessages("");
  };

  const changeHandle = (e) => {
    const reportId = e.target.id;

    // let message = `${subjectData.courseId.name}-${
    //   subjectData.mainSubjectId.name
    // } ${classnote === 1 ? "class note" : "video lesson"} with title '${
    //   props.lesson.title
    // }' has the following complaints:`;

    if (reportId === "report1") {
      setMessages((mes) => [...mes, "Typographical error, "]);
    }
    if (reportId === "report2") {
      setMessages((mes) => [...mes, "Incomplete question and answer, "]);
    }
    if (reportId === "report3") {
      setMessages((mes) => [...mes, "Images does not look quite well, "]);
    }
    if (reportId === "report4") {
      setMessages((mes) => [...mes, "No Image, "]);
    }
    if (reportId === "report5") {
      setMessages((mes) => [...mes, "Duplicate Options, "]);
    }
    if (reportId === "report6") {
      setMessages((mes) => [...mes, "Wrong Answer, "]);
    }
    if (reportId === "report7") {
      setValued(e.target.value);
    }
  };

  return (
    <>
      <Modal {...props} className="reportModalClass">
        <Modal.Header closeButton>Report An Issue</Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 push333">
                    <Form>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report1"
                          label="Typographical error"
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report2"
                          label="Incomplete question/answer"
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report3"
                          label="Image does not look quite right"
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report4"
                          label="No image"
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report5"
                          label="Duplicate option(s)"
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report6"
                          label="Wrong answer"
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="eg. Something else..."
                          id="report7"
                          value={valued}
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="row relative">
                  <div className="col-12">
                    <Button onClick={() => handleReport()}>Submit</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

import Image from 'next/image'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import styles from './passtExamQue.module.css'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Timer from 'react-compound-timer'
import { Progress } from 'reactstrap'
import Swal from 'sweetalert2'
//import Speech from "react-speech";
import {
  inputChange,
  submitLessonQuizResult,
  submitPastQuestionProgress,
  submitPastQuestionResult,
} from '../../../../../../../redux/actions/subject'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ExamQuestion = () => {
  const subject = useSelector((state) => state.mySubjectCourse)

  const router = useRouter()
  const fata =
    subject.dashboardWeb.enrolledCourse?.courseId.relatedPastQuestions.filter(
      (data) => data.pastQuestionTypes[0].name === router.query[0]
    )
  const gata = fata && fata[0]?.pastQuestionTypes[0].categoryId

  subject.pastQuestionQue[0]?.subject_details.exam_year
  const sub_data = {
    questions: subject.pastQuestionQue[0]?.questions,
    subject: subject.pastQuestionQue[0]?.subject_details.subject,
    year: subject.pastQuestionQue[0]?.subject_details.exam_year,
    duration: subject.pastQuestionQue[0]?.subject_details.duration,
    questionNo: subject.pastQuestionQue[0]?.subject_details.no_of_questions,
    questionId: subject.pastQuestionQue[0]?.question_id,
    motivation: subject.pastQuestionQue[0]?.motivations,
    category: gata,
    pastQuestion: true,
  }
  return <ExamQuestionPassage sub_dat={sub_data} />
}
export default ExamQuestion
export const ExamQuestionPassage = ({ sub_dat }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const subject = useSelector((state) => state.mySubjectCourse)
  const { user } = useSelector((state) => state.auth)
  const token = user?.token
  const tot_numb = sub_dat.questions?.length
  const NoArray = Array.from(
    Array(sub_dat.questions?.length).keys(),
    (n) => n + 1
  )

  const [nextQues, setNextQues] = useState(1)
  const [nextAns, setNextAns] = useState({})
  const [show, setShow] = useState(false)
  const sub_que = sub_dat.questions && sub_dat.questions[+nextQues - 1]
  const queNumber = +nextQues - 1
  const handleClose = () => setShow(false)
  const handleOpen = () => {
    setNextQues(nextQues)
    setShow(true)
  }
  const timed = sub_dat.duration * 1000 * 60
  const speedRange1 = timed / 4
  const speedRange2 = (timed / 4) * 2
  const speedRange3 = (timed / 4) * 3
  const speed = ((timed / 4) * 1) / 60000

  const [Amodals, setAModal] = useState(false)
  const [cray, setCray] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [motivationItemNo, setMotivationItemNo] = useState(0)
  const [motivationInterval, setMotivationInterval] = useState(0)
  const [motivateGoodPerformance, setMotivateGoodPerformance] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState([])
  // const [inCorrectAnswers, setInCorrectAnswers] = useState([]);
  const [skipQue, setSkipQue] = useState([])
  const [allAnswers, setAllAnswers] = useState({})
  const [submittedAnswer, setSubmittedAnswer] = useState([])
  const [aveSpeed, setAveSpeed] = useState([])
  const ansNumber = Object.keys(allAnswers).length

  useEffect(() => {
    for (let i = 0; i < sub_dat?.questions?.length; i++) {
      let response = {
        question_id: sub_dat.questions[i].question_id
          ? sub_dat.questions[i].question_id
          : sub_dat.questions[i].id,
        option_selected: -1,
        correct_option: sub_dat.questions[i].correct_option,
        status: 'skipped',
      }
      setSubmittedAnswer((prev) => {
        prev[i] = response
        return [...prev]
      })
      setSkipQue((prev) => {
        prev[i] = i
        return [...prev]
      })
    }
  }, [])
  const handleNextQuestion = async (answer) => {
    if (sub_dat.motivation?.length) {
      const CheckPoint25Percent = Math.round(0.25 * +sub_dat.questionNo)
      const CheckPoint50Percent = Math.round(0.5 * +sub_dat.questionNo)
      const CheckPoint75Percent = Math.round(0.75 * +sub_dat.questionNo)
      const performanceCheckPoint = Math.round(CheckPoint50Percent / 2)

      if (ansNumber === CheckPoint25Percent) {
        setMotivationInterval(0)
        setMotivateGoodPerformance(false)
        let itemNo = Math.floor(Math.random() * 5 + 1) - 1
        setMotivationItemNo(itemNo)
        setModal1(true)
        setTimeout(function () {
          setModal1(false)
        }, 4000)
      }

      if (
        ansNumber === CheckPoint50Percent &&
        correctAnswers.length >= performanceCheckPoint
      ) {
        setMotivationInterval(1)
        setMotivateGoodPerformance(true)
        let itemNo = Math.floor(Math.random() * 5 + 1) - 1
        setMotivationItemNo(itemNo)
        setModal1(true)
        setTimeout(function () {
          setModal1(false)
        }, 4000)
      } else if (ansNumber === CheckPoint50Percent) {
        setMotivationInterval(1)
        setMotivateGoodPerformance(false)
        let itemNo = Math.floor(Math.random() * 5 + 1) - 1
        setMotivationItemNo(itemNo)
        setModal1(true)
        setTimeout(function () {
          setModal1(false)
        }, 4000)
      }

      if (ansNumber === CheckPoint75Percent) {
        dispatch(inputChange('motivationInterval', 2))
        setMotivateGoodPerformance(false)
        let itemNo = Math.floor(Math.random() * 5 + 1) - 1
        dispatch(inputChange('motivationItemNo', itemNo))
        setModal1(true)
        setTimeout(function () {
          setModal1(false)
        }, 4000)
      }
    }

    // await handleCorrectAnswerCheck(answer);
    await handleSaveAnswer(answer)
    await prepareSubmittedAnswer(answer)
    // if (handleLastQuestionCheck()) {
    //
    // }
    if (nextQues < sub_dat.questions.length) {
      setNextQues(nextQues + 1)
    } else {
      handleClosure()
    }
    return true
  }
  const decodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    // const element = document.createElement("div");

    function decodeHTMLEntities(str) {
      if (str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '')
        element.innerHTML = str
        str = element.textContent
        element.textContent = ''
      }

      return str
    }
    return decodeHTMLEntities
  })()
  const handleGrade = (getEmoji = false, getDefinition = false) => {
    let average = Math.round(
      (correctAnswers.length / sub_dat.questions?.length) * 100
    )
    //    let grade = 'Unknown';
    let definition = 'Unknown Comment'
    let remark = 'Unknown Remark'
    let emoji = (
      <Image
        src={'/assets/img/features/dashboard/student/f9.gif'}
        alt="logo"
        width={26}
        height={26}
      />
    )

    if (average >= 75) {
      // grade = 'A1'
      definition = 'Excellent'
      remark =
        'Congrats, genius, that was excellent! Your Test Grade Result is A1, and we’re super proud of you. Practice more to remain ahead of the pack!'
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/a1.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    } else if (average >= 70) {
      // grade = 'B2'
      definition = 'Very Good'
      remark =
        'Awesome! Your Test Grade Result is B2. You’re very smart and we’re rooting for you! Practice more to stay ahead of the pack!'
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/b2.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    } else if (average >= 65) {
      // grade = 'B3'
      definition = 'Good'
      remark =
        'Great! Your Test Grade Result is B3. You did very well and can do even better, with more practice.'
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/b3.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    } else if (average >= 60) {
      // grade = 'C4'
      definition = 'Credit'
      remark =
        'Very good! Your Test Grade Result is C4. You did well and can do much better, with more practice. '
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/c4.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    } else if (average >= 55) {
      // grade = 'C5'
      definition = 'Credit'
      remark =
        'Good! Your Test Grade Result is C5. You did quite well and can do even better, with more practice. We believe in you.'
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/c5.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    } else if (average >= 50) {
      // grade = 'C6'
      definition = 'Credit'
      remark =
        'Fair attempt! Your Test Grade Result is C6. You did fairly well and you can improve, with more practice. '
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/c6.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    } else if (average >= 45) {
      // grade = 'D7'
      definition = 'Pass'
      remark =
        'Oops! Your Test Grade Result is D7. To ace your exam, please practice more. We strongly believe you can do better, with more practice.'
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/d7.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    } else if (average >= 40) {
      // grade = 'E8'
      definition = 'Pass'
      remark =
        'Oops! Your Test Grade Result is E8. To ace your exam, please practice more. We strongly believe you can do better, with more practice. Let’s do this!'
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/e8.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    } else {
      // grade = 'F9'
      definition = 'Fail'
      remark =
        'Ouch! We strongly advice you study better and retake the test. We know you can do a lot better, with more practice. Yes, it is possible!'
      emoji = (
        <Image
          src={'/assets/img/features/dashboard/student/f9.gif'}
          alt="logo"
          width={26}
          height={26}
        />
      )
    }
    if (getEmoji) {
      return emoji
    }
    if (getDefinition) {
      return definition
    }
    return grade
  }
  const submitData = {
    results: submittedAnswer,
    userId: user?.user?._id,
    courseId: subject?.dashboardWeb?.enrolledCourse?.id,
    subjectCategoryId: subject.pastQuestionQue[0]?.subject_details?.subject_id,
    subjectName: subject.pastQuestionQue[0]?.subject_details?.subject,
    pastQuestionCategoryId: sub_dat.category,
    pastQuestionTypeId: '5fc8e7134bfe993c34a9689c', //not needed
    subjectId: '5fc8e7134bfe993c34a9689c', //not needed
    timeSpent: `${speed}`,
    ////////
    numberOfCorrectAnswers: correctAnswers.length,
    numberOfWrongAnswers:
      sub_dat.questions?.length - (correctAnswers.length + skipQue.length),
    numberOfSkippedQuestions: skipQue.length,

    remark: handleGrade(false, true),
    score: Math.round(
      (correctAnswers.length / sub_dat.questions?.length) * 100
    ),
  }
  const submitQuiz = {
    results: submittedAnswer,
    userId: user?.user?._id,
    courseId: subject?.dashboardWeb?.enrolledCourse?.id,
    subjectId: subject.subjectDetails[0]?.subject.mainSubjectId.id,
    lessonId: sub_dat.quizLessonId,
    subjectName: subject.subjectDetails[0]?.subject.mainSubjectId.name,
    pastQuestionTypeId: '5fc8e7134bfe993c34a9689c', //not needed
    subjectId: '5fc8e7134bfe993c34a9689c', //not needed
    timeSpent: `${speed}`,
    ////////
    numberOfCorrectAnswers: correctAnswers.length,
    numberOfWrongAnswers:
      sub_dat.questions?.length - (correctAnswers.length + skipQue.length),
    numberOfSkippedQuestions: skipQue.length,

    remark: handleGrade(false, true),
    score: Math.round(
      (correctAnswers.length / sub_dat.questions?.length) * 100
    ),
  }
  const progress = {
    subjectCategoryId: subject.pastQuestionQue[0]?.subject_details?.subject_id,
    pastQuestionCategoryId: sub_dat.category,
    courseId: subject?.dashboardWeb?.enrolledCourse?.id,
  }
  const quizLessonId = sub_dat.quizLessonId
  const submitttedData = sub_dat.pastQuestion ? 'pastQue' : 'Quiz'
  const content = sub_dat.pastQuestion && router.query[0]
  const content1 = sub_dat.pastQuestion ? router.query[1] : sub_dat.quary
  ////////////////////////////////////////////////////////////////////////
  const SubmitFunc = (analysis) => {
    if (analysis === 'pastQue') {
      dispatch(submitPastQuestionResult(submitData, token))
      dispatch(submitPastQuestionProgress(progress, token))
    } else {
      dispatch(submitLessonQuizResult(submitQuiz, quizLessonId, token))
      // console.log(submitQuiz);
    }
  }
  const handleClosure = async () => {
    Swal.fire({
      title: 'Do you want to submit?',
      text: 'Sure you’re ready to submit?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Submitted!',
          'Your test details are been recorded.',
          'success'
        )

        SubmitFunc(submitttedData)
        router.push({
          pathname: '/quiz/extra/quizResult',
          query: [content, content1],
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          "That's the last question, you cannot continue",
          'error'
        )
      }
    })
  }
  //////////////////////////////////////////////////////////
  const handleTextToSpeech = () => {
    let options = ''
    for (let index = 0; index < sub_que?.options.length; ++index) {
      let symbol = 'A. '
      if (index === 0) {
        symbol = 'A.  '
      } else if (index === 1) {
        symbol = 'B.  '
      } else if (index === 2) {
        symbol = 'C.  '
      } else if (index === 3) {
        symbol = 'D.  '
      } else if (index === 4) {
        symbol = 'E.  '
      }
      if (sub_que.options[index] !== '') {
        options += symbol + sub_que.options[index]
      }
    }
    return decodeEntities(sub_que?.question) + options
  }
  ////////////////////////////////////////////
  const handleSaveAnswer = async (answer) => {
    // props.saveUserAnswer(answer);
    let answers = []

    setAllAnswers((prevState) => {
      {
        prevState[+nextQues - 1] = answer
      }
      return { ...prevState }
    })
    setSkipQue((prev) => {
      let pre = prev.filter((lin) => lin !== +nextQues - 1)
      if (answer === -1) {
        return [...pre, +nextQues - 1]
      } else {
        return [...pre]
      }
    })

    // if (answer === +sub_que.correct_option) {
    setCorrectAnswers((prev) => {
      let pre = prev.filter((lin) => lin !== +nextQues - 1)
      if (answer === +sub_que.correct_option) {
        return [...pre, +nextQues - 1]
      } else {
        return [...pre]
      }
    })
  }

  const prepareSubmittedAnswer = async (answer) => {
    let status = null
    if (answer === -1) {
      status = 'skipped'
    } else if (answer === +sub_que.correct_option) {
      status = 'correct'
    } else {
      status = 'incorrect'
    }
    let response = {
      question_id: sub_que.question_id ? sub_que.question_id : sub_que.id,
      option_selected: answer,
      correct_option: sub_que.correct_option,
      status,
    }
    setSubmittedAnswer((prev) => {
      prev[queNumber] = response
      return [...prev]
    })
  }

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
              style={{ fontWeight: '700', fontSize: '30px', color: '#29465B' }}
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
              fontWeight: '700',
              fontSize: '20px',
              marginLeft: '30px',
              color: '#333333',
            }}
          >
            Question {nextQues}
          </Row>
          <Row
            style={{
              fontWeight: '400',
              fontSize: '24px',
              marginLeft: '30px',
              marginTop: '30px',
              color: '#333333',
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: sub_que?.question }}></div>
          </Row>
          {sub_que?.question_image ? (
            <Row>
              <Col className="pt-5 d-flex justify-content-center center">
                <picture>
                  <img
                    src={`https:${sub_que.question_image}`}
                    alt="Landscape picture"
                    style={{ width: '50%', heigt: '50%' }}
                  />
                </picture>
                {/* <picture>
                  <source
                    srcSet={`https:${sub_que.question_image}`}
                    type="image/webp"
                  />
                  <Image
                    src={`https:${sub_que.question_image}`}
                    alt="Landscape picture"
                    width="100%"
                    height="100%"
                    style={{ width: "100%", heigt: "100%" }}
                  />
                </picture> */}
              </Col>
            </Row>
          ) : null}
          <Row>
            <Col className={`p-5 mx-5 ${styles.noSelect}`}>
              {sub_que?.options[0] ? (
                <Row
                  style={{
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.15)',
                    borderRadius: '15.4996px',
                    padding: '15px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleNextQuestion(0)}
                >
                  <p
                    style={{
                      fontWeight: '500',
                      fontSize: '18px',
                      color: '#333333',
                      margin: '0',
                    }}
                  >
                    A. {sub_que?.options[0]}
                  </p>
                </Row>
              ) : null}
              {sub_que?.options[1] ? (
                <Row
                  style={{
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.15)',
                    borderRadius: '15.4996px',
                    padding: '15px',
                    cursor: 'pointer',
                    marginTop: '20px',
                  }}
                  onClick={() => handleNextQuestion(1)}
                >
                  <p
                    style={{
                      fontWeight: '500',
                      fontSize: '18px',
                      color: '#333333',
                      margin: '0',
                    }}
                  >
                    B. {sub_que?.options[1]}
                  </p>
                </Row>
              ) : null}
              {sub_que?.options[2] ? (
                <Row
                  style={{
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.15)',
                    borderRadius: '15.4996px',
                    padding: '15px',
                    marginTop: '20px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleNextQuestion(2)}
                >
                  <p
                    style={{
                      fontWeight: '500',
                      fontSize: '18px',
                      color: '#333333',
                      margin: '0',
                    }}
                  >
                    C. {sub_que?.options[2]}
                  </p>
                </Row>
              ) : null}
              {sub_que?.options[3] ? (
                <Row
                  style={{
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.15)',
                    borderRadius: '15.4996px',
                    padding: '15px',
                    marginTop: '20px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleNextQuestion(3)}
                >
                  <p
                    style={{
                      fontWeight: '500',
                      fontSize: '18px',
                      color: '#333333',
                      margin: '0',
                    }}
                  >
                    D. {sub_que?.options[3]}
                  </p>
                </Row>
              ) : null}
              {sub_que?.options[4] ? (
                <Row
                  style={{
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.15)',
                    borderRadius: '15.4996px',
                    padding: '15px',
                    marginTop: '20px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleNextQuestion(4)}
                >
                  <p
                    style={{
                      fontWeight: '500',
                      fontSize: '18px',
                      color: '#333333',
                      margin: '0',
                    }}
                  >
                    E. {sub_que?.options[4]}
                  </p>
                </Row>
              ) : null}
            </Col>
          </Row>
          <Row className="mt-3 mb-3 px-5" style={{ height: '43px' }}>
            <Col
              className={`pointer ${styles.pastExamButton}`}
              onClick={() => handleClosure()}
            ></Col>
            <Col>
              <div
                style={{
                  display: 'flex',
                  height: '30px',
                  marginTop: '5px',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                {/* <Speech
                  id="audio"
                  text={handleTextToSpeech()}
                  textAsButton={true}
                  displayText={
                    <div className={`pointer ${styles.pastExamRec}`}></div>
                  }
                /> */}

                <div
                  className={`pointer ${styles.pastExamFlag}`}
                  onClick={() => setAModal(true)}
                ></div>
                <Amodal
                  show={Amodals}
                  onHide={() => setAModal(false)}
                  questionId={sub_que?.question_id}
                  content={content}
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
          {sub_dat.duration && (
            <div className="row">
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
                        Swal.fire('Time Left!', 'You have 10 mins left'),
                    },
                    {
                      time: speedRange3,
                      callback: () => setAveSpeed('speed', speedRange3 / 60000),
                    },
                    {
                      time: speedRange2,
                      callback: () => setAveSpeed('speed', speedRange2 / 60000),
                    },
                    {
                      time: speedRange1,
                      callback: () => setAveSpeed('speed', speedRange1 / 60000),
                    },
                    {
                      time: 0,
                      callback: () => {
                        Swal.fire(
                          'Time Up!',
                          'Thanks for attempting the test'
                        ).then(() => {
                          // if (isAuthenticated) {
                          Swal.fire(
                            'Submitted!',
                            'Your test details are recorded successfully!',
                            'success'
                          )
                          // }
                          // props.inputChange("currentQuestion", 0);
                          // props.inputChange("speed", questionTime / 60000);
                        })
                      },
                    },
                  ]}
                >
                  {() => (
                    <React.Fragment>
                      Time Left{' '}
                      <span
                        style={{
                          width: '120px',
                          padding: '0 8px',
                          background: cray ? '#EDB68B' : '#29465B',
                          boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.1)',
                          borderRadius: '5px',
                          color: 'white',
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
          )}
          <div className="row">
            <div className="row">
              {NoArray.map((no, i) => {
                return (
                  <div
                    key={i}
                    className={`col-md-3 ${styles.Quiznumber}`}
                    style={{
                      background:
                        allAnswers[i] > -1
                          ? '#00D9B6'
                          : allAnswers[i] === -1
                          ? '#FFB600'
                          : '#FFFFFF',
                    }}
                    onClick={() => {
                      setNextQues(no)
                    }}
                  >
                    {no}
                  </div>
                )
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
        <Modal show={modal1} onHide={() => setModal1(!modal1)}>
          <Modal.Body>
            <div className="container-fluid forgotPassword">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 push333 center">
                      {/* <Image
                        alt={"design image"}
                        src={"/assets/Image/common/login/HalfCircleBlackk.png"}
                        width={86}
                        height={100}
                      /> */}
                      <picture className="m-auto">
                        <source
                          srcSet={
                            sub_dat.motivation && motivationInterval === 0
                              ? 'https:' +
                                sub_dat.motivation[motivationItemNo]
                                  .section25Image
                              : sub_dat.motivation &&
                                motivationInterval === 1 &&
                                motivateGoodPerformance
                              ? 'https:' +
                                sub_dat.motivation[motivationItemNo]
                                  .section50AccuracyImage
                              : sub_dat.motivation && motivationInterval === 1
                              ? 'https:' +
                                sub_dat.motivation[motivationItemNo]
                                  .section50Image
                              : 'https:' +
                                sub_dat.motivation[motivationItemNo]
                                  .section75Image
                          }
                          type="image/webp"
                        />
                        <img
                          src={
                            sub_dat.motivation && motivationInterval === 0
                              ? 'https:' +
                                sub_dat.motivation[motivationItemNo]
                                  .section25Image
                              : sub_dat.motivation &&
                                motivationInterval === 1 &&
                                motivateGoodPerformance
                              ? 'https:' +
                                sub_dat.motivation[motivationItemNo]
                                  .section50AccuracyImage
                              : sub_dat.motivation && motivationInterval === 1
                              ? 'https:' +
                                sub_dat.motivation[motivationItemNo]
                                  .section50Image
                              : 'https:' +
                                sub_dat.motivation[motivationItemNo]
                                  .section75Image
                          }
                          alt="Motivation picture"
                          style={{ width: '100px', heigt: '100px' }}
                        />
                      </picture>
                    </div>
                    <div className="col-12 push333 center">
                      {sub_dat.motivation && motivationInterval === 0
                        ? sub_dat.motivation[motivationItemNo].section25Message
                        : sub_dat.motivation &&
                          motivationInterval === 1 &&
                          motivateGoodPerformance
                        ? sub_dat.motivation[motivationItemNo]
                            .section50AccuracyMessage
                        : sub_dat.motivation && motivationInterval === 1
                        ? sub_dat.motivation[motivationItemNo].section50Message
                        : sub_dat.motivation[motivationItemNo].section75Message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        ''
      )}
    </Container>
    //     micheaol@gmail.com
    // test123456
  )
}

export function Amodal(props) {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const token = user?.token
  // const [modal, setModal] = useState(false);

  // const toggle = (e) => {
  //   e.preventDefault();
  //   setModal(!modal);
  // };
  const [valued, setValued] = useState('')
  const [messages, setMessages] = useState([])
  const handleReport = () => {
    // let questionId = questions[currentQuestion].question_id;
    let message = `The question with id ${props.questionId} has the following complaints:`

    const data = {
      message: `${message} ${
        messages > 1
          ? messages?.map((dat) => {
              return dat
            }) +
            ',' +
            valued
          : messages + ',' + valued
      }`,
    }
    // dispatch(flagQuestion(data, token));
    setValued('')
    props.onHide()
    setMessages('')
  }

  const changeHandle = (e) => {
    const reportId = e.target.id

    // let message = `${subjectData.courseId.name}-${
    //   subjectData.mainSubjectId.name
    // } ${classnote === 1 ? "class note" : "video lesson"} with title '${
    //   props.lesson.title
    // }' has the following complaints:`;

    if (reportId === 'report1') {
      setMessages((mes) => [...mes, 'Typographical error, '])
    }
    if (reportId === 'report2') {
      setMessages((mes) => [...mes, 'Incomplete question and answer, '])
    }
    if (reportId === 'report3') {
      setMessages((mes) => [...mes, 'Images does not look quite well, '])
    }
    if (reportId === 'report4') {
      setMessages((mes) => [...mes, 'No Image, '])
    }
    if (reportId === 'report5') {
      setMessages((mes) => [...mes, 'Duplicate Options, '])
    }
    if (reportId === 'report6') {
      setMessages((mes) => [...mes, 'Wrong Answer, '])
    }
    if (reportId === 'report7') {
      setValued(e.target.value)
    }
  }

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
                  <Link
                    href={{
                      pathname: '/quiz/extra/quizResult',
                      query: [props.content],
                    }}
                    className="col-12"
                  >
                    <Button onClick={() => handleReport()}>Submit</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

import Link from 'next/link'
import * as React from 'react'
import Image from 'next/image'
import QuizNumber from '../extra/quizNumberr'
import QuizQuestion from '../extra/quizQuestion'
import styles from '../../../styles/quiz.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

// import QuizNumber from "./quizNumberr";

const QuizReview = () => {
  const subject = useSelector((state) => state.mySubjectCourse)
  const router = useRouter()
  let quary = router.query[0]
  const fata = subject.subjectDetails[1]?.relatedLessons.filter(
    (data) => data.id === subject.quizAnswers.results.lessonId
  )

  // console.log(subject)
  // console.log(fata)
  const pastQuestions = subject.pastQuestionQue[0]?.questions
  const gata = fata && fata[0]?.title
  const questions = fata ? fata[0]?.questions : pastQuestions

  const [nextQues, setNextQues] = React.useState(1)
  const [optionSelected, setOptionSelected] = React.useState(null)
  const [correctOption, setCorrectOption] = React.useState(null)
  const hata = subject.quizAnswers.results?.results.filter(
    (data) => data.question_id === questions[+nextQues - 1]?.id
  )
  const jata = subject.answers.results?.results.filter(
    (data) => data.question_id === questions[+nextQues - 1]?.question_id
  )

  React.useEffect(() => {
    setOptionSelected(
      !quary ? hata[0].option_selected : jata[0].option_selected
    ),
      setCorrectOption(!quary ? hata[0].correct_option : jata[0].correct_option)
  }, [nextQues])
  const Quizdata = {
    subject: quary ? `${quary} Past Qustion Result` : gata,
    questionNum: `Question ${nextQues}`,
    question: questions && questions[+nextQues - 1].question,
    option: questions && questions[+nextQues - 1].options,
  }
  const NoArray = Array.from(Array(questions?.length).keys(), (n) => n + 1)
  const allAnswers = !quary
    ? subject.quizAnswers.results?.results
    : subject.answers.results.results
  const markOptions = (i) => {
    const jata = subject.answers.results?.results.filter(
      (data) =>
        subject.pastQuestionQue[0].question[i].question_id === data.question_id
    )
    return jata[0]
  }
  // console.log(optionSelected)
  // console.log(correctOption)
  return (
    <>
      <div className={`row ${styles.QuizreviewContainer}`}>
        <div className={`col-md-3 ${styles.FirstQuizDiv}`}>
          <div className={styles.leftDivv}>
            <Link passHref href="/">
              <p>Dashboard</p>
            </Link>
          </div>
        </div>
        <div className={`col-md-6 ${styles.QuizquestionDiv}`}>
          <>
            <div className={`row ${styles.QuizNumber}`}>
              <div className={styles.QuizNumberSubject}>
                <h4>{Quizdata?.subject}</h4>
              </div>
              <div className={styles.QuizNumberQuestionNum}>
                <p>{Quizdata?.questionNum}</p>
              </div>
              <div className={styles.QuizNumberQuestion}>
                <p dangerouslySetInnerHTML={{ __html: Quizdata?.question }}></p>
              </div>
              <div>{Quizdata?.diagram}</div>
              <div className={styles.options}>
                {Quizdata?.option && Quizdata?.option[0] && (
                  <div className={styles.quizOption}>
                    <button
                      style={{
                        background:
                          +correctOption === 0
                            ? '#00D9B6'
                            : +optionSelected === 0
                            ? '#FF4939'
                            : '#FFFFFF',
                      }}
                    >
                      A . {Quizdata?.option[0]}
                    </button>
                  </div>
                )}
                {Quizdata?.option && Quizdata?.option[1] && (
                  <div className={styles.quizOption}>
                    <button
                      style={{
                        background:
                          +correctOption === 1
                            ? '#00D9B6'
                            : +optionSelected === 1
                            ? '#FF4939'
                            : '#FFFFFF',
                      }}
                    >
                      B . {Quizdata?.option[1]}
                    </button>
                  </div>
                )}
                {Quizdata?.option && Quizdata?.option[2] && (
                  <div className={styles.quizOption}>
                    <button
                      style={{
                        background:
                          +correctOption === 2
                            ? '#00D9B6'
                            : +optionSelected === 2
                            ? '#FF4939'
                            : '#FFFFFF',
                      }}
                    >
                      C . {Quizdata?.option[2]}
                    </button>
                  </div>
                )}
                {Quizdata?.option && Quizdata?.option[3] && (
                  <div className={styles.quizOption}>
                    <button
                      style={{
                        background:
                          +correctOption === 3
                            ? '#00D9B6'
                            : +optionSelected === 3
                            ? '#FF4939'
                            : '#FFFFFF',
                      }}
                    >
                      D . {Quizdata?.option[3]}
                    </button>
                  </div>
                )}
                {Quizdata?.option && Quizdata?.option[4] && (
                  <div className={styles.quizOption}>
                    <button
                      style={{
                        background:
                          +correctOption === 4
                            ? '#00D9B6'
                            : +optionSelected === 4
                            ? '#FF4939'
                            : '#FFFFFF',
                      }}
                    >
                      E . {Quizdata?.option[4]}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
          <div className={styles.prevSection}>
            <div className={`col-md-6 ${styles.PrevLink} `}>
              {nextQues - 1 > 0 && (
                <button onClick={() => setNextQues(nextQues - 1)}>Prev</button>
              )}
            </div>

            <div>
              {' '}
              <div className={`col-md-6 ${styles.Nextbutton} `}>
                {nextQues < questions?.length && (
                  <button onClick={() => setNextQues(nextQues + 1)}>
                    NEXT
                  </button>
                )}
              </div>
            </div>
          </div>
          <div>
            <QuizSolution />
            <div className={styles.recommendation}>
              <h4>Recommendations for you</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          {/* {quary && (
            <div className="row">
              {NoArray.map((no, i) => {
                return (
                  <div
                    key={i}
                    className={`col-md-3 ${styles.Quiznumber}`}
                    style={{
                      background:
                        markOptions(i).status === 'correct'
                          ? '#00D9B6'
                          : markOptions(i).status === 'incorrect'
                          ? '#FF4939'
                          : '#FFB600',
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
          )} */}
          {/* {!quary && ( */}
          <div className="row">
            {NoArray.map((no, i) => {
              return (
                <div
                  key={i}
                  className={`col-md-3 ${styles.Quiznumber}`}
                  style={{
                    background:
                      allAnswers[i]?.status === 'correct'
                        ? '#00D9B6'
                        : allAnswers[i].status === 'incorrect'
                        ? '#FF4939'
                        : '#FFB600',
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
          {/* )} */}
          <div className={styles.attempts}>
            <div className={styles.correctionButton3}>
              <button></button>
              <p> Correct</p>
            </div>
            <div className={styles.correctionButton1}>
              <button></button> Wrong
            </div>
            <div className={styles.correctionButton2}>
              <button></button>Skipped
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const QuizSolution = () => {
  return (
    <div>
      <div className={styles.solutionSection}>
        <h4>Solution</h4>
      </div>
      <div>
        <p>
          Need solutions review with personalized lesson to practice your
          mistakes?
        </p>
      </div>
      <div className={` ${styles.trailSection}`}>
        <div className={styles.trailLink}>
          <Link passHref href="/trial">
            <p className="pointer">Get 15-day Afrilearn Pro free trial. </p>
          </Link>
        </div>
        <div className="">
          {' '}
          Cancel any time. We'll remind you 3 days before your trial ends.
        </div>
      </div>
      <Link passHref href="/trial">
        <div className={`pointer ${styles.solutionButton}`}></div>
      </Link>
    </div>
  )
}

export default QuizReview

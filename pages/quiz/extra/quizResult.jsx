import Link from 'next/link'
import * as React from 'react'
import styles from '../../../styles/quiz.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useSelector } from 'react-redux'

const QuizResult = () => {
  const subject = useSelector((state) => state.mySubjectCourse)

  const { user } = useSelector((state) => state.auth)
  const router = useRouter()
  let quary = router.query[0]
  // console.log(user);
  // console.log(quary ? true : false);
  console.log(subject)
  const correct = quary
    ? subject.answers.results?.numberOfCorrectAnswers
    : subject?.quizAnswers?.results?.numberOfCorrectAnswers
  const skip = quary
    ? subject?.answers?.results?.numberOfSkippedQuestions
    : subject?.quizAnswers?.results?.numberOfSkippedQuestions
  const inCorrect = quary
    ? subject.answers.results?.numberOfWrongAnswers
    : subject?.quizAnswers?.results?.numberOfWrongAnswers
  const data = [
    { name: `Correct: ${correct}`, value: correct },
    { name: `Incorrect: ${inCorrect}`, value: inCorrect },
    { name: `Skipped: ${skip}`, value: skip },
  ]
  const COLORS = ['#00D9B6', '#FF4939', '#FFCF35']

  const fata = subject.subjectDetails[1]?.relatedLessons.filter(
    (data) => data.id === subject.quizAnswers.results?.lessonId
  )
  const gata = fata && fata[0]?.title
  const resultData = {
    subject: quary ? `${quary} Past Qustion Result` : gata,
    feedback: `Well done ${
      user.user?.fullName.split(' ')[0]
    }. That was a nice try, you can do better next time! Keep up learning and do not stop practicing too `,
    matric: 'Metrics',
    grade: 'Grade',
    score: quary
      ? `${subject.answers.results.score}%`
      : `${subject?.quizAnswers?.results?.score}%`,
    // percentage: quary
    //   ? `${subject?.answers?.results?.numberOfCorrectAnswers} out of ${subject?.answers?.results?.results?.length}`
    //   : `${subject?.quizAnswers?.results?.numberOfCorrectAnswers} out of ${subject.quizAnswers.results.results?.length}`,
    remark: quary
      ? subject.answers.results.remark
      : subject.quizAnswers?.results?.remark,
  }

  return (
    <>
      <div className={`row ${styles.QuizreviewContainer}`}>
        <div className={`col-md-3 ${styles.FirstQuizDiv}`}>
          <div className={styles.leftDivv}>
            <Link passHref href="/">
              Dashboard
            </Link>
          </div>
        </div>
        <div className={`col-md-6 ${styles.resultQuiz}`}>
          <div className={styles.heading}>
            <h4>{resultData?.subject}</h4>
            <p>
              {resultData?.feedback}{' '}
              <Image
                alt={'design image'}
                src={'/assets/img/common/Quiz/goodluck.png'}
                width={25}
                height={25}
              />
            </p>

            <div className={styles.resultMatric}>
              <h6>{resultData?.matric}</h6>
              <div className={styles.chartReview}>
                <div className="">
                  <PieChart width={500} height={200} className={styles.chart}>
                    <Pie
                      data={data}
                      // cx="50%"
                      // cy="50%"
                      className={styles.chart}
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend
                      iconSize={5}
                      align="right"
                      layout="vertical"
                      verticalAlign="middle"
                    />
                  </PieChart>
                </div>
              </div>
            </div>
            <div className={styles.resultMatric}>
              <h6> {resultData?.grade}</h6>
            </div>
            <div className="row">
              <div className={`col-md-1 ${styles.quizText}`}>
                {' '}
                <Image
                  alt={'design image'}
                  src="/assets/img/common/Quiz/Tick Square.png"
                  width={'25px'}
                  height={'25px'}
                />
              </div>
              <div className={`col-md-6 ${styles.quizText}`}>
                {' '}
                <p>Score</p>
              </div>
              <div className={`col-md-5 ${styles.quizText}`}>
                {' '}
                <p>{resultData?.score} </p>
              </div>
            </div>
            <div className="row">
              <div className={`col-md-1 ${styles.quizText}`}>
                {' '}
                <Image
                  alt={'design image'}
                  src="/assets/img/common/Quiz/percent 2.png"
                  width={'20px'}
                  height={'20px'}
                />
              </div>
              <div className={`col-md-6 ${styles.quizText}`}>
                {' '}
                <p>Percentage</p>
              </div>
              <div className={`col-md-5 ${styles.quizText}`}>
                {' '}
                <p>{resultData?.percentage} </p>
              </div>
            </div>
            <div className="row">
              <div className={`col-md-1 ${styles.quizText}`}>
                {' '}
                <Image
                  alt={'design image'}
                  src="/assets/img/common/Quiz/Chat.svg"
                  width={'25px'}
                  height={'25px'}
                />
              </div>
              <div className={`col-md-6 ${styles.quizText}`}>
                {' '}
                <p>Remark</p>
              </div>
              <div className={`col-md-5 ${styles.quizText}`}>
                {' '}
                <p>{resultData?.remark} </p>
              </div>
            </div>
          </div>
          <div className={`row ${styles.buttonSection}`}>
            {!quary ? (
              <div className={`col-md-3 ${styles.quizSubmit}`}>
                <button
                  className="px-3"
                  onClick={() =>
                    router.push({
                      pathname: '/quiz',
                      query: [router.query[1]],
                    })
                  }
                >
                  {' '}
                  RETAKE QUIZ
                </button>
              </div>
            ) : (
              <div className={`col-md-5 ${styles.quizSubmit}`}>
                <button
                  className="px-3"
                  onClick={() =>
                    router.push({
                      pathname:
                        '/dashboard/student/pastQuestion/pastQuestionPage',
                      query: [router.query[0], router.query[1]],
                    })
                  }
                >
                  {' '}
                  RETAKE PAST-QUESTION
                </button>
              </div>
            )}
            <div className={`col-md-3 ${styles.quizReview}`}>
              <Link
                passHref
                href={{
                  pathname: '/quiz/extra/quizReview',
                  query: [router.query[0], router.query[1]],
                }}
              >
                Review Answers
              </Link>
            </div>
            <div className={styles.retakeQuiz}>
              <Image
                alt={'design image'}
                src="/assets/img/common/quiz/share.png"
                width={'20px'}
                height={'20px'}
              />{' '}
              <Link passHref href="/">
                Share result
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizResult

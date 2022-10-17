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

  const correct = quary
    ? subject?.answers?.results?.results.filter(
        (data) => data?.status === 'correct'
      ).length
    : subject?.quizAnswers?.results?.results.filter(
        (data) => data?.status === 'correct'
      ).length
  const skip = quary
    ? subject?.answers?.results?.results.filter(
        (data) => data?.status === 'skipped'
      ).length
    : subject?.quizAnswers?.results?.results.filter(
        (data) => data?.status === 'skipped'
      ).length
  const inCorrect = quary
    ? subject?.answers?.results?.results.filter(
        (data) => data?.status === 'incorrect'
      ).length
    : subject?.quizAnswers?.results?.results.filter(
        (data) => data?.status === 'incorrect'
      ).length
  const data = [
    { name: `Correct: ${correct}`, value: correct },
    { name: `Incorrect: ${inCorrect}`, value: inCorrect },
    { name: `Skipped: ${skip}`, value: skip },
  ]
  const COLORS = ['#00D9B6', '#FF4939', '#FFCF35']

  const fata = subject.subjectDetails[1]?.relatedLessons.filter(
    (data) => data.id === subject.quizAnswers.results?.lessonId
  )
  const handleGrade = (getEmoji = false, getDefinition = false) => {
    let average = quary
      ? Math.round((correct / subject?.answers?.results?.results.length) * 100)
      : Math.round(
          (correct / subject?.quizAnswers?.results?.results.length) * 100
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
  const gata = fata && fata[0]?.title
  const resultData = {
    subject: quary ? `${quary} Past Qustion Result` : gata,
    feedback: `Well done ${
      user.user?.fullName.split(' ')[0]
    }. That was a nice try, you can do better next time! Keep up learning and do not stop practicing too `,
    matric: 'Metrics',
    grade: 'Grade',
    percentage: quary
      ? `${Math.round(
          (correct / subject?.answers?.results?.results.length) * 100
        )}%`
      : `${Math.round(
          (correct / subject?.quizAnswers?.results?.results.length) * 100
        )}%`,
    score: quary
      ? `${correct} out of ${subject?.answers?.results?.results.length}`
      : `${correct} out of ${subject?.quizAnswers?.results?.results.length}`,
    remark: handleGrade(false, true),
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

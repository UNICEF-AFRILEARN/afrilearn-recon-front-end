import Link from "next/link";
import * as React from "react";
import styles from "../../../styles/quiz.module.css";

const QuizResult = () => {
  const resultData = {
    subject: "Geometrical Construction(2): Angles",
    feedback:
      "Well done Feyikemi. That was a nice try, you can do better next time! Keep up learning and do not stop practicing too ",
    matric: "Metrics",
    grade: "Grade",
    score: "Score",
    percentage: "Percentage",
    remark: "Remark",
  };
 
  return (
    <>
      <div className="row">
        <div className={`col-md-3 ${styles.FirstQuizDiv}`}>
          <div className={styles.leftDiv}>
            <Link passHref href="/">
              Dashboard
            </Link>
          </div>
        </div>
        <div className={`col-md-6 ${styles.resultQuiz}`}>
          <h4>{resultData?.subject}</h4>
          <p>{resultData?.feedback}</p>
          <div className= {styles.resultMatric}>
            <h6>{resultData?.matric}</h6>
     
          </div>
          <div>{resultData?.grade}</div>
          <div>{resultData?.score} </div>
          <div>{resultData?.percentage}</div>
          <div>{resultData?.remark}</div>
          <div>
            <div>
              <Link passHref href="/">
                RETAKE QUIZ
              </Link>
            </div>
            <div>
              <Link passHref href="/">Share result</Link>
            </div>
          </div>
          <div>
            <Link passHref href="/">
              Review Answers
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizResult;

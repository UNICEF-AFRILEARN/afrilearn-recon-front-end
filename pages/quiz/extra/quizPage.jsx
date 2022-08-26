<<<<<<< HEAD
import Link from "next/link";
import QuizNumber from "./quizNumberr";
import QuizQuestion from "./quizQuestion";
import styles from "../../../styles/quiz.module.css";
import * as React from "react";
import { useRouter } from 'next/router'



const QuizPage = () => {
  const router = useRouter()
  return (
    <>
      <div className={`row ${styles.containerQuiz}`}>

        <div className={`col-md-2 ${styles.FirstQuizDiv}`}>
         <div className={styles.leftDivv}><Link passHref href="/" >
           Instruction
          </Link></div> 
          <div className={styles.leftDivv}><Link passHref href="/" >
            Dashboard
          </Link></div> 
        </div>
        <div className={`col-md-7 ${styles.QuizquestionDiv}`}>
          <QuizQuestion/>
        </div>
        <div className={`col-md-3 ${styles.QuizquestionNumDiv}`}>
          <QuizNumber/>
          <div className={styles.attempts}>
          <div className= {styles.attempts3}><button></button><p> Pending</p></div>
          <div className={styles.attempts1}><button></button> Attempted</div>
          <div className={styles.attempts2}><button></button>Skipped</div>
        </div>
        </div>

        <div className={`row ${styles.QuizNumberSection}`}>
          <div className={`col-md-3  ${styles.quizSubmit}`}><button onClick={() => router.push('/quiz/extra/quizResult')}>SUBMIT</button></div>
          <div className={`col-md-4   ${styles.micquiz}`} > </div>
          <div className={`col-md- 3 ${styles.flagquiz}`}></div>
          <div className={`col-md-2 ${styles.quizSkip} `}><button>SKIP</button></div>
        </div>
      </div>
    </>

  );
};





export default QuizPage;
=======
import * as React from "react";
import { useRouter } from "next/router";
import { ExamQuestionPassage } from "../../../components/features/dashboard/student/pastQuestion/pastquestionPage/pastExamQue";
import { useSelector } from "react-redux";

const QuizPage = () => {
  const router = useRouter();
  const subject = useSelector((state) => state.mySubjectCourse);
  let quary = router.query.Exam;
  console.log(quary);
  const lessons = subject.subjectDetails[1]?.relatedLessons;
  console.log(subject);
  const sub_data = {
    questions: lessons[quary]?.questions,
    subject: subject.subjectDetails[0].subject.mainSubjectId.name,
    year: "",
  };
  return <ExamQuestionPassage sub_dat={sub_data} />;
};

export default QuizPage;
>>>>>>> dev

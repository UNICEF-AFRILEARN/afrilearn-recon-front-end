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

        <div className={`col-md-3 ${styles.FirstQuizDiv}`}>
         <div className={styles.leftDivv}><Link passHref href="/" >
           Instruction
          </Link></div> 
          <div className={styles.leftDivv}><Link passHref href="/" >
            Dashboard
          </Link></div> 
        </div>
        <div className={`col-md-5 ${styles.QuizquestionDiv}`}>
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

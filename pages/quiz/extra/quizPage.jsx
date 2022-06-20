import Image from "next/image";
import Link from "next/link";
import QuizNumber from "./quizNumberr"
import styles from "../../../styles/quiz.module.css";
import * as React from "react";
import { render } from "react-dom";


const QuizPage = () => {
  return (
    <>
      <div className={`row ${styles.containerQuiz}`}>

        <div className={`col-md-3 ${styles.FirstQuizDiv}`}>
         <div className={styles.leftDiv}><Link passHref href="/" >
           Instruction
          </Link></div> 
          <div className={styles.leftDiv}><Link passHref href="/" >
            Dashboard
          </Link></div> 
        </div>
        <div className={`col-md-5 ${styles.QuizquestionDiv}`}>
          <QuizQuestion/>
        </div>
        <div className={`col-md-3 ${styles.QuizquestionNumDiv}`}>
          <QuizNumber/>
        </div>
      </div>
    </>

  );
};

const QuizQuestion = () => {

const Quizdata = {
subject : " Geometrical Construction (2): Angles",
questionNum : "Question 28",
question : "Which angle is represented in the diagram  shown above?",
option : [
]

  }
  return (
    <>
   <div className={`row ${styles.QuizNumber}`}>
    <div className={styles.QuizNumberSubject}><h4>{Quizdata?.subject}</h4></div>
    <div className={styles.QuizNumberQuestionNum}><p>{Quizdata?.questionNum}</p></div>
    <div className={styles.QuizNumberQuestion}><p>{Quizdata?.question}</p></div>
    <div className={styles.options}>
      <div className={styles.quizOption}><button>A . {}</button></div>
      <div className={styles.quizOption}><button>B . {}</button></div>
      <div className={styles.quizOption}><button>C . {}</button> </div>
      <div className={styles.quizOption}><button>D . {}</button></div>
    </div>
    </div>
    <div className="row">
      <div className={`col-md-3  ${styles.quizSubmit}`}><button>SUBMIT</button></div>
      <div className={`col-md-4   ${styles.micquiz}`} > </div>
      <div className={`col-md- 3 ${styles.flagquiz}`}></div>
      <div className={`col-md-2 ${styles.quizSkip} `}><button>SKIP</button></div>
    </div>  
    </>
  )  
}




export default QuizPage;

import Image from "next/image";
import Link from "next/link";
import QuizNumber from "./quizNumberr";
import QuizResult from "./quizResult";
import styles from "../../../styles/quiz.module.css";
import * as React from "react";
import { useRouter } from 'next/router'

const QuizQuestion = () => {

    const Quizdata = {
    subject : " Geometrical Construction (2): Angles",
    questionNum : "Question 28",
    question : "Which angle is represented in the diagram  shown above?",
    option : [
    ],
    diagram: ''
      }
      const router = useRouter()
      return ( 
        <>
       <div className={`row ${styles.QuizNumber}`}>
        <div className={styles.QuizNumberSubject}><h4>{Quizdata?.subject}</h4></div>
        <div className={styles.QuizNumberQuestionNum}><p>{Quizdata?.questionNum}</p></div>
        <div className={styles.QuizNumberQuestion}><p>{Quizdata?.question}</p></div>
        <div>{Quizdata?.diagram}</div>
        <div className={styles.options}>
          <div className={styles.quizOption}><button>A . {}</button></div>
          <div className={styles.quizOption}><button>B . {}</button></div>
          <div className={styles.quizOption}><button>C . {}</button> </div>
          <div className={styles.quizOption}><button>D . {}</button></div>
        </div>
        </div>
         
        </>
      )  
    }

    export default QuizQuestion;
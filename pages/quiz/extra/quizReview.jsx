import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import QuizNumber from "../extra/quizNumberr"
import QuizQuestion from "../extra/quizQuestion"
import styles from "../../../styles/quiz.module.css";

// import QuizNumber from "./quizNumberr";

const QuizReview = () => {
  const Quizdata = { 
    subject : " Geometrical Construction (2): Angles",
    questionNum : "Question 28",
    question : "Which angle is represented in the diagram  shown above?",
    option : [
    ]

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
        <div className= {`col-md-6 ${styles.QuizquestionDiv}` }>
          <QuizQuestion/>
    <div className= {styles.prevSection}>
      <div className={`col-md-6 ${styles.PrevLink} `}><button>Prev</button></div>
      <div>  <div className={`col-md-6 ${styles.Nextbutton} `}><button>NEXT</button></div></div>
    </div>
  <div>
    <QuizSolution/>
    <div className={styles.recommendation}>
      <h4>Recommendations for you</h4>
    
</div>
  </div>
        </div>
        <div className="col-md-3">
          <QuizNumber/>
          <div className={styles.attempts}>
          <div className= {styles.correctionButton3}><button></button><p> Correct</p></div>
          <div className={styles.correctionButton1}><button></button> Wrong</div>
          <div className={styles.correctionButton2}><button></button>Skipped</div>
        </div>
        </div>
       </div>
        </>
          )  
}

const QuizSolution= () => {

  return (
<div>
  <div className={styles.solutionSection}><h4>Solution</h4></div>
 <div><p>Need solutions review with personalized lesson to practice your mistakes?</p></div> 
 <div className={` ${styles.trailSection}`}>
  <div className={styles.trailLink}><Link passHref href="" >Get 15-day Afrilearn Pro free trial. </Link></div>
   <div className=""> Cancel any time. We'll remind you 3 days before your trial ends.</div>
 </div>
 <div className={styles.solutionButton}></div>
</div>
    )  
  }
  
export default QuizReview;
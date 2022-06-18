import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/quiz.module.css";
import * as React from "react";
import { render } from "react-dom";


const QuizPage = () => {
  return (
    <>
      <div className={`row ${styles.containerQuiz}`}>

        <div className={`col-md-2 ${styles.FirstQuizDiv}`}>
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
    <div className="row">
      <div className={`col-md-2  ${styles.quizSubmit}`}><button>submit</button></div>
      <div className={`col-md-2 `} ></div>
      <div className={`col-md-2 `}></div>
      <div className={`col-md-6 ${styles.quizSkip} `}><button>skip</button></div>
    </div>
   </div>
    </>
  )  
}


const QuizNumber = () => {

  const [counter, setCounter] = React.useState(60);
 React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <>
    <div className="row">
      <div className="countDown">Time left : {counter}  mins</div>
      <div className="row">
      <div className={`col-md-3 ${styles.Quiznumber}`}>1</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>2</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>3</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>4</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>5</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>6</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>7</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>8</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>9</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>10</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>11</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>12</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>13</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>14</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>15</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>16</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>17</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>18</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>19</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>20</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>21</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>22</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>23</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>24</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>25</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>26</div>
      <div className={`col-md-3 ${styles.Quiznumber}`}>27</div> 
      <div className={`col-md-3 ${styles.Quiznumber}`}>28</div> 
      </div>
      
    </div>
    </>
  )
}

export default QuizPage;

import Link from "next/link";
import * as React from "react";
import styles from "../../../styles/quiz.module.css";

const QuizNumber = () => {

    const [counter, setCounter] = React.useState(60);
   React.useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
  
    return (
      <>
      <div className="row">
        <div className={`row ${styles.countDown}`}>Time left : <p className={styles.minuteQuiz}> {counter} mins</p> </div>
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

  export default QuizNumber;
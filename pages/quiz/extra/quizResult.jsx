import Link from "next/link";
import * as React from "react";
import styles from "../../../styles/quiz.module.css";
import Image from "next/image";
import { useRouter } from 'next/router'
// <<<<<<< HEAD
// import { PieChart, Pie, Cell, Legend} from 'recharts';
// =======
// import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Correct', value: 900 },
  { name: 'Incorrect', value: 300 },
  { name: 'Skipped', value: 200 },
];
const COLORS = [ '#00D9B6', '#FF4939', '#FFCF35'];


const QuizResult = () => {
  const resultData = {
    subject: "Geometrical Construction(2): Angles",
    feedback:
      "Well done Feyikemi. That was a nice try, you can do better next time! Keep up learning and do not stop practicing too ",
    matric: "Metrics",
    grade: "Grade",
    score: "45 out of 60",
    percentage: "56%",
    remark: "Good",
  };

  const router = useRouter()
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
          <p>{resultData?.feedback}  <Image
            alt={"design image"}
            src={"/assets/img/common/quiz/goodluck.png"}
            width={25}
            height={25}
          /></p>

          <div className= {styles.resultMatric}>
            <h6>{resultData?.matric}</h6>
            <div className={styles.chartReview}>
            <div className="">
            {/* <PieChart width={500} height={200} className={styles.chart}>
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend iconSize={5} align="right" layout="vertical" verticalAlign="middle"  />
        </PieChart> */}
            </div>
    </div>
     
          </div>
            <div className={styles.resultMatric}><h6> {resultData?.grade}</h6></div>
          <div className="row">
            <div className={`col-md-1 ${styles.quizText}`}> <Image alt={"design image"} src="/assets/img/common/quiz/Tick Square.svg" width={"25px"}  height={"25px"}   /></div>
         <div className={`col-md-6 ${styles.quizText}`}> <p  >Score</p></div>  
         <div className={`col-md-5 ${styles.quizText}`}> <p >{resultData?.score} </p></div>  
            </div>
            <div className="row">
            <div className={`col-md-1 ${styles.quizText}`}> <Image alt={"design image"} src="/assets/img/common/quiz/percent 2.svg" width={"20px"}  height={"20px"}   /></div>
            <div className={`col-md-6 ${styles.quizText}`}> <p >Percentage</p></div> 
            <div className={`col-md-5 ${styles.quizText}`}> <p >{resultData?.percentage} </p></div>  
            </div>
            <div className="row">
            <div className={`col-md-1 ${styles.quizText}`}> <Image alt={"design image"} src="/assets/img/common/quiz/Chat.svg" width={"25px"}  height={"25px"}   /></div>
            <div className={`col-md-6 ${styles.quizText}`}> <p >Remark</p></div> 
            <div className={`col-md-5 ${styles.quizText}`}> <p >{resultData?.remark} </p></div>  
            </div>
          </div>
            <div className={`row ${styles.buttonSection}`}>
            <div className={`col-md-3 ${styles.quizSubmit}`}>
              <button onClick={() => router.push('/quiz/extra/quizReview')}> RETAKE QUIZ</button>
            </div>
            <div className ={`col-md-3 ${styles.quizReview}`}>
            <Link passHref href="/">
              Review Answers
            </Link>
            
          </div>
            <div className={styles.retakeQuiz}>
            <Image alt={"design image"} src="/assets/img/common/quiz/share.svg" width={"20px"}  height={"20px"}/> <Link passHref href="/">Share result</Link>
            </div>
          </div>
          
        </div>
      </div>

     
    </>
  );
};

export default QuizResult;

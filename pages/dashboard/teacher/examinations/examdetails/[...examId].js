import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '../../../../../styles/teacher.module.css';
import { Heropage, HeropageWelcome } from '../../../../../components/features/dashboard/teacher';
import { fetchSingleExamDetailsInitiate } from '../../../../../redux/actions/exams';
import Head from 'next/head';

const ExamDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const { singleExam, exams } = useSelector((state) => state.myExams);
  // const [examId, setExamId] = useState('')
  const dispatch = useDispatch();
  const { query } = useRouter();



  let allExams = exams?.exams
  let examId = '6300e0b9104d6700167be084'
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJmNGFkOGM5OWJjNjgwMDE2NjE2NTFkIiwicm9sZSI6IjYwMmYzY2UzOWIxNDZiMzIwMWMyZGMxZCIsImZ1bGxOYW1lIjoiSm9obiBkb2UifSwiaWF0IjoxNjYwOTk2MTg5LCJleHAiOjE2NjM1ODgxODl9.eFvWg1YvRtvhfRX0R3Cb2rHymwO5rP_kMTyB4XRWFLg"

  //Convert minutes to hours:
  function displayHours(a){
    var hours = Math.trunc(a/60);
    var minutes = a % 60;
    return hours +"hours, "+ minutes + "minutes";
  }


  let examType = allExams?.filter((filteredExams) => 
  filteredExams.id === '6300e0b9104d6700167be084'
  
)

console.log("singleExam ===> from exam details", singleExam)

  useEffect(() => {
    if(query) {
      // setExamId(query?.examId[0])
    }
  }, [query])
  useEffect(() => {
    dispatch(fetchSingleExamDetailsInitiate(token, examId))
  }, [])

  return (
    <div className={styles.examinationwrapper}>
      <Heropage/>
      <div className={styles.examdetailswrapper}>
      <div>
          <p>Exam title: {singleExam?.data?.exams.title}</p>

          <p>Exam Type: {singleExam?.data?.exams.questionTypeId.name}</p>
         { examType &&
         <p>Duration: {displayHours(examType[0]?.duration)}</p>
         }
          <p>{singleExam?.exams?.participants?.length} Student(s)</p>
      </div>
      <div className={styles.sendresultwrapper}>
        <p>Send result to student</p>
      </div>
      </div>
      <div className={styles.examresultsectionwrapper}>
         <div className={styles.innerwrapperheader}>
           <h4>Submissions</h4>
           <h4>0 student</h4>
         </div>
        <div className={styles.examresultinnerwrapper}>
          <div className={styles.headerwrapper}>
          <p>Names</p>
          <p>Date Submitted</p>
          <p>Status</p>
          <p>Total Score</p>
          <p>View</p>
          </div>
          <div className={styles.noresultwrapper}>
            <p>No result to show at the moment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamDetails
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
  const [exam_id, setExam_id] = useState('')
  const dispatch = useDispatch();
  const router = useRouter();
  const {examId} = router.query;



  let allExams = exams?.exams
  let token = user.token

  //Convert minutes to hours:
  function displayHours(a){
    var hours = Math.trunc(a/60);
    var minutes = a % 60;
    return hours +"hours, "+ minutes + "minutes";
  }


console.log("exam_id ===> from exam detail", exam_id)

useEffect(()=>{
  if(router.isReady) {
    setExam_id(examId[0])
  }

}, [router.isReady, exam_id]);

let examType = allExams?.filter((filteredExams) => 
filteredExams.id === exam_id

)
 
  useEffect(() => {
    dispatch(fetchSingleExamDetailsInitiate(token, exam_id))
  }, [exam_id])

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
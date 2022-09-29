import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Router, { useRouter } from 'next/router';
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from '../../../../../styles/teacher.module.css'; 
import Objectives from '../../extra/objective';
import { Heropage } from "../../../../../components/features/dashboard/teacher";

const Setupxamssidebar = () => {
  const [showExamForm, setShowExamForm] = useState(false);
  const [exam_id, setExam_id] = useState('')
  const router = useRouter();
  const {examId} = router.query;
  // const { examId } = router.query

  // let examId = query.examId[0];

  useEffect(()=>{
    if(router.isReady) {
      setExam_id(examId[0])
    }
  
  }, [router.isReady, exam_id]);
  console.log("query from add-exams-questions", exam_id)
  return (
      <>
        <Heropage />
         <div className={styles.setexammainwrapper}>
      <Objectives 
        exam_id={exam_id}
      />
    </div>
  </>
  )
}

export default Setupxamssidebar;

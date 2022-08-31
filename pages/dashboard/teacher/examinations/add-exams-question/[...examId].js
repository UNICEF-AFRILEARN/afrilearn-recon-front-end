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
  const [examId, setExamId] = useState('')
  const router = useRouter();
  // const { examId } = router.query

  // let examId = query.examId[0];

  useEffect(() => {
    if (router.isReady) {
      // Code using query
      setExamId(router.query.examId[0])
      console.log("router.query",examId);
     }
  }, [router.isReady]);
  // console.log("query from add-exams-questions", examId[0])
  return (
      <>
        <Heropage />
         <div className={styles.setexammainwrapper}>
      <Objectives 
        examId={examId}
      />
    </div>
  </>
  )
}

export default Setupxamssidebar;

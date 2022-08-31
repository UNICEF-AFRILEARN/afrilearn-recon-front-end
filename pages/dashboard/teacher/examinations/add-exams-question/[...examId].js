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
  const { query } = useRouter();

  console.log("query from add-exams-questions", query)
  return (
      <>
        <Heropage />
         <div className={styles.setexammainwrapper}>
      <Objectives />
    </div>
  </>
  )
}

export default Setupxamssidebar;

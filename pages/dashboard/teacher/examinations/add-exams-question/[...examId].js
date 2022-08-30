import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from 'next/router';
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from '../../../../../styles/teacher.module.css'; 
import Objectives from '../../../teacher/extra/objective';
import { Heropage } from "../../../../../components/features/dashboard/teacher";

const Setupxamssidebar = () => {
  const [showExamForm, setShowExamForm] = useState(false);
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

import React from 'react';
import styles from '../../../../styles/teacher.module.css'; 
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';

const Objectives = () => {
  return (
    <div className={styles.objectivemainwrapper}>
        <div className={styles.objleftsideboxwrapper}>
            <h4>Set Up Examination</h4>
            <ul>
                <li><span><BsFillCircleFill /></span>Set Ups</li>
                <li><span><BsCircle /></span>Examination Questions</li>
            </ul>
        </div>
        <div className={styles.examsetupwrapper}>
            
        </div>
    </div>
  )
}

export default Objectives
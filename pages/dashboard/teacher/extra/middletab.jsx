import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai'
import styles from '../../../../styles/teacher.module.css';

const Middletab = () => {
  return (
    <div className={styles.middletabwrapper}>
        <div className={styles.leftsidetabwrapper}>
            <h2>Published Exams</h2>
            <div className={styles.crosswrapper}>
            <span><AiOutlinePlus color='#00D9B6' /></span> <h4> Set Up New Exam</h4>
            </div>
        </div>
        <div className={styles.righttabwrapper}>
            <h4>Unpublished Exams</h4>

        </div>
    </div>
  )
}

export default Middletab
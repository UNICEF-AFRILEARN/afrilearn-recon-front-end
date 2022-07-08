import React from 'react';
import styles from '../../../../styles/teacher.module.css'; 
import { TiPlus } from 'react-icons/ti';


const Correctoptions = () => {
  return (
    <div className={styles.questioncorrectmainwrapper}>
        <div className={styles.correctheadertitle}>
        <TiPlus /><h5>  Options</h5>
        </div>
    </div>
  )
}

export default Correctoptions
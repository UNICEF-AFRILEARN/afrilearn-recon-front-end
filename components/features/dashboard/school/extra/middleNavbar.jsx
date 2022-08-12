import React from 'react';
import styles from "../../school/schoolpeople.module.css";
import { BsPersonCircle } from 'react-icons/bs'

const MiddleNavbar = () => {
  return (
    
    <div className={styles.middlenavmainwrapper}>
        <div className={styles.circleinnerwrapper}>
           
        </div>
        <div className={styles.middleinnerwrapper}>
            <h4> Teacher</h4>
            <h3>00</h3>
        </div>
        <div className={styles.middleinnerwrapper}>
            <h4> Students</h4>
            <h3>00</h3>
        </div>
    </div>

  )
}

export default MiddleNavbar
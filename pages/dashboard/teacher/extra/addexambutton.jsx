import React from 'react';
import styles from '../teacher.module.css';

const Addexambutton = ({examQuestion}) => {
  return (
    <div className={styles.addexamquestionbtn}>
        { examQuestion.length > 0? "I have content" : "No Content to show"

        }
    </div>
  )
}

export default Addexambutton
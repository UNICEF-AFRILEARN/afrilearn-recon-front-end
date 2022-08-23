import React from 'react';
import Image from 'next/image';
import styles from '../extra/recentactivity.module.css';


const RecentActivity = ({activities}) => {
console.log("activities from activities UI ====>", activities)
  return (
    <div>
          <div className={styles.recenttitle}>
           <h1>Recent Activities</h1>
          </div>
        <div className={styles.parentcontainer}>
          
          <div className={styles.imagecontainer}>
          <Image
              src="/assets/img/recentimg.svg"
              alt="teacher"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.quizcontainer}>
                <h5>Quiz</h5>
                <h3>Trigonometric </h3>
          </div>
          <div className={styles.subjectcontainer}>
                <h4>Mathematics</h4>
          </div>
          <div className={styles.datecontainer}>
                <h3>02/02/2020</h3>
          </div>
        </div>
        <div className={styles.parentcontainer}>
          
          <div className={styles.imagecontainer}>
          <Image
              src="/assets/img/recentimg.svg"
              alt="teacher"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.quizcontainer}>
                <h5>Quiz</h5>
                <h3>Trigonometric </h3>
          </div>
          <div className={styles.subjectcontainer}>
                <h4>Mathematics</h4>
          </div>
          <div className={styles.datecontainer}>
                <h3>02/02/2020</h3>
          </div>
        </div>
        
    </div>
  )
}

export default RecentActivity
import React from 'react';
import styles from '../../../../styles/teacher.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Examsholder = () => {
  return (
    <div className={styles.examsholderwrapper}>
        <div className={styles.examsmainholder}>
            <div className={styles.examstitlewrapper}>
                <h3>English Examination 1</h3>
                <p>Published: 2nd September, 2021</p>
            </div>
         
            <div className={styles.otherwrapper}>
                <h5>Submission: 32</h5>
            </div>
            <div className={styles.otherwrapper}>
                <h5>Objective</h5>
            </div>
            <div className={styles.lastcolon}>
                <h5>VIEW SUBMISSIONS</h5>
                <BsThreeDotsVertical />
            </div>
            
        </div>
        <div className={styles.examsmainholder}>
            <div className={styles.examstitlewrapper}>
                <h3>Mathematics First Term JSS1</h3>
                <p>Published: 2nd September, 2021</p>
            </div>
            <div className={styles.otherwrapper}>
                <h5>Submission: 32</h5>
            </div>
            <div className={styles.otherwrapper}>
                <h5>Objective&Theory</h5>
            </div>
            <div className={styles.lastcolon}>
                <h5>VIEW SUBMISSIONS</h5>
                <BsThreeDotsVertical />
            </div>
        </div>
        <div className={styles.examsmainholder}>
            <div className={styles.examstitlewrapper}>
                <h3>Mathematics First Term JSS1 </h3>
                <p>Published: 2nd September, 2021</p>
            </div>
            <div className={styles.otherwrapper}>
                <h5>Submission: 32</h5>
            </div>
            <div className={styles.otherwrapper}>
                <h5>Objective&Theory</h5>
            </div>
            <div className={styles.lastcolon}>
                <h5>VIEW SUBMISSIONS</h5>
                <BsThreeDotsVertical />
            </div>
        </div>
        <div className={styles.examsmainholder}>
            <div className={styles.examstitlewrapper}>
                <h3>Basic science mock exam</h3>
                <p>Published: 2nd September, 2021</p>
            </div>
            <div className={styles.otherwrapper}>
                <h5>Submission: 32</h5>
            </div>
            <div className={styles.otherwrapper}>
                <h5>Objective</h5>
            </div>
            <div className={styles.lastcolon}>
                <h5>VIEW SUBMISSIONS</h5>
                <BsThreeDotsVertical />
            </div>
        </div>
    </div>
  )
}

export default Examsholder
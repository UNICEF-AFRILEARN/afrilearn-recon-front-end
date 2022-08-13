import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../../../styles/teacher.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { fetchExamsInitiate } from '../../../../redux/actions/exams';

const Examsholder = () => {
    const { exams } = useSelector((state) => state.myExams);
    const { user, registerUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const token = user?.token;

    console.log("exams ====> *******",exams.exams)

    //Format date to string:
    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }


    useEffect(() => {
        dispatch(fetchExamsInitiate(token))
    }, []);
  return (
    <div className={styles.examsholderwrapper}>
           {exams.exams && exams.exams.map((exam) => 
            <>
        <div className={styles.examsmainholder}>
            <div className={styles.examstitlewrapper}>
                <h3>{exam.title}</h3>
                <p>Published: {formatDate(exam.createdAt)}</p>
                </div>

                <div className={styles.otherwrapper}>
                <h5>Submission: {exam.resultsCount}</h5>
                </div>
                <div className={styles.otherwrapper}>
                <h5>{exam.questionTypeId.name}</h5>
                </div>
                <div className={styles.lastcolon}>
                <h5>VIEW SUBMISSIONS</h5>
                <BsThreeDotsVertical />
            </div>
        </div>
            </>
           )

           }
    </div>
  )
}

export default Examsholder
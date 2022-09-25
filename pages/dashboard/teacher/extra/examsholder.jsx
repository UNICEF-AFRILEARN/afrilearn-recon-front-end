import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from 'next/router';
import styles from '../../../../styles/teacher.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { fetchExamsInitiate } from '../../../../redux/actions/exams';
import Spinner from '../../../../components/widgets/spinner/index'
import Link from "next/link";

const Examsholder = () => {
    const { exams } = useSelector((state) => state.myExams);
    const [classId, setClassId] = useState("");
    const [selection, setSelection] = useState(false);
    const [selectionIndex, setSelectionIndex] = useState(0);
    const [questionId, setQuestionId] = useState("");
    const { user, registerUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const token = user?.token;

    //Format date to string:
    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    console.log("exams", exams)

    const goToExamDetailPage = (id) => {
        Router.push({
            pathname: `/dashboard/teacher/examinations/examdetails/[_examId]`,
            query: { _examId: id}
        })
    }
    const goToAddExamQuestionPage = (id) => {
        Router.push({
            pathname: `/dashboard/teacher/examinations/add-exams-question/[_examId]`,
            query: { _examId: id}
        })
    }

    const handleSelectionClicked = () => {
            setSelection(!selection)

    }

    useEffect(() => {
        setClassId(user?.user?.classOwnership[0]?.enrolledCourse?.classId)
    }, [classId]);

    useEffect(() => {
        setQuestionId()
    }, []);
    useEffect(() => {
        dispatch(fetchExamsInitiate(token))
    }, []);
  return (
    <div className={styles.examsholderwrapper}>
           {!exams?.exams? 
           <div>
               <h5>Loading .......</h5>
               <Spinner />
            </div>:
            exams?.exams.map((exam, index) => 
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
                <h5 onClick={() => goToExamDetailPage(exam.id)}>VIEW SUBMISSIONS</h5>
                <div className={styles.detailslistwrapper}>
                    <BsThreeDotsVertical 
                    className={styles.threedotsbutton}
                    onClick={ handleSelectionClicked}
                    />
                   { selection === true &&
                   <ul className={styles.detailslist}>
                        <li onClick={() => goToAddExamQuestionPage(exam.id)}>Edit questions</li>
                        <li>Unpublish exam</li>
                        <li>Send result to students</li>
                    </ul>}
                </div>
            </div>
        </div>
            </>
           )

           }
    </div>
  )
}

export default Examsholder
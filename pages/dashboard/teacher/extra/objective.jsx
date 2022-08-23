import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../../styles/teacher.module.css'; 
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiNote } from 'react-icons/bi';
import Questionpanel from './questionpanel';
import Theory from './theory';
import Generatequestions from './generatequestions';
import Submitquestions from './submitquestions';
import { updateExamQuestionInitiate } from '../../../../redux/actions/exams';

const Objectives = () => {
    const { newExamQuestion } = useSelector((state) => state.myExams);
    const [questionId, setQuestionId] = useState("")
    const [question, setQuestion] = useState("")

    console.log("questionId from onjective", questionId)
    const [showObjQuestions, setShowObjQuestions] = useState(1)



    let data = {
        question
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("theoryBody ==>",data)
        // dispatch(updateExamQuestionInitiate(questionId, data))
    }

    const showObjpanel = (id) => {
        setShowObjQuestions(id)
    }

    // useEffect(() =>{
    //     // setQuestionId(newExamQuestion?.examQuestion?.id)
    //     setQuestionId("630274ab7412b500162680f5")
    // }, [])
  return (
    <div className={styles.objectivemainwrapper}>
        <div className={styles.objleftsideboxwrapper}>
            <h4>Set Up Examination</h4>
            <ul>
                <li><span><BsFillCircleFill /></span>Set Ups</li>
                <li><span><BsCircle /></span>Examination Questions</li>
            </ul>
            <div className={styles.bottombtnwrapper}>
                <h4 onClick={() => showObjpanel(3)}>Generate questions</h4>
                <div className={styles.btnmainwrapper}>
                    <h4 onClick={() => showObjpanel(4)}>PROCEED</h4>
                    <h5>PREVIEW</h5>
                </div>
            </div>
        </div>
        <div className={styles.examsetupwrapper}>
            <div className={styles.xamssetpheader}>
            <h4 onClick={() => showObjpanel(1)} className={showObjQuestions === 1? `${styles.clikeditemssetup}` : `${styles.unclikeditemssetup}`}>Objective</h4>
            <h5 onClick={() => showObjpanel(2)} className={showObjQuestions === 2? `${styles.clikeditemssetup}` : `${styles.unclikeditemssetup}`}>Theory</h5>
            </div>
            <div className={styles.classlistwrapper}>
                {showObjQuestions === 1 | showObjQuestions === 2 && 
                    <div className={showObjQuestions === 1? `${styles.innerclasslistwrapper}` : `${styles.innerclasslistwrapperonly}`}>
                    <h5>Question 2</h5>
                    <div className={styles.iconswrapper}>
                        <span><BiNote /> </span>
                        <span><RiDeleteBin6Line color='#FF5E5E' />  </span>  
                    </div>
                    </div>
                }
                {showObjQuestions === 1 &&
                    <div className={styles.innernumberwrapper}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>    
                    </div>
                }
            </div>
               { showObjQuestions === 1 &&  <Questionpanel />}
                {showObjQuestions === 2 && <Theory /> }
                {showObjQuestions === 3 && <Generatequestions />}
                {/* { showObjQuestions === 4 && <Submitquestions />} */}
        </div>
        
    </div>
  )
}

export default Objectives
import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../../styles/teacher.module.css'; 
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiNote } from 'react-icons/bi';
import Link from "next/link";
import { BsPlus, BsPlusCircleFill } from 'react-icons/bs';
import Questionpanel from './questionpanel';
import Theory from './theory';
import Generatequestions from './generatequestions';
import Submitquestions from './submitquestions';
import { 
    updateExamQuestionInitiate, 
    fetchSingleExamQuestionsInitiate 
} from '../../../../redux/actions/exams';
import Questiontitle from './questiontitle';

const Objectives = ({examId}) => {
    const dispatch = useDispatch();
    const { newExamQuestion, exams, singleExamQuestions } = useSelector((state) => state.myExams);
    const [questionId, setQuestionId] = useState("")
    //content in the questionOptions will be data to send to the API:
    const [examQuestion, setExamQuestion] = useState([
        {
            optionsOne:"",
            optionsTwo:"",
            optionsThree:"",
            optionsFour:"",
            images:[],
            question:""
         },
    ])
    const [question, setQuestion] = useState("")

    console.log("singleExamQuestions from objective", singleExamQuestions)
    const [showObjQuestions, setShowObjQuestions] = useState(1)
    const [showObjQuestionOptions, setShowObjQuestionOptions] = useState(1)

    console.log("questionOptions", examQuestion)

    const handleAddQuestions = () => {
        setExamQuestion([...singleExamQuestions.questions,    
        {
            optionsOne:"",
            optionsTwo:"",
            optionsThree:"",
            optionsFour:"",
            images:[],
            question:""
   }])
    }

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

    const handleSelectQeustionOptions = (index) => {
        console.log(index)
        setShowObjQuestionOptions(index)
    }

    const handleGetQuestions = (e, index) => {
        const { name, value} = e.target
        const list = [...examQuestion]
        list[index][name] = value;
    }
    console.log("examQuestion and value together ==> ", examQuestion)

    useEffect(() =>{
        dispatch(fetchSingleExamQuestionsInitiate(examId))
    }, [])
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
            <ul>
                {showObjQuestions === 1 && singleExamQuestions.questions.map((singleQuestion, index) => (
                        <li
                          onClick={() => handleSelectQeustionOptions(index + 1)}
                        >{index + 1}</li>
                        ))
                        
                    }
                    <div className={styles.iconswrapper}>
                      <Link href='' className="btn-log-in-mobile">
                          <BsPlusCircleFill size={20} className={styles.profileavatar}/>
                          </Link>
                          <div className={styles.linkswrapper}>
                            <a onClick={handleAddQuestions}>Objective</a>
                            <a onClick={handleAddQuestions}>Theory</a>
                          </div>
                      </div> 
            </ul>
               

            </div>
             <div className={styles.examquestionwrapperinnner}>
             { showObjQuestions === 1 &&  examQuestion.map((singleQuestion, index) => (
                <>
                    <Questionpanel index={index} 
                        showObjQuestionOptions={showObjQuestionOptions}
                        handleGetQuestions={handleGetQuestions}
                        singleExamQuestions={singleExamQuestions}
                        singleQuestion={singleQuestion}
                    />
                    </>
               )) }
             </div>
                {showObjQuestions === 2 && <Theory /> }
                {showObjQuestions === 3 && <Generatequestions />}
                {/* { showObjQuestions === 4 && <Submitquestions />} */} 
        </div>
        
    </div>
  )
}

export default Objectives
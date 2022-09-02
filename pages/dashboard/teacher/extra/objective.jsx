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
    fetchSingleExamQuestionsInitiate,
    addExamQuestionInitiate
} from '../../../../redux/actions/exams';
import Questiontitle from './questiontitle';
import {wrapper } from '../../../../redux/store'
import Addexambutton from './addexambutton';

const Objectives = ({examId}) => {
    const dispatch = useDispatch();
    const { newExamQuestion, exams, singleExamQuestions } = useSelector((state) => state.myExams);
    const { user } = useSelector((state) => state.auth)
    const [questionId, setQuestionId] = useState("")
    //content in the questionOptions will be data to send to the API:
    const [examQuestion, setExamQuestion] = useState([])
    const [question, setQuestion] = useState("")
    const [questionType, setQuestionType] = useState("")
    // const [examType, setExamType] = useState("")

    // console.log("singleExamQuestions from objective", singleExamQuestions)
    const [showObjQuestions, setShowObjQuestions] = useState(1)
    const [showObjQuestionOptions, setShowObjQuestionOptions] = useState(0)

    
    let token = user.token;
    let receivedQuestions = singleExamQuestions?.questions
    const handleAddQuestions = (e) => {
        setQuestionType(e.target.innerText)
        console.log("questionType", examId)
        dispatch(addExamQuestionInitiate(token, examId))
        // dispatch(fetchSingleExamQuestionsInitiate(examId))
        setExamQuestion([...examQuestion,    
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
        dispatch(updateExamQuestionInitiate(questionId, data))
    }
    let examType = [];
    const filterExams = () => {
        exams.exams.filter((filteredExams) => {
            if(filteredExams.id === examId){
                examType.push(filteredExams.type)
            }
        })
    }
    
    
    
    const showObjpanel = (id) => {
        setShowObjQuestions(id)
    }

    // let clickedExamQuestion = []
    // const handleSelectQeustionOptions = (index, id, qIndex) => {
    //     console.log("From handleSelectQeustionOptions", id)
    //     setShowObjQuestionOptions(index)
    //     examQuestion.filter((filterExamQuestion) => {
    //         if(filterExamQuestion.id === id){
    //             clickedExamQuestion.push(filterExamQuestion)
    //         }
    //     })
    // }
    
    
    console.log("From clickedExamQuestion", clickedExamQuestion)
    
    const handleGetQuestions = (e, index) => {
        
        const { name, value} = e.target
        const list = [...examQuestion]
        list[index][name] = value;
    }

    
    // filterExams()
    
    useEffect(() =>{
        dispatch(fetchSingleExamQuestionsInitiate(examId))
    }, [examId, newExamQuestion])
    
    console.log("examType from objective", examType)
    
    useEffect(() => {
        if(receivedQuestions){
            setExamQuestion([...receivedQuestions])
        }
    }, [receivedQuestions, newExamQuestion])
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
           { examQuestion.length > 0 &&
           <div className={styles.xamssetpheader}>
            <div className={questionType === 'Objective' && questionType !=='undefined'? styles.objectivewrapper : styles.nobackgroundcolor}>
                <h4>Objective</h4>
            </div>
            <div className={questionType === 'Theory' && questionType !=='undefined'? styles.theorywrapper : styles.nobackgroundcolor}>
                <h5>Theory</h5>
            </div>
            </div>
            }
            <div className={styles.classlistwrapper}>
            <ul>
                {examQuestion.length > 0 && examQuestion.map((singleQuestion, index) => (
                        <li
                          onClick={() => {handleSelectQeustionOptions(index + 1, singleQuestion.id, (examQuestion.indexOf(singleQuestion) + 1)), setQuestionType(singleQuestion.type)}}
                        >{index + 1}</li>
                        ))
                        
                    }
                    { examQuestion.length > 0 && 
                     <div className={styles.iconswrapper}>
                      <div className="btn-log-in-mobile">
                          <BsPlusCircleFill size={20} className={styles.profileavatar}/>
                          </div>
                          <div className={styles.linkswrapper}>
                            <a onClick={handleAddQuestions}>Objective</a>
                            <a onClick={handleAddQuestions}>Theory</a>
                          </div>
                      </div>} 
            </ul>
            </div>
             <div className={styles.examquestionwrapperinnner}>
                    <Addexambutton 
                        examQuestion={examQuestion}
                    />
             </div>
             <div className={styles.examquestionwrapperinnner}>
             { showObjQuestions === 1 &&  examQuestion && examQuestion.map((singleQuestion, index) => (
                <>
                    <Questionpanel 
                        index={index}
                        showObjQuestions={showObjQuestions}
                        questionType={questionType} 
                        setQuestionType={setQuestionType} 
                        showObjQuestionOptions={showObjQuestionOptions}
                        handleGetQuestions={handleGetQuestions}
                        singleExamQuestions={singleExamQuestions}
                        singleQuestion={singleQuestion}
                        examQuestion={examQuestion}
                    />
                </>
               )) }
             </div>
                {showObjQuestions === 2 && examQuestion && examQuestion.map((singleQuestion, index) => (
                    
                <Theory 
                index={index} 
                showObjQuestionOptions={showObjQuestionOptions}
                handleGetQuestions={handleGetQuestions}
                singleExamQuestions={singleExamQuestions}
                singleQuestion={singleQuestion}
                examQuestion={examQuestion}
            />
                ))}
                {showObjQuestions === 3 && <Generatequestions />}
                {/* { showObjQuestions === 4 && <Submitquestions />} */} 
        </div>
        
    </div>
  )
}

export const getStaticProps =  wrapper.getStaticProps((store) => () => {
    store.dispatch(fetchSingleExamQuestionsInitiate(examId))
  })

export default Objectives
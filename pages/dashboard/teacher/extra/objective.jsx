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
    addExamQuestionInitiate,
    updateExamInitiate,
    fetchSingleExamDetailsInitiate
} from '../../../../redux/actions/exams';
import Questiontitle from './questiontitle';
import {wrapper } from '../../../../redux/store'
import Addexambutton from './addexambutton';

const Objectives = ({exam_id}) => {
    const dispatch = useDispatch();
    const { newExamQuestion, exams, singleExamQuestions, updatedExam, deletedExam, singleExam } = useSelector((state) => state.myExams);
    const { user } = useSelector((state) => state.auth)
    const [questionId, setQuestionId] = useState("")
    const [openQuestionType, setOpenQuestionType] = useState(false)
    const [examQuestion, setExamQuestion] = useState([])
    const [question, setQuestion] = useState("")
    const [questionType, setQuestionType] = useState("")

    const [showObjQuestions, setShowObjQuestions] = useState(1)
    const [showObjQuestionOptions, setShowObjQuestionOptions] = useState(0)


    
    
    let token = user.token;
    let allExams = exams?.exams
    let receivedQuestions = singleExamQuestions?.questions

    const handleAddQuestions = (e) => {
        setQuestionType(e.target.innerText)
        let type = e.target.innerText
        dispatch(addExamQuestionInitiate(token, exam_id, type))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateExamQuestionInitiate(questionId, data))
    }

        let examType = allExams?.filter((filteredExams) => 
            filteredExams.id === exam_id
            
        )
        console.log("exams from objective ===>", examType)
    
    const onClickExamsType = () => {
        setOpenQuestionType(!openQuestionType)
    }
    
    const showObjpanel = (id) => {
        setShowObjQuestions(id)
    }
    

    let clickedExamQuestion = []
    const handleSelectQeustionOptions = (index, id, qIndex) => {
        setShowObjQuestionOptions(index)
        examQuestion.filter((filterExamQuestion) => {
            if(filterExamQuestion.id === id){
                clickedExamQuestion.push(filterExamQuestion)
            }
        })
    }
    

    const handleUpdateStatus = (e) => {
        let publish
        if(e.target.innerHTML === 'PUBLISH'){
             publish = true
        }else if(e.target.innerHTML === 'UNPUBLISH'){
            publish = false
        }
        dispatch(updateExamInitiate(questionId, publish))
    }
    
    const handleGetQuestions = (e, index) => {
        const { name, value} = e.target
        const list = [...examQuestion]
        list[index][name] = value;
    }

    
    // filterExams()
    
   
    
    useEffect(() => {
        dispatch(fetchSingleExamDetailsInitiate(token, exam_id))
      }, [exam_id])

      useEffect(() =>{
        dispatch(fetchSingleExamQuestionsInitiate(token, exam_id))
    }, [exam_id, newExamQuestion, updatedExam, deletedExam])
      
    useEffect(() => {
        if(receivedQuestions){
            setExamQuestion([...receivedQuestions])
        }
    }, [receivedQuestions, newExamQuestion, updatedExam, deletedExam])
  return (
    <div className={styles.objectivemainwrapper}>
        <div className={styles.objleftsideboxwrapper}>
            <h4>Set Up Examination</h4>
            <ul>
                <li><span><BsFillCircleFill /></span>Set Ups</li>
                <li><span><BsCircle /></span>Examination Questions</li>
            </ul>
            <div className={styles.bottombtnwrapper}>
               { showObjQuestions === 3 &&
               <h4 onClick={() => showObjpanel(3)}>Generate questions</h4>
               }
                <div className={styles.btnmainwrapper}>
                   { examType && 
                   <h4 onClick={handleUpdateStatus}>{examType[0]?.publish === true? 'UNPUBLISH' : 'PUBLISH'}</h4>
                   }
                    <h5>PREVIEW</h5>
                </div>
                <div>
               { examType && 
                   <h4>{examType[0]?.publish === true? 'This exam is currently published' : 'This exam is currently unpublished'}</h4>}
               </div>
               {/* add button add new question */}
               {/* <div>
               { examType && 
               <Addexambutton 
               exam_id={exam_id}
                examType={examType}
                />}
               </div> */}
               {/* End add button add new question */}
               
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
                      <div className={`${styles.btnpluswrapper} btn-log-in-mobile`}>
                          <BsPlusCircleFill 
                          size={20} 
                          className={styles.profileavatar}
                          onClick={onClickExamsType}
                          />
                          </div>
                         { openQuestionType === true &&
                         <div className={styles.linkswrapper}>
                           
                          { examType[0]?.questionTypeId?.name === "Objective" && 
                          <a onClick={handleAddQuestions}>Objective</a>
                          }
                          { examType[0]?.questionTypeId?.name === "Theory" && 
                          <a onClick={handleAddQuestions}>Theory</a>
                          }
                                    { 
                                    examType[0]?.questionTypeId?.name === "Objective & Theory" && 
                                    <>
                                     <a onClick={handleAddQuestions}>Objective</a>
                                        <a onClick={handleAddQuestions}>Theory</a>
                                    </>
                                     }


                          </div>
                          }
                      </div>
                      } 
            </ul>
            <div className={styles.examquestionwrapperinnner}>
                    <Addexambutton 
                        exam_id={exam_id}
                        examType={examType}
                        examQuestion={examQuestion}
                    />
             </div>
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
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
import Exammodal from '../examinations/exammodal/index'

const Objectives = ({exam_id}) => {
    const dispatch = useDispatch();
    const { newExamQuestion, exams, singleExamQuestions, updatedExam, deletedExam, singleExam } = useSelector((state) => state.myExams);
    const { user } = useSelector((state) => state.auth)
    const [questionId, setQuestionId] = useState("")
    const [openQuestionType, setOpenQuestionType] = useState(false)
    const [examQuestion, setExamQuestion] = useState([])
    const [question, setQuestion] = useState("")
    const [questionType, setQuestionType] = useState("")
    const [theExamType, setTheExamType] = useState("")

    const [showObjQuestions, setShowObjQuestions] = useState(1)
    const [showObjQuestionOptions, setShowObjQuestionOptions] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    
    let token = user.token;
    let allExams = exams?.exams
    let receivedQuestions = singleExamQuestions?.questions

    const handleAddQuestions = (e) => {
        setQuestionType(e.target.innerText)
        let type = e.target.innerText
        dispatch(addExamQuestionInitiate(token, exam_id, type))
    }
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(updateExamQuestionInitiate(questionId, data))
    // }

    let examType = allExams?.filter((filteredExams) => 
        filteredExams.id === exam_id
    )

        console.log("examType =====>", examType)
    
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
    

    let publish
    const handleUpdateStatus = (e) => {
        if(e.target.innerHTML === 'PUBLISH'){
            publish = true
            setTheExamType('UNPUBLISH')
        }else if(e.target.innerHTML === 'UNPUBLISH'){
            publish = false
            setTheExamType('PUBLISH')
        }
        dispatch(updateExamInitiate(exam_id, publish))
    }
    
    const handleGetQuestions = (e, index) => {
        const { name, value} = e.target
        const list = [...examQuestion]
        list[index][name] = value;
    }

    const handleStatusUpdate = (obj) => {
        if(obj === true){
            setTheExamType('UNPUBLISH')
        }else if(obj === false){
            setTheExamType('PUBLISH')
        }
    }
    
    // filterExams()
    
   
    
    useEffect(() => {
        dispatch(fetchSingleExamDetailsInitiate(token, exam_id))
      }, [exam_id, updatedExam])

      useEffect(() =>{
        dispatch(fetchSingleExamQuestionsInitiate(token, exam_id))
    }, [exam_id, newExamQuestion, updatedExam, deletedExam])
      
    useEffect(() => {
        if(receivedQuestions){
            setExamQuestion([...receivedQuestions])
        }
    }, [receivedQuestions, newExamQuestion, updatedExam, deletedExam])
    
    // useEffect(() => {
    //     if(examType[0]?.publish === true){
    //         setTheExamType('UNPUBLISH')
    //     }else if(examType[0]?.publish === false){
    //         setTheExamType('PUBLISH')
    //     }

    // }, [])
  return (
    <div className={styles.objectivemainwrapper}>
        <div className={styles.objleftsideboxwrapper}>
            <h4>Set Up Examination</h4>
            <ul>
                <li><span>
                    <BsFillCircleFill 
                    color='#00D9B6'
                    /></span>Set Ups</li>
                <li><span><BsFillCircleFill color='#00D9B6'/></span>Examination Questions</li>
            </ul>
            <div className={styles.bottombtnwrapper}>
               { showObjQuestions === 3 &&
               <h4 onClick={() => showObjpanel(3)}>Generate questions</h4>
               }
                <div className={styles.btnmainwrapper}>
                  
                 <h4 onClick={() => setTheExamType(theExamType)}>{examType[0]?.publish === true? "PUBLISHED" : "UNPUBLISHED"}</h4>
                   
                    <h5>PREVIEW</h5>
                </div>
                <div>
               { examType && 
                   <h4>{examType[0]?.publish === true? 'This exam is currently published' : 'This exam is currently unpublished'}</h4>}
               </div>
               {/* add button add new question */}
                    {/* <div className={styles.littleaddbtnwrapper}>
                    <Addexambutton 
                        exam_id={exam_id}
                        examType={examType}
                        examQuestion={examQuestion}
                        handleShow={handleShow}
                     />
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
                          <a onClick={(e) => {handleAddQuestions(e); onClickExamsType(); handleShow()}}>Objective</a>
                          }
                          { examType[0]?.questionTypeId?.name === "Theory" && 
                          <a onClick={(e) => {handleAddQuestions(e); onClickExamsType(); handleShow()}}>Theory</a>
                          }
                                    { 
                                    examType[0]?.questionTypeId?.name === "Objective & Theory" && 
                                    <>
                                     <a onClick={(e) => {handleAddQuestions(e); onClickExamsType(); handleShow()}}>Objective</a>
                                        <a onClick={(e) => {handleAddQuestions(e); onClickExamsType();
                                        handleShow()
                                        }}>Theory</a>
                                    </>
                                     }


                          </div>
                          }
                      </div>
                      } 
            </ul>

          
            </div>
                <div >
                <Addexambutton 
                        exam_id={exam_id}
                        examType={examType}
                        examQuestion={examQuestion}
                        handleShow={handleShow}
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
                        deletedExam={deletedExam}
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
        <Exammodal 
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        newExamQuestion={newExamQuestion}
       
        />
    </div>
  )
}

export const getStaticProps =  wrapper.getStaticProps((store) => () => {
    store.dispatch(fetchSingleExamQuestionsInitiate(examId))
  })

export default Objectives
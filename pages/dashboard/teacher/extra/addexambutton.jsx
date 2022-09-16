import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../teacher.module.css';
import { FaPlus } from 'react-icons/fa';
import { 
  addExamQuestionInitiate,
  fetchSingleExamDetailsInitiate
} from '../../../../redux/actions/exams';

const Addexambutton = ({examQuestion, exam_id, handleShow}) => {
  const { newExamQuestion, singleExam, newExams, exams, singleExamQuestions, updatedExam, deletedExam } = useSelector((state) => state.myExams);
  const { user } = useSelector((state) => state.auth)
  const [showType, setShowType] = useState(false)
  const dispatch = useDispatch();


  let token = user.token;
  let allExams = exams?.exams
  let questionType_id = singleExam?.data?.exams?.questionTypeId.id

  let examType = allExams?.filter((filteredExams) => 
  filteredExams.id === exam_id
  
)
  const handleClick = () => {
    setShowType(!showType)
  }

  const handleAddQuestions = (e) => {
    let type = e.target.innerText
    console.log(type)
    dispatch(addExamQuestionInitiate(token, exam_id, type))
    setShowType(false)
}

console.log("examType from add button componen ===>", questionType_id)

useEffect(() => {
  dispatch(fetchSingleExamDetailsInitiate(token, exam_id))
}, [exam_id])


  return (
    <div className={styles.addexambuttonwrapper}>
        { examType &&
            examQuestion?.length > 0? "" : 
            <span
              onClick={handleClick}
            > <FaPlus /> 
            Add new question
            </span>
        }
       { showType === true &&
       //Check the question type with id instead of name so I can check both the new and the all exams
       <div className={styles.pointerwrapper}>
           { questionType_id === "61683f87df6ca80c9c5a3285" && 
                          <ul className={styles.addexamlistwrapper}>
                          <li>
                            <a 
                            onClick={(e) => {
                            handleAddQuestions(e);
                            handleShow()
                          }}
                          >Theory</a>
                          </li>
                          </ul>
            }
            { questionType_id === "61683f90df6ca80c9c5a3287" && 
                        <ul className={styles.addexamlistwrapper}>
                          <li><a 
                          onClick={(e) => {
                            handleAddQuestions(e);
                            handleShow()
                          }}
                          >
                            Theory</a></li>
                          <li>
                            <a 
                            onClick={(e) => {
                              handleAddQuestions(e);
                              handleShow()
                            }}
                            >Objective</a></li>
                        </ul>
            }

            {
              questionType_id === "61683f7ddf6ca80c9c5a3283" && 
              <ul className={styles.addexamlistwrapper}>
                  <li>
                    <a 
                   onClick={(e) => {
                    handleAddQuestions(e);
                    handleShow()
                  }}
                    >Objective</a></li>
              </ul>
            }

        </div>
        }
    </div>
  )
}

export default Addexambutton
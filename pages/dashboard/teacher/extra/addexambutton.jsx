import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../teacher.module.css';
import { FaPlus } from 'react-icons/fa';
import { 
  addExamQuestionInitiate,
} from '../../../../redux/actions/exams';

const Addexambutton = ({examQuestion, examId}) => {
  const { newExamQuestion, exams, singleExamQuestions, updatedExam, deletedExam } = useSelector((state) => state.myExams);
  const { user } = useSelector((state) => state.auth)
  const [showType, setShowType] = useState(false)
  const dispatch = useDispatch();


  let token = user.token;
  let allExams = exams?.exams

  let examType = allExams?.filter((filteredExams) => 
  filteredExams.id === '6300e0b9104d6700167be084'
  
)
  const handleClick = () => {
    setShowType(!showType)
  }

  const handleAddQuestions = (e) => {
    let type = e.target.innerText
    dispatch(addExamQuestionInitiate(token, examId, type))
}

  return (
    <div >
        { examType &&
            examQuestion?.length > 0? "" : 
            <span
              onClick={handleClick}
            > <FaPlus /> 
            Add new question
            </span>
        }
       { showType === true &&
       <div>
           { examType[0]?.questionTypeId?.name === "Objective" && 
                          <a onClick={handleAddQuestions}>Objective</a>
            }

            { examType[0]?.questionTypeId?.name === "Objective & Theory" && 
                        <>
                          <a onClick={handleAddQuestions}>
                            Theory</a>
                             <a onClick={handleAddQuestions}>Objective</a>
                        </>
            }

            {
              examType[0]?.questionTypeId?.name === "Theory" && 
              <>
                  <a onClick={handleAddQuestions}>Theory</a>
              </>
            }

        </div>
        }
    </div>
  )
}

export default Addexambutton
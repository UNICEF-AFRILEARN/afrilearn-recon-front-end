import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../teacher.module.css';
import { FaPlus } from 'react-icons/fa';

const Addexambutton = ({examQuestion, examType, examId}) => {
  const { newExamQuestion, exams, singleExamQuestions, updatedExam, deletedExam } = useSelector((state) => state.myExams);
  const [showType, setShowType] = useState(false)


  let allExams = exams?.exams

  let examType = allExams?.filter((filteredExams) => 
  filteredExams.id === '6300e0b9104d6700167be084'
  
)
  const handleClick = () => {
    setShowType(!showType)
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
                          <a>Objective</a>
            }

            { examType[0]?.questionTypeId?.name === "Objective & Theory" && 
                          <a>
                            Theory</a>
            }

            {
              examType[0]?.questionTypeId?.name === "Theory" && 
              <>
                  <a>Theory</a>
              </>
            }

        </div>
        }
    </div>
  )
}

export default Addexambutton
import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import styles from '../../../../styles/teacher.module.css'; 
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Form, InputGroup, FormControl} from 'react-bootstrap';
import { BiNote } from 'react-icons/bi';
import { addExamsInitiate } from '../../../../redux/actions/exams';
import { fetchClassSubjectsInitiate } from '../../../../redux/actions/classes';



const SetupExams = () => {
    const { user } = useSelector((state) => state.auth);
    const { newExams } = useSelector((state) => state.myExams);
    const { classSubjects } = useSelector((state) => state.schoolClasses);
    const dispatch = useDispatch();
    const [ showExamForm, setShowExamForm] = useState(false)
    const [ classId, setClassId] = useState("")
    const [ subjectId, setSubjectId] = useState("")
    const [ subjectSelected, setSubjectSelelcted] = useState("")
    const [ title, setTitle] = useState("")
    const [ termId, setTermId] = useState("")
    const [ termSelected, setTermSelected] = useState("")
    const [ questionTypeSelected, setQuestionTypeSelected] = useState("")
    const [ questionTypeId, setQuestionTypeId] = useState("")
    const [ duration, setDuration] = useState("")
    const [ instruction, setInstruction] = useState("")
    const [ totalNumberOfQuestions, setTotalNumberOfQuestions] = useState("")
    const [ deadline, setDeadline] = useState("")
    const [ startDate, setStartDate] = useState("")

    
    let classSubjectName = classSubjects?.subjects;
   
    let token = user?.token;

    const setClassSubjectsIds = () => {
        classSubjectName?.map((subjectIds) =>  {
            if(subjectIds.mainSubjectId.name === subjectSelected){
                setSubjectId(subjectIds.mainSubjectId.id)
            }   
        }  )
        
    }

    const setTermIds = () => {
        if(termSelected === "First term"){
            setTermId('5fc8d1b20fae0a06bc22db5c')
        }else if(termSelected === "Second term"){
            setTermId('600047f67cabf80f88f61735')
        }else if(termSelected === "Third term"){
            setTermId('600048197cabf80f88f61736')
        }
    }

    const setQuestionTypeIds = () => {
        if(questionTypeSelected === "Theory"){
            setQuestionTypeId('61683f87df6ca80c9c5a3285')
        }else if(questionTypeSelected === "Objective"){
            setQuestionTypeId('61683f7ddf6ca80c9c5a3283')
        }else if(questionTypeSelected === "Objective & Theory"){
            setQuestionTypeId('61683f90df6ca80c9c5a3287')
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("subjectId", subjectId)
        dispatch(addExamsInitiate(
            title,
            termId,
            questionTypeId,
            duration,
            totalNumberOfQuestions,
            deadline,
            startDate,
            subjectId,
            instruction,
            token
            ))
        if(Object?.keys(newExams).length > 0){
                Router.push({
                    pathname: `/dashboard/teacher/examinations/add-exams-question/[_examId]`,
                    query: { _examId: subjectId}
                })
        }
    }


    // useEffect(() => {
    //     console.log("newExams status  from setupexams", )
    // }, [newExams])

    useEffect(() => {
        setQuestionTypeIds();
    }, [questionTypeSelected]);

    useEffect(() => {
        setTermIds();
    }, [termSelected]);

    useEffect(() => {
        setClassSubjectsIds();
    }, [subjectSelected]);

    useEffect(() => {
        setClassId(user?.user?.classOwnership[0]?.enrolledCourse?.classId)
    }, [classId]);


    useEffect(() => {
        dispatch(fetchClassSubjectsInitiate(classId))
    }, [classId])
  return (
    <div className={styles.setexammainwrapper}>
    
   
       <div className={styles.questionoptionwrapper}>
       <Form onSubmit={handleSubmit}>
            <div>
            Exam title: <br/>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div>
            Select Subject: <br/>
            <select
                value={subjectSelected}
                onChange={(e) => setSubjectSelelcted(e.target.value)}
            >
                <option value="default">Select a subject</option>
                { classSubjectName && classSubjectName.map((subjectName) =>
                     <option value={subjectName.mainSubjectId.name}>{subjectName.mainSubjectId.name}</option>
                )
                   
                }
            </select>
            </div>
            <div>
            Question type: <br/>
            <select
            value={questionTypeSelected}
            onChange={(e) => setQuestionTypeSelected(e.target.value)}
            >
                <option value="default">Select question type</option>
                <option value="Theory">Theory</option>
                <option value="Objective">Objective</option>
                <option selected value="Objective & Theory">Objective & Theory</option>
            </select>
            </div>
            <div>
            Select Term: <br/>
            <select
                value={termSelected}
                onChange={(e) => setTermSelected(e.target.value)}
            >
                <option value="default">Select the Term</option>
                <option value="First term">First term</option>
                <option value="Second term">Second term</option>
                <option selected value="Third term">Third term</option>
            </select>
            </div>
            <div>
            Set Total number of question: <br/>
            <label>
                <input
                type="number"
                value={totalNumberOfQuestions}
                onChange={(e) => setTotalNumberOfQuestions(e.target.value)}
                />
            </label>
            </div>
            <div>
            Set Duration: <br/>
            <label>
                <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                />
            </label>
            </div>
            <div>
            Set Start Date: <br/>
            <input
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            </div>
            <div>
            Set Deadline: <br/>
            <input
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            </div>
            <div>
            Exam Instruction(Optional): <br/>
            <textarea
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
            >
               
            </textarea>
            </div>
            <button type='submit'>Submit</button>
      </Form>
    </div>
</div>
  )
}

export default SetupExams
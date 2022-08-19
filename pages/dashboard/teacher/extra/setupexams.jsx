import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../../styles/teacher.module.css'; 
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Form, InputGroup, FormControl} from 'react-bootstrap';
import { BiNote } from 'react-icons/bi';


const SetupExams = () => {
    const { user } = useSelector((state) => state.auth )
    const [ showExamForm, setShowExamForm] = useState(false)
    const [ subjectId, setSubjectId] = useState("")
    const [ subjectSelected, setSubjectSelelcted] = useState("")
    const [ examTitle, setExamTitle] = useState("")
    const [ termId, setTermId] = useState("")
    const [ termSelected, setTermSelected] = useState("")
    const [ questionTypeSelected, setQuestionTypeSelected] = useState("")
    const [ questionTypeId, setQuestionTypeId] = useState("")
    const [ duration, setDuration] = useState("")
    const [ instruction, setInstruction] = useState("")
    const [ totalNumberOfQuestions, setTotalNumberOfQuestions] = useState("")
    const [ deadLine, setDeadLine] = useState("")
    const [ startDate, setStartDate] = useState("")


    let data = {
            examTitle,
            termSelected,
            questionTypeSelected,
            duration,
            totalNumberOfQuestions,
            deadLine,
            startDate,
            subjectSelected,instruction
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data, user.token )
    }


  return (
    <div className={styles.setexammainwrapper}>

        <div className={styles.leftsideboxwrapper}>
        <h4>Set Up Examination</h4>
        <ul>
            <li><span><BsFillCircleFill /></span>Set Ups</li>
            <li><span><BsCircle /></span>Examination Questions</li>
        </ul>
    </div>
    
   
       <div className={styles.questionoptionwrapper}>
       <Form onSubmit={handleSubmit}>
            <div>
            Exam title: <br/>
            <input
                type="text"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
            />
            </div>
            <div>
            Select Subject: <br/>
            <select
                value={subjectSelected}
                onChange={(e) => setSubjectSelelcted(e.target.value)}
            >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </div>
            <div>
            Question type: <br/>
            <select
            value={questionTypeSelected}
            onChange={(e) => setQuestionTypeSelected(e.target.value)}
            >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </div>
            <div>
            Select Term: <br/>
            <select
                value={termSelected}
                onChange={(e) => setTermSelected(e.target.value)}
            >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
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
                value={deadLine}
                onChange={(e) => setDeadLine(e.target.value)}
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
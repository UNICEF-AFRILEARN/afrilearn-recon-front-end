import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Form, InputGroup, FormControl} from 'react-bootstrap';
import styles from '../../../../styles/teacher.module.css'; 
import { BsPlus } from 'react-icons/bs';
import { BiNote } from 'react-icons/bi';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { updateExamQuestionInitiate, fetchSingleExamQuestionsInitiate, fetchExamsInitiate } from '../../../../redux/actions/exams';

const Questionpanel = () => {
  const dispatch = useDispatch();
  const { newExamQuestion, exams, singleExamQuestions } = useSelector((state) => state.myExams);
  const [questionId, setQuestionId] = useState("")
//   const [data, setData] = useState({
//       question: "",
//       options: []
//   });
  const [questionBody, setQuestionBody] = useState("");
//   const [options, setOptions] = useState();
  const [optionOne, setOptionOne ] = useState("")
  const [optionTwo, setOptionTwo ] = useState("")
  const [optionThree, setOptionThree ] = useState("")
  const [optionFour, setOptionFour ] = useState("")
  const [examId, setExamId] = useState("");
  const { query } = useRouter();
  //to be change after persist
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJmNGFkOGM5OWJjNjgwMDE2NjE2NTFkIiwicm9sZSI6IjYwMmYzY2UzOWIxNDZiMzIwMWMyZGMxZCIsImZ1bGxOYW1lIjoiSm9obiBkb2UifSwiaWF0IjoxNjYxMTA0Njk0LCJleHAiOjE2NjM2OTY2OTR9.Srnh1RVV1p5sVrYMAgNpnCiiyFHxVYwFaSUHb32xSYI"


 

  
  const currentExam = [];
  const fiterExam = () => {
    exams?.exams?.filter((examQuestions) => {
        if(examQuestions.id === examId){
            currentExam.push(examQuestions)
        }
    })
     
  }

  fiterExam()
  console.log("questionId from onjective", questionId)

    let options = [optionOne, optionTwo, optionThree]
    let question = questionBody
  let data = {
    options,
    question

  }


  const handleSubmit = (e) => {
      e.preventDefault()
      console.log("data from ob", data)
        dispatch(updateExamQuestionInitiate(questionId, question, options))
    }

    useEffect(() =>{
        // setQuestionId(newExamQuestion?.examQuestion?.id)
        setQuestionId("630274ab7412b500162680f5")
    }, []);
    useEffect(() =>{
        setExamId("62fff77c721b450016998f18")
    }, []);

    useEffect(() => {
        dispatch(fetchExamsInitiate(token))
    }, []);

    useEffect(() => {
        dispatch(fetchSingleExamQuestionsInitiate(token, examId))
    }, []);

    // useEffect(() => {
    //     setOptions(currValue => ({
    //         ...currValue,
    //         options: [optionOne, optionTwo, optionThree]
    //      }))
    //   }, [optionOne, optionTwo, optionThree])

  return (
    <div>
        <div className={styles.questionpanelwrapper}>
            <div className={styles.questionpanelheader}>
                <h5>Open Edit Panel</h5> <span>< AiOutlineArrowsAlt size={30}/></span>
            </div>
         <div className={styles.plusiconwrapper}>
            <ul>
                <li>
                <BsPlus />
                </li>
            </ul>
         </div>
         
        </div>
        <div className={styles.mainformwrapper}>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control 
                    as="textarea" 
                    rows="5" 
                    name="address"
                    value={questionBody}
                    onChange={(e) => setQuestionBody(e.target.value)}
                    placeholder="Type question here..." 
                    />
            </Form.Group>
            <h5>Options</h5>
        <div className={styles.mainoptionwrapper}>
            <div className={styles.optionwrapper}>
            <InputGroup className="mb-3">
                <InputGroup.Text>A</InputGroup.Text>
                <FormControl 
                aria-label="Amount (to the nearest dollar)"
                value={optionOne}
                onChange={(e) => setOptionOne(e.target.value)}
                />
                <InputGroup.Text><BiNote /></InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>B</InputGroup.Text>
                <FormControl 
                aria-label="Amount (to the nearest dollar)"
                value={optionTwo}
                onChange={(e) => setOptionTwo(e.target.value)}
                />
                <InputGroup.Text><BiNote /></InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>C</InputGroup.Text>
                <FormControl 
                aria-label="Amount (to the nearest dollar)" 
                value={optionThree}
                onChange={(e) => setOptionThree(e.target.value)}
                />
                <InputGroup.Text><BiNote /></InputGroup.Text>
            </InputGroup>
            
            </div>
        </div>
        <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Correct Option</Form.Label>
                        <Form.Control type="text" placeholder="Select corect option" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Assign mark(score)</Form.Label>
                        <Form.Control type="text" placeholder="2" />
                    </Form.Group>
                    <Form.Check
                        checked
                        type="checkbox"
                        label="Use this for all questions"
                        className={styles.checkboxcolor}
                    />
                    <button>Save changes</button>
        </Form>
        </div>
    </div>
  )
}

export default Questionpanel;
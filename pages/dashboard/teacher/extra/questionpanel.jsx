import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Button, Form, InputGroup, FormControl} from 'react-bootstrap';
import styles from '../../../../styles/teacher.module.css'; 
import { BsPlus } from 'react-icons/bs';
import { BiNote } from 'react-icons/bi';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { updateExamQuestionInitiate, fetchSingleExamQuestionsInitiate, fetchExamsInitiate } from '../../../../redux/actions/exams';
import Questiontitle from './questiontitle';
import Addexambutton from './addexambutton';
import Exammodal from '../examinations/exammodal/index'
import Updatemodal from '../examinations/updatemodal/index'

const Questionpanel = ({
  index, 
  showObjQuestionOptions,
  showObjQuestions,
  handleGetQuestions,
  examQuestion,
  singleQuestion,
  questionType,
  setQuestionType,
  deletedExam
  // singleExamQuestions
}) => {
  const { newExamQuestion, updatedQuestion, exams, singleExamQuestions } = useSelector((state) => state.myExams);
  const { registerUser, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
  const [examQuestionType, setExamQuestionType ] = useState("")
  const [examId, setExamId] = useState("");
  const { query } = useRouter();
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleUpdateClose = () => setShowUpdate(false);
  const handleUpdateShow = () => setShowUpdate(true);

  const token = user.token

  
  const currentExam = [];
  const fiterExam = () => {
    exams?.exams?.filter((examQuestions) => {
        if(examQuestions.id === examId){
            currentExam.push(examQuestions)
        }
    })
     
  }

  fiterExam()

  let examsQuestionType = currentExam[0]?.questionTypeId.name
  // console.log("singleQuestion from use params question panel", singleQuestion)

    // let options = [singleQuestion.optionOne, singleQuestion.optionTwo, singleQuestion.optionThree, singleQuestion.optionFour]
    // let question = singleQuestion.question
  // let data = {
  //   options,
  //   question

  // }




  const handleSubmit = (e) => {
      e.preventDefault()
       let options = [singleQuestion.optionOne, singleQuestion.optionTwo, singleQuestion.optionThree, singleQuestion.optionFour]
      let question = singleQuestion.question

        dispatch(updateExamQuestionInitiate(questionId, question , options))
        handleUpdateShow()
    }

    // useEffect(() =>{
    //     // setQuestionId(newExamQuestion?.examQuestion?.id)
    //     setQuestionId("630274ab7412b500162680f5")
    // }, []);
    // useEffect(() =>{
    //     setExamId(query.examId[0])
    // }, [query]);

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
    // showObjQuestionOptions === index + 1 && 
    <div>
      {/* { showObjQuestions === 0 && 
          <Addexambutton />
      } */}
 
       {showObjQuestionOptions === index + 1 && 
          <>
          <Questiontitle 
            singleQuestion={singleQuestion}
            handleShow={handleShow}
          index={examQuestion.indexOf(singleQuestion) }
          />
              <div className={styles.questionpanelwrapper}>
              <div className={styles.questionpanelheader}>
                  <h5>Open Edit Panel</h5> <span>< AiOutlineArrowsAlt size={30}/>
                  </span>
              </div>
           
          </div>
         { singleQuestion &&
         <div 
          key={singleQuestion.id}
          className={styles.mainformwrapper}>
            
          <Form onSubmit={handleSubmit}> 
              <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control 
              as="textarea" 
              rows="5" 
              name="question"
              required
              defaultValue={singleQuestion.question}
              onChange={(e) => {handleGetQuestions(e, index), setQuestionId(singleQuestion.id)}}
              placeholder="Type question here..." 
              />
            </Form.Group>
             
          { singleQuestion.type !== 'Theory' &&
            <>
          <h5>Options</h5>
          <div className={styles.mainoptionwrapper}>
              <div className={styles.optionwrapper}>
              <InputGroup className="mb-3">
                  <InputGroup.Text>A</InputGroup.Text>
                  <FormControl 
                  aria-label="Amount (to the nearest dollar)"
                  name='optionOne'
                  defaultValue={singleQuestion?.options[0]}
                  onChange={(e) => handleGetQuestions(e, index)}
                  />
                  <InputGroup.Text><BiNote /></InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-3">
                  <InputGroup.Text>B</InputGroup.Text>
                  <FormControl 
                  aria-label="Amount (to the nearest dollar)"
                  name='optionTwo'
                  defaultValue={singleQuestion?.options[1]}
                  onChange={(e) => handleGetQuestions(e, index)}
                  />
                  <InputGroup.Text><BiNote /></InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-3">
                  <InputGroup.Text>C</InputGroup.Text>
                  <FormControl 
                  aria-label="Amount (to the nearest dollar)" 
                  defaultValue={singleQuestion?.options[2]}
                  name='optionThree'
                  onChange={(e) => handleGetQuestions(e, index)}
                  />
                  <InputGroup.Text><BiNote /></InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-3">
                  <InputGroup.Text>C</InputGroup.Text>
                  <FormControl 
                  aria-label="Amount (to the nearest dollar)" 
                  defaultValue={singleQuestion?.options[3]}
                  name='optionFour'
                  onChange={(e) => handleGetQuestions(e, index)}
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
                      </>
                      }
                      <Button 
                        onClick={handleUpdateShow}
                      className="w-50 mt-3 exambtn-wrapper" type="submit">
                    Save changes
                  </Button>
          </Form>
          </div>
          }
         </>
       }
       <Updatemodal 
        handleUpdateClose={handleUpdateClose}
        handleUpdateShow={handleUpdateShow}
        showUpdate={showUpdate}
       />
       <Exammodal 
        handleClose={handleClose}
        handleShow={handleShow}
        deletedExam={deletedExam}
        updatedQuestion={updatedQuestion}
        show={show}
       />
    </div>
  )
}

export default Questionpanel;
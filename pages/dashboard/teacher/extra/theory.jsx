import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Button, Form } from "react-bootstrap";
import styles from "../../../../styles/teacher.module.css";
import { BsPlus } from "react-icons/bs";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { updateExamQuestionInitiate } from "../../../../redux/actions/exams";
import Questiontitle from "./questiontitle";

const Theory = ({
  index, 
  showObjQuestionOptions, 
  handleGetQuestions,
  examQuestion,
  singleQuestion,
  // singleExamQuestions
}) => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [questionId, setQuestionId] = useState("");
  const [question, setQuestion] = useState("");
  const { newExamQuestion } = useSelector((state) => state.myExams);

  //  data = {
  //     question
  // }

  console.log("questionId ==> from theory", questionId);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExamQuestionInitiate(questionId, question));
  };

  useEffect(() => {
    setQuestionId("630274ab7412b500162680f5");
    // setQuestionId(newExamQuestion?.examQuestion?.id)
  }, []);

  return (
    <div>
    {showObjQuestionOptions === index + 1 &&
       <>
       <Questiontitle index={index}/>
           <div className={styles.questionpanelwrapper}>
           <div className={styles.questionpanelheader}>
               <h5>Open Edit Panel</h5> <span>< AiOutlineArrowsAlt size={30}/>
               </span>
           </div>
        
       </div>
      <div className={styles.mainformwrapper}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              as="textarea"
              rows="5"
              name="question"
              placeholder="Type question here..."
              defaultValue={singleQuestion.question}
              onChange={(e) => handleGetQuestions(e, index)}
            />
          </Form.Group>
          <Button className="w-50" type="submit">
            Save changes
          </Button>
        </Form>
      </div>
      <div className={styles.addtheorywrapper}>
        <span>
          <BsPlus />
        </span>
        <h5>Add new question</h5>
      </div>
      </>
      }
    </div>
  );
};

export default Theory;

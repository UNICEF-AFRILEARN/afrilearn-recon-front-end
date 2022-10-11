import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/teacher.module.css";
import { BsFillCircleFill, BsCircle } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { BiNote } from "react-icons/bi";
import { addExamsInitiate } from "../../../../redux/actions/exams";
import { fetchClassSubjectsInitiate } from "../../../../redux/actions/classes";
import Exammodal from "../examinations/exammodal";
import Spinner from '../../../../components/widgets/spinner/index';


const SetupExams = () => {
  // const [startDate, setStartDate] = 
  const { user } = useSelector((state) => state.auth);
  const { newExams } = useSelector((state) => state.myExams);
  const { classSubjects } = useSelector((state) => state.schoolClasses);
  const dispatch = useDispatch();
  const [showExamForm, setShowExamForm] = useState(false);
  const [classId, setClassId] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [subjectSelected, setSubjectSelelcted] = useState("");
  const [title, setTitle] = useState("");
  const [termId, setTermId] = useState("");
  const [termSelected, setTermSelected] = useState("");
  const [questionTypeSelected, setQuestionTypeSelected] = useState("");
  const [questionTypeId, setQuestionTypeId] = useState("");
  const [duration, setDuration] = useState("");
  const [instruction, setInstruction] = useState("");
  const [totalNumberOfQuestions, setTotalNumberOfQuestions] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let classSubjectName = classSubjects?.subjects;
console.log("questionTypeId", questionTypeId)
  let token = user?.token;

  // console.log("newExams from setup", newExams.exam.id)
  const setClassSubjectsIds = () => {
    classSubjectName?.map((subjectIds) => {
      if (subjectIds.mainSubjectId.name === subjectSelected) {
        setSubjectId(subjectIds.mainSubjectId.id);
      }
    });
  };

  const setTermIds = () => {
    if (termSelected === "First term") {
      setTermId("5fc8d1b20fae0a06bc22db5c");
    } else if (termSelected === "Second term") {
      setTermId("600047f67cabf80f88f61735");
    } else if (termSelected === "Third term") {
      setTermId("600048197cabf80f88f61736");
    }
  };

  const setQuestionTypeIds = () => {
    if (questionTypeSelected === "Theory") {
      setQuestionTypeId("61683f87df6ca80c9c5a3285");
    } else if (questionTypeSelected === "Objective") {
      setQuestionTypeId("61683f7ddf6ca80c9c5a3283");
    } else if (questionTypeSelected === "Objective & Theory") {
      setQuestionTypeId("61683f90df6ca80c9c5a3287");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(
      addExamsInitiate(
        title,
        termId,
        questionTypeId,
        duration,
        totalNumberOfQuestions,
        deadline,
        startDate,
        subjectId,
        instruction,
        token,
      ),
    );
    if (newExams) {
         handleShow()
    }
  };

  const navigateTodetails = async () => {
    if (Object.keys(newExams).length > 0) {
      Router.push({
        pathname: `/dashboard/teacher/examinations/add-exams-question/[_examId]`,
        query: { _examId: newExams.exam.id },
      });
    }
  }

  //To be called in the modal:
  // navigateTodetails()

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
    setClassId(user?.user?.classOwnership[0]?.enrolledCourse?.classId);
  }, [classId]);

  useEffect(() => {
    dispatch(fetchClassSubjectsInitiate(classId));
  }, [classId]);
  return (
    <div className={styles.setexammainwrapper}>
          <div className={styles.objleftsideboxwrapper}>
            <h4>Set Up Examination</h4>
            <ul>
                <li><span><BsFillCircleFill /></span>Set Ups</li>
                <li><span><BsCircle /></span>Examination Questions</li>
            </ul>
        </div>
     { !classSubjectName? <div>
            <h5>Loading ....... </h5>
            <Spinner />
       </div> : <Form onSubmit={handleSubmit} className={`${styles.examformwrapper} w-50`}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Exam title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow-none"
            style={{ outline: "none" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Subject:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={subjectSelected}
            onChange={(e) => setSubjectSelelcted(e.target.value)}
            className="shadow-none"
            style={{ outline: "none" }}
          >
            <option value="default">Select the Term</option>
            {classSubjectName &&
              classSubjectName.map((subjectName) => (
                <>
                <option value={subjectName.mainSubjectId.name}>
                  {subjectName.mainSubjectId.name}
                </option>
                </>
              ))}
          </Form.Select>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Question type:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={questionTypeSelected}
            onChange={(e) => setQuestionTypeSelected(e.target.value)}
            className="shadow-none"
            style={{ outline: "none" }}
          >
            <option value="default">Select the question type</option>
            <option value="Theory">Theory</option>
            <option value="Objective">Objective</option>
            <option selected value="Objective & Theory">
              Objective & Theory
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Term:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={termSelected}
            onChange={(e) => setTermSelected(e.target.value)}
            className="shadow-none"
            style={{ outline: "none" }}
          >
            <option value="default">Select the Term</option>
            <option value="First term">First term</option>
            <option value="Second term">Second term</option>
            <option selected value="Third term">
              Third term
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Set Total number of question:</Form.Label>
          <Form.Control
            type="number"
            value={totalNumberOfQuestions}
            onChange={(e) => setTotalNumberOfQuestions(e.target.value)}
            className="shadow-none"
            style={{ outline: "none" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Set Duration: </Form.Label>
          <Form.Control
            type="text"
            value={duration}
            placeholder='234'
            onChange={(e) => setDuration(e.target.value)}
            className="shadow-none"
            style={{ outline: "none" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Set Start Date: </Form.Label>
          <DatePicker 
          className={styles.datepicker}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
         />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Set Deadline: </Form.Label>
          <DatePicker 
          className={styles.datepicker}
          selected={deadline}
          onChange={(date) => setDeadline(date)}
         />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Exam Instruction(Optional): </Form.Label>
          <textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            className="shadow-none w-100"
            style={{ outline: "none" }}
          ></textarea>
        </Form.Group>
        <Button 
          disabled={!deadline || !startDate || !duration || !totalNumberOfQuestions || !termSelected}
        className="w-25 exambtn-wrapper" type="submit">
          PROCEED
        </Button>
      </Form>}
      <Exammodal 
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
        newExams={newExams}
        navigateTodetails={navigateTodetails}
      />
    </div>
  );
};

export default SetupExams;

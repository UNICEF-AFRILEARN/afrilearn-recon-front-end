import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '../../../../styles/teacher.module.css'; 
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { fetchSchoolTermInitiate } from '../../../../redux/actions/course'
import { fetchClassSubjectsInitiate } from '../../../../redux/actions/classes';
import { addExamQuestionInitiate } from '../../../../redux/actions/exams';


const Generatequestions = () => {
    const { schoolTerms } = useSelector((state) => state.singleCourse);
    const { user } = useSelector((state) => state.auth);
    const { newExamQuestion } = useSelector((state) => state.myExams);
    const { classSubjects } = useSelector((state) => state.schoolClasses);
    const [ classId, setClassId ] = useState("");
    const [subjectSelected, setSubjectSelected ] = useState("")
    const [subjectId, setSubjectId ] = useState("")
    const [questionCount, setQuestionCount ] = useState("")
    const [termSelected, setTermSelected ] = useState("")
    const [ termId, setTermId ] = useState("");
    const dispatch = useDispatch();
    const { query } = useRouter();

    let classSubject = classSubjects?.subjects
    // console.log("classId from generate schoolTerms", query)
    console.log("newExamQuestion from generate schoolTerms", newExamQuestion)

    //to be removed once the persist is set up:
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJmNGFkOGM5OWJjNjgwMDE2NjE2NTFkIiwicm9sZSI6IjYwMmYzY2UzOWIxNDZiMzIwMWMyZGMxZCIsImZ1bGxOYW1lIjoiSm9obiBkb2UifSwiaWF0IjoxNjYxMDA3OTg4LCJleHAiOjE2NjM1OTk5ODh9.Qj6r8EbGryzojPnhFqwTQC6rKFmqPpDetSxDjXRIipo"


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addExamQuestionInitiate(token, classId))
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

    const setClassSubjectsIds = () => {
        classSubject?.map((subjectIds) =>  {
            if(subjectIds.mainSubjectId.name === subjectSelected){
                setSubjectId(subjectIds.mainSubjectId.id)
            }   
        }  )
        
    }


    useEffect(() => {
        setClassSubjectsIds();
    }, [subjectSelected]);


    useEffect(() => {
        setTermIds();
    }, [termSelected]);

    useEffect(() => {
        setClassId(query.classId)
    }, [classId]);

    useEffect(() => {
        dispatch(fetchClassSubjectsInitiate(classId))
    }, [classId])

    useEffect(() => {
        dispatch(fetchSchoolTermInitiate())
    }, [])
  return (
    <div className={styles.generatequestionwrapper}>
        <div className={styles.generatetitle}>
            <h5>Generate Questions</h5>
        </div>
        <div className={styles.generateformwrapper}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Subject*</Form.Label> */}
                    {/* <Form.Control type="text" placeholder="Select" /> */}
                    <select
                    select 
                    className={styles.schoolselect} 
                    type="text"
                    value={subjectSelected}
                    defaultValue={"default"}
                    onChange={(e) => setSubjectSelected(e.target.value)}
                        >
                        <option>Select subject</option>
                        {classSubject && classSubject.map((subject) =>

                                <option>{subject.mainSubjectId.name}</option>  
                        )

                        }
                    </select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <select
                    select 
                    className={styles.schoolselect} 
                    type="text"
                    value={termSelected}
                    defaultValue={"default"}
                    onChange={(e) => setTermSelected(e.target.value)}
                        >
                        <option>Select Term</option>
                        { schoolTerms?.terms && schoolTerms?.terms.map((term) => 
                                <option>{term.name}</option>  

                        )

                        }  
                    </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>No of questions*</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={questionCount}
                    onChange={(e) => setQuestionCount(e.target.value)}
                    placeholder="No of questions" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>
  )
}

export default Generatequestions
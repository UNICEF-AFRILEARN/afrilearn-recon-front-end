import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../../styles/teacher.module.css'; 
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { fetchSchoolTermInitiate } from '../../../../redux/actions/course'

const Generatequestions = () => {
    const { schoolTerms } = useSelector((state) => state.singleCourse);
    const dispatch = useDispatch();

    console.log("schoolTerms from generate schoolTerms", schoolTerms)



    useEffect(() => {
        dispatch(fetchSchoolTermInitiate())
    }, [])
  return (
    <div className={styles.generatequestionwrapper}>
        <div className={styles.generatetitle}>
            <h5>Generate Questions</h5>
        </div>
        <div className={styles.generateformwrapper}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Subject*</Form.Label> */}
                    {/* <Form.Control type="text" placeholder="Select" /> */}
                    <select
                    select 
                    className={styles.schoolselect} 
                    type="text"
                    // value={courseSelected}
                    defaultValue={"default"}
                    // onChange={(e) => setCourseSelected(e.target.value)}
                        >
                        <option>Select subject</option>  
                        <option>subject</option>  
                    </select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Term*</Form.Label> */}
                    {/* <Form.Control type="text" placeholder="Select" /> */}
                    <select
                    select 
                    className={styles.schoolselect} 
                    type="text"
                    // value={courseSelected}
                    defaultValue={"default"}
                    // onChange={(e) => setCourseSelected(e.target.value)}
                        >
                        <option>Select Term</option>  
                        <option>Term</option>  
                    </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>No of questions*</Form.Label>
                    <Form.Control type="text" placeholder="No of questions" />
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
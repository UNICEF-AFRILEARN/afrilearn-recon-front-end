import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from '../../../../styles/parentdashboard.module.css'

const GeneratePerformance = ({children, courseContext}) => {
    const [childClass, setChildClass] = useState("");
    const previousInputValue = useRef("");


    // useEffect(() => {
    //     previousInputValue.current = inputValue;
    //   }, [inputValue]);


  return (
    <div className={styles.parentmaingeneratewrapper}>
        <div className={styles.innerheadingperfomwrapper}>
             <h2>My Child(ren)</h2>
             <p>Select your child’s name to view his/her performance in class</p> 
        </div>

        <div className={styles.innerformwrapper}>
            <Form>
                <Form.Group className={`${styles.arrowparentwrapper} mb-3`} controlId="formBasicEmail">
                    <select
                        className={`${styles.pushDown} form-control form-control-sm`}
                        // value={selectedCourse}
                        defaultValue={"default"}
                        // onChange={(e) => setCourseSelected(e.target.value)}
                        >
                        <option value={"default"}>
                            Select a child
                        </option>
            
                        {children && children.map((childrenName) => 
                            <>
                             <option 
                                placeholder='Select a Role'
                                    >{childrenName.fullName}
                                </option>
                            </>
                        )}
                    </select>
                </Form.Group>

                <Form.Group className={`${styles.arrowparentwrapper} mb-3`} controlId="formBasicPassword">
                    {/* <Form.Label>Class</Form.Label>
                    <Form.Control type="password" placeholder="Select Class" />
                    <span className={styles.arrowdownwrapper}><MdOutlineKeyboardArrowDown /></span> */}
                    <select
                        className={`${styles.pushDown} form-control form-control-sm`}
                        // value={selectedCourse}
                        defaultValue={"default"}
                        // onChange={(e) => setCourseSelected(e.target.value)}
                        >
                        <option value={"default"}>
                            Select a class
                        </option>
            
                        {children && children.map((childClass) => 
                        <option 
                        placeholder='Select a Role'
                            >{childClass.enrolledCourses[0]?.courseId.name}
                        </option>
                        )}
                    </select>
                </Form.Group>
            <Button variant="primary" type="submit">
            GENERATE PERFORMANCE
            </Button>
        </Form>
        </div>
    </div>
  )
}

export default GeneratePerformance
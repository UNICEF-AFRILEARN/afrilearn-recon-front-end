import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from '../../../../styles/parentdashboard.module.css'

const GeneratePerformance = ({children, courseContext}) => {
    const [childClass, setChildClass] = useState("");
    const [selectedChild, setSelectedChild] = useState("");
    const [childId, setChildId] = useState("");
    const previousInputValue = useRef("");

    let filteredChildren = []
  const sortChildren = (childrenObj, id) => {
    filteredChildren = children?.filter((myChildId) => myChildId.fullName === selectedChild)
      return filteredChildren
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("children", children)
    }

  //function to filter children:
  sortChildren(children, "62ea39f2150f250016e7d569")

  return (
    <div className={styles.parentmaingeneratewrapper}>
        <div className={styles.innerheadingperfomwrapper}>
             <h2>My Child(ren)</h2>
             <p>Select your child’s name to view his/her performance in class</p> 
        </div>

        <div className={styles.innerformwrapper}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className={`${styles.arrowparentwrapper} mb-3`} controlId="formBasicEmail">
                    <select
                        className={`${styles.pushDown} form-control form-control-sm`}
                        value={selectedChild}
                        defaultValue={"default"}
                        onChange={(e) => setSelectedChild(e.target.value)}
                        >
                        <option value={"default"}>
                            Select a child
                        </option>
            
                        {children && children.map((childrenName) => 
                            <>
                             <option 
                                placeholder='Select a Role'
                                value={childrenName.fullName}
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
            
                        {filteredChildren && filteredChildren.map((childClass) => 
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
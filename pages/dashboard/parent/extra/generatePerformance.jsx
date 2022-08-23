import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router, { useRouter } from 'next/router'

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from '../../../../styles/parentdashboard.module.css'

const GeneratePerformance = ({children, courseContext}) => {
    const [childClass, setChildClass] = useState("");
    const [selectedChild, setSelectedChild] = useState("");
    const [selectedChildId, setSelectedChildId] = useState("");
    const [courseId, setCourseId] = useState("");
    const [childId, setChildId] = useState("");
    const previousInputValue = useRef("");

  

    let filteredChildren = []
  const sortChildren = (childrenObj) => {
    filteredChildren = childrenObj?.filter((myChildId) => myChildId.fullName === selectedChild)
        // setSelectedChildId(myChildId.id)
      return filteredChildren
    }

    let _userId = '';
    let _courseId = '';


    //filter to get child's Ids
    const getSelectedChildId = () => {
        _userId = filteredChildren?.map((childId) => childId.id)
    }
    //filter to get course Ids
    const getSelectedCourseId = () => {
        _courseId = filteredChildren?.map((childCourseId) => childCourseId.enrolledCourses[0]?.courseId.id)
    }

    
    const handleSubmit = (e) => {
        // console.log("courseId ====>{======}", courseId)
        e.preventDefault()
        Router.push({
            pathname: `/dashboard/performance/[_id]`,
            query: { _id: _userId[0], course_id:_courseId || "undefined" }
        })
    }
    
    //function to filter children:
    useEffect(() => {
        sortChildren(children)
    }, [sortChildren(children)])
    useEffect(() => {
        getSelectedChildId()
    }, [getSelectedChildId()])
    useEffect(() => {
        getSelectedCourseId()
    }, [getSelectedCourseId()])
    

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
                                key={childrenName.id}
                                value={childrenName.fullName}
                                    >{childrenName.fullName}
                             </option>
                            </>
                        )}
                    </select>
                </Form.Group>

                <Form.Group className={`${styles.arrowparentwrapper} mb-3`} controlId="formBasicPassword">
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
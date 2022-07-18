import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from '../../../../styles/parentdashboard.module.css'

const GeneratePerformance = () => {
  return (
    <div className={styles.parentmaingeneratewrapper}>
        <div className={styles.innerheadingperfomwrapper}>
             <h2>Generate Performance</h2>
             <p>Select your child’s name to view his/her performance in class</p> 
        </div>

        <div className={styles.innerformwrapper}>
            <Form>
                <Form.Group className={`${styles.arrowparentwrapper} mb-3`} controlId="formBasicEmail">
                    <Form.Label>Student</Form.Label>
                    <Form.Control type="email" placeholder="Select child" />
                    <span className={styles.arrowdownwrapper}><MdOutlineKeyboardArrowDown /></span>
                </Form.Group>

                <Form.Group className={`${styles.arrowparentwrapper} mb-3`} controlId="formBasicPassword">
                    <Form.Label>Class</Form.Label>
                    <Form.Control type="password" placeholder="Select Class" />
                    <span className={styles.arrowdownwrapper}><MdOutlineKeyboardArrowDown /></span>
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
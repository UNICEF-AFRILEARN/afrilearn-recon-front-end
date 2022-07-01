import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student</Form.Label>
                    <Form.Control type="email" placeholder="Select child" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Class</Form.Label>
                    <Form.Control type="password" placeholder="Select Class" />
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
import React from 'react';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from '../../../../styles/teacher.module.css'; 

const Setupxamssidebar = () => {
  return (
    <div className={styles.setexammainwrapper}>
        <div className={styles.leftsideboxwrapper}>
            <h4>Set Up Examination</h4>
            <ul>
                <li>Set Ups</li>
                <li>Examination Questions</li>
            </ul>
        </div>
        <div className={styles.mainboxwrapper}>
        <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Exam Title*</Form.Label>
                <Form.Control type="text" placeholder="Math Mockup" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Subject*</Form.Label>
                <Form.Control type="text" placeholder="Objective" />
       
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Question Type*</Form.Label>
                <Form.Control type="email" placeholder="Objective" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Duration*</Form.Label>
                <Form.Control type="email" placeholder="Set exam duration" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Exam Instruction</Form.Label>
            <Form.Control as="textarea" rows="3" name="address" />
            </Form.Group>
            <Button variant="primary" type="submit" className={styles.formsubmitbtn}>
                Submit
            </Button>
    </Form>
        </div>
    </div>
  )
}

export default Setupxamssidebar
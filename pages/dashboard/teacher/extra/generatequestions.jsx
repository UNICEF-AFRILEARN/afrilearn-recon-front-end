import React from 'react';
import styles from '../../../../styles/teacher.module.css'; 
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Generatequestions = () => {
  return (
    <div className={styles.generatequestionwrapper}>
        <div className={styles.generatetitle}>
            <h5>Generate Questions</h5>
        </div>
        <div className={styles.generateformwrapper}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject*</Form.Label>
                    <Form.Control type="text" placeholder="Select" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Term*</Form.Label>
                    <Form.Control type="text" placeholder="Select" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>No of questions*</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
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
import React from 'react';
import styles from '../../../../styles/teacher.module.css'; 
import { TiPlus } from 'react-icons/ti';
import { Form } from 'react-bootstrap';

const Correctoptions = () => {
  return (
    <div className={styles.questioncorrectmainwrapper}>
        <div className={styles.correctheadertitle}>
        <TiPlus /><h5>  Options</h5>
        </div>
            <div className={styles.correctquestionformwrapper}>
                <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Correct Option</Form.Label>
                        <Form.Control type="text" placeholder="Select corect option" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Assign mark(score)</Form.Label>
                        <Form.Control type="text" placeholder="2" />
                    </Form.Group>
                    <Form.Check
                        checked
                        type="checkbox"
                        label="Use this for all questions"
                        className={styles.checkboxcolor}
                    />
                </Form>
            </div>
    </div>
  )
}

export default Correctoptions
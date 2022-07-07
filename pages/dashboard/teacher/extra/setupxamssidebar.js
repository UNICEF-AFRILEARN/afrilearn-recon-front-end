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
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
    </Form>
        </div>
    </div>
  )
}

export default Setupxamssidebar
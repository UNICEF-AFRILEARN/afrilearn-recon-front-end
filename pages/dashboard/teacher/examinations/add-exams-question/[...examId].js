import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from 'next/router';
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from '../../../../../styles/teacher.module.css'; 
import Objectives from '../../../teacher/extra/objective';

const Setupxamssidebar = () => {
    const [ showExamForm, setShowExamForm] = useState(false)
  return (
    <div className={styles.setexammainwrapper}>
        {showExamForm &&
            <div className={styles.leftsideboxwrapper}>
            <h4>Set Up Examination</h4>
            <ul>
                <li><span><BsFillCircleFill /></span>Set Ups</li>
                <li><span><BsCircle /></span>Examination Questions</li>
            </ul>
        </div>
        }
        { showExamForm &&
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
        }

 <Objectives />
    </div>
  )
}

export default Setupxamssidebar
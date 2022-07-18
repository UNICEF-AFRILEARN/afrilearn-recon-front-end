import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../../../../styles/teacher.module.css'; 
import { BsPlus } from 'react-icons/bs';
import { AiOutlineArrowsAlt } from 'react-icons/ai';

const Theory = () => {
  return (
    <div className={styles.theorymainwrapper}>
        <div className={styles.questionpanelwrapper}>
            <div className={styles.questionpanelheader}>
                <h5>Open Edit Panel</h5> <span>< AiOutlineArrowsAlt size={30}/></span>
            </div>
         
        </div>
        <div className={styles.mainformwrapper}>
        <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control as="textarea" rows="5" name="address" placeholder="Type question here..." />
            </Form.Group>
        </Form>
        </div>
        <div className={styles.addtheorywrapper}>
            <span><BsPlus /></span><h5>Add new question</h5>
        </div>
    </div>
  )
}

export default Theory
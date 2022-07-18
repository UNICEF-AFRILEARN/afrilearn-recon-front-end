import React from 'react';

import { Form } from 'react-bootstrap';
import styles from '../../../../styles/teacher.module.css'; 
import { BsPlus } from 'react-icons/bs';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import Questionoption from './questionoption';
import Correctoptions from './correctoptions';


const Questionpanel = () => {
  return (
    <div>
        <div className={styles.questionpanelwrapper}>
            <div className={styles.questionpanelheader}>
                <h5>Open Edit Panel</h5> <span>< AiOutlineArrowsAlt size={30}/></span>
            </div>
         <div className={styles.plusiconwrapper}>
            <ul>
                <li>
                <BsPlus />
                </li>
            </ul>
         </div>
         
        </div>
        <div className={styles.mainformwrapper}>
        <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control as="textarea" rows="5" name="address" placeholder="Type question here..." />
            </Form.Group>
        </Form>
        </div>
        <Questionoption />
        <Correctoptions />
    </div>
  )
}

export default Questionpanel;
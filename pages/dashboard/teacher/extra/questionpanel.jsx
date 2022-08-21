import React from 'react';

import { Form, InputGroup, FormControl} from 'react-bootstrap';
import styles from '../../../../styles/teacher.module.css'; 
import { BsPlus } from 'react-icons/bs';
import { BiNote } from 'react-icons/bi';
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
            <h5>Options</h5>
        <div className={styles.mainoptionwrapper}>
            <div className={styles.optionwrapper}>
            <InputGroup className="mb-3">
                <InputGroup.Text>A</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text><BiNote /></InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>B</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text><BiNote /></InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>C</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text><BiNote /></InputGroup.Text>
            </InputGroup>
            
            </div>
        </div>
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

export default Questionpanel;
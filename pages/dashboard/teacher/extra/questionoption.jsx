import React from 'react';
import styles from '../../../../styles/teacher.module.css'; 
import { Form, InputGroup, FormControl} from 'react-bootstrap';
import { BiNote } from 'react-icons/bi';


const Questionoption = () => {
  return (
    <div className={styles.questionoptionwrapper}>
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
    </div>
  )
}

export default Questionoption
import React, {useState} from 'react';
import styles from '../../../../styles/teacher.module.css'; 
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Form, InputGroup, FormControl} from 'react-bootstrap';
import { BiNote } from 'react-icons/bi';


const SetupExams = () => {
    const [ showExamForm, setShowExamForm] = useState(false)
  return (
    
    <div className={styles.setexammainwrapper}>

        <div className={styles.leftsideboxwrapper}>
        <h4>Set Up Examination</h4>
        <ul>
            <li><span><BsFillCircleFill /></span>Set Ups</li>
            <li><span><BsCircle /></span>Examination Questions</li>
        </ul>
    </div>
    
   
       <div className={styles.questionoptionwrapper}>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Exam Title*</Form.Label>
        <Form.Control type="email" placeholder="Math mockup" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Question Type</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Question Type</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Duration</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Exam Instruction</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button>PROCEED</button>
    </Form>
    </div>
</div>
  )
}

export default SetupExams
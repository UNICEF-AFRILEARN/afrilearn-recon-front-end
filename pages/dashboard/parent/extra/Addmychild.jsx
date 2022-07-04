import React from 'react';
import Form from 'react-bootstrap/Form';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import styles from '../../../../styles/parentdashboard.module.css';

const Addmychild = () => {
  return (
    <div className={styles.parentchildformwrapper}>
         <div className={styles.innerformwrapper}>
            <Form.Label>Student</Form.Label>
            <Form.Group>
                    <Form.Control type="text" placeholder="student" className="my-3" />
                    <Form.Control type="text" placeholder="Select class" className="my-3" />
                    <Form.Control type="text" placeholder="Full Name" className="my-3" />
                    <Form.Control type="email" placeholder="Email" className="my-3" />
                    <Form.Control type="password" placeholder="Password" className="my-3" />
                    <Form.Control type="password" placeholder="Confirm Password"  className="my-3" />
            </Form.Group>
         </div>   
    </div>
  )
}

export default Addmychild
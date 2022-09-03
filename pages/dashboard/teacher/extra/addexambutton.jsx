import React from 'react';
import styles from '../teacher.module.css';
import { FaPlus } from 'react-icons/fa';

const Addexambutton = ({examQuestion}) => {
  return (
    <div >
        { 
            examQuestion?.length > 0? "" : 
            <span> <FaPlus /> Add new question</span>

        }
    </div>
  )
}

export default Addexambutton
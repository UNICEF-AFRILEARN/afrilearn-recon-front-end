import React from 'react'
import styles from '../../../../styles/teacher.module.css'; 
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiNote } from 'react-icons/bi';

const Questiontitle = ({index}) => {
  return (
    <div className={styles.innerclasslistwrapper}>
            <h5>Question {index + 1}</h5>
        <div className={styles.iconswrapper}>
            <span><BiNote /> </span>
            <span><RiDeleteBin6Line color='#FF5E5E' />  </span>  
        </div>
    </div>
  )
}

export default Questiontitle
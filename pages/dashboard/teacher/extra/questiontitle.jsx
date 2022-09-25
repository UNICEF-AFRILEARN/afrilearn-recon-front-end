import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../../styles/teacher.module.css'; 
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiNote } from 'react-icons/bi';
import { 
  deleteExamsInitiate
} from '../../../../redux/actions/exams';

const Questiontitle = ({index, singleQuestion, handleShow}) => {
  const dispatch = useDispatch()


  const handleDelete = () => {
    let id  = singleQuestion.id
    dispatch(deleteExamsInitiate(id))
  }




  return (
    <div className={styles.innerclasslistwrapper}>
            <h5>Question {index + 1}</h5>
        <div className={styles.iconswrapper}>
            <span><BiNote /> </span>
            <span
              onClick={() => {handleDelete(); handleShow()}}
              >
              <RiDeleteBin6Line color='#FF5E5E' 
              /> 
            </span>  
        </div>
    </div>
  )
}

export default Questiontitle
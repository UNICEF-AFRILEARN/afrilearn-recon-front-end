import React from 'react';
import styles from '../../../../styles/teacher.module.css'; 
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiNote } from 'react-icons/bi';

const Objectives = () => {
  return (
    <div className={styles.objectivemainwrapper}>
        <div className={styles.objleftsideboxwrapper}>
            <h4>Set Up Examination</h4>
            <ul>
                <li><span><BsFillCircleFill /></span>Set Ups</li>
                <li><span><BsCircle /></span>Examination Questions</li>
            </ul>
        </div>
        <div className={styles.examsetupwrapper}>
            <div className={styles.xamssetpheader}>
            <h4>Objective</h4>
            <h5>Theory</h5>
            </div>
            <div className={styles.classlistwrapper}>
                <div className={styles.innerclasslistwrapper}>
                <h5>Question 2</h5>
                <div className={styles.iconswrapper}>
                    <span><BiNote /> </span>
                    <span><RiDeleteBin6Line color='#FF5E5E' />  </span>  
                </div>
                </div>
                <div className={styles.innernumberwrapper}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>    
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Objectives
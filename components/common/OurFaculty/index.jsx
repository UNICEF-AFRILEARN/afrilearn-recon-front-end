import React from 'react';
import FlipableCard from '../../FlipableCard';
import FacultyFlippable from '../facultyFlippable';

import styles from './board.module.css';
import { boardData } from './boardData';


const OurFaculty = () => {
  return (
    <div className={styles.boardmainwrapper}>

        <div className={styles.flipperswrapper}>
            {
                boardData.map((boardMember, index) => {
                return (
                    <FacultyFlippable  boardMember={boardMember}/>
                )
                })
            }
        </div>
        
    </div>
  )
}

export default OurFaculty
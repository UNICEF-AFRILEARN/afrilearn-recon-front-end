import React from 'react';
import FlipableCard from '../../FlipableCard';
import BoardFlippable from '../boardFlipable';

import styles from './board.module.css';
import { boardData } from './boardData';


const OurBoard = () => {
  return (
    <div className={styles.boardmainwrapper}>

    <div className={styles.headerwrapper}>
        <h1>Our Board</h1>
    </div>
        <div className={styles.flipperswrapper}>
            {
                boardData.map((boardMember, index) => {
                return (
                    <BoardFlippable  boardMember={boardMember}/>
                )
                })
            }
        </div>
        
    </div>
  )
}

export default OurBoard
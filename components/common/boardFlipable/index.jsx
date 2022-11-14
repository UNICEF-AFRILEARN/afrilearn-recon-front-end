import React from 'react';
import BoardCard from '../../boardCards';

import styles from './flipboard.module.css';

const BoardFlippable = ({boardMember}) => {
  return (
    <div className={styles.flippablecardcontainer}>
        <BoardCard boardMember={boardMember}/>
    </div>
  )
}

export default BoardFlippable
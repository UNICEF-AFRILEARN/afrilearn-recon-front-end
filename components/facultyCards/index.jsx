import React from 'react';

import styles from './boardcard.module.css';

const FacultyCard = ({boardMember}) => {
  return (
    <div className={styles.cardwrapper}>
        <div className={styles.cardback}>
            <p>
              <h4>{boardMember.name}</h4>
              {boardMember.summary}
            </p>
        </div>
        <div className={styles.cardfront}>
           <img 
            src={boardMember.image}
            alt={boardMember.alt}
           />
        </div>
    </div>
  )
}

export default FacultyCard
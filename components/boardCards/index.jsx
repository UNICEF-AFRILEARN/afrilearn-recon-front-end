import React from 'react';

import styles from './boardcard.module.css';

const BoardCard = ({boardMember}) => {
  return (
    <div className={styles.cardwrapper}>
        <div className={styles.cardback}>
            <p>{boardMember.summary}</p>
        </div>
        <div className={styles.cardfront}>
           <img 
            src={boardMember.image}
            alt={boardMember.alt}
           />
           <div>
           <h4 className={styles.leadername}>{boardMember.name}</h4>
           <h5 className={styles.leaderrole}>{boardMember.role}</h5>
           </div>
        </div>
    </div>
  )
}

export default BoardCard